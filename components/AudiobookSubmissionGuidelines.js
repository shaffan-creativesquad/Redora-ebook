'use client'

import { useState } from 'react'

export default function AudiobookSubmissionGuidelines() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', imprint: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="ab-sub">
      <div className="ab-sub__header">
        <h1 className="ab-sub__heading">Audiobook Submission Guidelines</h1>
      </div>

      <div className="ab-sub__body">
        <p><em>Congratulations! We&apos;re so excited to produce your audiobook and share that with the world! Before we get started, we&apos;ll need some information from you. Please submit the following using the form below:</em></p>

        <ul>
          <li><strong>Interior PDF file:</strong> This should be the final PDF of your book. We&apos;ll need this to prepare the script for the recording process.</li>
          <li><strong>Cover source files:</strong> We&apos;ll need these to create your audiobook cover. The source files are most typically Adobe Photoshop or Illustrator files. Please do not send us font files.</li>
          <li><strong>Imprint:</strong> Please let us know which publishing imprint you&apos;d like to use for your audiobook.</li>
        </ul>

        <h2 className="ab-sub__form-heading">Audiobook Submission Form</h2>

        {submitted ? (
          <div className="ab-sub__success">
            <div className="ab-sub__success-icon">✓</div>
            <h3>Submission Received</h3>
            <p>Thank you! Your publishing manager will be in touch shortly to confirm receipt of your files and walk through next steps.</p>
          </div>
        ) : (
          <form className="ab-sub__form" onSubmit={handleSubmit}>
            <div className="ab-sub__field">
              <label htmlFor="ab-name">Full Name <span className="ab-sub__req">*</span></label>
              <input
                id="ab-name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="ab-sub__field">
              <label htmlFor="ab-email">Email Address <span className="ab-sub__req">*</span></label>
              <input
                id="ab-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="ab-sub__field">
              <label htmlFor="ab-imprint">Publishing Imprint <span className="ab-sub__req">*</span></label>
              <input
                id="ab-imprint"
                name="imprint"
                type="text"
                required
                placeholder="e.g. Lion Crest Publishing"
                value={form.imprint}
                onChange={handleChange}
              />
            </div>

            <div className="ab-sub__field">
              <label htmlFor="ab-pdf">Interior PDF File <span className="ab-sub__req">*</span></label>
              <div className="ab-sub__file-wrap">
                <input id="ab-pdf" name="pdf" type="file" accept=".pdf" required />
                <p className="ab-sub__file-note">Final interior PDF only. Max 100 MB.</p>
              </div>
            </div>

            <div className="ab-sub__field">
              <label htmlFor="ab-cover">Cover Source Files <span className="ab-sub__req">*</span></label>
              <div className="ab-sub__file-wrap">
                <input id="ab-cover" name="cover" type="file" accept=".psd,.ai,.eps,.zip" required />
                <p className="ab-sub__file-note">Adobe Photoshop (.psd), Illustrator (.ai), or zipped folder. No font files.</p>
              </div>
            </div>

            <button type="submit" className="ab-sub__btn">Submit Files</button>
          </form>
        )}
      </div>
    </section>
  )
}
