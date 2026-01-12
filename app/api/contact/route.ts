import { NextResponse } from "next/server"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, projectType, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Please fill in all required fields." }, { status: 400 })
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json({ message: "Please provide a more detailed message." }, { status: 400 })
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission from Bear Media Website

Name: ${name}
Email: ${email}
Project Type: ${projectType || "Not specified"}

Message:
${message}

---
Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
    `.trim()

    // Send email using Resend API
    // Note: You'll need to add RESEND_API_KEY to your environment variables
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
      from: "Bear Media <onboarding@resend.dev>",
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
