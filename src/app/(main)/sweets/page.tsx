'use client';
import LinksGrid from '@/components/LinksGrid';
import { SWEETS_LINKS } from '@/data/sweets';
import useCommonInitialization from '@/hooks/useCommonInitialization';

const Sweets = () => {
    useCommonInitialization(SWEETS_LINKS);

    return <LinksGrid links={SWEETS_LINKS} />;
};

export default Sweets;
