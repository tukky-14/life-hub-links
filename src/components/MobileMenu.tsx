import { SIDEBAR_OPTIONS } from '@/data/sidebar';
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
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
        </>
    );
};

export default MobileMenu;
