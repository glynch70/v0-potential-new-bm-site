import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, company, size, message } = await request.json();

  if (!name || !email || !company || !size) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'noreply@bear-media.com',
        to: 'info@bear-media.com',
        subject: `New Enquiry from ${name} — ${company}`,
        html: `
          <h2>New Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Company Size:</strong> ${size}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
          <hr />
          <p><em>Reply directly to ${email}</em></p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('[Resend error]', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log(`[enquiry] From ${name} (${company}) — sent to info@bear-media.com`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[server error]', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}