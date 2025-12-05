import { Shield, Eye, Database, Cookie, Users, Lock } from 'lucide-react'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Privacy Policy | Class Rank Calculator
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Privacy Policy
          </h2>
        </div>

        {/* Introduction */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <p className="text-lg leading-relaxed">
            At Class Rank Calculator, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">Information We Collect</h2>

          {/* Calculator Input Data */}
          <div className="bg-primary/5 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Calculator Input Data</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              When you use our class rank calculator, the numerical values you enter (your position and total class size) are processed locally in your browser. We do not store or transmit this data to our servers.
            </p>
          </div>

          {/* Automatically Collected Information */}
          <div className="bg-primary/5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We may collect certain information automatically, including your IP address, browser type, device information, and pages visited. This information is collected through standard web technologies such as cookies and analytics services.
            </p>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">How We Use Your Information</h2>
          <p className="text-lg leading-relaxed mb-6">
            We use the information we collect to:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Provide and improve our calculator service</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Analyze website usage and optimize user experience</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Display relevant advertisements through Google AdSense</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Understand visitor trends and behavior</p>
            </div>
          </div>
        </div>

        {/* Cookies and Tracking Technologies */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Cookies and Tracking Technologies</h2>
          </div>
          <p className="text-lg leading-relaxed">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience. These technologies help us understand how visitors use our site and enable advertising partners to serve relevant ads. You can control cookie settings through your browser preferences.
          </p>
        </div>

        {/* Third-Party Services */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">Third-Party Services</h2>

          {/* Google Analytics */}
          <div className="bg-primary/5 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use Google Analytics to analyze website traffic and usage patterns. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.
            </p>
          </div>

          {/* Google AdSense */}
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use Google AdSense to display advertisements on our website. Google and its partners use cookies to serve ads based on your prior visits to our website and other websites.
            </p>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Data Security</h2>
          </div>
          <p className="text-lg leading-relaxed">
            We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </div>

        {/* Your Privacy Rights */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">Your Privacy Rights</h2>
          <p className="text-lg leading-relaxed mb-6">
            You have the right to:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Opt out of personalized advertising</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Disable cookies in your browser settings</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Request information about the data we collect</p>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Children's Privacy</h2>
          </div>
          <p className="text-lg leading-relaxed">
            Our service is intended for general audiences including high school students. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected such information, please contact us immediately.
          </p>
        </div>

        {/* Changes to This Privacy Policy */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Changes to This Privacy Policy</h2>
          <p className="text-lg leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically.
          </p>
        </div>

        {/* Contact Us */}
        <div className="bg-primary/5 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground mb-6">
            If you have questions or concerns about this Privacy Policy, please contact us at info@classrankcalculator.xyz
          </p>
        </div>
      </div>
    </main>
  )
}
