'use client'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-12 transform origin-top-left"></div>
      </div>
      
      <div className="container-width relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
          {/* Alert Banner */}
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full inline-block mb-8 font-bold text-lg animate-pulse shadow-lg">
            🔥 FREE Revenue Audit (Worth $5K) - Limited Time Only
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-balance">
            Transform Revenue Chaos Into
            <br/>
            <span className="text-yellow-300">$2M+ Growth in 90 Days</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed text-balance">
            <strong className="text-yellow-200">Your revenue teams are burning $50K+ monthly</strong> on misaligned efforts. 
            We've helped 50+ B2B companies recover this waste and turn it into predictable, scalable growth.
          </p>
          
          {/* Stats Box */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-3xl mx-auto mb-12 card-hover">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">126%</div>
                <div className="text-white font-medium">Avg Pipeline Boost</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">90</div>
                <div className="text-white font-medium">Days to Results</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">$2.1M</div>
                <div className="text-white font-medium">Avg Revenue Added</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-xl px-12 py-5 shadow-2xl"
            >
              Get Your Revenue Audit (FREE) →
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="btn-secondary text-xl px-12 py-5"
            >
              See $2.6M Recovery Story →
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full mx-auto flex justify-center opacity-80">
              <div className="w-1 h-4 bg-white rounded-full mt-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}