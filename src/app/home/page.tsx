'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleLogoutClick = () => {
        router.push('/');
    };

    return (
        <div className="flex h-screen">
            <div className="hidden w-64 bg-sidebar p-4 sm:block">サイドバー</div>
            <div className="flex flex-1 flex-col">
                <div className="flex h-16 items-center justify-between bg-header p-4">
                    <h3>ヘッダー</h3>
                    <button
                        onClick={handleLogoutClick}
                        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        ログアウト
                    </button>
                </div>
                <div className="flex-1 bg-main p-4">
                    <input className="rounded text-gray-700" maxLength={10} type="text" />
                </div>
            </div>
        </div>
    );
}
