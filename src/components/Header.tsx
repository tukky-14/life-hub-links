import Button from './Button';
import { signOut } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { LINKS } from '@/data/sidebar';
import { PROVERBS } from '@/data/proverbs';

const Header = () => {
    const router = useRouter();
    const currentPathname = usePathname();
    const currentLabel = LINKS.find((link) => link.href === currentPathname)?.label || 'ホーム';
    const currentProverb = PROVERBS.find((proverb) => proverb.label === currentLabel)?.text || '';

    const handleLogoutClick = async () => {
        await signOut();
        router.push('/');
    };

    return (
        <header className="flex h-16 items-center justify-between bg-header p-4">
            <h3>{currentLabel}</h3>
            <div className="text-sm italic">{currentProverb}</div>
            <Button type="button" id="logout" text="ログアウト" onClick={handleLogoutClick} />
        </header>
    );
};

export default Header;
