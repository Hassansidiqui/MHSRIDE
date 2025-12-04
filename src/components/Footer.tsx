import Link from "next/link";
import { Car, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                                <span className="text-white font-black text-lg leading-none">M</span>
                            </div>
                            <span className="text-xl font-bold">MHSRIDE</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Premium taxi and ride-sharing service providing comfort, safety, and reliability for all your city travel needs.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Our Fleet</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Book a Ride</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold mb-6">Services</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-secondary transition-colors">Airport Transfer</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">City Tour</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Corporate Travel</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Wedding Transport</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Intercity Rides</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>123 Business Ave, Tech City, TC 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>support@cityride.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; 2024 CityRide. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
