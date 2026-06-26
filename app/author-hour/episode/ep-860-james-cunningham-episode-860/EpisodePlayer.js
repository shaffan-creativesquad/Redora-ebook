'use client'
import { useEffect, useRef, useState } from 'react'

const AUDIO_SRC = 'https://scribemedia.com/hubfs/author-hour-archive/ah-0860-james-cunningham.mp3'
const PAGE_URL  = 'https://scribemedia.com/author-hour/episode/ep-860-james-cunningham-episode-860'

export default function EpisodePlayer() {
  const audioRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let player
    if (audioRef.current && window.Plyr) {
      try {
        player = new window.Plyr(audioRef.current, {
          controls: ['play', 'rewind', 'fast-forward', 'progress', 'current-time', 'duration', 'mute', 'volume', 'settings', 'download'],
          settings: ['speed'],
          speed: { selected: 1, options: [0.75, 1, 1.25, 1.5, 1.75, 2] },
        })
      } catch {}
    }
    return () => { try { player?.destroy() } catch {} }
  }, [])

  function handleCopy() {
    navigator.clipboard.writeText(PAGE_URL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <>
      {/* Plyr CSS */}
      <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />

      {/* Audio player */}
      <div className="ep__audio-wrap">
        <span className="ep__player-label">
          <span className="ep__player-label-dot"></span>
          Listen now
        </span>

        <audio ref={audioRef} preload="none">
          <source src={AUDIO_SRC} type="audio/mpeg" />
        </audio>

        <div className="ep__listen-on">
          <span className="ep__listen-on-label">Subscribe:</span>
          <a href="https://open.spotify.com/show/3eKrcC84M1Tf7gD303NeDQ" target="_blank" rel="noopener noreferrer" className="ep__listen-link">
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm49.55,150.43a8,8,0,0,1-11,2.62c-30.21-18.45-68.23-22.6-113-12.43a8,8,0,1,1-3.55-15.6c49-11.13,90.78-6.31,124.93,14.4A8,8,0,0,1,177.55,174.43Zm14.62-32.69a10,10,0,0,1-13.74,3.31c-34.59-21.27-87.32-27.43-128.23-15a10,10,0,1,1-5.81-19.13c46.74-14.2,104.84-7.32,144.46,17A10,10,0,0,1,192.17,141.74Zm1.46-34c-41.51-24.65-110-26.92-149.6-14.88a12,12,0,1,1-7-23C82,55.42,157.69,58.13,205.14,86.32a12,12,0,1,1-12.51,21.41Z"/></svg>
            Spotify
          </a>
          <a href="https://podcasts.apple.com/in/podcast/author-hour/id1851573431" target="_blank" rel="noopener noreferrer" className="ep__listen-link">
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,32H72A40,40,0,0,0,32,72V184a40,40,0,0,0,40,40H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32ZM128,72a56,56,0,1,1-56,56A56,56,0,0,1,128,72Zm0,144a88,88,0,0,1-71.5-36.59A71.73,71.73,0,0,1,128,160a71.73,71.73,0,0,1,71.5,19.41A88,88,0,0,1,128,216Z"/></svg>
            Apple
          </a>
          <a href="https://www.youtube.com/playlist?list=PLiCh0P5qRQ-CXny4D0R1CGuqWOKplzt8g" target="_blank" rel="noopener noreferrer" className="ep__listen-link">
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Z"/></svg>
            YouTube
          </a>
          <a href="https://api.riverside.com/hosting/0t5yfljW.rss" target="_blank" rel="noopener noreferrer" className="ep__listen-link">
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M88,152a16,16,0,1,1-16-16A16,16,0,0,1,88,152ZM48,96a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8,72.08,72.08,0,0,1,72,72,8,8,0,0,0,8,8h8a8,8,0,0,0,8-8A104.11,104.11,0,0,0,48,96Zm0-48a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8A120.13,120.13,0,0,1,168,192a8,8,0,0,0,8,8h8a8,8,0,0,0,8-8C192,113.42,127.4,48,48,48Z"/></svg>
            RSS
          </a>
        </div>
      </div>

      {/* Share bar */}
      <div className="ep__share">
        <span className="ep__share-label">Share:</span>
        <a
          className="ep__share-btn"
          href={`https://twitter.com/intent/tweet?text=James+Cunningham%3A+Episode+860&url=${encodeURIComponent(PAGE_URL)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          Twitter
        </a>
        <a
          className="ep__share-btn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <button className="ep__share-btn" onClick={handleCopy}>
          <svg width="13" height="13" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"/></svg>
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>

      {/* Plyr JS */}
      <script src="https://cdn.plyr.io/3.7.8/plyr.js" async />
    </>
  )
}
