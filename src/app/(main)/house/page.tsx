'use client';
import LinksGrid from '@/components/LinksGrid';
import { HOUSE_LINKS } from '@/data/house';
import useCommonInitialization from '@/hooks/useCommonInitialization';

const House = () => {
    useCommonInitialization(HOUSE_LINKS);

    return <LinksGrid links={HOUSE_LINKS} />;
};

export default House;
