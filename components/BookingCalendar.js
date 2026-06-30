'use client'
import { useState } from 'react'
import './booking-calendar.css'

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const TIME_SLOTS = [
  '9:00 am', '9:15 am', '9:30 am', '9:45 am',
  '10:00 am', '10:15 am', '10:30 am', '10:45 am',
  '11:00 am', '11:15 am', '11:30 am', '11:45 am',
  '12:00 pm', '12:15 pm', '12:30 pm', '12:45 pm',
  '1:00 pm', '1:15 pm', '1:30 pm', '1:45 pm',
  '2:00 pm', '2:15 pm', '2:30 pm', '2:45 pm',
  '3:00 pm', '3:15 pm', '3:30 pm', '3:45 pm',
  '4:00 pm', '4:15 pm', '4:30 pm', '4:45 pm',
]

function formatDate(year, month, day) {
  return new Date(year, month, day).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  })
}

export default function BookingCalendar() {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const firstDay = new Date(viewYear, viewMonth, 1).getDay()

  function isAvailable(day) {
    const d = new Date(viewYear, viewMonth, day)
    const dow = d.getDay()
    if (dow === 0 || dow === 6) return false
    if (viewYear < today.getFullYear()) return false
    if (viewYear === today.getFullYear() && viewMonth < today.getMonth()) return false
    if (viewYear === today.getFullYear() && viewMonth === today.getMonth() && day < today.getDate()) return false
    return true
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
    setSelectedDay(null); setSelectedTime(null)
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
    setSelectedDay(null); setSelectedTime(null)
  }

  function selectDay(day) {
    if (!isAvailable(day)) return
    setSelectedDay(day); setSelectedTime(null)
  }

  const hasAvailable = Array.from({ length: daysInMonth }, (_, i) => i + 1).some(isAvailable)

  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const isToday = (day) =>
    viewYear === today.getFullYear() &&
    viewMonth === today.getMonth() &&
    day === today.getDate()

  return (
    <div className="bc-widget">

      {/* Left: Calendar */}
      <div className="bc-cal">
        <div className="bc-cal__title">Schedule your Consultation</div>
        <div className="bc-cal__meta">
          <span><i className="ph ph-clock" /> 15 min</span>
          <span><i className="ph ph-video-camera" /> Google Meet</span>
        </div>
        <hr className="bc-cal__divider" />

        <div className="bc-cal__nav">
          <button className="bc-cal__nav-btn" onClick={prevMonth} aria-label="Previous month">‹</button>
          <span className="bc-cal__month">{MONTHS[viewMonth]} {viewYear}</span>
          <button className="bc-cal__nav-btn" onClick={nextMonth} aria-label="Next month">›</button>
        </div>

        <div className="bc-cal__grid-header">
          {DAYS.map(d => <div key={d} className="bc-cal__day-name">{d}</div>)}
        </div>

        <div className="bc-cal__grid">
          {cells.map((day, i) =>
            day === null
              ? <div key={`e-${i}`} className="bc-cal__cell" />
              : (
                <button
                  key={day}
                  type="button"
                  className={[
                    'bc-cal__cell',
                    isAvailable(day) ? 'bc-cal__cell--available' : 'bc-cal__cell--disabled',
                    isToday(day) ? 'bc-cal__cell--today' : '',
                    selectedDay === day ? 'bc-cal__cell--selected' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => selectDay(day)}
                  disabled={!isAvailable(day)}
                >
                  {day}
                </button>
              )
          )}
        </div>

        {!hasAvailable && (
          <div className="bc-cal__no-dates">No available dates in {MONTHS[viewMonth]}</div>
        )}
      </div>

      {/* Right: Time slots / Confirmed */}
      <div className="bc-slots">
        {confirmed ? (
          <div className="bc-confirmed">
            <div className="bc-confirmed__icon">
              <i className="ph ph-check-circle" />
            </div>
            <h3>You&apos;re all set!</h3>
            <p>Your consultation request has been received. We&apos;ll send a confirmation shortly.</p>
            <div className="bc-confirmed__detail">
              <i className="ph ph-calendar-check" />
              {formatDate(viewYear, viewMonth, selectedDay)} at {selectedTime}
            </div>
          </div>
        ) : selectedDay ? (
          <>
            <div className="bc-slots__heading">What time works best?</div>
            <div className="bc-slots__date">Showing times for {formatDate(viewYear, viewMonth, selectedDay)}</div>

            <div className="bc-slots__tz">
              <i className="ph ph-globe" />
              <select className="bc-slots__tz-select" defaultValue="utc5">
                <option value="utc5">UTC +05:00 — Almaty, Tashkent</option>
                <option value="utc-5">UTC −05:00 — New York, Toronto</option>
                <option value="utc-6">UTC −06:00 — Chicago, Dallas</option>
                <option value="utc-7">UTC −07:00 — Denver, Phoenix</option>
                <option value="utc-8">UTC −08:00 — Los Angeles, Seattle</option>
                <option value="utc0">UTC +00:00 — London, Dublin</option>
                <option value="utc1">UTC +01:00 — Paris, Berlin</option>
                <option value="utc5.5">UTC +05:30 — Mumbai, New Delhi</option>
              </select>
            </div>

            <div className="bc-slots__list">
              {TIME_SLOTS.map(t => (
                <button
                  key={t}
                  type="button"
                  className={`bc-slot${selectedTime === t ? ' bc-slot--selected' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            {selectedTime && (
              <div className="bc-slots__confirm">
                <div className="bc-slots__selected-summary">
                  <i className="ph ph-calendar-check" />
                  {formatDate(viewYear, viewMonth, selectedDay)} at {selectedTime}
                </div>
                <button
                  type="button"
                  className="bc-slots__confirm-btn"
                  onClick={() => setConfirmed(true)}
                >
                  Confirm &amp; Continue →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bc-slots__placeholder">
            <i className="ph ph-calendar-blank" />
            <p>Select a date on the calendar to see available times</p>
          </div>
        )}
      </div>

    </div>
  )
}
