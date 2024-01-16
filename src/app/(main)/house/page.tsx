import LinksGrid from '@/components/LinksGrid';
import { HOUSE_LINKS } from '@/data/house';

const House = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={HOUSE_LINKS} />
        </div>
    );
};

export default House;
