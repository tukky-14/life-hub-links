import LinksGrid from '@/components/LinksGrid';
import { MONEY_LINKS } from '@/data/money';

const Money = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={MONEY_LINKS} />
        </div>
    );
};

export default Money;
