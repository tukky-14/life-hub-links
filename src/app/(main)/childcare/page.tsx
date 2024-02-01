'use client';
import LinksGrid from '@/components/LinksGrid';
import { CHILDCARE_LINKS } from '@/data/childcare';
import useCommonInitialization from '@/hooks/useCommonInitialization';

const Childcare = () => {
    useCommonInitialization(CHILDCARE_LINKS);

    return <LinksGrid links={CHILDCARE_LINKS} />;
};

export default Childcare;
