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
  theme = 'light',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isLight = theme === 'light';

  return (
    <div className={`max-w-3xl flex flex-col ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
          <span className="text-xs uppercase tracking-widest font-bold text-brand-electricBlue">
            {eyebrow}
          </span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
        isLight ? 'text-brand-primaryNavy' : 'text-white'
      }`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-brand-bodyText' : 'text-slate-300'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
