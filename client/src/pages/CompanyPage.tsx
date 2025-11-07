import { Link } from 'wouter'
import Navbar from '../../../components/blocks/Navbar'
import Footer from '../../../components/blocks/Footer'
import { Section } from '../../../components/ui/section'
import { Card } from '../../../components/ui/card'
import { Heading } from '../../../components/ui/heading'
import { Button } from '../../../components/ui/button'

export default function CompanyPage() {
  const team = [
    {
      name: "Alex Thompson",
      title: "Founder & CEO",
      bio: "15+ years building revenue operations at high-growth B2B companies. Former VP of Revenue Operations at three successful exits.",
      expertise: ["Revenue Strategy", "Process Design", "Team Building"]
    },
    {
      name: "Sarah Rodriguez",
      title: "Head of Client Success",
      bio: "Former Director of Sales Operations at Fortune 500 company. Expert in change management and team alignment.",
      expertise: ["Change Management", "Training", "Client Success"]
    },
    {
      name: "Michael Chen",
      title: "Senior Revenue Analyst",
      bio: "Data scientist turned revenue operations expert. Specializes in building analytics systems.",
      expertise: ["Data Analytics", "Reporting", "Performance"]
    }
  ]

  const values = [
    {
      title: "Results-Driven",
      description: "We measure success by the tangible impact we create for our clients' businesses.",
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    {
      title: "Partnership Mindset",
      description: "We work as an extension of your team, not as outside consultants.",
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Continuous Innovation",
      description: "We stay ahead of industry trends and continuously evolve our methodologies.",
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
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
                Simple was founded by revenue operations leaders who have been in your shoes. 
                We've built, scaled, and optimized revenue operations at companies from startup to enterprise.
              </p>
              <Link href="/book-strategy-call">
                <a>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0" data-testid="button-work-with-us">Work With Us</Button>
                </a>
              </Link>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-companies">50+</div>
                  <div className="text-sm text-gray-600">Companies Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-revenue">$47M</div>
                  <div className="text-sm text-gray-600">Revenue Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-growth">126%</div>
                  <div className="text-sm text-gray-600">Avg Pipeline Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-satisfaction">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-6">Our Mission</Heading>
              <p className="text-xl text-gray-600 leading-relaxed">
                To help B2B companies build predictable, scalable revenue operations that eliminate inefficiencies and accelerate growth.
              </p>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                We founded Simple because we saw too many companies struggling with the same revenue operations challenges. 
                Misaligned teams, fragmented processes, and disconnected systems were holding back growth everywhere.
              </p>
              <p>
                After successfully transforming revenue operations at multiple high-growth companies, we developed a systematic 
                approach that addresses root causes, not just symptoms.
              </p>
              <p>
                Today, we work with companies of all sizes to implement strategies that have driven hundreds of millions in 
                revenue growth. Our approach is practical, measurable, and designed for long-term success.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Our Values</Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center" data-testid={`card-value-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section background="gray">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Meet Our Team</Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Revenue operations experts with real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center" data-testid={`card-team-${index}`}>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.title}</div>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">Ready to Work Together?</Heading>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help transform your revenue operations.
            </p>
            <Link href="/book-strategy-call">
              <a>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0" data-testid="button-schedule-strategy">Schedule a Strategy Call</Button>
              </a>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
