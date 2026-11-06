/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import WorkProof from './components/WorkProof';
import FreeGuide from './components/FreeGuide';
import HowWeWork from './components/HowWeWork';
import WhyPhoenix from './components/WhyPhoenix';
import About from './components/About';
import TheLab from './components/TheLab';
import ProjectForm from './components/ProjectForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F3D2E] text-[#FAF7F2] font-sans antialiased relative overflow-x-clip">
      {/* Immersive Floating Ambient Glow Spheres (Frosted Glass Theme) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#C9A664]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[25%] right-[-100px] w-[500px] h-[500px] bg-[#C9A664]/5 rounded-full blur-[110px]" />
        <div className="absolute top-[50%] left-[-200px] w-[600px] h-[600px] bg-[#C9A664]/4 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#C9A664]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Floating Header Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: Problem */}
          <Problem />

          {/* Section 3: Services */}
          <Services />

          {/* Section 4: Work / Proof */}
          <WorkProof />

          {/* Section 5: Interactive Free Guide Checklist */}
          <FreeGuide />

          {/* Section 6: How We Work Process Flow */}
          <HowWeWork />

          {/* Section 7: Why Phoenix Creative Labs */}
          <WhyPhoenix />

          {/* Section 8: Founder About */}
          <About />

          {/* Section 9: The Lab Sandbox */}
          <TheLab />

          {/* Section 10: Start Your Project (Lead Inquiry) */}
          <ProjectForm />

          {/* Section 11: General Contact */}
          <Contact />
        </main>

        {/* Footnote and bottom navigation mapping */}
        <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

        {/* Leads Dashboard Panel */}
        <AdminPortal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      </div>
    </div>
  );
}

