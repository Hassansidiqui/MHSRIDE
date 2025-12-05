"use client";

import { BookingForm } from "@/components/BookingForm";
import { CityBackground } from "@/components/CityBackground";
import { useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
    const [isNight, setIsNight] = useState(true);

    return (
        <section id="home" className=" relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <CityBackground isNight={isNight} />

            {/* Celestial Body (Sun/Moon Toggle) */}
            {/* Placed here in Hero to ensure it sits above the background layer */}
            <motion.div
                layout
                onClick={() => setIsNight(!isNight)}
                className="absolute top-24 right-4 md:top-32 md:right-10 cursor-pointer z-40 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isNight ? (
                    // Moon
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-100 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] relative overflow-hidden">
                        <div className="absolute top-2 right-3 w-2 h-2 md:w-3 md:h-3 bg-slate-300 rounded-full opacity-50" />
                        <div className="absolute top-5 right-5 w-3 h-3 md:w-5 md:h-5 bg-slate-300 rounded-full opacity-50" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 md:w-4 md:h-4 bg-slate-300 rounded-full opacity-50" />
                    </div>
                ) : (
                    // Sun
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full shadow-[0_0_60px_rgba(250,204,21,0.8)]" />
                )}
            </motion.div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="text-foreground space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 text-center lg:text-left pt-10 lg:pt-0">
                    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 backdrop-blur-md rounded-full border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-medium text-sm">
                        #1 Premium Taxi Service
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Your Premium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                            MHSRIDE
                        </span>
                        <br /> Awaits
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Experience the ultimate comfort and reliability with our premium fleet.
                        Professional drivers, luxury vehicles, and 24/7 support for your journey.
                    </p>

                    <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold">
                                    U{i}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex text-yellow-500 text-sm">★★★★★</div>
                            <span className="text-sm text-muted-foreground">Trusted by 10k+ riders</span>
                        </div>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="flex justify-center lg:justify-end">
                    <BookingForm />
                </div>
            </div>
        </section>
    );
}
