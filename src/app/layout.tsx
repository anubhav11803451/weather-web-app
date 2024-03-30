import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Providers from '@/libs/providers/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Home - Weather Forecast',
    description:
        'Home weather forecast with current conditions, wind, rain and what to expect for the next 7 days.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
