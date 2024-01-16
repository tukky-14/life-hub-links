import LinksGrid from '@/components/LinksGrid';
import { SWEETS_LINKS } from '@/data/sweets';

const Sweets = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={SWEETS_LINKS} />
        </div>
    );
};

export default Sweets;
