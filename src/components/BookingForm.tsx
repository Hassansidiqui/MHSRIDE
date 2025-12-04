"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Car } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookingForm() {
    const [activeTab, setActiveTab] = useState<"distance" | "hourly">("distance");

    return (
        <div className="glass p-6 md:p-8 rounded-3xl w-full max-w-lg shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-muted/50 p-1 rounded-xl">
                <button
                    onClick={() => setActiveTab("distance")}
                    className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                        activeTab === "distance"
                            ? "bg-white text-primary shadow-sm"
                            : "text-muted-foreground hover:text-primary"
                    )}
                >
                    Distance
                </button>
                <button
                    onClick={() => setActiveTab("hourly")}
                    className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                        activeTab === "hourly"
                            ? "bg-white text-primary shadow-sm"
                            : "text-muted-foreground hover:text-primary"
                    )}
                >
                    Hourly
                </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Locations */}
                <div className="space-y-4">
                    <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                        <input
                            type="text"
                            placeholder="Pickup Location"
                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all placeholder:text-muted-foreground/70"
                        />
                    </div>
                    <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary group-focus-within:text-secondary transition-colors" />
                        <input
                            type="text"
                            placeholder="Dropoff Location"
                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all placeholder:text-muted-foreground/70"
                        />
                    </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                        <input
                            type="date"
                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-muted-foreground"
                        />
                    </div>
                    <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                        <input
                            type="time"
                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-muted-foreground"
                        />
                    </div>
                </div>

                {/* Vehicle Type */}
                <div className="relative group">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                    <select className="w-full pl-12 pr-4 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-muted-foreground appearance-none">
                        <option value="" disabled selected>Select Vehicle Type</option>
                        <option value="standard">Standard Sedan</option>
                        <option value="premium">Premium Luxury</option>
                        <option value="van">Family Van</option>
                    </select>
                </div>

                <button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-4 rounded-xl shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transform hover:-translate-y-0.5 transition-all duration-200 mt-2">
                    Book Your Ride
                </button>
            </form>
        </div>
    );
}
