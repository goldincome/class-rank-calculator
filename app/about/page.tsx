import { GraduationCap, Target, Users, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            About Us | Class Rank Calculator
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering students with clear academic insights
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-lg leading-relaxed">
            At Class Rank Calculator, our mission is simple: to help high school students and their families better understand academic standing through clear, accessible tools. We believe that every student deserves to know where they stand academically and how to present their achievements effectively in college applications.
          </p>
        </div>

        {/* Why Created Section */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Why We Created This Tool</h2>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            Class rank can be confusing. With different schools using different calculation methods, weighted versus unweighted GPAs, and varying reporting systems, students often struggle to understand what their rank really means. We created this free calculator to demystify the process and provide instant, clear results that help students make informed decisions about their academic journey.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Clarity</h3>
              <p className="text-muted-foreground">Transform complex rankings into easy-to-understand percentiles and quartiles that students and parents can immediately grasp.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">Provide a completely free tool that any student can use, regardless of their school's resources or ranking policies.</p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Instant Calculations</h3>
              <p className="text-muted-foreground">Enter your rank and class size to immediately receive your percentile and quartile standing. No sign-up required, no data collection.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Educational Resources</h3>
              <p className="text-muted-foreground">Comprehensive guides explaining how class rank works, why it matters for college admissions, and strategies to improve your standing.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Privacy-First Approach</h3>
              <p className="text-muted-foreground">Your calculations are processed entirely in your browser. We don't store or transmit your academic information to our servers.</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student-Focused</h3>
              <p className="text-muted-foreground">Every decision we make prioritizes student needs and experiences.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">We clearly explain our calculations and limitations so students can make informed decisions.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">Education tools should be free and available to all students, everywhere.</p>
            </div>
          </div>
        </div>

        {/* Who We Serve Section */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High School Students</h3>
              <p className="text-muted-foreground">Students preparing for college applications who need to understand their academic standing and how to present it effectively to admissions committees.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Parents and Guardians</h3>
              <p className="text-muted-foreground">Families helping their students navigate the college application process and understand academic metrics that impact admissions and scholarships.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educators and Counselors</h3>
              <p className="text-muted-foreground">School counselors and educators looking for tools to help explain class rank concepts to students and provide quick calculations for planning purposes.</p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-8 rounded-xl mb-12">
          <h3 className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Important Note</h3>
          <p className="text-muted-foreground leading-relaxed">
            While we strive to provide accurate calculations and helpful information, our calculator provides estimates based on standard formulas. Schools use various methods to calculate class rank, including different weighting systems, tiebreaker rules, and reporting formats. For official class rank information needed for college applications, scholarships, or other purposes, always consult your school counselor or registrar's office.
          </p>
        </div>

        {/* Looking Ahead */}
        <div className="bg-card/50 backdrop-blur p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Looking Ahead</h2>
          <p className="text-lg leading-relaxed text-center">
            We're committed to continuously improving our tools and resources based on student needs and feedback. Our goal is to expand our educational content, add more helpful features, and ensure that every student has the information they need to succeed in their academic journey.
          </p>
        </div>

        {/* Get in Touch */}
        <div className="bg-primary/5 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Have questions, suggestions, or feedback? We'd love to hear from you. Visit our contact page or email us directly at info@classrankcalculator.xyz
          </p>
        </div>
      </div>
    </main>
  )
}
