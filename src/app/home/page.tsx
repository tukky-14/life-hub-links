'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function Home() {
    const [readonly, setReadonly] = useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 bg-main p-4">
                    <input
                        autoFocus
                        type="text"
                        inputMode="none"
                        className="rounded text-gray-700"
                        maxLength={10}
                        readOnly={readonly}
                        onFocus={() => setReadonly(false)}
                        onBlur={() => setReadonly(true)}
                    />
                </main>
            </div>
        </div>
    );
}
