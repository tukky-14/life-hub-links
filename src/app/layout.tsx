import type { Metadata } from 'next';
import './globals.css';
import { SidebarProvider } from '@/hooks/useSidebar';

export const metadata: Metadata = {
    title: 'LifeHub Links',
    description: 'さまざまな生活関連のリンクを中心に集めた情報ハブ。',
    keywords: 'next.js, react, web development',
    appleWebApp: true,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja">
            <SidebarProvider>
                <body suppressHydrationWarning={true}>{children}</body>
            </SidebarProvider>
        </html>
    );
};

export default RootLayout;
