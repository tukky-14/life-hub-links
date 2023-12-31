'use client';
import Button from '@/components/Button';
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
                    <Button
                        type="button"
                        id="logout"
                        text="ログアウト"
                        onClick={handleLogoutClick}
                    />
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
