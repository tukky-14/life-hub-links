'use client';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

const MainLauout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col bg-main text-gray-700">
                <Header />
                <main className="flex-1 overflow-auto p-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLauout;
