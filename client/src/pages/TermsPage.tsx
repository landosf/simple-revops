import Navbar from '../../../components/blocks/Navbar'
import Footer from '../../../components/blocks/Footer'
import { Section } from '../../../components/ui/section'
import { Heading } from '../../../components/ui/heading'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section className="pt-20 lg:pt-24">
          <div className="max-w-4xl mx-auto">
            <Heading level={1} className="mb-8">Terms of Use</Heading>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using Simple's website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services Description</h2>
              <p className="text-gray-600 mb-6">
                Simple provides revenue operations consulting, strategy, and implementation services. We help businesses optimize their revenue operations through process design, technology optimization, and team alignment.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Scheduling and Appointments</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Calendly Integration</h3>
              <p className="text-gray-600 mb-4">
                We use Calendly, a third-party service, to facilitate appointment scheduling. By using our scheduling features:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>You agree to Calendly's Terms of Service and Privacy Policy</li>
                <li>You understand that Calendly is a separate service provider</li>
                <li>You are responsible for maintaining accurate contact information</li>
                <li>You agree to attend scheduled appointments or provide reasonable notice of cancellation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategy Calls</h2>
              <p className="text-gray-600 mb-4">
                Our complimentary strategy calls are subject to the following terms:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Calls are provided for consultative purposes only</li>
                <li>No client relationship is established through a strategy call alone</li>
                <li>Recommendations provided are general in nature and not formal consulting deliverables</li>
                <li>We reserve the right to decline or reschedule appointments</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content on this website, including text, graphics, logos, and methodologies, is the property of Simple and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Conduct</h2>
              <p className="text-gray-600 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Use our services for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Impersonate any person or entity</li>
                <li>Provide false or misleading information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the fullest extent permitted by law, Simple shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party services, including Calendly. We are not responsible for the content, privacy practices, or terms of service of third-party providers. Your use of third-party services is at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Use shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have questions about these Terms of Use, please contact us through our website or the contact information provided on our site.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
