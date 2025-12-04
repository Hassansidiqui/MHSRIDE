"use client";

import dynamic from "next/dynamic";
import { Mail, Phone, MapPin } from "lucide-react";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We are here to help 24/7.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:h-[600px]">
                    {/* Contact Info & Form */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Phone</h3>
                                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p className="text-muted-foreground">support@cityride.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Headquarters</h3>
                                    <p className="text-muted-foreground">123 Business Ave, New York, NY</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-4 bg-card rounded-xl border border-border focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                            <input type="email" placeholder="Your Email" className="w-full p-4 bg-card rounded-xl border border-border focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                            <textarea placeholder="Message" rows={4} className="w-full p-4 bg-card rounded-xl border border-border focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] lg:h-full min-h-[400px] bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
                        <LeafletMap />
                    </div>
                </div>
            </div>
        </section>
    );
}
