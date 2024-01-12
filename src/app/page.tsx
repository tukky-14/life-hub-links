'use client';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const AfterLoginHome = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col bg-main text-gray-700">
                <Header />
                <main className="flex-1 p-4">
                    <div></div>
                </main>
            </div>
        </div>
    );
};

export default AfterLoginHome;
