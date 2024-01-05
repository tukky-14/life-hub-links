export default function CertificationLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-200 text-gray-700">
            <div className="w-full max-w-lg rounded bg-white p-6 shadow-md">{children}</div>
        </div>
    );
}
