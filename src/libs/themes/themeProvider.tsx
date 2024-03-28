'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <NextThemeProvider attribute='data-theme' enableSystem defaultTheme='sunset'>
            {children}
        </NextThemeProvider>
    );
};
