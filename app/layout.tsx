import { ThemeProvider } from '@/components/theme-provider';
import Logo from '@/components/ui/logo';
import { MainNav } from '@/components/ui/main-nav';
import { dashboardConfig } from '@/config/dashboard';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn('min-h-screen bg-background antialiased', inter.className)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header className="fixed top-0 z-40 border-b bg-background w-full">
                        <div className="container flex h-16 items-center justify-between py-4">
                            <Logo />
                            <MainNav items={dashboardConfig.mainNav} />
                            {/* <UserAccountNav
                                user={{
                                    name: user.name,
                                    image: user.image,
                                    email: user.email,
                                }}
                            /> */}
                        </div>
                    </header>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
