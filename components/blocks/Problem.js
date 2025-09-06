import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Heading from '@/components/ui/Heading'

export default function Problem() {
  const stats = [
    { value: '42%', label: 'of B2B businesses cite low-quality leads as a significant challenge', color: 'text-red-600' },
    { value: '91%', label: 'of sales teams missed quota last year', color: 'text-red-600' },
    { value: '15%', label: 'higher win rates with formal sales enablement', color: 'text-green-600' },
    { value: '79%', label: 'accuracy with AI-powered forecasting vs 51% traditional', color: 'text-blue-600' }
  ]

  const silos = [
    { title: 'Marketing vs. Sales', description: 'Unqualified leads waste sales time and budget, creating friction and missed targets.' },
    { title: 'Sales vs. Customer Success', description: 'Misaligned expectations lead to poor handoffs, dissatisfied customers, and churn.' },
    { title: 'Customer Success vs. Finance', description: 'Cost-cutting limits retention investments, reducing LTV and growth potential.' },
    { title: 'C-Suite vs. Teams', description: 'Disjointed KPIs prevent teams from working toward unified revenue goals.' }
  ]

  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-6">
          Revenue teams are misaligned, and it's <span className="text-red-600">costing millions</span>
        </Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The data doesn't lie. Disconnected revenue teams are bleeding money across every stage of the customer journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <Card key={index} variant="stat">
            <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
            <p className="text-gray-700 font-medium">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="mb-16">
        <Heading level={3} className="text-center mb-12">The Cost of Silos</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {silos.map((silo, index) => (
            <div key={index} className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 mb-4">{silo.title}</h4>
              <p className="text-amber-800">{silo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}