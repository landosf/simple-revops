import { Section } from '@/../../components/ui/section'
import { Card } from '@/../../components/ui/card'
import { Heading } from '@/../../components/ui/heading'

export default function Results() {
  const stats = [
    { number: "126%", label: "Average Pipeline Growth", description: "Within 6 months" },
    { number: "90", label: "Days to First Results", description: "Quick wins" },
    { number: "$2.1M", label: "Average Revenue Impact", description: "First year" },
    { number: "95%", label: "Client Satisfaction", description: "Would recommend" }
  ]

  return (
    <Section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white" id="results">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4 text-white">The Numbers Behind Predictable Growth</Heading>
        <p className="text-xl text-purple-100 max-w-3xl mx-auto">Get your complimentary assessment above</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="p-8 text-center bg-gray-800 border-gray-700" 
            data-testid={`card-stat-${index}`}
          >
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" data-testid={`text-stat-number-${index}`}>
              {stat.number}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2" data-testid={`text-stat-label-${index}`}>
              {stat.label}
            </h3>
            <p className="text-gray-400 text-sm" data-testid={`text-stat-desc-${index}`}>
              {stat.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
