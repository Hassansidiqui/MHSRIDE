"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Car, Menu, Phone, User, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (pathname === "/") {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(`/#${id}`);
        }
    };

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "py-2" : "py-4"
        )}>
            <div className={cn(
                "mx-4 rounded-2xl px-6 py-4 flex items-center justify-between max-w-7xl mx-auto transition-all duration-300",
                scrolled ? "glass shadow-lg" : "bg-transparent"
            )}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                        <span className="text-white font-black text-lg leading-none">M</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">MHSRIDE</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" onClick={(e) => handleNavigation(e, "home")} className="text-sm font-medium hover:text-blue-500 transition-colors">Home</a>
                    <Link href="/about" className="text-sm font-medium hover:text-blue-500 transition-colors">About Us</Link>
                    <a href="#vehicles" onClick={(e) => handleNavigation(e, "vehicles")} className="text-sm font-medium hover:text-blue-500 transition-colors">Vehicles</a>
                    <a href="#contact" onClick={(e) => handleNavigation(e, "contact")} className="text-sm font-medium hover:text-blue-500 transition-colors">Contact</a>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Phone className="w-4 h-4 text-blue-500" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <Link href="/login" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg">
                        <User className="w-4 h-4" />
                        Login
                    </Link>
                </div>

                {/* Mobile Menu */}
                <button className="md:hidden p-2 hover:bg-muted rounded-lg">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}
