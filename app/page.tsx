import RankCalculator from '@/components/calculator'
import { GraduationCap, Trophy, Target, Brain, Star, HelpCircle, Calculator } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-12 mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Class Rank Calculator
          </h1>
        </div>

        {/* Introduction Card */}
        <div className="bg-card/50 backdrop-blur p-6 rounded-xl shadow-lg mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Understanding your class rank is crucial for academic planning and college applications. Our Class Rank Calculator transforms your numerical rank into meaningful percentiles and quartiles, giving you clear insights into your academic standing. Whether you're preparing for college applications or tracking your academic progress, this tool provides instant, accurate results.
            </p>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our free Class Rank Calculator was created to help you easily figure out your academic standing.
          </p>
        </div>

        {/* Calculator */}
        <div className="flex justify-center mb-16">
          <RankCalculator />
        </div>

        {/* How to Use & Understanding Results */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">How to Use Our Class Rank Calculator</h2>
            </div>
            <ol className="space-y-2">
              <li>Enter your position in class</li>
              <li>Input total number of students</li>
              <li>Click "Calculate Rank"</li>
              <li>Get instant percentile & quartile results</li>
            </ol>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">Understanding Results</h2>
            </div>
            <ul className="space-y-2">
              <li><strong>Percentile:</strong> Shows your standing relative to peers</li>
              <li><strong>Quartile:</strong> Places you in one of four ranking groups</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-card p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Benefits of Class Rank Calculator</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">College Application Support</h3>
                <p className="text-muted-foreground">Accurately present your academic standing in college applications with precise percentile rankings.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Academic Goal Setting</h3>
                <p className="text-muted-foreground">Set realistic academic goals by understanding your current position in class.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">Monitor your academic progress over time by comparing your percentile changes.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Scholarship Opportunities</h3>
                <p className="text-muted-foreground">Identify scholarship opportunities that match your academic standing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for Success */}
        <div className="bg-card p-6 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Tips for Success</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>Study consistently</li>
              <li>Participate in class</li>
              <li>Take detailed notes</li>
              <li>Form study groups</li>
            </ul>
            <ul className="space-y-2">
              <li>Ask questions when needed</li>
              <li>Review material regularly</li>
              <li>Stay organized</li>
              <li>Seek help early</li>
            </ul>
          </div>
        </div>

        {/* Comprehensive Guide Section */}
        <div className="space-y-12 mb-12">
          {/* Main Guide Title */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              How to Use a Class Rank Calculator to Ace College Admissions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You hear "class rank" and you likely feel a mix of panic and confusion. It's one of those big, mysterious numbers high school counselors talk about. When you're a high school student or a parent prepping for college admissions, figuring out your academic standing is essential. This guide is here to simplify the whole process.
            </p>
          </div>

          {/* Decoding Class Rank */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Decoding Class Rank: What That Number Really Means</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Before you even touch a class rank calculator, you need to understand the number itself. Your class rank is simply your academic position compared to every other student in your graduating class. It's a comparative measure, telling colleges how well you did relative to your peers.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-semibold mb-4">The Core Components That Determine Your Rank</h3>
              <p className="text-muted-foreground mb-4">Your rank is generally based on two main things: your Grade Point Average (GPA) and the rigor of your coursework.</p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-card p-5 rounded-lg border-2 border-primary/20">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                    Weighted vs. Unweighted GPA
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-primary">Unweighted GPA (Standard 4.0 Scale)</p>
                      <p className="text-muted-foreground">An A is always 4.0, no matter how hard the class</p>
                    </div>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-blue-600">Weighted GPA (Bonus Points)</p>
                      <p className="text-muted-foreground">A in AP/IB/Honors = 5.0 or 5.3</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-5 rounded-lg border-2 border-blue-600/20">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">2</div>
                    The Role of Course Rigor
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Example comparison:</p>
                    <div className="bg-primary/5 p-3 rounded">
                      <p className="font-semibold">Student A: 3.9 GPA (All regular classes)</p>
                      <p className="text-xs text-muted-foreground">Weighted GPA: 3.9</p>
                    </div>
                    <div className="bg-blue-600/5 p-3 rounded">
                      <p className="font-semibold">Student B: 3.9 GPA (4 AP courses)</p>
                      <p className="text-xs text-muted-foreground">Weighted GPA: 4.3</p>
                    </div>
                    <p className="text-primary font-semibold pt-2">→ Student B ranks higher!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How the Calculator Works */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">How the Class Rank Calculator Works</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A class rank calculator takes your basic academic data and translates it into a comparative position. While your school's official rank requires everyone's GPA, these online tools can give you a very close estimate, often in the form of a percentile.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                The Basic Formula: Rank and Percentile
              </h3>
              <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                <p className="text-sm text-muted-foreground mb-4">The formula for your percentile rank is:</p>
                <div className="bg-primary/5 p-4 rounded-lg text-center mb-4">
                  <code className="text-lg font-mono">Percentile Rank = (1 - (Your Rank / Total Class Size)) × 100</code>
                </div>
                <div className="bg-blue-600/5 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Example:</p>
                  <p className="text-sm text-muted-foreground mb-3">Ranked 50th in a class of 500 students</p>
                  <div className="space-y-2 text-sm font-mono">
                    <p>50 ÷ 500 = 0.10</p>
                    <p>1 - 0.10 = 0.90</p>
                    <p>0.90 × 100 = <span className="text-primary font-bold text-lg">90th Percentile</span></p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 pt-3 border-t">You performed better than 90% of your class!</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Beyond the Numerical Rank: Deciles and Quartiles</h3>
              <p className="text-muted-foreground mb-6">Many high schools report your standing in broader categories to promote a healthier environment.</p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold mb-2 text-primary">Quartiles</h4>
                  <p className="text-sm text-muted-foreground mb-2">Divide class into 4 equal groups (25% each)</p>
                  <div className="space-y-1 text-xs">
                    <p><span className="font-semibold">1st Quartile:</span> Top 25%</p>
                    <p><span className="font-semibold">2nd Quartile:</span> 26-50%</p>
                    <p><span className="font-semibold">3rd Quartile:</span> 51-75%</p>
                    <p><span className="font-semibold">4th Quartile:</span> 76-100%</p>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold mb-2 text-blue-600">Deciles</h4>
                  <p className="text-sm text-muted-foreground mb-2">Divide class into 10 equal groups (10% each)</p>
                  <div className="space-y-1 text-xs">
                    <p><span className="font-semibold">1st Decile:</span> Top 10%</p>
                    <p><span className="font-semibold">2nd Decile:</span> 11-20%</p>
                    <p className="text-muted-foreground">... continues to 10th</p>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold mb-2 text-green-600">Quintiles</h4>
                  <p className="text-sm text-muted-foreground mb-2">Divide class into 5 equal groups (20% each)</p>
                  <div className="space-y-1 text-xs">
                    <p><span className="font-semibold">1st Quintile:</span> Top 20%</p>
                    <p><span className="font-semibold">2nd Quintile:</span> 21-40%</p>
                    <p className="text-muted-foreground">... continues to 5th</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Class Rank Matters */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Why Your Class Rank Matters for College Admissions</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              While some top-tier private colleges may de-emphasize class rank, the overall importance of your standing remains high, especially for public universities and scholarship applications.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">The Top 10% Rule</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Many state universities (Texas, Florida, etc.) offer automatic admission to students in the top 10% of their class.
                </p>
                <div className="bg-card p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">Top 10%</p>
                  <p className="text-xs text-muted-foreground">= Automatic Entry</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">College Review Context</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Selective schools use rank to understand your performance within your specific high school environment.
                </p>
                <div className="bg-card p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">Example:</p>
                  <p className="text-sm font-semibold">Same 3.9 GPA</p>
                  <p className="text-xs text-primary">Rank 50/300 → Stronger</p>
                  <p className="text-xs text-muted-foreground">Rank 150/300 → Weaker</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scholarship Connection</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Many merit scholarships require applicants to be in the top 5% or top 10% of their graduating class.
                </p>
                <div className="bg-card p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600">Top 5%</p>
                  <p className="text-xs text-muted-foreground">= Scholarship Eligible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Factors That Shift Rank */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Factors That Shift Your Class Rank</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Understanding the calculation is step one. Knowing how to influence it is step two. Your rank isn't static—it changes with every semester's report card.
            </p>

            <div className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">The Impact of Weighted Classes</h3>
                <p className="text-muted-foreground mb-4">Weighted courses are your fastest path to improving rank.</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border-2 border-red-400/30">
                    <p className="font-semibold text-sm mb-2">❌ Regular Class</p>
                    <p className="text-xs text-muted-foreground mb-2">B grade = 3.0 GPA</p>
                    <div className="bg-red-400/10 p-2 rounded text-center">
                      <p className="text-lg font-bold">3.0</p>
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-lg border-2 border-green-600/30">
                    <p className="font-semibold text-sm mb-2">✓ AP Class (+1.0 weight)</p>
                    <p className="text-xs text-muted-foreground mb-2">B grade = 4.0 weighted GPA</p>
                    <div className="bg-green-600/10 p-2 rounded text-center">
                      <p className="text-lg font-bold text-green-600">4.0</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-600/10 rounded-lg">
                  <p className="text-sm font-semibold text-blue-600">💡 Pro Tip: A decent grade in a hard class often beats a perfect grade in an easy one for rank purposes!</p>
                </div>
              </div>

              <div className="bg-blue-600/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">The Timing of Your Ranking</h3>
                <p className="text-muted-foreground mb-4">When your rank is calculated matters significantly.</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 font-bold text-primary">1</div>
                    <div className="flex-1">
                      <p className="font-semibold">Junior Year Rank (Most Important)</p>
                      <p className="text-sm text-muted-foreground">This rank goes out with early applications in fall of senior year.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 font-bold text-blue-600">2</div>
                    <div className="flex-1">
                      <p className="font-semibold">Mid-Year Senior Rank</p>
                      <p className="text-sm text-muted-foreground">Your last chance to show upward trend after first semester of senior year.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 font-bold text-green-600">3</div>
                    <div className="flex-1">
                      <p className="font-semibold">Final Rank</p>
                      <p className="text-sm text-muted-foreground">Determines Valedictorian/Salutatorian but most admissions decisions are already made.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Class Rank Controversy */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">The Class Rank Controversy: Why Some Schools Don't Rank</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Over half of high schools across the country no longer report an exact numerical rank. There's a good reason for this change, and it impacts your application process.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-2 border-red-200 dark:border-red-900">
                <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">The Problem: Rank Deflation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  In highly competitive schools, excellent students with near-perfect GPAs could fall outside the top 10% simply due to intense competition.
                </p>
                <div className="bg-card p-4 rounded-lg">
                  <p className="text-xs font-semibold mb-2">Example Scenario:</p>
                  <p className="text-sm">Student with 3.8 GPA, 5 AP courses</p>
                  <p className="text-sm text-muted-foreground">Competitive School: Ranked 60/400 (15%)</p>
                  <p className="text-sm text-primary">→ Misses automatic admission</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-900">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">The Solution: Contextual Reporting</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schools now provide broader context without exact numbers.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>GPA Distribution Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>SAT/ACT Score Ranges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Detailed School Profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Course Rigor Information</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-6 bg-blue-600/10 rounded-lg">
              <p className="font-semibold mb-2">What This Means For You:</p>
              <p className="text-sm text-muted-foreground">
                If your school doesn't rank, your application isn't disadvantaged. Colleges understand this trend and use the contextual information provided instead. However, a class rank calculator is still valuable for your personal assessment of competitiveness.
              </p>
            </div>
          </div>

          {/* Calculating Different Types */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Calculating Different Types of Class Rank</h2>

            <div className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  Converting Rank to Percentile
                </h3>
                <p className="text-muted-foreground mb-4">The percentile rank is the most universal and easy-to-understand metric.</p>

                <div className="bg-card p-5 rounded-lg border-2 border-primary/20">
                  <p className="font-semibold mb-3">Step-by-Step Example:</p>
                  <div className="space-y-3">
                    <div className="bg-primary/5 p-3 rounded">
                      <p className="text-sm font-semibold">Given:</p>
                      <p className="text-sm text-muted-foreground">Class has 400 students, you are ranked 20th</p>
                    </div>
                    <div className="bg-blue-600/5 p-3 rounded space-y-2 font-mono text-sm">
                      <p><span className="text-muted-foreground">Step 1:</span> 20 ÷ 400 = 0.05</p>
                      <p><span className="text-muted-foreground">Step 2:</span> 1 - 0.05 = 0.95</p>
                      <p><span className="text-muted-foreground">Step 3:</span> 0.95 × 100 = <span className="text-primary font-bold text-lg">95</span></p>
                    </div>
                    <div className="bg-green-600/10 p-3 rounded">
                      <p className="text-sm font-semibold text-green-600">Result: 95th Percentile</p>
                      <p className="text-xs text-muted-foreground">You performed better than 95% of your class!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Understanding Decile Ranking</h3>
                <p className="text-muted-foreground mb-4">Deciles are a common way schools report rank without being overly specific.</p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-card p-3 rounded-lg text-center border-2 border-primary">
                    <p className="text-xs text-muted-foreground mb-1">1st Decile</p>
                    <p className="font-bold text-primary">Top 10%</p>
                    <p className="text-xs text-muted-foreground mt-1">Ranks 1-40</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground mb-1">2nd Decile</p>
                    <p className="font-bold">11-20%</p>
                    <p className="text-xs text-muted-foreground mt-1">Ranks 41-80</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground mb-1">3rd Decile</p>
                    <p className="font-bold">21-30%</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground mb-1">...</p>
                    <p className="font-bold text-muted-foreground">...</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground mb-1">10th Decile</p>
                    <p className="font-bold">91-100%</p>
                    <p className="text-xs text-muted-foreground mt-1">Ranks 361-400</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  <span className="font-semibold">Remember:</span> Lower numbered deciles are better (1st is best)
                </p>
              </div>

              <div className="bg-green-600/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">The Power of Quartiles</h3>
                <p className="text-muted-foreground mb-4">Quartiles are the broadest category, dividing students into four groups.</p>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-card p-4 rounded-lg text-center border-2 border-green-600">
                    <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-xl">1</div>
                    <p className="font-bold text-green-600">First Quartile</p>
                    <p className="text-sm text-muted-foreground mt-2">Top 25%</p>
                    <p className="text-xs text-muted-foreground mt-1">Highly Competitive</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-xl">2</div>
                    <p className="font-bold text-blue-600">Second Quartile</p>
                    <p className="text-sm text-muted-foreground mt-2">26-50%</p>
                    <p className="text-xs text-muted-foreground mt-1">Above Average</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-xl">3</div>
                    <p className="font-bold text-orange-600">Third Quartile</p>
                    <p className="text-sm text-muted-foreground mt-2">51-75%</p>
                    <p className="text-xs text-muted-foreground mt-1">Average</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-xl">4</div>
                    <p className="font-bold text-red-600">Fourth Quartile</p>
                    <p className="text-sm text-muted-foreground mt-2">76-100%</p>
                    <p className="text-xs text-muted-foreground mt-1">Below Average</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actionable Strategies */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Actionable Strategies to Improve Your Class Rank</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have the data. You have your estimated class rank. Now, what do you do with it? Your rank is a direct reflection of your performance, and you can absolutely change it for the better.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Strategy #1: Take the Most Challenging Courses Available</h3>
                <p className="text-muted-foreground mb-4">This is the most direct way to boost your weighted GPA and, by extension, your rank.</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-card p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">❌ Less Strategic Choice</p>
                    <p className="text-xs text-muted-foreground">Easy A in non-weighted elective</p>
                    <div className="mt-2 p-2 bg-red-400/10 rounded text-center">
                      <p className="font-bold">4.0 unweighted</p>
                      <p className="text-xs text-muted-foreground">No rank boost</p>
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2 text-green-600">✓ Strategic Choice</p>
                    <p className="text-xs text-muted-foreground">B in weighted AP History</p>
                    <div className="mt-2 p-2 bg-green-600/10 rounded text-center">
                      <p className="font-bold text-green-600">4.0 weighted</p>
                      <p className="text-xs text-muted-foreground">Rank improvement!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-blue-600 mb-2">Priority Course Types:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-card p-2 rounded text-center">AP Courses</div>
                    <div className="bg-card p-2 rounded text-center">IB Courses</div>
                    <div className="bg-card p-2 rounded text-center">Honors Classes</div>
                    <div className="bg-card p-2 rounded text-center">Dual Enrollment</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4">Strategy #2: Focus on Consistent Improvement</h3>
                <p className="text-muted-foreground mb-4">Admissions officers look for an upward trend in your academic performance.</p>

                <div className="bg-card p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-3">Example of Positive Trajectory:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-mono bg-red-400/10 px-3 py-1 rounded">Freshman</div>
                      <div className="flex-1 bg-red-400/20 h-8 rounded flex items-center px-3" style={{width: '70%'}}>
                        <span className="text-sm">3.2 GPA</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-mono bg-orange-400/10 px-3 py-1 rounded">Sophomore</div>
                      <div className="flex-1 bg-orange-400/20 h-8 rounded flex items-center px-3" style={{width: '80%'}}>
                        <span className="text-sm">3.5 GPA</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-mono bg-green-400/10 px-3 py-1 rounded">Junior</div>
                      <div className="flex-1 bg-green-400/20 h-8 rounded flex items-center px-3" style={{width: '90%'}}>
                        <span className="text-sm">3.8 GPA</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    ↑ This upward trend demonstrates maturity, work ethic, and resilience
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-primary/10 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-4">Strategy #3: Understand the Tiebreaker System</h3>
                <p className="text-muted-foreground mb-4">When multiple students have the same weighted GPA, schools need a tiebreaker.</p>

                <div className="space-y-3">
                  <div className="bg-card p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Common Tiebreakers:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        <span>Performance in unweighted core courses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        <span>Total number of weighted courses taken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        <span>Final course load in senior year</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    <p className="text-sm"><span className="font-semibold">Pro Tip:</span> Check your student handbook for tiebreaker details. If it's the number of AP classes, take one more than your close competitors!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Use in Applications */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">When to Use Your Class Rank Strategically in Applications</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-2 border-green-600">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">Highlighting a Top Rank</h3>
                <p className="text-sm text-muted-foreground mb-4">If your class rank is in the top 10%, you MUST highlight this on your application.</p>

                <div className="bg-card p-4 rounded-lg mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Example Phrasing:</p>
                  <p className="text-sm italic">"Academic achievement placing me in the first decile of a graduating class of 450 students."</p>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="font-semibold">Where to Highlight:</p>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Academic achievements section</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Personal statement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Scholarship applications</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border-2 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">Contextualizing a Lower Rank</h3>
                <p className="text-sm text-muted-foreground mb-4">If your rank is in the second or third quartile, provide context.</p>

                <div className="space-y-3">
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs font-semibold mb-1">Strategy #1: Explain the Rigor</p>
                    <p className="text-xs text-muted-foreground">Mention your school sends 90% of students to 4-year universities</p>
                  </div>

                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs font-semibold mb-1">Strategy #2: Focus on Weighted GPA</p>
                    <p className="text-xs text-muted-foreground">Highlight you took the most rigorous courses available</p>
                  </div>

                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs font-semibold mb-1">Strategy #3: Show Growth</p>
                    <p className="text-xs text-muted-foreground">Emphasize your upward trend and how you overcame challenges</p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-600/10 rounded-lg">
                  <p className="text-xs font-semibold">Use the "Additional Information" section to tell your story!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Traditional Students */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Class Rank for Non-Traditional Students</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Class rank is primarily a high school concept. For transfer students or those applying to graduate school, the metric is less important, but the underlying principle of comparative standing still applies.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Transfer Students</h3>
                <p className="text-sm text-muted-foreground mb-4">Your academic rank is replaced by your cumulative college GPA.</p>

                <div className="bg-card p-4 rounded-lg border-2 border-primary/20">
                  <p className="text-sm font-semibold mb-3">What Matters Most:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>Cumulative College GPA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>Rigor of college courses taken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>Direct GPA comparison with other transfer applicants</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-600/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Graduate School Applicants</h3>
                <p className="text-sm text-muted-foreground mb-4">Class rank is rarely requested. Focus shifts entirely to other metrics.</p>

                <div className="bg-card p-4 rounded-lg border-2 border-blue-600/20">
                  <p className="text-sm font-semibold mb-3">What Matters Most:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>Undergraduate GPA (especially major GPA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>Standardized test scores (GRE, GMAT, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>Research or work experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Takeaways */}
          <div className="bg-gradient-to-br from-primary/10 via-blue-600/10 to-green-600/10 p-8 rounded-xl shadow-lg border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Quick Takeaways</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">1</div>
                  <p className="text-sm">Your class rank calculator provides your standing relative to peers, essential for college applications.</p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">2</div>
                  <p className="text-sm">Most schools use weighted GPA for class rank, rewarding challenging courses like AP or IB.</p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">3</div>
                  <p className="text-sm">Top 10% of class rank often qualifies for automatic admission to state universities and major scholarships.</p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">4</div>
                  <p className="text-sm">Check your estimated class rank after every report card to monitor progress.</p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">5</div>
                  <p className="text-sm">If your school doesn't provide exact rank, they use deciles or quartiles for context.</p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">6</div>
                  <p className="text-sm">The best way to improve rank is to successfully complete the most rigorous coursework available.</p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg md:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">7</div>
                  <p className="text-sm">Use your rank strategically on applications—highlight strong standing or provide context for lower rank.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Understanding the class rank calculator isn't about feeding numbers into a machine. It's about taking control of your academic narrative. This metric is a powerful summary of your high school achievement, and while some selective schools may de-emphasize the number, they never de-emphasize the underlying performance it represents.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By learning what factors influence your rank, how to find your standing, and the language of deciles and quartiles, you empower yourself. You can now track your progress, choose courses that give you the biggest advantage, and frame your academic story confidently for admissions committees.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-6 rounded-lg mt-6">
                <p className="text-lg font-semibold text-center mb-2">Don't let the complexity of college admissions overwhelm you.</p>
                <p className="text-muted-foreground text-center">Use the insights from your class rank calculator to make informed, strategic decisions. The key is to start early and stay consistent.</p>
              </div>
            </div>
          </div>

          {/* Extended FAQ */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Extended Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-primary/5 p-5 rounded-lg">
                <h3 className="text-lg font-bold mb-3">What is the difference between class rank and percentile rank?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Your numerical class rank is your specific position, like "15th out of 400." Your percentile rank tells you the percentage of students you outperformed. For example, being 15th out of 400 is the 96th percentile.
                </p>
                <div className="bg-card p-3 rounded text-center">
                  <p className="text-xs text-muted-foreground">Example:</p>
                  <p className="text-sm"><span className="font-semibold">Rank 15/400</span> = <span className="text-primary font-bold">96th Percentile</span></p>
                </div>
              </div>

              <div className="bg-blue-600/5 p-5 rounded-lg">
                <h3 className="text-lg font-bold mb-3">Is weighted or unweighted GPA used for class rank?</h3>
                <p className="text-sm text-muted-foreground">
                  Most high schools use your weighted GPA for class rank. This system adds extra points for grades earned in advanced courses like AP, IB, and Honors classes. It rewards you for taking on more academic challenge and rigor, making it a stronger indicator for college readiness.
                </p>
              </div>

              <div className="bg-green-600/5 p-5 rounded-lg">
                <h3 className="text-lg font-bold mb-3">What is considered a good class rank for college admissions?</h3>
                <div className="grid md:grid-cols-3 gap-3 mt-4">
                  <div className="bg-card p-3 rounded-lg text-center border-2 border-green-600">
                    <p className="font-bold text-green-600">Excellent</p>
                    <p className="text-2xl font-bold my-2">Top 10%</p>
                    <p className="text-xs text-muted-foreground">Automatic admission + top scholarships</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg text-center border-2 border-blue-600">
                    <p className="font-bold text-blue-600">Very Competitive</p>
                    <p className="text-2xl font-bold my-2">Top 25%</p>
                    <p className="text-xs text-muted-foreground">Strong standing for most universities</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg text-center">
                    <p className="font-bold">Competitive</p>
                    <p className="text-2xl font-bold my-2">Top 50%</p>
                    <p className="text-xs text-muted-foreground">Above average standing</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 p-5 rounded-lg">
                <h3 className="text-lg font-bold mb-3">What if my high school doesn't rank students?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If your high school doesn't provide an exact class rank, they will provide a detailed school profile to colleges. This profile includes:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-1">School's GPA Distribution</p>
                    <p className="text-xs text-muted-foreground">Range and median GPA data</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-1">SAT/ACT Score Ranges</p>
                    <p className="text-xs text-muted-foreground">Standardized test context</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Course Rigor Information</p>
                    <p className="text-xs text-muted-foreground">AP/IB availability details</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Grading System Details</p>
                    <p className="text-xs text-muted-foreground">How grades are weighted</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Admissions committees use this contextual information to evaluate your performance relative to your peers.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 p-5 rounded-lg">
                <h3 className="text-lg font-bold mb-3">Can I improve my class rank during senior year?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Yes, you can improve your rank during senior year, but the change might be small. To see meaningful improvement:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Earn very high grades in weighted courses in first semester</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Take challenging AP or IB classes senior year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Focus on your mid-year report (sent to colleges for updated review)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-blue-600 p-8 rounded-xl shadow-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Thoughts and Get Involved!</h2>
            <p className="text-lg mb-6 opacity-90">
              We hope this guide helped clarify the power of the class rank calculator for your college journey. What part of the admissions process are you finding most confusing right now?
            </p>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <p className="mb-4">Share your experience in the comments. We're all in this together.</p>
              <p className="text-sm opacity-90">
                If you found this article helpful, please share it with other high school students and parents prepping for college.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-card p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What is a class rank calculator?</h3>
              <p className="text-muted-foreground">A class rank calculator shows what percentage of students in your class you performed better than. For example, if you're in the 90th percentile, you performed better than 90% of your classmates.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How is the quartile calculated?</h3>
              <p className="text-muted-foreground">Quartiles divide the class into four equal groups. Quartile 1 represents the top 25% of the class, Quartile 2 represents 50-75%, Quartile 3 represents 25-50%, and Quartile 4 represents the bottom 25%.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Why is class rank important for college applications?</h3>
              <p className="text-muted-foreground">Class rank helps colleges compare students from different schools by showing how well you performed relative to your peers. Many colleges use this information in their admissions decisions.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How often should I check my class rank?</h3>
              <p className="text-muted-foreground">It's good to check your class rank at the end of each semester or marking period to track your progress and adjust your academic strategies if needed.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Can I improve my class rank?</h3>
              <p className="text-muted-foreground">Yes! You can improve your class rank by maintaining good study habits, participating in class, completing all assignments, and seeking help when needed. Our tips section above provides more detailed strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}