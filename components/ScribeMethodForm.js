'use client'

export default function ScribeMethodForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div>
            <label htmlFor="smb-firstname">First name <span style={{ color: '#f87171' }}>*</span></label>
            <input id="smb-firstname" name="firstname" type="text" required className="hs-input" autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="smb-lastname">Last name <span style={{ color: '#f87171' }}>*</span></label>
            <input id="smb-lastname" name="lastname" type="text" required className="hs-input" autoComplete="family-name" />
          </div>
        </div>
      </fieldset>
      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div>
            <label htmlFor="smb-email">Email <span style={{ color: '#f87171' }}>*</span></label>
            <input id="smb-email" name="email" type="email" required className="hs-input" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="smb-phone">Phone <span style={{ color: '#f87171' }}>*</span></label>
            <input id="smb-phone" name="phone" type="tel" required className="hs-input" autoComplete="tel" />
          </div>
        </div>
      </fieldset>
      <input type="submit" className="hs-button primary large" value="Get the Free PDF" />
    </form>
  )
}
