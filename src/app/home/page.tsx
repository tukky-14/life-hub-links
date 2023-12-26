'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleLogoutClick = () => {
        router.push('/');
    };

    return (
        <div className="flex h-screen">
            <div className="bg-sidebar w-64 p-4">サイドバー</div>
            <div className="flex-1 flex flex-col">
                <div className="bg-header h-16 p-4 flex justify-between items-center">
                    <h3>ヘッダー</h3>
                    <button
                        onClick={handleLogoutClick}
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        ログアウト
                    </button>
                </div>
                <div className="bg-main flex-1 p-4">メインコンテンツ</div>
            </div>
        </div>
    );
}
