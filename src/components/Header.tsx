import Button from './Button';
import { signOut } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/hooks/useSidebar';

import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import Link from 'next/link';
import { SIDEBAR_OPTIONS } from '@/data/sidebar';
import Search from './Search';

const Header = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogoutClick = async () => {
        await signOut();
        router.push('/');
    };

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="relative flex h-16 items-center justify-between border-b border-gray-300 py-4">
            <Link href="/" className="ml-1 pl-4 text-xl font-bold sm:hidden">
                LifeHub Links
            </Link>
            <Search />
            <button className="pr-4 sm:hidden" onClick={handleMenuClick}>
                <RxHamburgerMenu size="2rem" />
            </button>
            {/* <Button type="button" id="logout" text="ログアウト" onClick={handleLogoutClick} /> */}
            {menuOpen && (
                <div className="absolute top-16 z-10 flex w-full flex-col bg-gray-300 md:hidden">
                    {SIDEBAR_OPTIONS.map((option) => (
                        <Link
                            className="flex items-center border-b py-2 pl-3 hover:bg-gray-200"
                            href={option.href}
                            key={option.label}
                        >
                            {option.icon}
                            <p>{option.label}</p>
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
