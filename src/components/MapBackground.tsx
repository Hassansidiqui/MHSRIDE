"use client";

import { motion } from "framer-motion";

export function MapBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-900">
            {/* City Skyline (CSS Art) */}
            <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30 pointer-events-none">
                <div className="absolute bottom-0 left-[10%] w-20 h-40 bg-slate-700" />
                <div className="absolute bottom-0 left-[15%] w-16 h-56 bg-slate-600" />
                <div className="absolute bottom-0 left-[20%] w-24 h-32 bg-slate-800" />
                <div className="absolute bottom-0 left-[30%] w-28 h-48 bg-slate-700" />
                <div className="absolute bottom-0 left-[45%] w-32 h-64 bg-slate-600" />
                <div className="absolute bottom-0 left-[60%] w-24 h-40 bg-slate-800" />
                <div className="absolute bottom-0 left-[75%] w-20 h-52 bg-slate-700" />
                <div className="absolute bottom-0 left-[85%] w-28 h-36 bg-slate-600" />
                <div className="absolute bottom-0 w-full h-12 bg-slate-900 z-10" /> {/* Ground blending */}
            </div>

            {/* Abstract Map Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(1000px) rotateX(60deg) scale(2)',
                    transformOrigin: 'top center'
                }}
            />

            {/* Traffic Animation Container */}
            <div className="absolute inset-0">
                {/* --- Lane 1: Left to Right (Fast) --- */}
                <motion.div
                    initial={{ x: "-20%", y: "40%" }}
                    animate={{ x: "120%", y: "40%" }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-blue-400 rounded-full blur-md shadow-[0_0_20px_rgba(59,130,246,1)]" />
                </motion.div>

                <motion.div
                    initial={{ x: "-20%", y: "42%" }}
                    animate={{ x: "120%", y: "42%" }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-3 bg-cyan-400 rounded-full blur-md" />
                </motion.div>

                {/* --- Lane 2: Right to Left (Medium) --- */}
                <motion.div
                    initial={{ x: "120%", y: "50%" }}
                    animate={{ x: "-20%", y: "50%" }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-l from-transparent via-red-500 to-transparent blur-sm"
                >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-3 bg-red-500 rounded-full blur-md shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                </motion.div>

                <motion.div
                    initial={{ x: "120%", y: "52%" }}
                    animate={{ x: "-20%", y: "52%" }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
                    className="absolute top-0 left-0 w-28 h-1 bg-gradient-to-l from-transparent via-orange-500 to-transparent blur-sm"
                >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-3 bg-orange-500 rounded-full blur-md" />
                </motion.div>

                {/* --- Lane 3: Bikes (Weaving/Fast) --- */}
                <motion.div
                    initial={{ x: "-10%", y: "60%" }}
                    animate={{ x: "110%", y: ["60%", "55%", "60%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm"
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full blur-md shadow-[0_0_15px_rgba(168,85,247,1)]" />
                </motion.div>

                <motion.div
                    initial={{ x: "110%", y: "65%" }}
                    animate={{ x: "-10%", y: ["65%", "70%", "65%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 3 }}
                    className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-l from-transparent via-pink-500 to-transparent blur-sm"
                >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full blur-md shadow-[0_0_15px_rgba(236,72,153,1)]" />
                </motion.div>

                {/* --- Distant Traffic (Slow/Small) --- */}
                <motion.div
                    initial={{ x: "-10%", y: "35%" }}
                    animate={{ x: "110%", y: "35%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-20 h-0.5 bg-white/20 blur-sm"
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full blur-[1px]" />
                </motion.div>
            </div>

            {/* Decorative Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000" />
        </div>
    );
}
