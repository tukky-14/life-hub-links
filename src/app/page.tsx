import Login from './(certification)/signin/page';

export default function LoginHome() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-200 text-gray-700">
            <div className="w-full max-w-lg rounded bg-white p-6 shadow-md">
                <Login />
            </div>
        </div>
    );
}
