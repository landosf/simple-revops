import { Section } from '@/../../components/ui/section'
import { Card } from '@/../../components/ui/card'
import { Heading } from '@/../../components/ui/heading'

export default function Features() {
  const features = [
    {
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: "Revenue Analytics & Reporting",
      description: "Get visibility into your revenue performance with a clear data quality framework and a lazer focus on the metrics that matter."
    },
    {
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "Team Alignment & Process",
      description: "Align sales, marketing, and customer success around unified goals."
    },
    {
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: "Predictable Growth Systems",
      description: "Build repeatable processes that generate consistent revenue."
    }
  ]

  return (
    <Section className="bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">Why Revenue Operations Matter</Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Simple, we focus on fundamentals so you can scale with confidence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-8 hover-lift" data-testid={`card-feature-${index}`}>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`text-feature-title-${index}`}>
              {feature.title}
            </h3>
            <p className="text-gray-600" data-testid={`text-feature-desc-${index}`}>
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
