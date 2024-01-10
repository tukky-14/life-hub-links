import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'LifeHub Links',
    description: 'さまざまな生活関連のリンクを中心に集めた情報ハブ。',
    keywords: 'next.js, react, web development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
