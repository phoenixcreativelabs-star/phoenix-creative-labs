import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getLeads, LeadEntry, exportLeadsToCSV, clearLeads } from '../lib/leads';
import { X, ShieldAlert, Download, Trash2, Search, Filter, Calendar, Mail, FileSpreadsheet, Lock, Unlock, Eye, BarChart3 } from 'lucide-react';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPortal({ isOpen, onClose }: AdminPortalProps) {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [leads, setLeads] = useState<LeadEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'checklist' | 'contact' | 'inquiry'>('all');

  useEffect(() => {
    if (isOpen) {
      setLeads(getLeads());
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'admin' || passcode === 'phoenix') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid passcode. Try "admin".');
    }
  };

  const handleExport = () => {
    exportLeadsToCSV(leads);
  };

  const handleClear = () => {
    if (window.confirm('WARNING: This will permanently delete ALL stored leads from your local browser storage. This cannot be undone. Are you absolutely sure?')) {
      clearLeads();
      setLeads([]);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.messageOrIdea && lead.messageOrIdea.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (lead.projectType && lead.projectType.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesSource = sourceFilter === 'all' || lead.source === sourceFilter;
    
    return matchesSearch && matchesSource;
  });

  // Calculate some fun stats
  const stats = {
    total: leads.length,
    checklist: leads.filter(l => l.source === 'checklist').length,
    contact: leads.filter(l => l.source === 'contact').length,
    inquiry: leads.filter(l => l.source === 'inquiry').length,
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 print:hidden">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-[#0F3D2E] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl z-10 flex flex-col"
        >
          {/* Top Gold Bar */}
          <div className="h-1.5 w-full bg-[#C9A664]" />

          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0B2E23]">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#C9A664]/10 text-[#C9A664] rounded-xl border border-[#C9A664]/20">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#FAF7F2]">
                  Phoenix Leads & Inquiry Hub
                </h3>
                <p className="font-sans text-xs text-[#E8E6E1]/50">
                  Secure local client interactions database & lead capture table
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 text-white/50 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!isAuthenticated ? (
            /* Auth State */
            <div className="p-12 flex-1 overflow-y-auto flex flex-col items-center justify-center text-center max-w-md mx-auto">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full mb-6">
                <Lock className="h-8 w-8 text-[#C9A664]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#FAF7F2] mb-2">
                Owner Access Required
              </h4>
              <p className="font-sans text-sm text-[#E8E6E1]/60 mb-8">
                Enter your administrative passcode to view active leads and customer inquiry logs.
              </p>

              <form onSubmit={handleLogin} className="w-full space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder='Enter "admin" to unlock'
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full glass-input text-center text-sm tracking-widest py-3.5"
                    autoFocus
                  />
                </div>
                {error && <p className="text-red-400 font-sans text-xs">{error}</p>}
                
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-bold border-none"
                >
                  Unlock Hub
                </button>
              </form>
            </div>
          ) : (
            /* Dashboard State */
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 flex flex-col">
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
                  <span className="font-mono text-xs text-[#C9A664] uppercase font-bold tracking-wider block mb-1">Total Leads</span>
                  <span className="font-serif text-3xl font-black text-[#FAF7F2]">{stats.total}</span>
                </div>
                <div className="bg-[#C9A664]/5 border border-[#C9A664]/10 rounded-2xl p-4 text-center">
                  <span className="font-mono text-xs text-[#C9A664] uppercase font-bold tracking-wider block mb-1">Checklist Unlocks</span>
                  <span className="font-serif text-3xl font-black text-[#C9A664]">{stats.checklist}</span>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
                  <span className="font-mono text-xs text-[#E8E6E1]/50 uppercase font-bold tracking-wider block mb-1">General Contact</span>
                  <span className="font-serif text-3xl font-black text-[#FAF7F2]">{stats.contact}</span>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
                  <span className="font-mono text-xs text-[#E8E6E1]/50 uppercase font-bold tracking-wider block mb-1">Project Inquiry</span>
                  <span className="font-serif text-3xl font-black text-[#FAF7F2]">{stats.inquiry}</span>
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0B2E23] p-4 rounded-2xl border border-white/5">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Search by name, email, keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full glass-input pl-10 pr-4 py-2 text-xs"
                    />
                  </div>

                  {/* Filter tabs */}
                  <div className="flex bg-black/25 p-1 rounded-xl border border-white/5 shrink-0 self-start">
                    {(['all', 'checklist', 'contact', 'inquiry'] as const).map((source) => (
                      <button
                        key={source}
                        onClick={() => setSourceFilter(source)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border-none ${
                          sourceFilter === source
                            ? 'bg-[#C9A664] text-[#0F3D2E]'
                            : 'text-[#E8E6E1]/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {source === 'all' ? 'All' : source}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 w-full md:w-auto shrink-0 justify-end">
                  <button
                    onClick={handleExport}
                    disabled={filteredLeads.length === 0}
                    className="inline-flex items-center px-4 py-2 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-bold border-none disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    Export CSV
                  </button>
                  <button
                    onClick={handleClear}
                    disabled={leads.length === 0}
                    className="inline-flex items-center px-4 py-2 bg-red-950/40 hover:bg-red-950/60 text-red-400 border border-red-900/30 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border-none disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Wipe Database
                  </button>
                </div>
              </div>

              {/* Table list */}
              <div className="flex-1 overflow-x-auto border border-white/5 rounded-2xl bg-black/15">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#0B2E23] text-[#C9A664] font-mono uppercase text-[10px] tracking-widest border-b border-white/5">
                      <th className="p-4 font-bold">Source</th>
                      <th className="p-4 font-bold">Client Information</th>
                      <th className="p-4 font-bold">Details & Message / Project Scope</th>
                      <th className="p-4 font-bold">Date Stamped</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="p-12 text-center text-[#E8E6E1]/35 font-sans italic">
                            No matching lead captures found in storage.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            {/* Source Badge */}
                            <td className="p-4 whitespace-nowrap align-top">
                              <span className={`inline-block px-2.5 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider ${
                                lead.source === 'checklist' 
                                  ? 'bg-blue-950/40 text-blue-300 border border-blue-900/30'
                                  : lead.source === 'contact'
                                  ? 'bg-purple-950/40 text-purple-300 border border-purple-900/30'
                                  : 'bg-emerald-950/40 text-emerald-300 border border-[#C9A664]/20'
                              }`}>
                                {lead.source}
                              </span>
                            </td>

                            {/* Contact Details */}
                            <td className="p-4 align-top max-w-[220px]">
                              <div className="font-bold text-[#FAF7F2] font-serif text-sm">{lead.name}</div>
                              <div className="text-[#E8E6E1]/70 mt-1 flex items-center gap-1">
                                <Mail className="h-3 w-3 text-white/30" />
                                <span className="truncate">{lead.email}</span>
                              </div>
                              {lead.whatsapp && (
                                <div className="text-xs text-[#C9A664] mt-1">
                                  WA: <span className="font-mono font-bold">{lead.whatsapp}</span>
                                </div>
                              )}
                            </td>

                            {/* Scope and Text content */}
                            <td className="p-4 align-top">
                              {lead.source === 'inquiry' && (
                                <div className="space-y-1 mb-2 bg-[#0B2E23] p-2.5 rounded-lg border border-white/5">
                                  <div className="text-[#FAF7F2]">
                                    Type: <span className="text-[#C9A664] font-bold">{lead.projectType}</span>
                                  </div>
                                  <div className="text-[#E8E6E1]/70">
                                    Budget: <span className="text-white/90 font-mono font-bold">{lead.budgetRange}</span>
                                  </div>
                                </div>
                              )}
                              <p className="text-[#E8E6E1]/80 italic max-w-lg leading-relaxed whitespace-pre-wrap">
                                {lead.messageOrIdea ? `"${lead.messageOrIdea}"` : <span className="text-[#E8E6E1]/30">No additional message - just downloaded checklist</span>}
                              </p>
                            </td>

                            {/* Stamped Time */}
                            <td className="p-4 whitespace-nowrap text-[#E8E6E1]/50 align-top font-mono text-[10px]">
                              {new Date(lead.timestamp).toLocaleDateString()}<br />
                              {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </td>
                          </tr>
                        ))
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
