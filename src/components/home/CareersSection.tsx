import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, Clock, Briefcase } from 'lucide-react';
import { OPEN_POSITIONS } from '../../data/careers';
import { SectionHeading } from '../common/SectionHeading';

export const CareersSection: React.FC = () => {
  const featuredJobs = OPEN_POSITIONS.filter(j => j.featured).slice(0, 3);

  return (
    <section className="py-24 bg-[#060B15] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>We Are Hiring</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Build with us at Teciaura
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-xl">
              We are expanding our core team. Work with modern tech stacks, high autonomy, and experienced engineers building scalable digital infrastructure.
            </p>
          </div>

          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-white text-sm font-medium transition-all self-start md:self-auto"
          >
            <span>View All Open Positions</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Featured Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredJobs.map((job) => (
            <Link
              key={job.id}
              to="/careers"
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white transition-colors">
                  {job.title}
                </h3>

                <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {job.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-400">{job.experience}</span>
                <span className="text-white font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
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
