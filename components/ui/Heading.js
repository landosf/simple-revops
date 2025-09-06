export default function Heading({ 
  children, 
  level = 1, 
  className = '',
  gradient = false,
  ...props 
}) {
  const Tag = `h${level}`
  
  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl md:text-3xl font-bold',
    4: 'text-xl md:text-2xl font-bold',
    5: 'text-lg md:text-xl font-semibold',
    6: 'text-base md:text-lg font-semibold'
  }
  
  const gradientClass = gradient ? 'bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent' : 'text-gray-900'
  
  return (
    <Tag className={`${sizes[level]} ${gradientClass} ${className}`} {...props}>
      {children}
    </Tag>
  )
}