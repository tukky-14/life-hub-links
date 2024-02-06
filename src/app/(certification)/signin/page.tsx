'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import Input from '@/components/input';
import { currentAuthenticatedUser, currentSession, signIn } from '@/hooks/use-auth';

const Login = () => {
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
        <>
            <h1 className="mb-4 text-center text-lg font-bold text-gray-500">LifeHub Links</h1>
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
                <div className="text-center">
                    <Button type="submit" id="login" text="ログイン" />
                </div>
            </form>
            <div className="pb-2 pt-6 text-center text-gray-500 hover:underline">
                <Link href="/signup">ユーザ登録</Link>
            </div>
        </>
    );
};

export default Login;
