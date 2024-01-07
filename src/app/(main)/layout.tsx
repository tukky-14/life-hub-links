'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function MainLauout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 bg-main p-4 text-gray-700">{children}</main>
            </div>
        </div>
    );
}
