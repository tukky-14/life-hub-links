'use client';
import { useState } from 'react';

export default function Home() {
    const [readonly, setReadonly] = useState(false);

    return (
        <>
            <input
                autoFocus
                type="text"
                inputMode="none"
                className="rounded text-gray-700"
                maxLength={10}
                readOnly={readonly}
                onFocus={() => setReadonly(false)}
                onBlur={() => setReadonly(true)}
            />
        </>
    );
}
