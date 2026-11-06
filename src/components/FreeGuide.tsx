import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, User, Check, Download, Printer, Lock, Unlock, Sparkles, BookOpen, FileText, CheckSquare, ArrowRight, RotateCcw } from 'lucide-react';
import { saveLead } from '../lib/leads';
import checklistPdf from '../assets/images/From_Manuscript_to_Income_Checklist.pdf';

export default function FreeGuide() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Keep form fields clean and locked on fresh page load so visitors always see the signup form
  useEffect(() => {
    // We only load the saved name for convenience if they've typed it before, but we don't auto-unlock
    const savedName = localStorage.getItem('pcl_subscriber_name');
    if (savedName) {
      setFormData((prev) => ({ ...prev, name: savedName }));
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = checklistPdf;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "From_Manuscript_to_Income_Checklist.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter both your name and email address.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Save lead securely to localStorage / Admin logs
    saveLead({
      source: 'checklist',
      name: formData.name.trim(),
      email: formData.email.trim()
    });

    setIsSubmitting(false);
    setIsUnlocked(true);
    localStorage.setItem('pcl_subscriber_name', formData.name);
    
    // Auto-trigger direct download synchronously
    handleDownload();
  };

  const handleReset = () => {
    setIsUnlocked(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <section id="free-guide" className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight">
            Not Ready to Start Yet? <br />
            <span className="text-[#C9A664] italic font-medium">Start Here.</span>
          </h2>
          <p className="font-sans text-sm text-[#E8E6E1]/70 mt-4 leading-relaxed">
            Grab the free, highly actionable checklist we use with our own publishing clients — a simple, transparent breakdown of what it actually takes to turn a manuscript or idea into something finished, professional, and sellable.
          </p>
        </div>

        {/* Lead Magnet Interactive Container */}
        <div className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          
          {/* Accent golden top-bar */}
          <div className="h-1.5 w-full bg-[#C9A664]" />

          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              <motion.div
                key="locked-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                      <Lock className="h-8 w-8 text-[#C9A664]" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A664] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C9A664]"></span>
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#FAF7F2] mb-2">
                  "From Manuscript to Income: A Simple Publishing Checklist"
                </h3>
                <p className="font-sans text-xs text-[#C9A664] tracking-widest uppercase font-bold mb-6">
                  Checklist Guide (Interactive PDF Download)
                </p>

                <p className="font-sans text-sm text-[#E8E6E1]/70 max-w-lg mx-auto mb-8 leading-relaxed">
                  Publishing your first ebook isn't complicated. It just needs the right order. This checklist walks you through everything from a finished manuscript to a published, sellable book on Selar and Amazon. No tech background needed.
                </p>

                {/* Form capturing Name & Email */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
                  <div>
                    <label htmlFor="sub-name" className="block font-mono text-[11px] uppercase tracking-wider text-white/85 font-bold mb-1.5">
                      Your First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <input
                        id="sub-name"
                        type="text"
                        required
                        placeholder="e.g. Dr. Amara"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full glass-input pl-10 pr-4 py-3.5 font-sans text-sm bg-black/20 border-white/10 focus:border-[#C9A664] focus:ring-1 focus:ring-[#C9A664] rounded-xl text-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sub-email" className="block font-mono text-[11px] uppercase tracking-wider text-white/85 font-bold mb-1.5">
                      Your Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <input
                        id="sub-email"
                        type="email"
                        required
                        placeholder="e.g. amara@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full glass-input pl-10 pr-4 py-3.5 font-sans text-sm bg-black/20 border-white/10 focus:border-[#C9A664] focus:ring-1 focus:ring-[#C9A664] rounded-xl text-white outline-none"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-red-400 font-sans text-xs">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#C9A664]/10 flex items-center justify-center space-x-2 cursor-pointer border-none text-center"
                  >
                    <Unlock className="h-4 w-4" />
                    <span>{isSubmitting ? 'Unlocking...' : 'Unlock & Download PDF'}</span>
                  </button>
                  <p className="text-center text-[10px] text-white/40 font-sans italic">
                    *We respect your privacy. Enter your name and email to download the file directly.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked-checklist"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 md:p-12 text-left"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#C9A664]/10 rounded-full text-[#C9A664]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#FAF7F2]">
                        Publishing Checklist Access Granted
                      </h4>
                      <p className="font-sans text-xs text-[#E8E6E1]/70">
                        Welcome back, <span className="font-bold text-[#C9A664]">{formData.name}</span>! Your PDF download is ready below.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center text-white/40 hover:text-red-400 transition-colors text-xs font-medium font-sans px-3 py-1.5 rounded-lg border border-white/5 hover:border-red-400/25 bg-white/2 cursor-pointer"
                    title="Lock the checklist screen"
                  >
                    <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                    Reset & Lock
                  </button>
                </div>

                {/* Minimalist Premium Download Box (No cluttered lists, just a single premium click spot) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/3 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-inner">
                  
                  {/* Left Column: Visual Mockup representation of the PDF */}
                  <div className="col-span-12 md:col-span-4 flex justify-center">
                    <div className="relative w-40 h-52 bg-[#0F3D2E] border-2 border-[#C9A664]/30 rounded-xl p-4 flex flex-col justify-between shadow-2xl overflow-hidden group hover:border-[#C9A664]/60 transition-all duration-300">
                      
                      {/* Document lines overlay */}
                      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#C9A664]" />
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center space-x-1.5">
                          <CheckSquare className="h-3.5 w-3.5 text-[#C9A664] shrink-0" />
                          <div className="h-2 w-16 bg-[#FAF7F2]/25 rounded" />
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <CheckSquare className="h-3.5 w-3.5 text-[#C9A664] shrink-0" />
                          <div className="h-2 w-20 bg-[#FAF7F2]/25 rounded" />
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="h-5 w-5 rounded bg-white/10 shrink-0" />
                          <div className="h-2 w-12 bg-[#FAF7F2]/25 rounded" />
                        </div>
                      </div>

                      {/* PDF Logo badge */}
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2 flex items-center justify-center space-x-1.5 self-center mt-3 z-10">
                        <FileText className="h-5 w-5 text-red-400" />
                        <span className="font-mono text-[10px] font-bold text-red-400 tracking-wider">PDF</span>
                      </div>

                      <div className="mt-4">
                        <div className="h-1.5 w-24 bg-[#C9A664]/20 rounded mb-1" />
                        <div className="h-1.5 w-16 bg-[#C9A664]/20 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Brief, elegant content overview & download action */}
                  <div className="col-span-12 md:col-span-8 flex flex-col justify-center space-y-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A664] font-bold">
                        Official Release Resource
                      </span>
                      <h4 className="font-serif text-xl md:text-2xl font-bold text-[#FAF7F2]">
                        From Manuscript to Income Checklist
                      </h4>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-[#E8E6E1]/70 leading-relaxed">
                      This checklist contains the complete, step-by-step blueprint we use to turn manuscripts into published digital assets. Download it directly to save a copy offline, print it out, or track your own progress.
                    </p>

                    <div className="space-y-2 pt-2 pb-4">
                      <div className="flex items-start space-x-2.5 text-xs text-[#E8E6E1]/80">
                        <Check className="h-4 w-4 text-[#C9A664] shrink-0 mt-0.5" />
                        <span><strong>Manuscript Polish:</strong> Format structures, proofing pipelines, and EPUB guides.</span>
                      </div>
                      <div className="flex items-start space-x-2.5 text-xs text-[#E8E6E1]/80">
                        <Check className="h-4 w-4 text-[#C9A664] shrink-0 mt-0.5" />
                        <span><strong>Selar Integration:</strong> Multi-currency checkout, local currency setups, and layouts.</span>
                      </div>
                      <div className="flex items-start space-x-2.5 text-xs text-[#E8E6E1]/80">
                        <Check className="h-4 w-4 text-[#C9A664] shrink-0 mt-0.5" />
                        <span><strong>Amazon KDP Setup:</strong> Keywords indexing, metadata formats, and global pricing maps.</span>
                      </div>
                      <div className="flex items-start space-x-2.5 text-xs text-[#E8E6E1]/80">
                        <Check className="h-4 w-4 text-[#C9A664] shrink-0 mt-0.5" />
                        <span><strong>Common Pitfalls:</strong> Section dedicated specifically to critical, high-risk format errors to avoid.</span>
                      </div>
                    </div>

                    {/* Massive glowing download button */}
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#C9A664]/20 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Download className="h-4.5 w-4.5 mr-2.5 stroke-[2.5]" />
                      Download Checklist (PDF)
                    </button>
                  </div>
                </div>

                {/* Interactive Closing Line & Support */}
                <div className="mt-12 text-center pt-8 border-t border-white/10">
                  <p className="font-serif text-base italic text-[#FAF7F2]/80 max-w-xl mx-auto leading-relaxed mb-6">
                    "You don't need to be everywhere at once — get it live on one platform first, then expand. That's how one idea becomes a real, repeatable income stream."
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                      href="#start-project"
                      className="inline-flex items-center px-8 py-3.5 bg-white/5 hover:bg-white/10 text-[#C9A664] hover:text-[#FAF7F2] border border-[#C9A664]/30 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      I want full publishing support
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
