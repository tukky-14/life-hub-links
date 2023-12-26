'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Login() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ここでログイン処理を実装 (今回はスキップ)
        // ログイン成功後、/homeにリダイレクト
        router.push('/home');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="w-full max-w-lg p-6 rounded shadow-md bg-white">
                <h1 className="text-lg mb-4 font-bold text-center text-indigo-600">ログイン</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            ユーザID
                        </label>
                        <input
                            type="text"
                            id="userId"
                            className="text-gray-700 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            パスワード
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="text-gray-700 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            ログイン
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
