export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'default',
  ...props 
}) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'gradient-bg'
  }
  
  const paddings = {
    default: 'py-20',
    large: 'py-24',
    small: 'py-12'
  }
  
  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}