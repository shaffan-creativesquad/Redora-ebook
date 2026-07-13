'use client'
import { useState } from 'react'

const INITIAL = { firstName: '', lastName: '', email: '', phone: '', website: '', social: '', hear: '', message: '' }

const inputStyle = (hasError) => ({
  background: 'rgba(255,255,255,0.05)',
  border: `1px solid ${hasError ? 'rgba(224,45,45,0.7)' : 'rgba(255,255,255,0.12)'}`,
  borderRadius: '8px',
  padding: '0.7rem 0.95rem',
  color: '#f0f0f0',
  fontSize: '0.875rem',
  fontFamily: 'inherit',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
})

const labelStyle = {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.7)',
}

const fieldWrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.38rem',
}

export default function AmbassadorsForm() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function validate() {
    const e = {}
    if (!fields.firstName.trim()) e.firstName = 'Required.'
    if (!fields.lastName.trim()) e.lastName = 'Required.'
    if (!fields.email.trim()) e.email = 'Required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Enter a valid email.'
    if (!fields.message.trim()) e.message = 'Please tell us how you plan to refer authors.'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('submitting')
    try {
      const res = await fetch('/api/ambassador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setFields(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2.5rem 1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', background: '#151515' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'rgba(224,45,45,0.15)', border: '1px solid rgba(224,45,45,0.35)',
          color: '#e02d2d', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem',
        }}>✓</div>
        <h3 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', margin: '0 0 0.5rem' }}>Application received!</h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>We'll review your application and reach out within 2–3 business days with your unique referral link.</p>
      </div>
    )
  }

  return (
    <form
      id="hs-ambassador-form"
      onSubmit={handleSubmit}
      noValidate
      style={{
        display: 'flex', flexDirection: 'column', gap: '1rem',
        padding: '2rem', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '10px', background: '#151515',
      }}
    >
      {/* Name row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="amb-first">First Name <span style={{ color: '#e02d2d' }}>*</span></label>
          <input id="amb-first" name="firstName" type="text" autoComplete="given-name" placeholder="Jane"
            value={fields.firstName} onChange={handleChange} style={inputStyle(errors.firstName)} />
          {errors.firstName && <span style={{ fontSize: '0.75rem', color: '#e06060' }}>{errors.firstName}</span>}
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="amb-last">Last Name <span style={{ color: '#e02d2d' }}>*</span></label>
          <input id="amb-last" name="lastName" type="text" autoComplete="family-name" placeholder="Smith"
            value={fields.lastName} onChange={handleChange} style={inputStyle(errors.lastName)} />
          {errors.lastName && <span style={{ fontSize: '0.75rem', color: '#e06060' }}>{errors.lastName}</span>}
        </div>
      </div>

      {/* Email + Phone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="amb-email">Email <span style={{ color: '#e02d2d' }}>*</span></label>
          <input id="amb-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com"
            value={fields.email} onChange={handleChange} style={inputStyle(errors.email)} />
          {errors.email && <span style={{ fontSize: '0.75rem', color: '#e06060' }}>{errors.email}</span>}
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="amb-phone">Phone <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>(optional)</span></label>
          <input id="amb-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000"
            value={fields.phone} onChange={handleChange} style={inputStyle(false)} />
        </div>
      </div>

      {/* Website + Social */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="amb-website">Website <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>(optional)</span></label>
          <input id="amb-website" name="website" type="url" placeholder="https://yoursite.com"
            value={fields.website} onChange={handleChange} style={inputStyle(false)} />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="amb-social">Social Media Handle <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>(optional)</span></label>
          <input id="amb-social" name="social" type="text" placeholder="@yourhandle"
            value={fields.social} onChange={handleChange} style={inputStyle(false)} />
        </div>
      </div>

      {/* How will you refer */}
      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="amb-message">How do you plan to refer authors? <span style={{ color: '#e02d2d' }}>*</span></label>
        <textarea id="amb-message" name="message" rows={4}
          placeholder="Tell us about your audience, network, or platform — podcast, newsletter, speaking, social media, etc."
          value={fields.message} onChange={handleChange}
          style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: '100px' }}
        />
        {errors.message && <span style={{ fontSize: '0.75rem', color: '#e06060' }}>{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '0.82rem', color: '#e06060', margin: 0 }}>
          Something went wrong. Email us at <a href="mailto:ambassador@readora.com" style={{ color: '#e02d2d' }}>ambassador@readora.com</a>.
        </p>
      )}

      <button
        type="submit" disabled={status === 'submitting'}
        style={{
          background: '#e02d2d', color: '#fff', border: 'none', borderRadius: '8px',
          padding: '0.85rem 1.5rem', fontSize: '0.95rem', fontWeight: 700,
          fontFamily: 'inherit', cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          opacity: status === 'submitting' ? 0.6 : 1,
          marginTop: '0.25rem',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => { if (status !== 'submitting') e.currentTarget.style.background = '#c42626' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#e02d2d' }}
      >
        {status === 'submitting' ? 'Submitting…' : 'Apply to Become an Ambassador'}
      </button>
    </form>
  )
}
