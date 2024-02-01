export type GridDataProps = {
    links: GridData[];
};

export type GridData = {
    href: string;
    image: string;
    title: string;
    description: string;
    tag: string[];
};

export type GridDataContextType = {
    gridData: GridData[] | undefined;
    setGridData: (option: GridData[]) => void;
};
