import React from 'react';
import { Activity, Zap, Lock, Clock } from 'lucide-react';

export const EngineeringMetricsStrip: React.FC = () => {
  const metrics = [
    {
      value: '99.99%',
      label: 'Target System Availability',
      sub: 'Multi-AZ Cloud Redundancy',
      icon: Activity,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bgColor: 'bg-emerald-950/30',
    },
    {
      value: '<150ms',
      label: 'P99 Edge Latency Target',
      sub: 'Optimized Asset & API Delivery',
      icon: Zap,
      color: 'text-brand-cyanAccent',
      borderColor: 'border-brand-cyanAccent/30',
      bgColor: 'bg-cyan-950/30',
    },
    {
      value: '100%',
      label: 'Client IP & Code Ownership',
      sub: 'Zero Proprietary Framework Lock-In',
      icon: Lock,
      color: 'text-brand-electricBlue',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-950/30',
    },
    {
      value: '<24h',
      label: 'Architecture Review SLA',
      sub: 'Direct Senior Engineer Triage',
      icon: Clock,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-purple-950/30',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div
            key={m.label}
            className={`p-5 rounded-2xl bg-[#081224] border ${m.borderColor} shadow-card relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${m.color}`}>
                {m.value}
              </span>
              <div className={`w-8 h-8 rounded-xl ${m.bgColor} border ${m.borderColor} flex items-center justify-center ${m.color} group-hover:scale-105 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <h4 className="text-sm font-bold text-white mb-1 leading-snug">
              {m.label}
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              {m.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
};
