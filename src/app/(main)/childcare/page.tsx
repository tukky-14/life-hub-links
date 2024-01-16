import LinksGrid from '@/components/LinksGrid';
import { CHILDCARE_LINKS } from '@/data/childcare';

const Childcare = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LinksGrid links={CHILDCARE_LINKS} />
        </div>
    );
};

export default Childcare;
