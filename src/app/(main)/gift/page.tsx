import { GIFT_LINKS } from '@/data/gift';
import Link from 'next/link';

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
                        <span className="mb-1 block px-2 font-bold">{link.title}</span>
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
