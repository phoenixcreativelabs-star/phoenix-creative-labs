import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react';
import { 
  THE_LAB_DATA, 
  OMA_FACE_GRID_2_PATH, 
  OMA_READY_PATH, 
  OMA_HAVING_DRINK_PATH, 
  OMA_LACY_BURGUNDY_POSING_PATH, 
  OMA_IN_WHITE_WALKING_PATH, 
  OMA_FLAGSHIP_PATH, 
  OMA_FACEPACK_GRID_PATH,
  TURQUOISE_FANTASY_MODEL_PATH, 
  TURQUOISE_RUNWAY_1_PATH, 
  PINK_RUNWAY_PATH 
} from '../data';
import { LabItem, ProcessStep } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, X, FlaskConical, Upload, RefreshCw, Check } from 'lucide-react';

interface LabStepCardProps {
  key?: string | number;
  step: ProcessStep;
  labId: string;
}

function LabStepCard({ step, labId }: LabStepCardProps) {
  const [imgUrl, setImgUrl] = useState<string>(() => {
    return localStorage.getItem(`pcl_lab_step_img_${labId}_${step.id}`) || step.defaultImage;
  });
  const [activeDeviceTab, setActiveDeviceTab] = useState<'manuscript' | 'phone' | 'tablet' | 'kindle'>('manuscript');
  const [activeGridTab, setActiveGridTab] = useState<'grid1' | 'grid2'>('grid1');
  const [activeSeedTab, setActiveSeedTab] = useState<'flagship' | 'turquoise_fantasy' | 'turquoise_runway' | 'pink_runway'>('flagship');
  const [activeExpressionTab, setActiveExpressionTab] = useState<'ready' | 'drink' | 'burgundy' | 'white_walk'>('ready');
  const [cnChecklist, setCnChecklist] = useState<boolean[]>([true, false, false, false]);

  const toggleCnChecklist = (index: number) => {
    setCnChecklist(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const checklistProgress = Math.round((cnChecklist.filter(Boolean).length / cnChecklist.length) * 100);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state if step.defaultImage or labId changes
  useEffect(() => {
    setImgUrl(localStorage.getItem(`pcl_lab_step_img_${labId}_${step.id}`) || step.defaultImage);
  }, [step.defaultImage, step.id, labId]);

  // Determine if there is a custom upload
  const hasCustomUpload = localStorage.getItem(`pcl_lab_step_img_${labId}_${step.id}`) !== null;

  // Determine current image to display in the main visual container
  let currentDisplayImg = imgUrl;
  if (!hasCustomUpload) {
    if (step.id === 'ov-step-1') {
      currentDisplayImg = activeGridTab === 'grid1' ? OMA_FACEPACK_GRID_PATH : OMA_FACE_GRID_2_PATH;
    } else if (step.id === 'ov-step-2') {
      if (activeSeedTab === 'flagship') currentDisplayImg = OMA_FLAGSHIP_PATH;
      else if (activeSeedTab === 'turquoise_fantasy') currentDisplayImg = TURQUOISE_FANTASY_MODEL_PATH;
      else if (activeSeedTab === 'turquoise_runway') currentDisplayImg = TURQUOISE_RUNWAY_1_PATH;
      else if (activeSeedTab === 'pink_runway') currentDisplayImg = PINK_RUNWAY_PATH;
    } else if (step.id === 'ov-step-3') {
      if (activeExpressionTab === 'ready') currentDisplayImg = OMA_READY_PATH;
      else if (activeExpressionTab === 'drink') currentDisplayImg = OMA_HAVING_DRINK_PATH;
      else if (activeExpressionTab === 'burgundy') currentDisplayImg = OMA_LACY_BURGUNDY_POSING_PATH;
      else if (activeExpressionTab === 'white_walk') currentDisplayImg = OMA_IN_WHITE_WALKING_PATH;
    }
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        try {
          localStorage.setItem(`pcl_lab_step_img_${labId}_${step.id}`, base64String);
          setImgUrl(base64String);
        } catch (error) {
          console.error("Storage limit exceeded, using transient URL", error);
          setImgUrl(base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem(`pcl_lab_step_img_${labId}_${step.id}`);
    setImgUrl(step.defaultImage);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between group/step hover:border-[#C9A664]/30 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden">
      {/* Dynamic Visual Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-3 border border-white/5 group/step-img">
        {step.id === 'cn-step-1' && activeDeviceTab !== 'manuscript' ? (
          <>
            {activeDeviceTab === 'phone' && (
              <div className="relative w-full h-full bg-[#FAF5EB] p-3 flex flex-col justify-between text-slate-900">
                <div className="flex items-center justify-between border-b border-black/5 pb-1 mb-1">
                  <span className="font-serif text-[7px] text-slate-400 uppercase tracking-widest font-extrabold">📱 Phone Reader</span>
                  <span className="font-sans text-[7px] text-slate-400 font-semibold">12:30 PM</span>
                </div>
                <div className="flex-1 overflow-y-auto text-left pr-1 select-none">
                  <h5 className="font-serif text-[10px] font-black text-slate-950 mb-1 leading-tight">ABOUT "JAPA"</h5>
                  <p className="font-serif text-[8.5px] text-slate-700 leading-normal">
                    We didn't run because we wanted to see the world. We ran because the world we knew was collapsing beneath our feet. Japa was never a choice—it was a survival reflex, an escape velocity. Lagos became a fading dream of warm yellow buses and salty ocean air.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-black/5 text-slate-400 font-mono text-[6px]">
                  <span>Page 1 of 188</span>
                  <span>6% read</span>
                </div>
              </div>
            )}
            {activeDeviceTab === 'tablet' && (
              <div className="relative w-full h-full bg-[#FAF7F2] p-3 flex flex-col justify-between text-slate-900">
                <div className="flex items-center justify-between border-b border-black/5 pb-1 mb-1">
                  <span className="font-serif text-[7px] text-slate-400 uppercase tracking-widest font-extrabold">📟 Tablet Edition</span>
                  <span className="font-sans text-[7px] text-slate-400">Layout: Two-Column Flow</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-3 overflow-y-auto text-left pr-1 select-none">
                  <div>
                    <h5 className="font-serif text-[9px] font-black text-slate-950 mb-0.5 leading-tight">CHAPTER I</h5>
                    <p className="font-serif text-[7px] text-slate-700 leading-relaxed">
                      The desert is a silent teacher. It does not ask for your credentials or your background; it only demands to know if you can survive the heat.
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-[7px] text-slate-700 leading-relaxed pt-2.5">
                      In Lagos, we talked about the sand as a metaphor. In Niger, we felt it in our throat—a gritty, dry reality that redefined our journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-black/5 text-slate-400 font-mono text-[6px]">
                  <span>Page 12 of 244</span>
                  <span>Side-by-side view</span>
                </div>
              </div>
            )}
            {activeDeviceTab === 'kindle' && (
              <div className="relative w-full h-full bg-[#E2E4E1] p-3 flex flex-col justify-between text-black shadow-inner">
                <div className="flex items-center justify-between border-b border-black/10 pb-1 mb-1">
                  <span className="font-serif text-[7px] text-black/60 uppercase tracking-widest font-extrabold">Kindle Paperwhite</span>
                  <span className="font-sans text-[7px] text-black/60">E-Ink Display Mode</span>
                </div>
                <div className="flex-1 overflow-y-auto text-left pr-1 select-none">
                  <h5 className="font-serif text-[9px] font-bold text-black mb-1 leading-tight">CHAPTER 1: THE RECKONING</h5>
                  <p className="font-serif text-[8px] text-black/85 leading-normal">
                    Fifty edits later, the raw Google Doc was transformed. The words now had space to breathe, the paragraphs aligned to the classic guidelines of elite self-publishing platforms. Each page render behaves consistently across various screen form factors.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-black/10 text-black/60 font-mono text-[6px]">
                  <span>Location 104 • 3% read</span>
                  <span>Battery: 85%</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <img
              src={currentDisplayImg}
              alt={step.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/step-img:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Hover Upload Overlay */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/85 opacity-0 group-hover/step-img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center cursor-pointer text-center p-3 gap-1.5"
            >
              <div className="p-2 bg-[#C9A664]/20 border border-[#C9A664]/40 rounded-full text-[#C9A664]">
                <Upload className="h-4 w-4" />
              </div>
              <span className="font-sans text-xs text-[#FAF7F2] font-semibold">
                Upload Process Screenshot
              </span>
              <span className="font-mono text-[9px] text-[#FAF7F2]/60">
                Click to choose file
              </span>
            </div>

            {/* Reset button if custom image exists */}
            {hasCustomUpload && (
              <button
                onClick={handleReset}
                className="absolute top-2 right-2 bg-black/80 hover:bg-black text-[#E8E6E1] hover:text-[#C9A664] p-1.5 rounded-full border border-white/10 transition-colors z-20 cursor-pointer"
                title="Reset to default image"
              >
                <RefreshCw className="h-3 w-3" />
              </button>
            )}

            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleUpload}
              className="hidden"
              accept="image/*"
            />
          </>
        )}
      </div>

      {/* Device switcher for Step 1 */}
      {step.id === 'cn-step-1' && (
        <div className="flex bg-black/30 p-0.5 rounded-lg border border-white/5 mb-3 text-[9px] font-mono justify-between">
          {(['manuscript', 'phone', 'tablet', 'kindle'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveDeviceTab(tab)}
              className={`flex-1 py-1 rounded transition-all cursor-pointer text-center ${
                activeDeviceTab === tab 
                  ? 'bg-[#C9A664]/20 text-[#C9A664] border border-[#C9A664]/35 font-semibold' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab === 'manuscript' ? 'Manuscript' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Switcher for Face Grid Mapping (ov-step-1) */}
      {step.id === 'ov-step-1' && !hasCustomUpload && (
        <div className="flex bg-black/30 p-0.5 rounded-lg border border-white/5 mb-3 text-[9px] font-mono justify-between">
          {(['grid1', 'grid2'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveGridTab(tab)}
              className={`flex-1 py-1 rounded transition-all cursor-pointer text-center ${
                activeGridTab === tab 
                  ? 'bg-[#C9A664]/20 text-[#C9A664] border border-[#C9A664]/35 font-semibold' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab === 'grid1' ? 'Primary Grid' : 'Secondary Grid (V2)'}
            </button>
          ))}
        </div>
      )}

      {/* Switcher for Stylistic Seeds (ov-step-2) */}
      {step.id === 'ov-step-2' && !hasCustomUpload && (
        <div className="flex bg-black/30 p-0.5 rounded-lg border border-white/5 mb-3 text-[9px] font-mono justify-between gap-1">
          {([
            { id: 'flagship', label: 'Flagship' },
            { id: 'turquoise_fantasy', label: 'Fantasy' },
            { id: 'turquoise_runway', label: 'Runway 1' },
            { id: 'pink_runway', label: 'Runway 2' }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSeedTab(tab.id)}
              className={`flex-1 py-1 rounded transition-all cursor-pointer text-center ${
                activeSeedTab === tab.id 
                  ? 'bg-[#C9A664]/20 text-[#C9A664] border border-[#C9A664]/35 font-semibold' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Switcher for Expression Matrices (ov-step-3) */}
      {step.id === 'ov-step-3' && !hasCustomUpload && (
        <div className="flex bg-black/30 p-0.5 rounded-lg border border-white/5 mb-3 text-[9px] font-mono justify-between gap-1">
          {([
            { id: 'ready', label: 'Ready' },
            { id: 'drink', label: 'Drink' },
            { id: 'burgundy', label: 'Burgundy' },
            { id: 'white_walk', label: 'White Walk' }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveExpressionTab(tab.id)}
              className={`flex-1 py-1 rounded transition-all cursor-pointer text-center ${
                activeExpressionTab === tab.id 
                  ? 'bg-[#C9A664]/20 text-[#C9A664] border border-[#C9A664]/35 font-semibold' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Texts */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-sans text-xs md:text-sm font-bold text-[#FAF7F2] tracking-wide mb-1 text-left">
            {step.title}
          </h4>
          <p className="font-sans text-[11px] text-[#E8E6E1]/70 leading-relaxed text-left">
            {step.description}
          </p>
        </div>

        {/* Process Artifact / Detail Boxes for "add a box in each section" */}
        {step.id === 'bb-step-1' && (
          <div className="mt-3 bg-[#C9A664]/5 border border-[#C9A664]/10 rounded-xl p-2.5 text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">Revision History Box</span>
              <span className="text-[8px] font-mono bg-[#C9A664]/10 text-[#C9A664] px-1.5 py-0.5 rounded">Google Docs Log</span>
            </div>
            <div className="space-y-1 text-[10px] font-sans text-[#E8E6E1]/80 leading-normal">
              <div className="flex items-center justify-between">
                <span>📝 Chapter 1 Revision Cycle:</span>
                <span className="font-mono text-[9px] text-[#C9A664] font-semibold">Total: 50 edits</span>
              </div>
              <p className="text-[9px] text-[#E8E6E1]/50 italic">
                Verifying typography scaling, margin clearances, and responsive column transitions.
              </p>
            </div>
          </div>
        )}

        {step.id === 'bb-step-2' && (
          <div className="mt-3 bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-2.5 text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">eBook Project Card</span>
              <span className="text-[8px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">🟢 Client Work</span>
            </div>
            <p className="font-serif text-[10.5px] text-[#FAF7F2]/85 italic border-l border-[#C9A664] pl-2 mb-2 leading-relaxed">
              "I still dey review, but i bu Odogwu na writing. You write so well and you are communicating to the target audience very well."
            </p>
            <div className="grid grid-cols-2 gap-1 text-[9px] font-mono text-white/50">
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">✓</span> Full Editing
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">✓</span> PDF / ePub
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">✓</span> 3D Presentation
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">✓</span> Store Setup
              </div>
            </div>
          </div>
        )}

        {step.id === 'bb-step-3' && (
          <div className="mt-3 bg-blue-950/20 border border-blue-900/30 rounded-xl p-2.5 text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">Hiring Blueprint Box</span>
              <span className="text-[8px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded">⚡ Lead Magnet</span>
            </div>
            <p className="font-sans text-[10px] text-[#E8E6E1]/70 leading-relaxed mb-2 select-none">
              Filtering candidates for genuine technical competency instead of superficial video interview confidence.
            </p>
            <div className="space-y-1 text-[9px] font-mono text-[#FAF7F2]/60">
              <div className="flex items-center gap-1">
                <span className="text-blue-400 font-bold">»</span> Screening Beyond the Interview
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-400 font-bold">»</span> Rigorous 30-Day Metric Target
              </div>
            </div>
          </div>
        )}

        {step.id === 'ov-step-1' && (
          <div className="mt-3 bg-[#C9A664]/5 border border-[#C9A664]/15 rounded-xl p-2.5 text-left animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">Secondary Face Grid Box</span>
              <span className="text-[8px] font-mono bg-[#C9A664]/10 text-[#C9A664] px-1.5 py-0.5 rounded border border-[#C9A664]/20 font-bold">Face Mesh V2</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-black/40 flex-shrink-0">
                <img src={OMA_FACE_GRID_2_PATH} className="w-full h-full object-cover" alt="Oma Face Grid 2" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-sans text-[#FAF7F2] font-semibold leading-tight">Face Mesh Coherence 2.0</p>
                <p className="text-[9px] text-[#E8E6E1]/50 leading-normal mt-0.5">
                  Secondary high-fidelity facial node map added to refine expression vectors and preserve 100% resemblance across dynamic camera movements.
                </p>
              </div>
            </div>
          </div>
        )}

        {step.id === 'ov-step-2' && (
          <div className="mt-3 bg-emerald-950/15 border border-emerald-900/30 rounded-xl p-2.5 text-left animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">Fabrics & Runway Seeds Box</span>
              <span className="text-[8px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold">Fashion Gen</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="space-y-1">
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-white/5 bg-black/40">
                  <img src={TURQUOISE_FANTASY_MODEL_PATH} className="w-full h-full object-cover" alt="Turquoise Fantasy Model" referrerPolicy="no-referrer" />
                </div>
                <p className="text-[8px] font-mono text-white/50 text-center truncate leading-none">Turquoise Fantasy</p>
              </div>
              <div className="space-y-1">
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-white/5 bg-black/40">
                  <img src={TURQUOISE_RUNWAY_1_PATH} className="w-full h-full object-cover" alt="Turquoise Runway" referrerPolicy="no-referrer" />
                </div>
                <p className="text-[8px] font-mono text-white/50 text-center truncate leading-none">Turquoise Runway</p>
              </div>
              <div className="space-y-1">
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-white/5 bg-black/40">
                  <img src={PINK_RUNWAY_PATH} className="w-full h-full object-cover" alt="Pink Runway" referrerPolicy="no-referrer" />
                </div>
                <p className="text-[8px] font-mono text-white/50 text-center truncate leading-none">Pink Runway</p>
              </div>
            </div>
          </div>
        )}

        {step.id === 'ov-step-3' && (
          <div className="mt-3 bg-white/[0.02] border border-white/10 rounded-xl p-2.5 text-left animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">Expression Profiles Box</span>
              <span className="text-[8px] font-mono bg-[#C9A664]/10 text-[#C9A664] px-1.5 py-0.5 rounded border border-[#C9A664]/20 font-bold">4 States</span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[
                { name: 'Ready', path: OMA_READY_PATH },
                { name: 'Drink', path: OMA_HAVING_DRINK_PATH },
                { name: 'Burgundy', path: OMA_LACY_BURGUNDY_POSING_PATH },
                { name: 'White Walk', path: OMA_IN_WHITE_WALKING_PATH }
              ].map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="aspect-[3/4] rounded overflow-hidden border border-white/5 bg-black/40">
                    <img src={exp.path} className="w-full h-full object-cover" alt={exp.name} referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[7.5px] font-mono text-white/40 text-center truncate leading-none">{exp.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step.id === 'cn-step-1' && (
          <div className="mt-3 bg-[#C9A664]/5 border border-[#C9A664]/10 rounded-xl p-2.5 text-left animate-fade-in">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">Device Representation Box</span>
              <span className="text-[8px] font-mono bg-[#C9A664]/10 text-[#C9A664] px-1.5 py-0.5 rounded border border-[#C9A664]/20 font-bold">Fluid Layout</span>
            </div>
            <p className="text-[9px] text-[#E8E6E1]/60 leading-normal mb-1.5">
              Presenting 3 responsive visual simulated screens (Phone, Tablet, Kindle Mode) derived dynamically from the master manuscript raw source draft.
            </p>
            <div className="flex items-center justify-between text-[8px] font-mono text-white/40">
              <span>View Mode: <span className="text-[#C9A664] uppercase font-bold">{activeDeviceTab}</span></span>
              <span>Rescaling: 100% Vector</span>
            </div>
          </div>
        )}

        {step.id === 'cn-step-2' && (
          <div className="mt-3 bg-[#C9A664]/5 border border-[#C9A664]/15 rounded-xl p-2.5 text-left animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664] tracking-wider">Interactive Checklist Widget</span>
              <span className="text-[8px] font-mono bg-[#C9A664]/10 text-[#C9A664] px-1.5 py-0.5 rounded border border-[#C9A664]/20 font-bold">{checklistProgress}% Complete</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-white/5 rounded-full h-1 mb-3 overflow-hidden">
              <div 
                className="bg-[#C9A664] h-full transition-all duration-300"
                style={{ width: `${checklistProgress}%` }}
              />
            </div>

            {/* Checklist items */}
            <div className="space-y-1.5">
              {[
                "Target Audience & Scope Definition",
                "Extracting High-Value Book Excerpts",
                "Formatting PDF Interactive Fields",
                "Hooking Automated Lead Capture"
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => toggleCnChecklist(idx)}
                  className="flex items-center gap-2 cursor-pointer group/item text-[10px] font-sans text-[#E8E6E1]/90 hover:text-white select-none transition-colors"
                >
                  <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${
                    cnChecklist[idx] 
                      ? 'bg-[#C9A664] border-[#C9A664] text-[#0F3D2E]' 
                      : 'border-white/20 group-hover/item:border-[#C9A664]/50'
                  }`}>
                    {cnChecklist[idx] && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                  </div>
                  <span className={`${cnChecklist[idx] ? 'line-through text-white/40' : ''}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Default Process Artifact Box for Omaha Vault & Experiments steps to maintain visual consistency */}
        {step.id !== 'bb-step-1' && step.id !== 'bb-step-2' && step.id !== 'bb-step-3' && 
         step.id !== 'ov-step-1' && step.id !== 'ov-step-2' && step.id !== 'ov-step-3' &&
         step.id !== 'cn-step-1' && step.id !== 'cn-step-2' && (
          <div className="mt-3 bg-white/[0.02] border border-white/5 rounded-xl p-2.5 text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-mono font-extrabold uppercase text-[#C9A664]/75 tracking-wider">Process Artifact Box</span>
              <span className="text-[8px] font-mono bg-white/5 text-[#E8E6E1]/60 px-1.5 py-0.5 rounded border border-white/5">Coherent Map</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#E8E6E1]/50">
              <span>Format: UltraHD JPEG</span>
              <span className="text-[#C9A664]">Likeness: 100%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TheLab() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<LabItem | null>(null);
  const [activeGalleryImg, setActiveGalleryImg] = useState<{
    id: string;
    title: string;
    image: string;
    tag: string;
    prompt: string;
  } | null>(null);

  const tabs = ['All', 'Character Vault', 'Experiments', 'Behind the Build', 'Creative Notes'];

  const filteredItems = activeTab === 'All'
    ? THE_LAB_DATA
    : THE_LAB_DATA.filter(item => item.badge === activeTab);

  return (
    <section id="the-lab" className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-full text-[#C9A664]">
              <FlaskConical className="h-6 w-6" />
            </div>
          </div>
          <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
            Creative Sandbox
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight">
            The Lab
          </h2>
          <p className="font-sans text-sm text-[#E8E6E1]/70 mt-4 leading-relaxed">
            Our creative destination for rigorous experimentation, AI art direction tests, and engineering deep dives. No sales pitches — just pure, unfiltered exploration of what is possible.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-white/10 pb-6 max-w-3xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-350 border-b-2 -mb-[26px] cursor-pointer ${
                activeTab === tab
                  ? 'border-[#C9A664] text-[#FAF7F2] font-bold'
                  : 'border-transparent text-[#E8E6E1]/50 hover:text-[#C9A664]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="bg-white/5 border border-white/10 hover:border-[#C9A664]/50 p-8 flex flex-col justify-between shadow-2xl rounded-2xl cursor-pointer group transition-all duration-300 relative backdrop-blur-xl"
              >
                {/* Visual Line Accent */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C9A664] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[9px] font-bold bg-[#C9A664]/10 text-[#C9A664] px-3 py-1 uppercase tracking-wider border border-[#C9A664]/20 rounded-lg">
                      {item.badge}
                    </span>
                    <div className="flex items-center text-white/40 font-mono text-[10px]">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-[#C9A664]" />
                      {item.date}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mb-3 group-hover:text-[#C9A664] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-[#E8E6E1]/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="font-sans text-[11px] font-bold text-[#FAF7F2] uppercase tracking-wider flex items-center group-hover:text-[#C9A664] transition-colors">
                    Read Lab Insights
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <Sparkles className="h-4 w-4 text-white/20 group-hover:text-[#C9A664] transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window for Deep Reads */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Content Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0F3D2E]/95 border border-white/10 max-w-4xl w-full p-6 md:p-10 shadow-2xl relative z-10 overflow-y-auto max-h-[90vh] rounded-3xl backdrop-blur-2xl text-left"
              >
                {/* Exit button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 p-1.5 text-[#FAF7F2] hover:text-[#C9A664] transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="flex items-center space-x-3 mb-6">
                  <span className="font-mono text-[9px] font-bold bg-[#C9A664]/15 text-[#C9A664] px-3 py-1 uppercase tracking-widest border border-[#C9A664]/25 rounded-lg">
                    {selectedItem.badge}
                  </span>
                  <div className="flex items-center text-[#E8E6E1]/60 font-mono text-[10px]">
                    <Calendar className="h-3.5 w-3.5 mr-1.5 text-[#C9A664]" />
                    {selectedItem.date}
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-black text-[#FAF7F2] leading-tight mb-4">
                  {selectedItem.title}
                </h3>

                <p className="font-sans text-sm text-[#E8E6E1]/70 italic mb-8 border-l-2 border-[#C9A664] pl-4 leading-relaxed">
                  "{selectedItem.description}"
                </p>

                {/* Behind the Build Process Steps / Box Section */}
                {selectedItem.steps && selectedItem.steps.length > 0 && (
                  <div className="mb-10">
                    <h4 className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#C9A664] mb-4">
                      Behind-The-Scenes Process Board
                    </h4>
                    <p className="font-sans text-xs text-[#E8E6E1]/60 mb-6 leading-relaxed">
                      Below are the interactive documented phases of this project. You can click on the images to upload screenshots or diagrams of your own behind-the-scenes processes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {selectedItem.steps.map((step) => (
                        <LabStepCard key={step.id} step={step} labId={selectedItem.id} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Character Asset Lookbook / Gallery (if available) */}
                {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                  <div className="mb-10">
                    <h4 className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#C9A664] mb-4">
                      Character Asset Lookbook ({selectedItem.gallery.length} Renders)
                    </h4>
                    <p className="font-sans text-xs text-[#E8E6E1]/60 mb-6 leading-relaxed">
                      Browse the core consistent styles engineered for this persona. Each representation preserves facial features consistency under different clothing types and lighting settings. Click on any style card to view its prompt recipe:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {selectedItem.gallery.map((img) => (
                        <div
                          key={img.id}
                          onClick={() => setActiveGalleryImg(img)}
                          className="group/gallery relative aspect-[3/4] overflow-hidden rounded-xl bg-black/40 border border-white/5 cursor-pointer hover:border-[#C9A664]/50 transition-all duration-300 shadow-lg"
                        >
                          <img
                            src={img.image}
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/gallery:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          {/* Overlay tag */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 flex flex-col justify-end">
                            <span className="font-sans text-[10px] font-bold text-[#FAF7F2] truncate group-hover/gallery:text-[#C9A664] transition-colors">
                              {img.title}
                            </span>
                            <span className="font-mono text-[8px] text-white/50 uppercase tracking-wider mt-0.5 truncate">
                              {img.tag}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="h-px bg-white/10 w-full mb-8" />

                <div className="font-sans text-sm text-[#FAF7F2]/90 leading-relaxed space-y-4 mb-8">
                  <h4 className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#C9A664]">
                    Laboratory Notes & Insights
                  </h4>
                  <p className="whitespace-pre-line text-xs md:text-sm bg-white/3 p-5 border border-white/5 rounded-xl text-[#E8E6E1]/80 leading-relaxed">
                    {selectedItem.details}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="font-mono text-[10px] text-[#E8E6E1]/40 uppercase tracking-widest">
                    Phoenix Creative Labs Sandbox
                  </span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A664] hover:bg-[#C9A664]/90 text-[#0F3D2E] rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#C9A664]/10 border-none"
                  >
                    Close Lab Note
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Lightbox for Gallery Images */}
        <AnimatePresence>
          {activeGalleryImg && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveGalleryImg(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0F3D2E]/95 border border-white/10 max-w-lg w-full rounded-3xl overflow-hidden relative z-10 shadow-2xl backdrop-blur-2xl text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveGalleryImg(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-[#FAF7F2] hover:text-[#C9A664] transition-colors focus:outline-none cursor-pointer z-10"
                  aria-label="Close Lightbox"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Main Visual */}
                <div className="relative aspect-[3/4] bg-black/40 border-b border-white/5">
                  <img
                    src={activeGalleryImg.image}
                    alt={activeGalleryImg.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] font-bold bg-[#C9A664] text-[#0F3D2E] px-2.5 py-1 uppercase tracking-widest rounded-lg">
                      {activeGalleryImg.tag}
                    </span>
                  </div>
                </div>

                {/* Lookbook Metadata */}
                <div className="p-6 space-y-3 bg-[#0F3D2E]">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-[#FAF7F2]">
                    {activeGalleryImg.title}
                  </h4>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#C9A664] font-extrabold block">
                      AI PROMPT RECIPE & STRUCTURE
                    </span>
                    <p className="font-sans text-xs text-[#E8E6E1]/80 leading-relaxed bg-white/5 p-4 border border-white/5 rounded-xl italic">
                      "{activeGalleryImg.prompt}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
