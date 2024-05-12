import Link from 'next/link';

import { GridDataProps } from '@/types/grid-data';

const LinksGrid = (props: GridDataProps) => {
    const { links } = props;

    return (
        <>
            {links.map((link) => (
                <Link
                    className="relative h-80 animate-slide-in-bck-center rounded border border-gray-300 duration-300 hover:border hover:border-gray-500 hover:bg-gray-300"
                    href={link.href}
                    key={link.title}
                    target="_blank"
                >
                    <img className="h-48 w-full" src={link.image} alt={`${link.title}の画像`} />
                    <p className="p-1">
                        <span className="mb-1 block px-2 font-bold">{link.title}</span>
                        <span className="block px-2 text-xs">{link.description}</span>
                    </p>
                    <p className="absolute bottom-0 p-0.5">
                        {link.tag.map((tag, index) => (
                            <span
                                key={index}
                                className="m-0.5 inline-block rounded border border-gray-300 px-2 py-1 text-xs text-gray-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </p>
                </Link>
            ))}
        </>
    );
};

export default LinksGrid;
