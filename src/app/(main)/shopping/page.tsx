'use client';
import LinksGrid from '@/components/LinksGrid';
import { SHOPPING_LINKS } from '@/data/shopping';
import useCommonInitialization from '@/hooks/useCommonInitialization';

const Shopping = () => {
    useCommonInitialization(SHOPPING_LINKS);

    return <LinksGrid links={SHOPPING_LINKS} />;
};

export default Shopping;
