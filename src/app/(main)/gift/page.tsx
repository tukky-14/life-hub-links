import Link from 'next/link';

const GIFT_LINKS = [
    {
        title: 'Gifts for her',
        description: 'aaaa',
        image: 'https://picsum.photos/300/200',
        href: '/',
    },
    {
        title: 'Gifts for him',
        description: 'aaaa',
        image: 'https://picsum.photos/300/200',
        href: '/',
    },
    {
        title: 'Gifts for kids',
        description: 'aaaa',
        image: 'https://picsum.photos/300/200',
        href: '/',
    },
    {
        title: 'Gifts for pets',
        description: 'aaaa',
        image: 'https://picsum.photos/300/200',
        href: '/',
    },
];

const Gift = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {GIFT_LINKS.map((link) => (
                <Link
                    className="h-80 rounded border border-gray-300 duration-300 hover:scale-105"
                    href={link.href}
                    key={link.title}
                >
                    <img className="" src={link.image} alt="サンプル画像" />
                    <p className="p-1">
                        <span className="block px-2">{link.title}</span>
                        <span className="block px-2">{link.description}</span>
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Gift;
