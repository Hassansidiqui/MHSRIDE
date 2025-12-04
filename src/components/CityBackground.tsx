"use client";

import { motion } from "framer-motion";
import { Car, Bike } from "lucide-react";
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
    <div className="absolute bottom-0 bg-slate-800 border-t border-x border-slate-700" style={{ width, height, left }}>
        <div className="grid grid-cols-3 gap-1 p-1">
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 5 + delay,
                        repeatType: "reverse"
                    }}
                    className="w-full h-2 bg-yellow-100/20 rounded-[1px]"
                />
            ))}
        </div>
    </div>
);

export function CityBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-950">
            {/* Stars/Night Sky */}
            <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 50}%`,
                            left: `${Math.random() * 100}%`,
                            width: Math.random() * 2 + 1 + 'px',
                            height: Math.random() * 2 + 1 + 'px',
                            opacity: Math.random()
                        }}
                    />
                ))}
            </div>

            {/* Moon */}
            <div className="absolute top-10 right-20 w-16 h-16 bg-blue-100 rounded-full blur-sm shadow-[0_0_40px_rgba(255,255,255,0.2)] opacity-80" />

            {/* Skyline */}
            <div className="absolute bottom-20 left-0 right-0 h-64 opacity-60">
                <Building width="60px" height="180px" left="5%" delay={0} />
                <Building width="80px" height="240px" left="15%" delay={1} />
                <Building width="50px" height="140px" left="25%" delay={2} />
                <Building width="100px" height="300px" left="35%" delay={0.5} />
                <Building width="70px" height="200px" left="50%" delay={1.5} />
                <Building width="90px" height="260px" left="65%" delay={2.5} />
                <Building width="60px" height="160px" left="80%" delay={1} />
                <Building width="50px" height="120px" left="90%" delay={3} />
            </div>

            {/* Road */}
            <div className="absolute bottom-0 w-full h-32 bg-slate-900 border-t border-slate-800">
                {/* Lane Markings */}
                <div className="absolute top-1/2 w-full h-0 border-t-2 border-dashed border-slate-700/50" />
            </div>

            {/* Traffic Lights */}
            <TrafficLight x="20%" y="60%" delay={0} />
            <TrafficLight x="70%" y="60%" delay={2000} />

            {/* Vehicles - Lane 1 (Right to Left - Cars) */}
            <motion.div
                initial={{ x: "110vw" }}
                animate={{ x: "-10vw" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-16 flex items-center gap-2 text-red-500/80"
            >
                <Car className="w-8 h-8 fill-red-500/20" />
                <div className="w-4 h-1 bg-red-500 blur-[2px]" /> {/* Taillight trail */}
            </motion.div>

            <motion.div
                initial={{ x: "110vw" }}
                animate={{ x: "-10vw" }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
                className="absolute bottom-16 flex items-center gap-2 text-orange-500/80"
            >
                <Car className="w-8 h-8 fill-orange-500/20" />
                <div className="w-4 h-1 bg-orange-500 blur-[2px]" />
            </motion.div>

            {/* Vehicles - Lane 2 (Left to Right - Cars) */}
            <motion.div
                initial={{ x: "-10vw" }}
                animate={{ x: "110vw" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-4 flex flex-row-reverse items-center gap-2 text-blue-500/80"
            >
                <Car className="w-10 h-10 fill-blue-500/20 transform scale-x-[-1]" />
                <div className="w-6 h-1 bg-blue-500 blur-[2px]" /> {/* Headlight trail */}
            </motion.div>

            <motion.div
                initial={{ x: "-10vw" }}
                animate={{ x: "110vw" }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 8 }}
                className="absolute bottom-4 flex flex-row-reverse items-center gap-2 text-cyan-500/80"
            >
                <Car className="w-10 h-10 fill-cyan-500/20 transform scale-x-[-1]" />
                <div className="w-6 h-1 bg-cyan-500 blur-[2px]" />
            </motion.div>

            {/* Vehicles - Bike Lane (Faster/Weaving) */}
            <motion.div
                initial={{ x: "-10vw", y: 0 }}
                animate={{ x: "110vw", y: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute bottom-24 flex flex-row-reverse items-center gap-1 text-purple-400/80"
            >
                <Bike className="w-6 h-6 transform scale-x-[-1]" />
                <div className="w-2 h-0.5 bg-purple-400 blur-[1px]" />
            </motion.div>

            <motion.div
                initial={{ x: "110vw", y: 0 }}
                animate={{ x: "-10vw", y: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 4 }}
                className="absolute bottom-20 flex items-center gap-1 text-pink-400/80"
            >
                <Bike className="w-6 h-6" />
                <div className="w-2 h-0.5 bg-pink-400 blur-[1px]" />
            </motion.div>

            {/* Fog/Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
        </div>
    );
}
