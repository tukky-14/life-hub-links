import { signOut } from '@/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Search from './Search';
import MobileMenu from './MobileMenu';
import { useGridData } from '@/hooks/useGridData';

const Header = () => {
    const router = useRouter();
    const currentPath = usePathname();
    const { gridData, allGridData, setGridData } = useGridData();

    const handleLogoutClick = async () => {
        await signOut();
        router.push('/');
    };

    const handleSearchChange = (event: any) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredGridData = allGridData?.filter((gridData) => {
            return (
                gridData.title.toLowerCase().includes(searchValue) ||
                gridData.description.toLowerCase().includes(searchValue)
            );
        });

        setGridData(searchValue === '' ? allGridData : filteredGridData || []);
    };

    return (
        <header className="relative flex h-16 items-center justify-between border-b border-gray-300 py-4">
            <Link href="/" className="ml-1 pl-4 text-xl font-bold sm:hidden">
                LifeHub Links
            </Link>
            {currentPath !== '/' && <Search onChange={handleSearchChange} />}
            <MobileMenu />
        </header>
    );
};

export default Header;
