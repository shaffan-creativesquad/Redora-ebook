'use client'
import { useState } from 'react'

const pills = ['Writing frameworks', 'Publishing playbooks', 'Launch case studies']
const HS_FORM_URL = 'https://forms-na2.hsforms.com/submissions/v3/public/submit/formsnext/multipart/244422516/415e6721-54a0-47fc-923f-4ae02e43bf64'

export default function Newsletter() {
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section style={{
      position: 'relative', overflow: 'clip',
      padding: 'clamp(2.6rem,4.2vw,4.3rem) 1.25rem',
      background: `
        radial-gradient(circle at 10% 10%, rgba(220,45,45,0.07), transparent 36%),
        radial-gradient(circle at 92% 85%, rgba(80,80,80,0.05), transparent 40%),
        linear-gradient(180deg,#111111 0%,#111111 56%,#0d0d0d 100%)
      `,
      borderTop: '1px solid rgba(168,168,168,0.2)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>

        {/* Logo icon */}
        <div style={{ width: '48px', height: '48px', margin: '0 auto 1.1rem' }}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="8" fill="#e02d2d" />
            <path d="M12 10h24v28H12z" fill="#111111" />
            <path d="M16 16h16M16 22h16M16 28h10" stroke="#e02d2d" strokeWidth="2" />
          </svg>
        </div>

        <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.15rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.55rem', lineHeight: 1.2 }}>
          Learn how professionals write and publish their books.
        </h2>
        <p style={{ fontSize: 'clamp(0.96rem,1.2vw,1.08rem)', color: '#bfbfbf', marginBottom: '1.45rem', lineHeight: 1.5 }}>
          Join 57,000+ readers receiving expert writing and publishing insights from our Scribe team.
        </p>

        {/* Topic pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', margin: '0 0 1.25rem' }}>
          {pills.map(p => (
            <span key={p} style={{
              display: 'inline-flex', alignItems: 'center', padding: '0.36rem 0.7rem',
              borderRadius: '999px', border: '1px solid rgba(220,45,45,0.32)',
              color: '#ffe0e0', fontSize: '0.78rem', letterSpacing: '0.02em',
              background: 'rgba(220,45,45,0.08)',
            }}>{p}</span>
          ))}
        </div>

        {/* Form card */}
        <div style={{
          maxWidth: '760px', margin: '0 auto',
          padding: '1.4rem 1.25rem 1.2rem',
          borderRadius: '12px', border: '1px solid rgba(168,168,168,0.22)',
          background: 'linear-gradient(180deg,rgba(17,17,17,0.92),rgba(12,12,12,0.94))',
          boxShadow: '0 14px 34px rgba(2,2,2,0.35)',
          textAlign: 'left',
        }}>
          {submitted ? (
            <p style={{ textAlign: 'center', color: '#ffffff', fontSize: '1rem', padding: '1rem 0' }}>
              Thanks for subscribing! Check your inbox for writing and publishing insights.
            </p>
          ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '0.9rem' }}>
              {[['firstname', 'First Name', 'text'], ['lastname', 'Last Name', 'text']].map(([k, label, type]) => (
                <div key={k} style={{ flex: '1 1 calc(50% - 0.425rem)', minWidth: '160px' }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{label}</label>
                  <input
                    type={type} value={form[k]} onChange={set(k)}
                    className="newsletter-input"
                    style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(12,12,12,0.78)', border: '1px solid rgba(168,168,168,0.25)', borderRadius: '8px', color: '#ffffff', fontSize: '1rem', boxSizing: 'border-box' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '0.9rem' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                Email <span style={{ color: '#ff6b6b' }}>*</span>
              </label>
              <input
                type="email" required value={form.email} onChange={set('email')}
                className="newsletter-input"
                style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(12,12,12,0.78)', border: '1px solid rgba(168,168,168,0.25)', borderRadius: '8px', color: '#ffffff', fontSize: '1rem', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '0.9rem' }}>
              <img src="/assets/capcha.png" alt="reCAPTCHA" style={{ height: '78px', borderRadius: '4px' }} />
            </div>
            <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
              <button type="submit" style={{
                background: '#e02d2d',
                color: '#ffffff', border: 'none', borderRadius: '999px',
                padding: '0.85rem 2.5rem', fontSize: '1rem', fontWeight: 700,
                cursor: 'pointer', width: '100%', display: 'block',
              }}>
                Subscribe
              </button>
            </div>
          </form>
          )}
        </div>

        <p style={{ marginTop: '0.85rem', color: 'rgba(194,194,194,0.8)', fontSize: '0.8rem' }}>
          By submitting, you agree to our{' '}
          <a href="/privacy" style={{ color: '#ffe0e0', textDecoration: 'none' }}>Privacy Policy</a> and{' '}
          <a href="/terms-of-service" style={{ color: '#ffe0e0', textDecoration: 'none' }}>Terms of Service</a>.
        </p>
      </div>
    </section>
  )
}
