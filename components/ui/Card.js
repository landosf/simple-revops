export default function Card({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) {
  const variants = {
    default: 'bg-white border border-gray-200 rounded-xl p-6',
    service: 'service-card p-8',
    feature: 'feature-card p-8',
    stat: 'stat-card p-6 text-center'
  }
  
  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}