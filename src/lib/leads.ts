export interface LeadEntry {
  id: string;
  timestamp: string;
  source: 'checklist' | 'contact' | 'inquiry';
  name: string;
  email: string;
  whatsapp?: string;
  projectType?: string;
  budgetRange?: string;
  messageOrIdea?: string;
}

export function saveLead(lead: Omit<LeadEntry, 'id' | 'timestamp'>): LeadEntry {
  const existing = localStorage.getItem('pcl_captured_leads');
  const leads: LeadEntry[] = existing ? JSON.parse(existing) : [];
  
  const newEntry: LeadEntry = {
    ...lead,
    id: Math.random().toString(36).substring(2, 9),
    timestamp: new Date().toISOString(),
  };
  
  leads.unshift(newEntry);
  localStorage.setItem('pcl_captured_leads', JSON.stringify(leads));
  return newEntry;
}

export function getLeads(): LeadEntry[] {
  const existing = localStorage.getItem('pcl_captured_leads');
  return existing ? JSON.parse(existing) : [];
}

export function clearLeads() {
  localStorage.removeItem('pcl_captured_leads');
}

export function exportLeadsToCSV(leads: LeadEntry[]) {
  if (leads.length === 0) return;
  
  const headers = ['ID', 'Date/Time (UTC)', 'Source', 'Name', 'Email', 'WhatsApp', 'Project Type', 'Budget', 'Message/Idea'];
  const rows = leads.map(l => [
    l.id,
    new Date(l.timestamp).toLocaleString(),
    l.source,
    l.name.replace(/"/g, '""'),
    l.email.replace(/"/g, '""'),
    (l.whatsapp || '').replace(/"/g, '""'),
    (l.projectType || '').replace(/"/g, '""'),
    (l.budgetRange || '').replace(/"/g, '""'),
    (l.messageOrIdea || '').replace(/"/g, '""')
  ]);
  
  const csvContent = "data:text/csv;charset=utf-8," 
    + [headers.join(','), ...rows.map(e => e.map(val => `"${val}"`).join(','))].join('\n');
    
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Phoenix_Creative_Labs_Leads_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
