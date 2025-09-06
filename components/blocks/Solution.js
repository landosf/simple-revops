import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'

export default function Solution() {
  const pillars = [
    {
      title: 'Revenue Tech Infrastructure',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: [
        'CRM optimization and data quality audits',
        'Revenue automation workflows',
        'AI-powered lead scoring and routing',
        'Integration architecture planning'
      ]
    },
    {
      title: 'Revenue Analytics & BI',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        'Real-time revenue dashboards',
        'Predictive forecasting models',
        'Attribution and ROI tracking',
        'Cross-functional KPI alignment'
      ]
    },
    {
      title: 'Revenue Strategy & GTM',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'ICP refinement and priority scoring',
        'Funnel optimization and efficiency',
        'Cross-functional alignment workshops',
        'Growth planning and execution'
      ]
    }
  ]

  return (
    <Section>
      <div className="text-center mb-16">
        <Heading level={2} className="mb-6">
          Three pillars to <span className="text-blue-600">unify your revenue</span>
        </Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our proven framework aligns every revenue touchpoint, turning silos into a synchronized growth engine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Card key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 border-t-4 border-blue-500 p-10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-xl mb-6 flex items-center justify-center">
              {pillar.icon}
            </div>
            <Heading level={3} className="mb-4">{pillar.title}</Heading>
            <ul className="text-gray-600 space-y-3">
              {pillar.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}