'use client';

import { ThemeProvider } from '../themes/themeProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
