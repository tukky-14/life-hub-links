import './globals.css';
import { Suspense } from 'react';

import { GridDataProvider } from '@/hooks/use-grid-data';
import { NavigationEvents } from '@/hooks/use-navigation';
import { SidebarProvider } from '@/hooks/use-sidebar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LifeHub Links',
    description: 'さまざまな生活関連のリンクを中心に集めた情報ハブ。',
    keywords: 'next.js, react, web development',
    appleWebApp: true,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja">
            <GridDataProvider>
                <SidebarProvider>
                    <body suppressHydrationWarning={true}>
                        {children}
                        <Suspense fallback={null}>
                            <NavigationEvents />
                        </Suspense>
                    </body>
                </SidebarProvider>
            </GridDataProvider>
        </html>
    );
};

export default RootLayout;
