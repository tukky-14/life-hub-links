import { signOut } from '@/hooks/useAuth';
import Button from './Button';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    const handleLogoutClick = async () => {
        await signOut();
        router.push('/');
    };

    return (
        <header className="flex h-16 items-center justify-between bg-header p-4">
            <h3>ヘッダー</h3>
            <Button type="button" id="logout" text="ログアウト" onClick={handleLogoutClick} />
        </header>
    );
};

export default Header;
