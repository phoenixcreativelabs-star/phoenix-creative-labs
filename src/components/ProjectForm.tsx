import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, MessageSquare, Phone, Send, CheckCircle2, DollarSign } from 'lucide-react';
import { saveLead } from '../lib/leads';

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: 'eBook/Digital Publishing',
    budgetRange: '₦100k–₦500k / $100–$500',
    idea: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-fill name if subscriber unlocked the guide
  useEffect(() => {
    const savedName = localStorage.getItem('pcl_subscriber_name');
    if (savedName) {
      setFormData((prev) => ({ ...prev, name: savedName }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.idea.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, and your Project Idea).');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Save lead securely to localStorage
    saveLead({
      source: 'inquiry',
      name: formData.name.trim(),
      email: formData.email.trim(),
      whatsapp: formData.whatsapp.trim(),
      projectType: formData.projectType,
      budgetRange: formData.budgetRange,
      messageOrIdea: formData.idea.trim()
    });

    // Simulate submission to Formspree / Google Form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const subject = encodeURIComponent(`Project Proposal: ${formData.projectType} from ${formData.name.trim()}`);
      const body = encodeURIComponent(`Hi Ebele Nweje,

I would like to submit a project proposal for Phoenix Creative Labs:

- Full Name: ${formData.name.trim()}
- Email Address: ${formData.email.trim()}
- WhatsApp Number: ${formData.whatsapp.trim() || 'Not Provided'}
- Project Type: ${formData.projectType}
- Estimated Budget Range: ${formData.budgetRange}

Project Idea/Details:
${formData.idea.trim()}

Kind regards,
${formData.name.trim()}`);

      window.location.href = `mailto:hello.phoenixcreativelabs@gmail.com?subject=${subject}&body=${body}`;
    }, 1500);
  };

  const projectTypes = [
    'eBook/Digital Publishing',
    'AI Character Development',
    'Website & Brand (Coming Soon)',
    'Not Sure Yet',
  ];

  const budgetRanges = [
    'Under ₦100k / $100',
    '₦100k–₦500k / $100–$500',
    '₦500k–₦2m / $100–$2,000',
    "Let's Discuss",
  ];

  return (
    <section id="start-project" className="bg-transparent py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Soft Anchor */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
              Inquire
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight mb-6">
              Start Your <br />
              <span className="text-[#C9A664] italic font-medium">Project</span>
            </h2>

            <div className="space-y-6 font-sans text-sm md:text-base text-[#E8E6E1]/80 leading-relaxed mb-8 max-w-md">
              <p>
                We collaborate with a limited cohort of authors, creators, and experts each quarter to ensure meticulous focus and uncompromising craft.
              </p>
              <p>
                Whether you have a fully formed manuscript, an AI persona concept, or a digital course, we handle the packaging, typography, store listings, and tech infrastructure.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
                <h4 className="font-serif text-xs font-bold text-[#C9A664] uppercase tracking-wider mb-2 flex items-center">
                  <span className="inline-block h-1.5 w-1.5 bg-[#C9A664] mr-2 rounded-full" />
                  Soft Pricing Anchor
                </h4>
                <p className="font-sans text-xs text-[#FAF7F2]/90 leading-relaxed font-semibold">
                  Publishing projects typically start around <span className="text-[#C9A664]">₦100,000 / $100</span>. Every project is meticulously scoped to fit your specific goals.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp channel */}
            <div className="pt-6 border-t border-white/10 max-w-md">
              <p className="font-sans text-xs text-[#E8E6E1]/50 mb-4">
                Prefer a direct conversation? Ping our creative desk immediately on WhatsApp:
              </p>
              <a
                href="https://wa.me/2348035105288"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#C9A664]/10 cursor-pointer font-bold"
              >
                Chat on WhatsApp (+234 803 510 5288)
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-10 shadow-2xl rounded-3xl relative backdrop-blur-2xl">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C9A664] rounded-t-3xl" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mb-2">
                    Project Inquiry Details
                  </h3>
                  <p className="font-sans text-xs text-[#E8E6E1]/50 border-b border-white/10 pb-4">
                    Fill out our brief checklist below and we will review your project proposal within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="form-name" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C9A664]" />
                        <input
                          id="form-name"
                          type="text"
                          required
                          placeholder="e.g. Dr. Amara Nwosu"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full glass-input pl-10 pr-4 py-3 font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="form-email" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C9A664]" />
                        <input
                          id="form-email"
                          type="email"
                          required
                          placeholder="e.g. amara@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full glass-input pl-10 pr-4 py-3 font-sans text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* WhatsApp Number */}
                    <div>
                      <label htmlFor="form-whatsapp" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                        WhatsApp Number <span className="text-[10px] text-white/40 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C9A664]" />
                        <input
                          id="form-whatsapp"
                          type="tel"
                          placeholder="e.g. +234 803 510 5288"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full glass-input pl-10 pr-4 py-3 font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="form-type" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                        Project Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="form-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full glass-input px-4 py-3 font-sans text-sm [&>option]:bg-[#0F3D2E] [&>option]:text-[#FAF7F2] cursor-pointer"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Range (Dual Currency side by side) */}
                  <div>
                    <label htmlFor="form-budget" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                      Estimated Budget Range <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="form-budget"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full glass-input px-4 py-3 font-sans text-sm [&>option]:bg-[#0F3D2E] [&>option]:text-[#FAF7F2] cursor-pointer"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tell us about your idea */}
                  <div>
                    <label htmlFor="form-idea" className="block font-mono text-[10px] uppercase tracking-widest text-white/85 font-bold mb-1.5">
                      Tell us about your project idea <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-[#C9A664]" />
                      <textarea
                        id="form-idea"
                        required
                        rows={4}
                        placeholder="What are you writing or building? What are your timelines and core expectations?"
                        value={formData.idea}
                        onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                        className="w-full glass-input pl-10 pr-4 py-3 font-sans text-sm"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-red-400 font-sans text-xs">{errorMsg}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#C9A664]/10 flex items-center justify-center space-x-2 cursor-pointer border-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-current"></span>
                        <span>Sending Idea...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send My Project Idea</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-[#E8E6E1]/30 font-mono tracking-widest uppercase">
                    TODO: connect to Formspree backend before production launch
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
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
                    Project Proposal Received!
                  </h3>
                  <p className="font-sans text-sm text-[#E8E6E1]/70 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <span className="font-bold text-[#C9A664]">{formData.name}</span>. We've captured your project proposal for <span className="font-semibold">{formData.projectType}</span>. Ebele Nweje will personally review your concept and reach out via email (<span className="font-semibold text-[#FAF7F2]">{formData.email}</span>) within 24 hours.
                  </p>

                  <div className="bg-white/5 border border-white/10 p-6 max-w-sm mx-auto mb-8 text-left rounded-2xl backdrop-blur-md shadow-lg">
                    <h4 className="font-serif text-xs font-bold text-[#C9A664] uppercase tracking-wider mb-2">
                      Immediate Next Step
                    </h4>
                    <p className="font-sans text-xs text-[#E8E6E1]/80 leading-relaxed mb-4">
                      Would you like to instantly discuss your idea with us on WhatsApp for faster scoping? Let's chat!
                    </p>
                    <a
                      href="https://wa.me/2348035105288"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-full text-center py-2.5 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-full font-sans text-xs font-bold uppercase tracking-wider block cursor-pointer shadow-lg shadow-[#C9A664]/10 font-bold"
                    >
                      Ping Creative Desk Now
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        whatsapp: '',
                        projectType: 'eBook/Digital Publishing',
                        budgetRange: '₦100k–₦500k / $100–$500',
                        idea: '',
                      });
                    }}
                    className="text-[#E8E6E1]/40 hover:text-[#FAF7F2] transition-colors text-xs font-bold font-sans uppercase tracking-widest cursor-pointer"
                  >
                    Submit Another Inquiry
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
