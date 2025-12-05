import { Mail, MessageSquare, Wrench, Users, Clock, Shield, Send } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Contact Us | Class Rank Calculator
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help with your questions and feedback
          </p>
        </div>

        {/* Get in Touch Section */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-lg leading-relaxed text-center mb-8">
            Thank you for your interest in Class Rank Calculator. Whether you have questions about how to use our tool, suggestions for improvements, or just want to share your feedback, we'd love to hear from you.
          </p>

          {/* Email Section */}
          <div className="bg-primary/5 p-8 rounded-xl text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Email Us</h3>
            <p className="text-lg text-muted-foreground mb-4">
              For all inquiries, questions, and feedback, please email us at:
            </p>
            <a
              href="mailto:info@classrankcalculator.xyz"
              className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              info@classrankcalculator.xyz
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* What Can We Help With */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">What Can We Help You With?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* General Questions */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">General Questions</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• How to use the calculator</li>
                <li>• Understanding your results</li>
                <li>• Class rank information</li>
                <li>• College application advice</li>
              </ul>
            </div>

            {/* Feedback & Suggestions */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Feedback & Suggestions</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Feature requests</li>
                <li>• Website improvements</li>
                <li>• Bug reports</li>
                <li>• Content suggestions</li>
              </ul>
            </div>

            {/* Technical Support */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Technical Support</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Calculator not working</li>
                <li>• Display issues</li>
                <li>• Browser compatibility</li>
                <li>• Mobile access problems</li>
              </ul>
            </div>

            {/* Partnerships & Press */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Partnerships & Press</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Media inquiries</li>
                <li>• School partnerships</li>
                <li>• Educational collaborations</li>
                <li>• Business inquiries</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Response Time</h2>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">We Typically Respond Within</h3>
            <p className="text-muted-foreground mb-4">
              We strive to respond to all inquiries within 1-2 business days. During peak college application season (October-December), response times may be slightly longer. We appreciate your patience and will get back to you as soon as possible.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">Typical Response: 24-48 hours</p>
            </div>
          </div>
        </div>

        {/* Before You Email */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Before You Email</h2>
          <p className="text-lg leading-relaxed text-center mb-8">
            To help us assist you more efficiently, here are some tips:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Check Our FAQ Section</h3>
              <p className="text-sm text-muted-foreground">Many common questions are answered in our comprehensive FAQ section on the homepage.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Be Specific</h3>
              <p className="text-sm text-muted-foreground">Include details about your question or issue, including any error messages or specific pages you're referring to.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Include Your Browser & Device</h3>
              <p className="text-sm text-muted-foreground">For technical issues, please mention which browser (Chrome, Safari, etc.) and device (desktop, mobile, tablet) you're using.</p>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">We Value Your Privacy</h2>
          </div>
          <p className="text-lg leading-relaxed">
            When you contact us, we only use your email address to respond to your inquiry. We do not share your contact information with third parties or use it for marketing purposes. For more information about how we handle data, please see our Privacy Policy.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reach Out?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're looking forward to hearing from you
          </p>
          <a
            href="mailto:info@classrankcalculator.xyz"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Email Us Now
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  )
}
