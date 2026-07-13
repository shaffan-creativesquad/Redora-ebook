'use client'
import { useState } from 'react'

const INITIAL = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function validate() {
    const e = {}
    if (!fields.name.trim()) e.name = 'Name is required.'
    if (!fields.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Enter a valid email.'
    if (!fields.message.trim()) e.message = 'Please tell us about your book idea.'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
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
      <div className="cf-success">
        <div className="cf-success__icon">✓</div>
        <h3 className="cf-success__heading">Message received!</h3>
        <p className="cf-success__body">We'll be in touch within one business day. Talk soon.</p>
        <button className="cf-success__reset" onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    )
  }

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-name">Full Name <span className="cf-required">*</span></label>
          <input
            id="cf-name" name="name" type="text" autoComplete="name"
            placeholder="Jane Smith"
            className={`cf-input${errors.name ? ' cf-input--error' : ''}`}
            value={fields.name} onChange={handleChange}
          />
          {errors.name && <span className="cf-error">{errors.name}</span>}
        </div>
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-email">Email <span className="cf-required">*</span></label>
          <input
            id="cf-email" name="email" type="email" autoComplete="email"
            placeholder="jane@example.com"
            className={`cf-input${errors.email ? ' cf-input--error' : ''}`}
            value={fields.email} onChange={handleChange}
          />
          {errors.email && <span className="cf-error">{errors.email}</span>}
        </div>
      </div>

      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-phone">Phone <span className="cf-optional">(optional)</span></label>
        <input
          id="cf-phone" name="phone" type="tel" autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          className="cf-input"
          value={fields.phone} onChange={handleChange}
        />
      </div>

      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-message">What's your book idea? <span className="cf-required">*</span></label>
        <textarea
          id="cf-message" name="message" rows={4}
          placeholder="Tell us briefly what your book is about and where you are in the process…"
          className={`cf-input cf-textarea${errors.message ? ' cf-input--error' : ''}`}
          value={fields.message} onChange={handleChange}
        />
        {errors.message && <span className="cf-error">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className="cf-submit-error">Something went wrong. Please email us at <a href="mailto:hello@readora.com">hello@readora.com</a>.</p>
      )}

      <button type="submit" className="cf-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="cf-disclaimer">No spam, no sales pitch — just a helpful reply.</p>
    </form>
  )
}
