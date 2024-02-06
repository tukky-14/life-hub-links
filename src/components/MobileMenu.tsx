import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';

const MobileMenu = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    /**
     * メニューの開閉
     */
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    /**
     * メニューの項目をクリックしたときの処理
     * @param event
     */
    const handleMenuOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget;
        setMenuOpen(false);
        router.push(name);
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
                        <button
                            className="flex items-center border-b py-2 pl-3 hover:bg-gray-200"
                            name={option.href}
                            key={option.label}
                            onClick={handleMenuOptionClick}
                        >
                            {option.icon}
                            <p>{option.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default MobileMenu;
