import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url?: string
  height?: string
}

export function CalendlyWidget({ 
  url = "https://calendly.com/landryyoder/simple-strategy-call",
  height = "700px"
}: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ minWidth: '320px', height }}
      data-testid="calendly-widget"
    />
  )
}
