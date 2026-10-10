import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`max-w-3xl flex flex-col ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-brand-electricBlue/10 border border-brand-electricBlue/20 shadow-subtle">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent animate-pulse" />
          <span className="text-[11px] uppercase tracking-widest font-bold text-brand-cyanAccent font-mono">
            {eyebrow}
          </span>
        </div>
      )}
      
      <h2 className="text-display-section font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400/90 bg-clip-text text-transparent">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
