import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // TODO: wire up your email provider here (e.g. Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'no-reply@readora.com',
    //   to: 'hello@readora.com',
    //   subject: `New consult request from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    // })

    console.log('Contact form submission:', { name, email, phone, message })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
