import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { firstName, email } = await request.json()

    if (!firstName?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // TODO: wire up your email/newsletter provider here (e.g. Mailchimp, ConvertKit, Resend)
    // Example with Mailchimp:
    // await fetch(`https://us1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: { Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email_address: email, merge_fields: { FNAME: firstName }, status: 'subscribed' }),
    // })

    console.log('Newsletter signup:', { firstName, email })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
