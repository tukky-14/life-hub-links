'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const MainLauout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col bg-main text-gray-700">
                <Header />
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
};

export default MainLauout;
