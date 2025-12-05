import { FileText, Check, X, AlertTriangle, Mail } from 'lucide-react'

export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Terms of Service & Disclaimer | Class Rank Calculator
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Terms of Service & Disclaimer
          </h2>
          
        </div>

        {/* Agreement to Terms */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Agreement to Terms</h2>
          <p className="text-lg leading-relaxed">
            By accessing and using Class Rank Calculator, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our service.
          </p>
        </div>

        {/* Use of Service */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">Use of Service</h2>

          <div className="bg-primary/5 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">Permitted Use</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-muted-foreground">Personal academic planning and assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-muted-foreground">College application preparation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-muted-foreground">Educational purposes</span>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            Class Rank Calculator provides a free online tool for calculating academic percentile and class standing. You agree to use this service only for lawful purposes and in accordance with these Terms.
          </p>
        </div>

        {/* Important Disclaimer */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-8 rounded-xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <h2 className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">Important Disclaimer</h2>
          </div>
          <p className="text-lg leading-relaxed text-yellow-800 dark:text-yellow-200 mb-4">
            PLEASE READ CAREFULLY: The Class Rank Calculator is provided as an educational tool for estimation purposes only.
          </p>

          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
              <p>Results are estimates and may not reflect your official school ranking</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
              <p>Different schools use different calculation methods for class rank</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
              <p>We do not guarantee accuracy or completeness of results</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
              <p>Always verify your official class rank with your school counselor</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
              <p>This tool should not replace professional academic advising</p>
            </div>
          </div>
        </div>

        {/* No Warranty */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">No Warranty</h2>
          <p className="text-lg leading-relaxed">
            The service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free. We make no warranties regarding the accuracy, reliability, or completeness of the calculator results.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Limitation of Liability</h2>
          <p className="text-lg leading-relaxed mb-4">
            To the fullest extent permitted by law, Class Rank Calculator shall not be liable for any:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Indirect, incidental, special, or consequential damages</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Loss of profits, data, or other intangible losses</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">Decisions made based on calculator results</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">College admission outcomes or scholarship decisions</p>
            </div>
          </div>
        </div>

        {/* Accuracy and Verification */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Accuracy and Verification</h2>
          <p className="text-lg leading-relaxed">
            While we strive to provide accurate calculations based on the formula provided, class rank calculation methods vary significantly between schools. Some schools use weighted GPA, others use unweighted GPA, and many have unique tiebreaker systems. For official class rank information and college application purposes, always consult with your school counselor or registrar's office.
          </p>
        </div>

        {/* Educational Content */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Educational Content</h2>
          <p className="text-lg leading-relaxed">
            The educational content, guides, and advice provided on our website are for general informational purposes only. This information should not be considered as professional academic counseling or admissions advice. Individual circumstances vary, and we recommend consulting with qualified educational professionals for personalized guidance.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Intellectual Property</h2>
          <p className="text-lg leading-relaxed">
            All content on this website, including text, graphics, logos, and software, is the property of Class Rank Calculator and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </div>

        {/* Third-Party Links and Advertising */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Third-Party Links and Advertising</h2>
          <p className="text-lg leading-relaxed">
            Our website may contain links to third-party websites and display third-party advertisements. We are not responsible for the content, privacy policies, or practices of these third parties. Your use of third-party websites is at your own risk.
          </p>
        </div>

        {/* User Conduct */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">User Conduct</h2>
          <p className="text-lg leading-relaxed mb-4">
            You agree not to:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Use the service for any illegal or unauthorized purpose</p>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Attempt to interfere with or disrupt the service</p>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Reproduce, duplicate, or copy any part of the service without permission</p>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Use automated systems to access the service excessively</p>
            </div>
          </div>
        </div>

        {/* Indemnification */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Indemnification</h2>
          <p className="text-lg leading-relaxed">
            You agree to indemnify and hold harmless Class Rank Calculator, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses arising from your use of the service or violation of these Terms.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Changes to Terms</h2>
          <p className="text-lg leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after changes constitutes acceptance of the modified Terms.
          </p>
        </div>

        {/* Termination */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Termination</h2>
          <p className="text-lg leading-relaxed">
            We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason, including breach of these Terms.
          </p>
        </div>

        {/* Governing Law */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Governing Law</h2>
          <p className="text-lg leading-relaxed">
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-primary/5 p-8 rounded-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Contact Information</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            If you have any questions about these Terms of Service, please contact us at info@classrankcalculator.xyz
          </p>
        </div>
      </div>
    </main>
  )
}
