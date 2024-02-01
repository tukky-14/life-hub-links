'use client';
import LinksGrid from '@/components/LinksGrid';
import { GIFT_LINKS } from '@/data/gift';
import useCommonInitialization from '@/hooks/useCommonInitialization';

const Gift = () => {
    useCommonInitialization(GIFT_LINKS);

    return <LinksGrid links={GIFT_LINKS} />;
};

export default Gift;
