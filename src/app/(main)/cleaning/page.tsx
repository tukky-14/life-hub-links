import LinksGrid from '@/components/LinksGrid';
import { CLEANING_LINKS } from '@/data/cleaning';

const Cleaning = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={CLEANING_LINKS} />
        </div>
    );
};

export default Cleaning;
