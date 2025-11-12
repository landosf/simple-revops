import { Link } from 'wouter'
import Navbar from '../../../components/blocks/Navbar'
import Footer from '../../../components/blocks/Footer'
import { Section } from '../../../components/ui/section'
import { Card } from '../../../components/ui/card'
import { Heading } from '../../../components/ui/heading'
import { Button } from '../../../components/ui/button'
import revenueMetricsImage from '@assets/IMG_6180_1762808644556.png'

export default function CompanyPage() {
  const values = [
    {
      title: "Results-Driven",
      description: "We measure success by tangible impact, with the goal to exceed expectations for our clients' through goal alignment, efficient resource allocation, and data quality management.",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    {
      title: "Partnership Mindset",
      description: "We work as an extension of your team, not as outside consultants and believe in high transparency, trust, and accountability.",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Continuous Improvement",
      description: "We continuously evolve our processes and capabilities, leveraging AI and data-driven insights to automate workflows and improve decision-making.",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section className="pt-20 lg:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20" data-testid="badge-who-we-are">
                  Who We Are
                </span>
              </div>
              <Heading level={1} className="mb-6">
                We're Revenue Operations <span className="text-primary">Experts</span>
              </Heading>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Simple was founded by business leaders who have been in your shoes. We build, optimize, and scale revenue operations for startups and high-growth companies.
              </p>
              <Link href="/book-strategy-call">
                <a>
                  <Button size="lg" className="bg-blue-900 hover:bg-blue-950 text-white border-0" data-testid="button-work-with-us">Work With Us</Button>
                </a>
              </Link>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src={revenueMetricsImage} 
                alt="Revenue Operations Metrics: Sales cycle time, Win rates, Pipeline Velocity, Cost of customer acquisition, ARR growth, Renewals and upsells, Customer churn, Customer lifetime value, and Forecast accuracy" 
                className="w-full max-w-lg rounded-2xl"
                data-testid="img-revenue-metrics"
              />
            </div>
          </div>
        </Section>

        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-6">Our Mission</Heading>
              <p className="text-xl text-gray-600 leading-relaxed">
                To help B2B companies create predictable, scalable revenue operations that eliminate inefficiencies and accelerate growth.
              </p>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Simple was started because we saw too many companies struggling with the same revenue operations challenges -- misaligned teams, fragmented processes, disconnected data & systems, and revenue leakage.
              </p>
              <p>
                After successfully transforming revenue operations at multiple B2B growth companies, we developed a systematic 
                approach that addresses root causes, not just symptoms.
              </p>
              <p>
                Today, we work with companies of all sizes to implement strategies that enhance revenue growth. 
                Our approach is practical, measurable, and designed for long-term success.
              </p>
            </div>
          </div>
        </Section>

        <Section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4 text-white">Our Values</Heading>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              These principles guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20" data-testid={`card-value-${index}`}>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-purple-100 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">Ready to Grow Revenue?</Heading>
            <p className="text-xl text-gray-600 mb-8">
              Learn what you get with a strategy call.
            </p>
            <Link href="/book-strategy-call#what-youll-get">
              <a>
                <Button size="lg" className="bg-blue-900 hover:bg-blue-950 text-white border-0" data-testid="button-schedule-strategy">How it Works</Button>
              </a>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
