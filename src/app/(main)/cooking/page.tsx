import LinksGrid from '@/components/LinksGrid';
import { COOKING_LINKS } from '@/data/cooking';

const Cooking = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={COOKING_LINKS} />
        </div>
    );
};

export default Cooking;
