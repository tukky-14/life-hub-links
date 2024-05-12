import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useGridData } from '@/hooks/use-grid-data';

import MobileMenu from './mobile-menu';
import Search from './search';

const Header = () => {
    const currentPath = usePathname();
    const { allGridData, setGridData } = useGridData();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
