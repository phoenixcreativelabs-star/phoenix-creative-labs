import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { saveLead } from '../lib/leads';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all fields before sending your message.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Save lead securely to localStorage
    saveLead({
      source: 'contact',
      name: formData.name.trim(),
      email: formData.email.trim(),
      messageOrIdea: formData.message.trim()
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const subject = encodeURIComponent(`Inquiry from ${formData.name.trim()} via Phoenix Creative Labs`);
      const body = encodeURIComponent(`Hi Ebele Nweje,

I would like to send a general message:

- Full Name: ${formData.name.trim()}
- Email Address: ${formData.email.trim()}

Message:
${formData.message.trim()}

Kind regards,
${formData.name.trim()}`);

      window.location.href = `mailto:hello.phoenixcreativelabs@gmail.com?subject=${subject}&body=${body}`;

      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-transparent py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight mb-6">
              Connect With <br />
              <span className="text-[#C9A664] italic font-medium">The Studio</span>
            </h2>
            <p className="font-sans text-sm text-[#E8E6E1]/70 leading-relaxed mb-10 max-w-sm">
              Have a general question, collaboration interest, or just want to discuss a creative concept? We'd love to hear from you. Use any channel below.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-6 mb-12">
              <a
                href="mailto:hello.phoenixcreativelabs@gmail.com"
                className="flex items-start space-x-4 p-4 bg-white/5 border border-white/10 hover:border-[#C9A664]/50 backdrop-blur-md rounded-2xl transition-all group"
              >
                <div className="p-2.5 bg-white/5 text-[#C9A664] rounded-xl border border-white/10 group-hover:bg-[#C9A664] group-hover:text-[#0F3D2E] transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                    Email Desk
                  </h4>
                  <p className="font-sans text-sm text-[#FAF7F2] group-hover:text-[#C9A664] transition-colors">
                    hello.phoenixcreativelabs@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/2348035105288"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start space-x-4 p-4 bg-white/5 border border-white/10 hover:border-[#C9A664]/50 backdrop-blur-md rounded-2xl transition-all group"
              >
                <div className="p-2.5 bg-[#C9A664]/10 text-[#C9A664] rounded-xl border border-[#C9A664]/20 group-hover:bg-[#C9A664] group-hover:text-[#0F3D2E] transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                    WhatsApp Desk
                  </h4>
                  <p className="font-sans text-sm text-[#FAF7F2] group-hover:text-[#C9A664] transition-colors">
                    +234 803 510 5288
                  </p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="p-2.5 bg-white/5 text-[#C9A664] border border-white/10 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                    Studio Location
                  </h4>
                  <p className="font-sans text-sm text-[#FAF7F2]">
                    Lagos, Nigeria (Operating Globally)
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div>
              <h4 className="font-serif text-xs font-bold text-[#C9A664] uppercase tracking-widest mb-4">
                Follow The Laboratory
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 bg-white/5 border border-white/10 text-white/70 hover:text-[#C9A664] hover:border-[#C9A664]/50 backdrop-blur-sm rounded-xl transition-all cursor-pointer"
                  aria-label="Twitter account link"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 bg-white/5 border border-white/10 text-white/70 hover:text-[#C9A664] hover:border-[#C9A664]/50 backdrop-blur-sm rounded-xl transition-all cursor-pointer"
                  aria-label="Instagram account link"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 bg-white/5 border border-white/10 text-white/70 hover:text-[#C9A664] hover:border-[#C9A664]/50 backdrop-blur-sm rounded-xl transition-all cursor-pointer"
                  aria-label="LinkedIn account link"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-10 shadow-2xl rounded-3xl relative backdrop-blur-2xl">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C9A664] rounded-t-3xl" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mb-2">
                    Send General Message
                  </h3>
                  <p className="font-sans text-xs text-[#E8E6E1]/50 border-b border-white/10 pb-4">
                    Send us a quick message below and we will get back to you within a business day.
                  </p>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Kelechi O."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full glass-input px-4 py-3 font-sans text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. kelechi@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full glass-input px-4 py-3 font-sans text-sm"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="How can we help you? Describe your general inquiry here."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full glass-input px-4 py-3 font-sans text-sm"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-400 font-sans text-xs">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-350 shadow-lg shadow-[#C9A664]/10 flex items-center justify-center space-x-2 cursor-pointer border-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-current"></span>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 md:p-12 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#C9A664]/10 rounded-full text-[#C9A664] border border-[#C9A664]/20">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#FAF7F2] mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-sans text-sm text-[#E8E6E1]/70 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you. We've captured your message successfully. Our desk team will review your comments and follow up with you via email as soon as possible.
                  </p>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#E8E6E1]/50 hover:text-[#C9A664] font-sans text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-[#C9A664]/50 pb-1 cursor-pointer transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
