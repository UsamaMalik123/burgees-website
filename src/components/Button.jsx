const variants = {
  primary:
    'bg-pink text-ink-900 hover:bg-pink-light hover:shadow-pink border border-pink',
  outline:
    'bg-transparent text-ink-50 border border-ink-50/30 hover:border-pink hover:text-pink',
  ghost: 'bg-transparent text-pink hover:text-pink-light underline-offset-4 hover:underline',
};

export default function Button({
  as: Component = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-[0.08em] uppercase font-body font-medium rounded-full cursor-pointer transition-all duration-300 ease-out ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
