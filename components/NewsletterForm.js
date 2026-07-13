'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [fields, setFields] = useState({ firstName: '', email: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function validate() {
    const e = {}
    if (!fields.firstName.trim()) e.firstName = 'First name is required.'
    if (!fields.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Enter a valid email.'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
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
      <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'rgba(224,45,45,0.15)', border: '1px solid rgba(224,45,45,0.35)',
          color: '#e02d2d', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.85rem',
        }}>✓</div>
        <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem', margin: '0 0 0.4rem' }}>You&apos;re in!</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', margin: 0 }}>Check your inbox for a confirmation email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.65)' }} htmlFor="nl-first-name">
            First Name <span style={{ color: '#e02d2d' }}>*</span>
          </label>
          <input
            id="nl-first-name" name="firstName" type="text" autoComplete="given-name"
            placeholder="Jane"
            value={fields.firstName} onChange={handleChange}
            style={{
              background: 'rgba(255,255,255,0.06)', border: `1px solid ${errors.firstName ? 'rgba(224,45,45,0.7)' : 'rgba(255,255,255,0.12)'}`,
              borderRadius: '8px', padding: '0.65rem 0.9rem', color: '#f0f0f0',
              fontSize: '0.875rem', fontFamily: 'inherit', outline: 'none', width: '100%', boxSizing: 'border-box',
            }}
          />
          {errors.firstName && <span style={{ fontSize: '0.75rem', color: '#e06060' }}>{errors.firstName}</span>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.65)' }} htmlFor="nl-email">
            Email <span style={{ color: '#e02d2d' }}>*</span>
          </label>
          <input
            id="nl-email" name="email" type="email" autoComplete="email"
            placeholder="jane@example.com"
            value={fields.email} onChange={handleChange}
            style={{
              background: 'rgba(255,255,255,0.06)', border: `1px solid ${errors.email ? 'rgba(224,45,45,0.7)' : 'rgba(255,255,255,0.12)'}`,
              borderRadius: '8px', padding: '0.65rem 0.9rem', color: '#f0f0f0',
              fontSize: '0.875rem', fontFamily: 'inherit', outline: 'none', width: '100%', boxSizing: 'border-box',
            }}
          />
          {errors.email && <span style={{ fontSize: '0.75rem', color: '#e06060' }}>{errors.email}</span>}
        </div>
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '0.82rem', color: '#e06060', margin: 0 }}>
          Something went wrong. Email us at <a href="mailto:hello@readora.com" style={{ color: '#e02d2d' }}>hello@readora.com</a>.
        </p>
      )}

      <button
        type="submit" disabled={status === 'submitting'}
        style={{
          background: '#e02d2d', color: '#fff', border: 'none', borderRadius: '8px',
          padding: '0.8rem 1.5rem', fontSize: '0.9rem', fontWeight: 700,
          fontFamily: 'inherit', cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          opacity: status === 'submitting' ? 0.6 : 1,
          transition: 'background 0.2s, transform 0.15s',
        }}
        onMouseEnter={e => { if (status !== 'submitting') e.currentTarget.style.background = '#c42626' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#e02d2d' }}
      >
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe for Free'}
      </button>
    </form>
  )
}
