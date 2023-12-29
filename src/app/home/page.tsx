'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
    const router = useRouter();

    const handleLogoutClick = () => {
        router.push('/');
    };
    const [readonly, setReadonly] = useState(false);

    return (
        <div className="flex h-screen">
            <div className="hidden w-64 bg-sidebar p-4 sm:block">サイドバー</div>
            <div className="flex flex-1 flex-col">
                <div className="flex h-16 items-center justify-between bg-header p-4">
                    <h3>ヘッダー</h3>
                    <button
                        onClick={handleLogoutClick}
                        className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        ログアウト
                    </button>
                </div>
                <div className="flex-1 bg-main p-4">
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
                </div>
            </div>
        </div>
    );
}
