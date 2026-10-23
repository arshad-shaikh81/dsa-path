import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header } from '@/components/site-shell';
import { ProgressProvider } from '@/components/progress-provider';
export const metadata: Metadata = { title: { default: 'DSA Path — Learn algorithms, one step at a time', template: '%s | DSA Path' }, description: 'A beginner-friendly, free roadmap to learn data structures and algorithms in the right order. Track progress and practice with well-known problems.', metadataBase: new URL('https://dsapath.dev'), openGraph: { title: 'DSA Path — Learn algorithms, one step at a time', description: 'A clear, beginner-friendly roadmap for learning DSA.', type: 'website', siteName: 'DSA Path' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><ProgressProvider><Header/><main>{children}</main><Footer/></ProgressProvider></body></html>; }
