import Button from './Button';
import { signOut } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { SIDEBAR_OPTIONS } from '@/data/sidebar';

const Header = () => {
    const router = useRouter();
    const currentPathname = usePathname();
    const currentOption = SIDEBAR_OPTIONS.find((link) => link.href === currentPathname);

    const handleLogoutClick = async () => {
        await signOut();
        router.push('/');
    };

    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-300 p-4">
            <h3>{currentOption?.label}</h3>
            <div className="text-sm italic">{currentOption?.proverb}</div>
            <Button type="button" id="logout" text="ログアウト" onClick={handleLogoutClick} />
        </header>
    );
};

export default Header;
