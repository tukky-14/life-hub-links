'use client';
import { useRouter } from 'next/navigation';
import { signUp } from '@/hooks/useAuth';
import Link from 'next/link';

export default function Register() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            const usernameInput = e.currentTarget.elements.namedItem(
                'username'
            ) as HTMLInputElement;
            const passwordInput = e.currentTarget.elements.namedItem(
                'password'
            ) as HTMLInputElement;
            const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;

            if (usernameInput && passwordInput && emailInput) {
                const username = usernameInput.value;
                const password = passwordInput.value;
                const email = emailInput.value;

                await signUp(username, password, email);
                router.push('/');
            }
        } catch (error) {
            console.log('error signing up', error);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-200">
            <div className="w-full max-w-lg rounded bg-white p-6 shadow-md">
                <h1 className="mb-4 text-center text-lg font-bold text-indigo-500">ユーザ登録</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ユーザ名
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 text-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            メールアドレス
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            登録
                        </button>
                    </div>
                </form>
                <div className="pb-2 pt-6 text-center text-indigo-500">
                    <Link href="/">戻る</Link>
                </div>
            </div>
        </div>
    );
}
