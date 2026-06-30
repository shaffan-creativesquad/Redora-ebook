'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'


const navItems = [
  {
    label: 'Why Scribe?',
    dropdown: [
      { label: 'Why Scribe', href: '/why-scribe' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Reviews', href: '/reviews' },
    ],
  },
  {
    label: 'Services',
    dropdown: [
      { label: 'Compare All Services →', href: '/services', highlight: true },
      { divider: true },
      { groupLabel: 'Core Services' },
      { label: 'Scribe Elite', href: '/services/ghostwriting' },
      { label: 'Scribe Professional', href: '/services/professional-book-writers' },
      { label: 'Guided Author', href: '/services/guided-author' },
      { label: 'Scribe Publishing', href: '/services/publishing' },
      { divider: true },
      { groupLabel: 'Add-Ons' },
      { label: 'Scribe Compass', href: '/services/scribe-compass' },
      { label: 'Audiobook', href: '/services/audiobook' },
      { label: 'Book Marketing', href: '/services/book-marketing' },
      { divider: true },
      { groupLabel: 'By Industry' },
      { label: 'Books for Brands', href: '/services/books-for-brands' },
      { label: 'Books for Lawyers', href: '/services/books-for-lawyers' },
      { label: 'Books for Coaches', href: '/services/books-for-coaches' },
      { label: 'All Industries →', href: '/services/books-for-industries', highlight: true },
    ],
  },
  {
    label: 'Free Resources',
    dropdown: [
      { label: 'Blog', href: '/blog' },
      { label: 'The Scribe Method Book', href: '/scribe-method-book' },
      { label: 'Author Hour Podcast', href: '/author-hour' },
    ],
  },
  {
    label: 'Books & Authors',
    dropdown: [
      { label: 'Our Authors', href: '/authors' },
      { label: 'Published Books', href: '/published-books' },
      { label: 'New Releases', href: '/new-releases' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  { label: 'Pricing', href: '/allservices' },
]

function DropdownMenu({ items, isOpen }) {
  if (!isOpen) return null
  return (
    <ul
      className="navbar__dropdown-list"
      style={{
        position: 'absolute',
        top: 'calc(100% + 0.75rem)',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: '200px',
        padding: '0.5rem 0',
        listStyle: 'none',
        margin: 0,
        background: '#151515',
        border: '1px solid rgba(220,45,45,0.12)',
        borderRadius: '8px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        zIndex: 100,
      }}
    >
      {items.map((item, i) => {
        if (item.divider) return <li key={i} style={{ height: '1px', background: 'rgba(220,45,45,0.08)', margin: '0.375rem 1rem' }} />
        if (item.groupLabel) return (
          <li key={i} style={{ display: 'block', padding: '0.5rem 1.25rem 0.25rem', fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {item.groupLabel}
          </li>
        )
        return (
          <li key={i}>
            <a
              href={item.href}
              style={{
                display: 'block',
                padding: '0.625rem 1.25rem',
                fontSize: '0.9rem',
                fontWeight: item.highlight ? 600 : 500,
                color: item.highlight ? '#e02d2d' : '#a8a29e',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(220,45,45,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.color = item.highlight ? '#e02d2d' : '#a8a29e'; e.currentTarget.style.background = 'transparent' }}
            >
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const navRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const toggleMobileSection = label => setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }))

  const navBg = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    height: '84px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.96) 100%)',
    borderBottom: '1px solid rgba(220,45,45,0.08)',
  }

  return (
    <nav className="navbar" style={navBg} ref={navRef} role="navigation" aria-label="Main navigation">
      <div style={{ width: '100%', maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Image src="/assets/logo-sm-on-dark.svg" alt="Scribe Media" width={160} height={52} unoptimized priority style={{ height: '42px', width: 'auto' }} />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex" style={{ alignItems: 'center', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {navItems.map(item => (
            <li key={item.label} style={{ position: 'relative', margin: 0, padding: 0 }}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="nav-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 500, color: '#a8a29e', padding: '0.25rem 0', letterSpacing: '0.01em', transition: 'color 0.25s', position: 'relative' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.classList.add('nav-underline-active') }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#a8a29e'; e.currentTarget.classList.remove('nav-underline-active') }}
                  >
                    {item.label}
                    <i className="ph ph-caret-down" style={{ fontSize: '0.75rem', transition: 'transform 0.25s', transform: openDropdown === item.label ? 'rotate(180deg)' : 'none', display: 'inline-block' }} />
                  </button>
                  <DropdownMenu items={item.dropdown} isOpen={openDropdown === item.label} />
                </>
              ) : (
                <a href={item.href} style={{ fontSize: '0.9rem', fontWeight: 500, color: '#a8a29e', textDecoration: 'none', letterSpacing: '0.01em', transition: 'color 0.25s', position: 'relative', display: 'inline-block' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.classList.add('nav-underline-active') }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#a8a29e'; e.currentTarget.classList.remove('nav-underline-active') }}
                  className="nav-link"
                >{item.label}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <a href="/consult" className="hidden lg:inline-flex" style={{
            alignItems: 'center', justifyContent: 'center',
            padding: '0.58rem 1.15rem', fontSize: '0.82rem', fontWeight: 600,
            color: '#ffffff', background: '#e02d2d', border: 'none', borderRadius: '6px',
            textDecoration: 'none', letterSpacing: '0.01em', whiteSpace: 'nowrap',
            transition: 'transform 0.25s, box-shadow 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(220,45,45,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
          >
            Schedule a Consult
          </a>

          <button
            className="flex lg:hidden"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle mobile menu"
            style={{ alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'transparent', border: '1px solid rgba(220,45,45,0.15)', borderRadius: '6px', color: '#fff', cursor: 'pointer' }}
          >
            <i className={mobileOpen ? 'ph ph-x' : 'ph-fill ph-list'} style={{ fontSize: '1.25rem', lineHeight: 1 }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden" style={{
          position: 'fixed', top: '84px', left: 0, right: 0, bottom: 0,
          background: '#0a0a0a', borderTop: '1px solid rgba(220,45,45,0.08)',
          overflowY: 'auto', zIndex: 9999, padding: '1.5rem 2rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map(item => (
              <li key={item.label} style={{ margin: 0, padding: 0 }}>
                {item.dropdown ? (
                  <>
                    <button onClick={() => toggleMobileSection(item.label)} style={{
                      background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      fontFamily: 'inherit', padding: '0.75rem 0', fontSize: '1rem', fontWeight: 500,
                      color: '#a8a29e', borderBottom: '1px solid rgba(220,45,45,0.06)',
                    }}>
                      {item.label}
                      <i className="ph ph-caret-down" style={{ fontSize: '0.75rem', transition: 'transform 0.25s', transform: mobileExpanded[item.label] ? 'rotate(180deg)' : 'none', display: 'inline-block' }} />
                    </button>
                    {mobileExpanded[item.label] && (
                      <ul style={{
                        listStyle: 'none', margin: '0 0 0.5rem', padding: '0.5rem 0 0.5rem 1rem',
                        background: '#181818', borderRadius: '0 0 6px 6px',
                        borderLeft: '2px solid rgba(224,45,45,0.35)',
                      }}>
                        {item.dropdown.filter(d => !d.divider && !d.groupLabel).map((sub, si) => (
                          <li key={si}>
                            <a href={sub.href} style={{ display: 'block', padding: '0.5rem 0.75rem', fontSize: '0.9rem', color: '#c0bbb5', textDecoration: 'none' }}>
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} style={{ display: 'block', padding: '0.75rem 0', fontSize: '1rem', fontWeight: 500, color: '#a8a29e', textDecoration: 'none', borderBottom: '1px solid rgba(220,45,45,0.06)' }}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href="/consult" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '0.875rem 1.5rem', fontSize: '1rem', fontWeight: 600,
            color: '#ffffff', background: '#e02d2d', borderRadius: '6px',
            textDecoration: 'none', marginTop: '1rem',
          }}>
            Schedule a Consult
          </a>
        </div>
      )}
    </nav>
  )
}
