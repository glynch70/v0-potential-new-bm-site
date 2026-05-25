import { NextResponse } from "next/server"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple in-memory rate limiter (per-instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string, limit = 3, windowMs = 60 * 1000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  record.count += 1
  if (record.count > limit) {
    return true
  }

  return false
}

export async function POST(request: Request) {
  try {
    const rawIp = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1"
    const ip = rawIp.split(",")[0].trim()

    // 1. Rate Limiting Check
    if (isRateLimited(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip}`)
      return NextResponse.json(
        { message: "Too many attempts. Please wait a minute and try again." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, projectType, message, company, token } = body

    // 2. Honeypot Validation
    if (company) {
      console.warn("Honeypot field filled by suspected bot:", { name, email, company })
      return NextResponse.json({ message: "Spam submission rejected." }, { status: 400 })
    }

    // 3. Required Fields Validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Please fill in all required fields." }, { status: 400 })
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json({ message: "Please provide a more detailed message." }, { status: 400 })
    }

    // 4. Turnstile CAPTCHA Verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not configured")
      return NextResponse.json(
        { message: "Security service is not configured. Please email info@bear-media.com directly." },
        { status: 500 }
      )
    }

    if (!token) {
      return NextResponse.json({ message: "Security verification token is missing." }, { status: 400 })
    }

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: token,
        }),
      }
    )

    const verifyData = await verifyResponse.json()

    if (!verifyData.success) {
      console.warn("Turnstile validation failed:", verifyData)
      return NextResponse.json({ message: "Security verification failed. Please try again." }, { status: 400 })
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission – Bear Media

Name: ${name}
Email: ${email}
Project Type: ${projectType || "Not specified"}

Message:
${message}

---
Submitted: ${new Date().toLocaleString("en-GB", {
  timeZone: "Europe/London",
})}
`
    // Send email using Resend API
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { message: "Email service is not configured. Please email info@bear-media.com directly." },
        { status: 500 },
      )
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Bear Media <info@bear-media.com>",
        to: ["info@bear-media.com"],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      const text = await emailResponse.text()
      console.error("Resend API error:", emailResponse.status, text)
      return NextResponse.json(
        { message: `Email failed: ${text}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { message: "Something went wrong. Please email info@bear-media.com directly." },
      { status: 500 },
    )
  }
}

