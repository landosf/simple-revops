export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    text: 'text-blue-600 hover:text-blue-800'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}