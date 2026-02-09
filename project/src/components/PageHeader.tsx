interface PageHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function PageHeader({ subtitle, title, description }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900 pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-ocean-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>
      <div className="relative container-narrow px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sage-300 font-body text-sm tracking-[0.2em] uppercase mb-4 animate-fade-up opacity-0">
          {subtitle}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fade-up opacity-0 animate-delay-100">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 animate-delay-200">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
