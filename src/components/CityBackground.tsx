"use client";

import { motion } from "framer-motion";
import { Car, Bike, Truck } from "lucide-react";
import { useEffect, useState } from "react";

const TrafficLight = ({ delay = 0, x, y }: { delay?: number; x: string; y: string }) => {
    const [color, setColor] = useState<"red" | "yellow" | "green">("red");

    useEffect(() => {
        const cycle = async () => {
            await new Promise(r => setTimeout(r, delay));
            while (true) {
                setColor("green");
                await new Promise(r => setTimeout(r, 5000)); // Green for 5s
                setColor("yellow");
                await new Promise(r => setTimeout(r, 2000)); // Yellow for 2s
                setColor("red");
                await new Promise(r => setTimeout(r, 5000)); // Red for 5s
            }
        };
        cycle();
    }, [delay]);

    return (
        <div className="absolute z-20 flex flex-col gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700 shadow-lg" style={{ left: x, top: y }}>
            <div className={`w-2 h-2 rounded-full ${color === "red" ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]" : "bg-red-900/30"}`} />
            <div className={`w-2 h-2 rounded-full ${color === "yellow" ? "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,1)]" : "bg-yellow-900/30"}`} />
            <div className={`w-2 h-2 rounded-full ${color === "green" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]" : "bg-green-900/30"}`} />
        </div>
    );
};

const Building = ({ width, height, left, delay }: { width: string; height: string; left: string; delay: number }) => (
    <div className="absolute bottom-0 bg-slate-300 border-t border-x border-slate-400" style={{ width, height, left }}>
        <div className="grid grid-cols-3 gap-1 p-1">
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 5 + delay,
                        repeatType: "reverse"
                    }}
                    className="w-full h-2 bg-sky-200/50 rounded-[1px]"
                />
            ))}
        </div>
    </div>
);

const StreetLight = ({ left, isNight }: { left: string; isNight: boolean }) => (
    <div className="absolute bottom-20 z-0 flex flex-col items-center" style={{ left }}>
        {/* Light Fixture */}
        <div className="relative">
            <div className="w-4 h-1 bg-slate-800 rounded-t-md" />
            {/* Super Bright Bulb */}
            <div className={`w-3 h-3 -mt-1 rounded-full ${isNight ? "bg-yellow-100 shadow-[0_0_50px_rgba(253,224,71,1)]" : "bg-yellow-900/20"}`} />
            {/* Intense Cone of light (Night only) */}
            {isNight && (
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-48 bg-gradient-to-b from-yellow-100/30 via-yellow-200/10 to-transparent"
                    style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }} />
            )}
        </div>
        {/* Pole */}
        <div className="w-1 h-24 bg-slate-700" />
    </div>
);

