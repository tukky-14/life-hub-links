import Link from 'next/link';

const GIFT_LINKS = [
    {
        title: 'SOW EXPERIENCE',
        description:
            '興味はあっても、チャレンジする機会がないコトやモノ。そのきっかけを贈るための体験ギフト。',
        image: 'https://picsum.photos/300/200',
        href: 'https://www.sowxp.co.jp/',
        tag: ['体験'],
    },
    {
        title: 'アソビュー！ギフト',
        description:
            '遊び予約サイト。アウトドアスポーツやものづくり体験、遊園地や水族館、日帰り温泉などの遊び体験ギフト。',
        image: 'https://picsum.photos/300/200',
        href: 'https://store.asoview.com/',
        tag: ['体験'],
    },
    {
        title: 'dozo',
        description: 'dozo',
        image: 'https://picsum.photos/300/200',
        href: 'https://dozo-gift.com/',
        tag: ['食べ物', '体験'],
    },
    {
        title: 'Gifts for pets',
        description: 'aaaa',
        image: 'https://picsum.photos/300/200',
        href: '/',
        tag: ['食べ物'],
    },
];

const Gift = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {GIFT_LINKS.map((link) => (
                <Link
                    className="relative h-80 rounded border border-gray-300 duration-300 hover:scale-105"
                    href={link.href}
                    key={link.title}
                    target="_blank"
                >
                    <img className="" src={link.image} alt="サンプル画像" />
                    <p className="p-1">
                        <span className="block px-2 font-bold">{link.title}</span>
                        <span className="block px-2 text-xs">{link.description}</span>
                    </p>
                    <p className="absolute bottom-0 p-0.5">
                        {link.tag.map((tag) => (
                            <span className="m-0.5 inline-block rounded border border-gray-300 px-2 py-1 text-xs text-gray-500">
                                {tag}
                            </span>
                        ))}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Gift;
