'use client';
import { useRouter } from 'next/navigation';
import { signIn, type SignInInput } from 'aws-amplify/auth';

import { Amplify } from 'aws-amplify';
import { currentConfig } from '../config/aws';
Amplify.configure(currentConfig);

export default function Login() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            // 型アサーションを使用して、value プロパティへのアクセスを安全に行う
            const userIdInput = e.currentTarget.elements.namedItem('userId') as HTMLInputElement;
            const passwordInput = e.currentTarget.elements.namedItem(
                'password'
            ) as HTMLInputElement;

            if (userIdInput && passwordInput) {
                const username = userIdInput.value;
                const password = passwordInput.value;

                const { isSignedIn, nextStep } = await signIn({ username, password });
                console.log('isSignedIn:', isSignedIn);
                console.log('nextStep:', nextStep);
                router.push('/home');
            }
        } catch (error) {
            console.log('error signing in', error);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-200">
            <div className="w-full max-w-lg rounded bg-white p-6 shadow-md">
                <h1 className="mb-4 text-center text-lg font-bold text-indigo-500">ログイン</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            ユーザID
                        </label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 text-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                            name="password"
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 text-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            ログイン
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
