import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'

export default function CaseStudies() {
  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-6">
          Real results from <span className="text-green-600">real clients</span>
        </Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how we've transformed revenue ecosystems for companies like yours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-l-6 border-green-500 p-10 rounded-2xl">
          <div className="mb-6">
            <Heading level={3} className="mb-2">Shastic</Heading>
            <p className="text-gray-600">B2B SaaS Platform</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">126%</div>
              <p className="text-gray-700 font-medium">Pipeline Boost</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-700 font-medium">Increase in MQLs</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            In just 8 months, we unified Shastic's fragmented revenue operations, implemented AI-powered 
            lead scoring, and aligned their sales and marketing teams around shared KPIs.
          </p>
          
          <div className="text-sm text-gray-500 font-medium">
            Timeline: 8 months | Industry: B2B SaaS
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-l-6 border-green-500 p-10 rounded-2xl opacity-60">
          <div className="mb-6">
            <Heading level={3} className="mb-2">Coming Soon</Heading>
            <p className="text-gray-600">Enterprise Software</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">240%</div>
              <p className="text-gray-700 font-medium">Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">65%</div>
              <p className="text-gray-700 font-medium">Faster Sales Cycle</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            Complete revenue ecosystem transformation including CRM migration, predictive analytics 
            implementation, and cross-functional alignment workshops.
          </p>
          
          <div className="text-sm text-gray-500 font-medium">
            Timeline: 12 months | Industry: Enterprise Software
          </div>
        </Card>
      </div>
    </Section>
  )
}