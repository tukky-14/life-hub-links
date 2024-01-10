'use client';
import Sidebar from '@/components/Sidebar';
import Home from './(main)/home/page';
import Header from '@/components/Header';

export default function LoginHome() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 bg-main p-4 text-gray-700">
                    <Home />
                </main>
            </div>
        </div>
    );
}
