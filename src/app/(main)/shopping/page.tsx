'use client';
import LinksGrid from '@/components/links-grid';
import { SHOPPING_LINKS } from '@/data/shopping';
import useCommonInitialization from '@/hooks/use-common-initialization';
import { useGridData } from '@/hooks/use-grid-data';

const Shopping = () => {
    useCommonInitialization(SHOPPING_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Shopping;
