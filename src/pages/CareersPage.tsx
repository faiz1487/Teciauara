import React, { useState, useMemo } from 'react';
import { 
  Briefcase, MapPin, Clock, DollarSign, ChevronRight, ChevronDown, 
  CheckCircle2, ArrowRight, Sparkles, Search, Globe, Zap, 
  GraduationCap, HeartPulse, Send, Users, Shield, Cpu
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { OPEN_POSITIONS, CAREER_STATS, PERKS_AND_BENEFITS, JobPosition } from '../data/careers';
import { JobApplicationModal } from '../components/careers/JobApplicationModal';

export const CareersPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(OPEN_POSITIONS[0]?.id || null);
  
  // Application Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobPosition | null>(null);

  const departments = ['All', 'Engineering', 'DevOps & Cloud', 'Design & UX', 'Marketing & Growth'];

  const filteredJobs = useMemo(() => {
    return OPEN_POSITIONS.filter(job => {
      const matchesDept = selectedDept === 'All' || job.department === selectedDept;
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  const handleOpenApplyModal = (job: JobPosition | null = null) => {
    setSelectedJobForModal(job);
    setIsModalOpen(true);
  };

  const getPerkIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-brand-cyanAccent" />;
      case 'Zap': return <Zap className="w-6 h-6 text-brand-electricBlue" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-brand-cyanAccent" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-brand-electricBlue" />;
      case 'Clock': return <Clock className="w-6 h-6 text-brand-cyanAccent" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-brand-electricBlue" />;
      default: return <Sparkles className="w-6 h-6 text-brand-cyanAccent" />;
    }
  };

  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Careers | Join Our Team"
        description="Explore open positions at Teciaura Technologies. Join our remote-first engineering, DevOps, design, and growth teams building next-generation digital foundations."
      />

      {/* Hero Section */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-electricBlue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Careers' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-slate-800 text-xs font-semibold text-brand-cyanAccent mb-4 shadow-card font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent animate-pulse" />
              <span>Careers at Teciaura</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build the Future of Digital & Cloud Infrastructure
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We are a distributed engineering and digital growth company partner to fast-scaling startups and enterprises. We value clean code, cloud automation, high autonomy, and shipping impactful software.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-electricBlue hover:bg-brand-electricBlue/90 text-white font-semibold text-sm transition-all shadow-glow-blue"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleOpenApplyModal(null)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1528] hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm transition-all"
              >
                <span>Open Application</span>
                <Send className="w-4 h-4 text-brand-cyanAccent" />
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CAREER_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0B1528]/80 border border-slate-800/90 shadow-card backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient-accent">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Work Philosophy */}
      <section className="py-20 bg-[#050B17] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Culture"
            title="How We Work & What We Value"
            description="We build software that powers real businesses. That requires ownership, clear communication, and high craft standards."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-7 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:border-brand-electricBlue/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 text-brand-cyanAccent">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High Autonomy & Low Bureaucracy</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                We hire skilled builders and trust them to make architectural and design decisions. No endless status meetings, micromanagement, or bureaucratic red tape.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:border-brand-electricBlue/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 text-brand-electricBlue">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Modern Engineering Standards</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                We treat code as craft. Strong TypeScript typing, automated CI/CD checks, comprehensive documentation, and modern cloud patterns are our default baseline.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:border-brand-electricBlue/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 text-brand-cyanAccent">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Impact & Recognition</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Your contributions directly move customer platforms forward. Good work is recognized with transparent merit-based promotions and quarterly bonuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-24 bg-[#070F1E] relative scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Join Teciaura"
            title="Current Open Roles"
            description="Explore our open positions across engineering, cloud infrastructure, design, and growth marketing."
            align="center"
          />

          {/* Search & Filter Toolbar */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-[#0B1528] border border-slate-800 rounded-2xl shadow-card">
            {/* Department Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1 scrollbar-none">
              {departments.map((dept) => {
                const count = dept === 'All' 
                  ? OPEN_POSITIONS.length 
                  : OPEN_POSITIONS.filter(j => j.department === dept).length;

                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      selectedDept === dept
                        ? 'bg-brand-electricBlue text-white shadow-glow-blue'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{dept}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      selectedDept === dept ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by role or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyanAccent transition-colors"
              />
            </div>
          </div>

          {/* Job Listings List */}
          <div className="mt-8 space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#0B1528] border border-slate-800">
                <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white">No roles match your search filter</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
                  Try clearing the search query or department filter, or submit an open application directly.
                </p>
                <button
                  onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;

                return (
                  <div
                    key={job.id}
                    className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                      isExpanded 
                        ? 'bg-[#0B1528] border-brand-electricBlue/50 shadow-elevated' 
                        : 'bg-[#0B1528]/70 border-slate-800/90 hover:border-slate-700 hover:bg-[#0B1528]'
                    }`}
                  >
                    {/* Collapsed Header / Click to toggle */}
                    <div 
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                      className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-5 cursor-pointer select-none"
                    >
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-electricBlue/15 text-brand-cyanAccent border border-brand-electricBlue/25 font-mono">
                            {job.department}
                          </span>
                          {job.featured && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                              Featured Role
                            </span>
                          )}
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {job.type}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-cyanAccent transition-colors">
                          {job.title}
                        </h2>

                        <p className="text-sm text-slate-400 leading-relaxed">
                          {job.shortDescription}
                        </p>

                        {/* Skills Pill Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Action & Salary Info */}
                      <div className="flex lg:flex-col items-center lg:items-end justify-between pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800/80 gap-3">
                        <div className="text-left lg:text-right">
                          <div className="text-xs text-slate-400 font-medium">Compensation</div>
                          <div className="text-sm sm:text-base font-bold text-white font-mono">{job.salary}</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenApplyModal(job);
                            }}
                            className="px-4 py-2 rounded-xl bg-brand-electricBlue hover:bg-brand-electricBlue/90 text-white text-xs sm:text-sm font-semibold transition-all shadow-glow-blue"
                          >
                            Apply Now
                          </button>
                          <button
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                            aria-label={isExpanded ? 'Collapse job details' : 'Expand job details'}
                          >
                            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Detail Panel */}
                    {isExpanded && (
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 border-t border-slate-800/80 space-y-6 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent font-mono mb-2">
                            About The Position
                          </h4>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono mb-3 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-brand-cyanAccent" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent mt-2 flex-shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono mb-3 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-brand-electricBlue" />
                              What We're Looking For
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-electricBlue mt-2 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Footer action bar */}
                        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                            <span className="font-semibold text-slate-300">Key Perks:</span>
                            {job.benefits.map((b, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px]">
                                • {b}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() => handleOpenApplyModal(job)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-electricBlue hover:bg-brand-electricBlue/90 text-white text-sm font-semibold transition-all shadow-glow-blue"
                          >
                            <span>Apply for {job.title}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Don't see your role? General Application Banner */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#0E1E38] to-[#0B1528] border border-brand-electricBlue/30 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electricBlue/20 text-brand-cyanAccent text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Spontaneous Opportunities</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Don't see the exact role you're looking for?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                We are always excited to connect with exceptional engineers, cloud practitioners, designers, and growth strategists. Tell us what you build!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => handleOpenApplyModal(null)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-electricBlue hover:bg-brand-electricBlue/90 text-white font-semibold text-sm transition-all shadow-glow-blue whitespace-nowrap"
              >
                Submit General Profile
              </button>
              <a
                href="mailto:careers@teciaura.com"
                className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-sm font-semibold transition-all whitespace-nowrap"
              >
                careers@teciaura.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perks and Benefits Grid */}
      <section className="py-24 bg-[#050B17] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Perks & Benefits"
            title="Engineered for Sustainable High Performance"
            description="We believe engineers and designers do their best work when they have freedom, top-tier compensation, and genuine respect for their personal life."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PERKS_AND_BENEFITS.map((perk, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:border-brand-cyanAccent/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5">
                  {getPerkIcon(perk.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard CTA */}
      <CTASection
        headline="Ready to Build Something Significant?"
        text="Join our team or reach out to discuss how your technical skills can power high-performance client architectures."
        buttonText="View Open Roles"
        buttonTo="#open-positions"
      />

      {/* Quick Application Modal */}
      <JobApplicationModal
        job={selectedJobForModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
