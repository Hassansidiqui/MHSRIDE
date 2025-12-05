"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, Target, MapPin } from "lucide-react";
import Image from "next/image";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-background z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
                    >
                        About MHSRIDE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light"
                    >
                        Redefining urban mobility with luxury, safety, and reliability at the core of every journey.
                    </motion.p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="space-y-6"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-semibold text-sm">
                                Our Story
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Driven by <span className="text-blue-500">Excellence</span> since 2020
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                MHSRIDE started with a simple vision: to transform the way people move through their cities. What began as a small fleet of premium vehicles has grown into a comprehensive mobility solution trusted by thousands.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe that a ride shouldn't just be about getting from point A to point B. It should be an experience—a moment of calm in a busy day, a reliable partner for your business meetings, and a safe guardian for your loved ones.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 mt-12">
                                    <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                        <Image
                                            src="/images/about/passenger.png"
                                            alt="Satisfied Passenger"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="h-48 bg-slate-800 rounded-2xl overflow-hidden relative group">
                                        <Image
                                            src="/images/about/city.png"
                                            alt="City Night View"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-48 bg-slate-800 rounded-2xl overflow-hidden relative group">
                                        <Image
                                            src="/images/about/driver.png"
                                            alt="Professional Chauffeur"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden relative group">
                                        <Image
                                            src="/images/about/interior.png"
                                            alt="Luxury Interior"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative blur */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground text-lg">
                            Every decision we make is guided by these principles, ensuring we deliver the best experience possible.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: Shield,
                                title: "Safety First",
                                description: "We never compromise on safety. Rigorous checks and trained professionals ensure your peace of mind."
                            },
                            {
                                icon: Clock,
                                title: "Reliability",
                                description: "Time is precious. We promise punctuality and efficiency in every ride you take with us."
                            },
                            {
                                icon: Award,
                                title: "Premium Quality",
                                description: "Experience luxury in every detail, from our pristine vehicles to our courteous chauffeurs."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-background p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800"
                            >
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "50k+", label: "Happy Riders" },
                            { number: "120+", label: "Premium Vehicles" },
                            { number: "500+", label: "Expert Drivers" },
                            { number: "24/7", label: "Customer Support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            >
                                <div className="text-4xl md:text-6xl font-black mb-2">{stat.number}</div>
                                <div className="text-blue-100 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/Vision Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 relative"
                        >
                            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1">
                                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative">
                                    {/* Placeholder for map/world image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                        <MapPin className="w-32 h-32 opacity-20" />
                                    </div>
                                </div>
                            </div>
                            {/* Orbiting elements could go here */}
                        </motion.div>

                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="order-1 lg:order-2 space-y-6"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 font-semibold text-sm">
                                Our Vision
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Connecting Cities, <br />
                                <span className="text-purple-500">Connecting People</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We envision a future where transportation is seamless, sustainable, and accessible to everyone. We are constantly innovating to bring you the latest in ride-sharing technology while maintaining the human touch that sets us apart.
                            </p>
                            <div className="pt-4">
                                <button className="bg-foreground text-background px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                                    Join Our Journey
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
