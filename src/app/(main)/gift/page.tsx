import LinksGrid from '@/components/LinksGrid';
import { GIFT_LINKS } from '@/data/gift';

const Gift = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={GIFT_LINKS} />
        </div>
    );
};

export default Gift;
