"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="h-48 relative rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src="/images/about/driver.png"
                                        alt="Professional Driver"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="h-64 relative rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src="/images/about/interior.png"
                                        alt="Luxury Interior"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </motion.div>
                            </div>
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="h-64 relative rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src="/images/about/passenger.png"
                                        alt="Happy Passenger"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="h-48 relative rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src="/images/about/city.png"
                                        alt="City View"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </motion.div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CityRide?</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We are more than just a taxi service. We are your partners in travel, ensuring every journey is safe, comfortable, and memorable.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Shield, title: "Safety First", text: "All our drivers are vetted and trained. Our vehicles undergo regular safety checks." },
                                { icon: Clock, title: "Punctuality Guaranteed", text: "We value your time. Our advanced tracking ensures we are always there when you need us." },
                                { icon: Award, title: "Premium Experience", text: "From standard sedans to luxury limousines, enjoy a first-class experience at competitive rates." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex gap-4"
                                >
                                    <div className="bg-secondary/10 p-3 rounded-xl h-fit">
                                        <item.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/about" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg">
                            Learn More About Us
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
