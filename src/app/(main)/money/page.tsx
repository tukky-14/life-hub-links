'use client';
import LinksGrid from '@/components/LinksGrid';
import { MONEY_LINKS } from '@/data/money';
import useCommonInitialization from '@/hooks/useCommonInitialization';

const Money = () => {
    useCommonInitialization(MONEY_LINKS);

    return <LinksGrid links={MONEY_LINKS} />;
};

export default Money;
