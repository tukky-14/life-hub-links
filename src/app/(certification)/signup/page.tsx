/* eslint @typescript-eslint/no-explicit-any: off */
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import Input from '@/components/input';
import { signUp } from '@/hooks/use-auth';
import { translateErrorMessage } from '@/lib/cognito';

const Register = () => {
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
        } catch (error: any) {
            console.log('error signing up', error);
            alert(translateErrorMessage(error.message));
        }
    };

    return (
        <>
            <h1 className="mb-4 text-center text-lg font-bold text-gray-500">ユーザ登録</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    label="ユーザ名"
                    required={true}
                    style="mb-4"
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    label="メールアドレス"
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
                    <Button type="submit" id="login" text="登録" />
                </div>
            </form>
            <div className="pb-2 pt-6 text-center text-gray-500">
                <Link href="/signin">戻る</Link>
            </div>
        </>
    );
};

export default Register;
