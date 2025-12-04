import Image from "next/image";
import Link from "next/link";
import { Shield, Clock, Award } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Grid */}
                    <div className="relative order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="h-48 bg-muted rounded-2xl w-full flex items-center justify-center text-muted-foreground">Driver Image</div>
                                <div className="h-64 bg-muted rounded-2xl w-full flex items-center justify-center text-muted-foreground">Car Interior</div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 bg-muted rounded-2xl w-full flex items-center justify-center text-muted-foreground">Happy Passenger</div>
                                <div className="h-48 bg-muted rounded-2xl w-full flex items-center justify-center text-muted-foreground">City View</div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CityRide?</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We are more than just a taxi service. We are your partners in travel, ensuring every journey is safe, comfortable, and memorable.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-secondary/10 p-3 rounded-xl h-fit">
                                    <Shield className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Safety First</h3>
                                    <p className="text-muted-foreground">
                                        All our drivers are vetted and trained. Our vehicles undergo regular safety checks.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-secondary/10 p-3 rounded-xl h-fit">
                                    <Clock className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Punctuality Guaranteed</h3>
                                    <p className="text-muted-foreground">
                                        We value your time. Our advanced tracking ensures we are always there when you need us.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-secondary/10 p-3 rounded-xl h-fit">
                                    <Award className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Premium Experience</h3>
                                    <p className="text-muted-foreground">
                                        From standard sedans to luxury limousines, enjoy a first-class experience at competitive rates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link href="/about" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
