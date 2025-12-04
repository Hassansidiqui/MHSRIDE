import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mb-8">
                Oops! The page you are looking for seems to have taken a wrong turn. Let's get you back on track.
            </p>
            <Link href="/" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>
        </div>
    );
}
