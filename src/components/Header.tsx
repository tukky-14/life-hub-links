import Button from './Button';
import { signOut } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/hooks/useSidebar';

const Header = () => {
    const router = useRouter();
    const { sidebarOption } = useSidebar();

    const handleLogoutClick = async () => {
        await signOut();
        router.push('/');
    };

    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-300 p-4">
            <div className="text-sm italic">{sidebarOption?.proverb}</div>
            <Button type="button" id="logout" text="ログアウト" onClick={handleLogoutClick} />
        </header>
    );
};

export default Header;
