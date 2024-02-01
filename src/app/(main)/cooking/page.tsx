'use client';
import LinksGrid from '@/components/LinksGrid';
import { COOKING_LINKS } from '@/data/cooking';
import useCommonInitialization from '@/hooks/useCommonInitialization';

const Cooking = () => {
    useCommonInitialization(COOKING_LINKS);

    return <LinksGrid links={COOKING_LINKS} />;
};

export default Cooking;
