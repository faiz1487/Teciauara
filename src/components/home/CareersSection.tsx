import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, Clock, Briefcase } from 'lucide-react';
import { OPEN_POSITIONS } from '../../data/careers';
import { SectionHeading } from '../common/SectionHeading';

export const CareersSection: React.FC = () => {
  const featuredJobs = OPEN_POSITIONS.filter(j => j.featured).slice(0, 3);

  return (
    <section className="py-24 bg-[#050B17] relative border-t border-slate-800/80">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-electricBlue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electricBlue/15 border border-brand-electricBlue/25 text-xs font-semibold text-brand-cyanAccent font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent animate-pulse" />
              <span>Careers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build With Us at Teciaura
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-xl">
              We are expanding our core team. Work with modern tech stacks, high autonomy, and talented engineers building scalable digital infrastructure.
            </p>
          </div>

          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white text-sm font-semibold transition-all hover:border-brand-electricBlue/50 self-start md:self-auto"
          >
            <span>View All Open Positions</span>
            <ArrowRight className="w-4 h-4 text-brand-cyanAccent" />
          </Link>
        </div>

        {/* Featured Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Link
              key={job.id}
              to="/careers"
              className="p-6 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:border-brand-electricBlue/50 hover:shadow-glow-blue transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-electricBlue/15 text-brand-cyanAccent border border-brand-electricBlue/25 font-mono">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                  {job.title}
                </h3>

                <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {job.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">{job.experience}</span>
                <span className="text-brand-cyanAccent font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
