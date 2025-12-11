import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Class Rank Calculator | Free Academic Standing & Percentile Tool',
  description: 'Use our free Class Rank Calculator to instantly calculate your academic percentile and quartile ranking. Perfect for college applications, scholarship submissions, and tracking academic progress.',
  keywords: 'class rank calculator, academic percentile calculator, class ranking tool, GPA percentile calculator, academic standing calculator, class rank percentile, student ranking calculator',
  openGraph: {
    title: 'Class Rank Calculator | Free Academic Standing & Percentile Tool',
    description: 'Calculate your class rank percentile instantly with our free tool. Perfect for college applications and academic planning.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Class Rank Calculator | Free Academic Standing Tool',
    description: 'Calculate your class rank percentile instantly with our free tool. Perfect for college applications and academic planning.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://classrankcalculator.xyz/" />
        <meta name="author" content="Class Rank Calculator Team" />
        <script async  src="https://quge5.com/88/tag.min.js" data-zone="192295" data-cfasync="false"></script>
        <meta name="google-adsense-account" content="ca-pub-7645420353221335" />
         {/* Google tag (gtag.js) */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-2NGZ3E750E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2NGZ3E750E');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
