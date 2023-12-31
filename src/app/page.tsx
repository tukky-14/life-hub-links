'use client';
import { useRouter } from 'next/navigation';
import { currentAuthenticatedUser, currentSession, signIn } from '@/hooks/useAuth';
import Link from 'next/link';
import Input from '@/components/Input';

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

                const { isSignedIn, nextStep } = await signIn(username, password);
                await currentSession();
                await currentAuthenticatedUser();
                console.log('isSignedIn:', isSignedIn);
                console.log('nextStep:', nextStep);
                router.push('/home');
            }
        } catch (error) {
            console.log('error signing in', error);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-200 text-gray-700">
            <div className="w-full max-w-lg rounded bg-white p-6 shadow-md">
                <h1 className="mb-4 text-center text-lg font-bold text-indigo-500">ログイン</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        id="userId"
                        name="userId"
                        label="ユーザID"
                        required={true}
                        style="mb-4"
                    />
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        label="パスワード"
                        required={true}
                        style="mb-6"
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            ログイン
                        </button>
                    </div>
                </form>
                <div className="pb-2 pt-6 text-center text-indigo-500">
                    <Link href="/signup">ユーザ登録</Link>
                </div>
            </div>
        </div>
    );
}
