import React, { useState } from 'react';
import { WeddingConfig } from '../data/weddingData';
import { Send, CheckCircle2, MessageCircle, Copy, Check, Users, User, MessageSquare } from 'lucide-react';
import { ScrollReveal, useSectionReveal } from './ScrollReveal';

interface RsvpFormProps {
  config: WeddingConfig;
}

export const RsvpForm: React.FC<RsvpFormProps> = ({ config }) => {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'declining'>('attending');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [hasCopied, setHasCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const generateRsvpText = () => {
    const isAttending = attendance === 'attending';
    const statusText = isAttending
      ? `✨ Joyfully Attending with ${guestCount} guest(s)!`
      : '🕊 Regretfully Declines, but wishing you both a blessed married life!';

    return (
      `*Wedding RSVP for ${config.partner1} & ${config.partner2}*\n\n` +
      `👤 *Guest Name:* ${fullName.trim()}\n` +
      `💌 *Attendance Status:* ${statusText}\n` +
      (isAttending ? `👥 *Number of Guests Attending:* ${guestCount}\n` : '') +
      (message.trim() ? `💬 *Message / Wishes:* "${message.trim()}"\n\n` : '\n') +
      `Sent with best wishes for ${config.weddingHashtag}`
    );
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setFormError('Please enter your full name to send your RSVP.');
      return;
    }
    setFormError('');

    const formattedMessage = generateRsvpText();
    const cleanPhone = config.whatsappNumber.replace(/[^0-9+]/g, '').replace(/^\+/, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    if (!fullName.trim()) {
      setFormError('Please enter your full name before copying the message.');
      return;
    }
    const text = generateRsvpText();
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2500);
  };

  const { ref: sectionRef, sectionStyle } = useSectionReveal<HTMLElement>({
    distance: 30,
    duration: 850,
  });

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      style={sectionStyle}
      className="py-16 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 relative bg-[#FAF5EF] dark:bg-[#150A0F] transition-colors"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#76263F] dark:text-[#E89BA7] mb-2">
              Will You Grace Us With Your Presence?
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2B1019] dark:text-[#FAF3F6] tracking-tight">
              RSVP via WhatsApp
            </h2>
            <div className="w-16 h-[1.5px] bg-[#76263F]/60 dark:bg-[#D28793]/60 mx-auto mt-3 sm:mt-4" />
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#694250] dark:text-[#C7B1BC] max-w-md mx-auto px-2">
              Please let us know your presence. Submitting directly opens WhatsApp with a pre-filled confirmation message for {config.partner1} &amp; {config.partner2}.
            </p>
          </div>
        </ScrollReveal>

        {/* RSVP Card Form in Sangria, Oat, and Thistle with ScrollReveal */}
        <ScrollReveal direction="up" delay={180}>
          <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-[#201018] border border-[#E8DDE8] dark:border-[#381B28] shadow-sm hover:shadow-md transition-shadow">
          {submitted ? (
            <div className="py-8 text-center animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#F7EFF5] dark:bg-[#2C1320] border border-[#E9DFEB] dark:border-[#3E1A2D] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#76263F] dark:text-[#E89BA7]" />
              </div>
              <h3 className="text-2xl font-serif text-[#2B1019] dark:text-[#FAF3F6] mb-2">
                Thank You for Responding!
              </h3>
              <p className="text-sm text-[#663E4D] dark:text-[#CBB5BF] max-w-md mx-auto mb-6">
                Your RSVP message was prepared for WhatsApp. If WhatsApp did not open automatically, you can tap below or copy the message.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#76263F] hover:bg-[#5C182B] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Re-open WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#694250] dark:text-[#D5C2CB] bg-[#F4EEF4] dark:bg-[#2C1320] hover:bg-[#EBE1EB] rounded-full transition-all cursor-pointer"
                >
                  Edit Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              {formError && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-xs">
                  {formError}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#5A3241] dark:text-[#D9C4CC] mb-2"
                >
                  Full Name <span className="text-[#76263F] dark:text-[#E89BA7]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C6070] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (formError) setFormError('');
                    }}
                    placeholder="Enter your name / family name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF5EF] dark:bg-[#160A0F] border border-[#DDD0DD] dark:border-[#3A1828] text-sm text-[#2B1019] dark:text-[#FAF3F6] placeholder-[#A48895] focus:outline-none focus:ring-2 focus:ring-[#76263F]/40 focus:border-[#76263F] transition-all"
                  />
                </div>
              </div>

              {/* Attendance Status Radios */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A3241] dark:text-[#D9C4CC] mb-2">
                  Will You Be Attending? <span className="text-[#76263F] dark:text-[#E89BA7]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      attendance === 'attending'
                        ? 'bg-[#F9EFF5] dark:bg-[#2C1320] border-[#76263F] text-[#2B1019] dark:text-[#FAF3F6]'
                        : 'bg-[#FAF5EF] dark:bg-[#160A0F] border-[#DDD0DD] dark:border-[#3A1828] text-[#694250] dark:text-[#BCA3AD]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="attending"
                      checked={attendance === 'attending'}
                      onChange={() => setAttendance('attending')}
                      className="accent-[#76263F]"
                    />
                    <div className="text-xs">
                      <p className="font-semibold text-sm">Joyfully Attending</p>
                      <p className="text-[11px] opacity-80">Looking forward to the celebration!</p>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      attendance === 'declining'
                        ? 'bg-[#F9EFF5] dark:bg-[#2C1320] border-[#76263F] text-[#2B1019] dark:text-[#FAF3F6]'
                        : 'bg-[#FAF5EF] dark:bg-[#160A0F] border-[#DDD0DD] dark:border-[#3A1828] text-[#694250] dark:text-[#BCA3AD]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="declining"
                      checked={attendance === 'declining'}
                      onChange={() => setAttendance('declining')}
                      className="accent-[#76263F]"
                    />
                    <div className="text-xs">
                      <p className="font-semibold text-sm">Regretfully Declining</p>
                      <p className="text-[11px] opacity-80">Wishing you joy from afar.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Number of Guests Attending (Only when attending) */}
              {attendance === 'attending' && (
                <div className="animate-in fade-in duration-200">
                  <label
                    htmlFor="guestCount"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#5A3241] dark:text-[#D9C4CC] mb-2"
                  >
                    Number of Guests Attending (Including Yourself)
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#8C6070] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="guestCount"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF5EF] dark:bg-[#160A0F] border border-[#DDD0DD] dark:border-[#3A1828] text-sm text-[#2B1019] dark:text-[#FAF3F6] focus:outline-none focus:ring-2 focus:ring-[#76263F]/40 focus:border-[#76263F] transition-all cursor-pointer"
                    >
                      <option value={1}>1 Person</option>
                      <option value={2}>2 People</option>
                      <option value={3}>3 People</option>
                      <option value={4}>4 People</option>
                      <option value={5}>5 People</option>
                      <option value={6}>6+ Family Members</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Personal Message / Wishes */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#5A3241] dark:text-[#D9C4CC] mb-2"
                >
                  Personal Message / Wishes for the Couple
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#8C6070] absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your warm wishes and blessings for Gokul & Mydhili..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF5EF] dark:bg-[#160A0F] border border-[#DDD0DD] dark:border-[#3A1828] text-sm text-[#2B1019] dark:text-[#FAF3F6] placeholder-[#A48895] focus:outline-none focus:ring-2 focus:ring-[#76263F]/40 focus:border-[#76263F] resize-none transition-all"
                  />
                </div>
              </div>

              {/* Submission Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 sm:py-3.5 px-5 sm:px-6 rounded-full bg-[#76263F] hover:bg-[#5C182B] dark:bg-[#852C48] dark:hover:bg-[#9E3958] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send RSVP via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto py-3 sm:py-3.5 px-4 sm:px-5 rounded-full bg-[#F4EEF4] dark:bg-[#28131F] hover:bg-[#EBE1EB] dark:hover:bg-[#331727] text-[#5A3241] dark:text-[#D9C4CC] text-xs font-medium tracking-wide border border-[#DDD0DD] dark:border-[#3D1E2D] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {hasCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#76263F] dark:text-[#D28793]" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