export function CityBackground({ isNight }: { isNight: boolean }) {

    return (
        <div className={`absolute inset-0 overflow-hidden -z-10 transition-colors duration-1000 ${isNight ? "bg-slate-950" : "bg-gradient-to-b from-sky-300 to-sky-100"}`}>

            {/* Stars (Night only) - "Jagmag" Effect */}
            {isNight && (
                <div className="absolute inset-0 opacity-80">
                    {Array.from({ length: 70 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            initial={{ opacity: 0.2, scale: 0.8 }}
                            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                            transition={{
                                duration: 1 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                            style={{
                                top: `${Math.random() * 50}%`,
                                left: `${Math.random() * 100}%`,
                                width: Math.random() * 2 + 1 + 'px',
                                height: Math.random() * 2 + 1 + 'px',
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Clouds (Day only) */}
            {!isNight && (
                <div className="absolute inset-0 opacity-80 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -100 }}
                            animate={{ x: "120vw" }}
                            transition={{
                                duration: 40 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 20
                            }}
                            className="absolute bg-white/60 rounded-full blur-xl"
                            style={{
                                top: `${Math.random() * 40}%`,
                                width: `${100 + Math.random() * 200}px`,
                                height: `${40 + Math.random() * 60}px`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Skyline */}
            <div className={`absolute bottom-20 left-0 right-0 h-64 transition-opacity duration-1000 ${isNight ? "opacity-60" : "opacity-80"}`}>
                <Building width="60px" height="180px" left="5%" delay={0} />
                <Building width="80px" height="240px" left="15%" delay={1} />
                <Building width="50px" height="140px" left="25%" delay={2} />
                <Building width="100px" height="300px" left="35%" delay={0.5} />
                <Building width="70px" height="200px" left="50%" delay={1.5} />
                <Building width="90px" height="260px" left="65%" delay={2.5} />
                <Building width="60px" height="160px" left="80%" delay={1} />
                <Building width="50px" height="120px" left="90%" delay={3} />
            </div>

            {/* Street Lights */}
            <div className="absolute bottom-0 w-full h-full pointer-events-none">
                <StreetLight left="10%" isNight={isNight} />
                <StreetLight left="30%" isNight={isNight} />
                <StreetLight left="50%" isNight={isNight} />
                <StreetLight left="70%" isNight={isNight} />
                <StreetLight left="90%" isNight={isNight} />
            </div>

            {/* Road */}
            <div className={`absolute bottom-0 w-full h-32 border-t transition-colors duration-1000 ${isNight ? "bg-slate-900 border-slate-800" : "bg-slate-700 border-slate-600"}`}>
                {/* Lane Markings */}
                <div className="absolute top-1/2 w-full h-0 border-t-2 border-dashed border-slate-500/50" />

                {/* Ambient Road Glow (Night Only) */}
                {isNight && <div className="absolute inset-0 bg-yellow-900/10 mix-blend-overlay" />}
            </div>

            {/* Traffic Lights */}
            <TrafficLight x="20%" y="60%" delay={0} />
            <TrafficLight x="70%" y="60%" delay={2000} />

            {/* Vehicles - Lane 1 (Right to Left - Cars) */}
            <motion.div
                initial={{ x: "110vw" }}
                animate={{ x: "-10vw" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-16 flex items-center gap-2"
            >
                <div className="relative">
                    {/* Headlight Beam (Pointing Left) - Super Bright */}
                    {isNight && (
                        <>
                            <div className="absolute left-[-140px] top-[-5px] w-40 h-20 bg-gradient-to-l from-yellow-100/50 to-transparent transform rotate-3 blur-md"
                                style={{ clipPath: 'polygon(100% 40%, 0 0, 0 100%, 100% 60%)' }} />
                            {/* Core Beam */}
                            <div className="absolute left-[-100px] top-[2px] w-28 h-10 bg-gradient-to-l from-white/80 to-transparent transform rotate-3 blur-sm"
                                style={{ clipPath: 'polygon(100% 40%, 0 0, 0 100%, 100% 60%)' }} />
                        </>
                    )}

                    <Car className="w-8 h-8 text-red-600 fill-red-600/20 transform scale-x-[-1]" />
                </div>
                <div className="w-4 h-1 bg-red-600 blur-[2px]" />
            </motion.div>

            <motion.div
                initial={{ x: "110vw" }}
                animate={{ x: "-10vw" }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
                className="absolute bottom-16 flex items-center gap-2"
            >
                <div className="relative">
                    {isNight && (
                        <>
                            <div className="absolute left-[-140px] top-[-5px] w-40 h-20 bg-gradient-to-l from-yellow-100/50 to-transparent transform rotate-3 blur-md"
                                style={{ clipPath: 'polygon(100% 40%, 0 0, 0 100%, 100% 60%)' }} />
                            <div className="absolute left-[-100px] top-[2px] w-28 h-10 bg-gradient-to-l from-white/80 to-transparent transform rotate-3 blur-sm"
                                style={{ clipPath: 'polygon(100% 40%, 0 0, 0 100%, 100% 60%)' }} />
                        </>
                    )}
                    <Car className="w-8 h-8 text-orange-600 fill-orange-600/20 transform scale-x-[-1]" />
                </div>
                <div className="w-4 h-1 bg-orange-600 blur-[2px]" />
            </motion.div>

            {/* Vehicles - Lane 2 (Left to Right - Cars & Truck) */}
            <motion.div
                initial={{ x: "-10vw" }}
                animate={{ x: "110vw" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-4 flex items-center gap-2"
            >
                <div className="w-6 h-1 bg-blue-600 blur-[2px]" />
                <div className="relative">
                    <Car className="w-10 h-10 text-blue-600 fill-blue-600/20" />

                    {/* Headlight Beam (Pointing Right) - Super Bright */}
                    {isNight && (
                        <>
                            <div className="absolute right-[-160px] top-[-5px] w-44 h-24 bg-gradient-to-r from-yellow-100/50 to-transparent transform -rotate-3 blur-md"
                                style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)' }} />
                            <div className="absolute right-[-120px] top-[2px] w-32 h-14 bg-gradient-to-r from-white/80 to-transparent transform -rotate-3 blur-sm"
                                style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)' }} />
                        </>
                    )}
                </div>
            </motion.div>

            {/* Truck - Lane 2 (Slower) */}
            <motion.div
                initial={{ x: "-20vw" }}
                animate={{ x: "120vw" }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 0 }}
                className="absolute bottom-2 flex items-center gap-2"
            >
                <div className="w-6 h-1 bg-red-600 blur-[2px]" />
                <div className="relative">
                    <Truck className="w-16 h-16 text-cyan-200 fill-slate-600" />
                    {isNight && (
                        <>
                            <div className="absolute right-[-180px] top-[10px] w-48 h-28 bg-gradient-to-r from-yellow-100/60 to-transparent transform -rotate-2 blur-md"
                                style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)' }} />
                            <div className="absolute right-[-140px] top-[15px] w-36 h-16 bg-gradient-to-r from-white/90 to-transparent transform -rotate-2 blur-sm"
                                style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)' }} />
                        </>
                    )}
                </div>
            </motion.div>

            <motion.div
                initial={{ x: "-10vw" }}
                animate={{ x: "110vw" }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 8 }}
                className="absolute bottom-4 flex items-center gap-2"
            >
                <div className="w-6 h-1 bg-cyan-600 blur-[2px]" />
                <div className="relative">
                    <Car className="w-10 h-10 text-cyan-600 fill-cyan-600/20" />
                    {isNight && (
                        <>
                            <div className="absolute right-[-160px] top-[-5px] w-44 h-24 bg-gradient-to-r from-white/40 to-transparent transform -rotate-3 blur-md"
                                style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)' }} />
                            <div className="absolute right-[-120px] top-[2px] w-32 h-14 bg-gradient-to-r from-white/80 to-transparent transform -rotate-3 blur-sm"
                                style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)' }} />
                        </>
                    )}
                </div>
            </motion.div>

            {/* Vehicles - Bike Lane (Faster/Weaving) */}
            <motion.div
                initial={{ x: "-10vw", y: 0 }}
                animate={{ x: "110vw" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute bottom-24 flex items-center gap-1 text-purple-500"
            >
                <div className="w-2 h-0.5 bg-purple-500 blur-[1px]" />
                <Bike className="w-6 h-6" />
            </motion.div>

            <motion.div
                initial={{ x: "110vw", y: 0 }}
                animate={{ x: "-10vw", y: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 4 }}
                className="absolute bottom-20 flex items-center gap-1 text-pink-500"
            >
                <Bike className="w-6 h-6 transform scale-x-[-1]" />
                <div className="w-2 h-0.5 bg-pink-500 blur-[1px]" />
            </motion.div>

            {/* Fog/Atmosphere */}
            {isNight && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            )}

            {/* Sound */}
            <audio autoPlay loop muted={false} id="traffic-sound">
                <source src="/traffic-sound.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}
