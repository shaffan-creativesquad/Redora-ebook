import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, website, social, message } = await request.json()

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // TODO: wire up your email provider here (e.g. Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'no-reply@readora.com',
    //   to: 'ambassador@readora.com',
    //   subject: `New Ambassador Application — ${firstName} ${lastName}`,
    //   text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nSocial: ${social}\n\n${message}`,
    // })

    console.log('Ambassador application:', { firstName, lastName, email, phone, website, social, message })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
