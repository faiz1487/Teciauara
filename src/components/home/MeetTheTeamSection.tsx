import React from 'react';
import { 
  Users, MessageSquare, ShieldCheck, HeartHandshake, 
  MapPin, ArrowRight, ExternalLink, Sparkles, CheckCircle2 
} from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/team';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const MeetTheTeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#060B15] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Warm & Friendly Tone */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>Who You Will Work With</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The engineers behind your code.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No anonymous ticket queues or non-technical account managers. When you partner with Teciaura, you collaborate directly with senior engineers based in Noida, India who take personal pride in every line of code.
          </p>
        </div>

        {/* 3 Human Commitments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Direct Engineer Access</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              You talk straight to the people writing your code. No non-technical account managers playing telephone with your requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Transparent WhatsApp &amp; Slack</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Weekly staging video walkthroughs and fast answers in your shared channel. You never have to wonder what we are currently working on.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Code &amp; IP Ownership</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every repository, deployment script, and cloud credential belongs entirely to you from Day 1. Clean, documented code with zero vendor lock-in.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id}
              className={`group rounded-2xl bg-white/[0.02] border ${
                member.id === 'faiz-founder' 
                  ? 'border-amber-500/30 hover:border-amber-400/60 bg-gradient-to-b from-amber-500/[0.03] to-transparent' 
                  : 'border-white/[0.08] hover:border-white/[0.16]'
              } hover:bg-white/[0.04] p-6 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Photo & Location Pin */}
                <div className="relative mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border ${
                      member.id === 'faiz-founder'
                        ? 'border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                        : 'border-white/[0.1] shadow-md'
                    } transition-all`}
                  />
                  <div className="absolute -bottom-2.5 left-2 px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/[0.1] text-[10px] text-slate-300 flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  {member.id === 'faiz-founder' && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-[10px] font-bold text-amber-300 uppercase tracking-wider font-mono">
                      Founder
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Personal quote */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-slate-400 italic mb-4">
                  &ldquo;{member.quote}&rdquo;
                </div>
              </div>

              {/* Specialties Tags */}
              <div className="pt-3 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((spec) => (
                    <span 
                      key={spec} 
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Want to talk through your idea with Faiz or our lead architect?</span>
            </h4>
            <p className="text-sm text-slate-300">
              Free 20-minute architecture discussion. No sales pressure, just friendly advice on scope, timelines, and costs.
            </p>
          </div>

          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="flex-shrink-0 bg-white hover:bg-slate-100 text-slate-950 font-semibold border-white shadow-sm"
          >
            Schedule a 20-Min Call
          </Button>
        </div>

      </div>
    </section>
  );
};
