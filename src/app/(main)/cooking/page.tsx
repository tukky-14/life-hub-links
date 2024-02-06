'use client';
import LinksGrid from '@/components/links-grid';
import { COOKING_LINKS } from '@/data/cooking';
import useCommonInitialization from '@/hooks/use-common-initialization';
import { useGridData } from '@/hooks/use-grid-data';

const Cooking = () => {
    useCommonInitialization(COOKING_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Cooking;
