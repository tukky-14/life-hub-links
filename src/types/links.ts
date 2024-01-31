export type LinksGridProps = {
    links: LinkGrid[];
};

export type LinkGrid = {
    href: string;
    image: string;
    title: string;
    description: string;
    tag: string[];
};
