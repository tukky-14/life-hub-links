import LinksGrid from '@/components/LinksGrid';
import { SHOPPING_LINKS } from '@/data/shopping';

const Shopping = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={SHOPPING_LINKS} />
        </div>
    );
};

export default Shopping;
