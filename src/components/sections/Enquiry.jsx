import { useState } from 'react'
import { contact } from '../../data/site.js'

const CLASS_OPTIONS = [
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
  'Class IX',
  'Class X',
  'Class XI (Science)',
  'Class XI (Commerce)',
  'Class XI (Humanities)',
  'Class XII',
]

const STATE_OPTIONS = [
  'Uttarakhand',
  'Delhi NCR',
  'Uttar Pradesh',
  'Punjab',
  'Haryana',
  'Bihar',
  'West Bengal',
  'Maharashtra',
  'Assam & North East',
  'International Resident',
  'Other States',
]

const inputClass =
  'px-4 py-3 rounded-lg bg-surface-parchment text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary-container text-body-sm font-body-sm'
const labelClass = 'font-label-md text-label-md text-on-surface font-semibold'

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleOtp = () => {
    setOtpSent(true)
    window.setTimeout(() => setOtpSent(false), 5000)
  }

  return (
    <section
      className="w-full py-space-xl lg:py-24 bg-primary text-on-primary relative"
      id="enquire-section"
    >
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed text-label-caps font-bold tracking-wider self-start uppercase">
              <span>Official Application Desk • 2025–26</span>
            </div>
            <h2 className="font-display text-display-mobile lg:text-[46px] leading-tight text-white font-bold">
              Take the First Step Toward Your Child&apos;s Bright Future.
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high/90 leading-relaxed">
              Admissions are open for Classes IV through XII for the upcoming academic session.
              Experience our pristine Himalayan campus, speak with our senior academic leadership,
              and secure priority boarding allotment.
            </p>
            <div className="flex flex-col gap-space-sm pt-space-xs text-surface-container-high">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container mt-1">call</span>
                <div>
                  <p className="font-label-lg text-label-lg font-bold text-white">
                    Direct Admissions Lines
                  </p>
                  <p className="font-body-sm text-body-sm">
                    {contact.phone} • {contact.landline}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-label-lg text-label-lg font-bold text-white">Campus Address</p>
                  <p className="font-body-sm text-body-sm">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container mt-1">mail</span>
                <div>
                  <p className="font-label-lg text-label-lg font-bold text-white">
                    Official Correspondence
                  </p>
                  <p className="font-body-sm text-body-sm">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-surface-card text-on-surface rounded-2xl p-space-lg lg:p-space-xl shadow-2xl relative">
            <div className="flex flex-col gap-1 pb-space-sm">
              <h3 className="font-headline-md text-headline-md text-primary">
                Instant Admissions Enquiry
              </h3>
              <p className="font-body-sm text-body-sm text-text-muted">
                Fill out this quick form to receive our official prospectus and fee schedule
                immediately via WhatsApp.
              </p>
            </div>
            <form className="flex flex-col gap-space-md pt-space-xs" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="student-name">
                    Student&apos;s Full Name *
                  </label>
                  <input
                    className={inputClass}
                    id="student-name"
                    name="studentName"
                    placeholder="e.g. Aryan Sharma"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="parent-name">
                    Parent / Guardian Name *
                  </label>
                  <input
                    className={inputClass}
                    id="parent-name"
                    name="parentName"
                    placeholder="e.g. Rajesh Sharma"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className={labelClass} htmlFor="mobile">
                  Mobile Number *
                </label>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-3 rounded-lg bg-surface-container font-label-md text-label-md text-primary font-bold">
                    +91
                  </span>
                  <input
                    className={`${inputClass} flex-1`}
                    id="mobile"
                    name="mobile"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    required
                    type="tel"
                  />
                  <button
                    className="px-3.5 py-3 rounded-lg bg-surface-container-high text-primary hover:bg-surface-variant font-label-md text-label-md font-semibold transition-colors shrink-0"
                    onClick={handleOtp}
                    type="button"
                  >
                    {otpSent ? 'OTP Sent ✓' : 'Send OTP'}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="class">
                    Applying For Class *
                  </label>
                  <select className={inputClass} defaultValue="" id="class" name="class" required>
                    <option value="">Select Class</option>
                    {CLASS_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor="state">
                    State / Region *
                  </label>
                  <select className={inputClass} defaultValue="" id="state" name="state" required>
                    <option value="">Select State</option>
                    {STATE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  className="mt-1 accent-primary-container rounded"
                  defaultChecked
                  id="terms-agree"
                  required
                  type="checkbox"
                />
                <label
                  className="font-body-sm text-[13px] text-text-muted leading-tight"
                  htmlFor="terms-agree"
                >
                  I agree to receive admission updates, brochures, and session notifications from
                  Tula&apos;s International School via Call/WhatsApp.
                </label>
              </div>
              <button
                className="w-full py-4 rounded-lg bg-primary-container hover:bg-emerald-vivid text-white font-label-lg text-label-lg font-bold tracking-wide shadow-lg hover:shadow-primary-container/30 transition-all flex items-center justify-center gap-2 mt-2"
                type="submit"
              >
                <span>Submit Enquiry &amp; Download Prospectus</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </form>
            {!submitted ? null : (
              <div className="absolute inset-0 bg-surface-card rounded-2xl p-space-lg flex flex-col items-center justify-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-emerald-vivid/10 text-emerald-vivid flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">
                  Enquiry Received!
                </h4>
                <p className="font-body-md text-body-md text-text-muted max-w-sm">
                  Thank you. Our Admissions Director will get in touch on WhatsApp &amp; phone
                  shortly with the session prospectus.
                </p>
                <button
                  className="px-6 py-2.5 rounded-lg bg-primary text-white font-label-md text-label-md"
                  onClick={() => setSubmitted(false)}
                  type="button"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
