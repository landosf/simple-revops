import Navbar from '../../../components/blocks/Navbar'
import Footer from '../../../components/blocks/Footer'
import { Section } from '../../../components/ui/section'
import { Heading } from '../../../components/ui/heading'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section className="pt-20 lg:pt-24">
          <div className="max-w-4xl mx-auto">
            <Heading level={1} className="mb-8">Privacy Policy</Heading>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                Simple ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Company information and job title</li>
                <li>Information you provide when scheduling consultations or strategy calls</li>
                <li>Communications you send to us</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Calendly</h3>
              <p className="text-gray-600 mb-4">
                We use Calendly, a third-party scheduling service, to manage meeting bookings and strategy call appointments. When you schedule a call through our website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Your name, email address, and other information you provide will be shared with Calendly</li>
                <li>Calendly may collect additional information as described in their privacy policy</li>
                <li>Calendly uses cookies and similar tracking technologies</li>
                <li>You can review Calendly's privacy policy at: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://calendly.com/privacy</a></li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Schedule and manage consultation calls</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant information about revenue operations</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have questions about this Privacy Policy or our privacy practices, please contact us through our website or the contact information provided on our site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
