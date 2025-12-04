import Image from "next/image";
import { Check, User, Briefcase, Car } from "lucide-react";

const vehicles = [
    {
        name: "Standard Sedan",
        price: "$25",
        color: "bg-blue-500",
        features: ["4 Passengers", "2 Luggage", "Air Conditioning"],
        recommended: false,
    },
    {
        name: "Premium Luxury",
        price: "$45",
        color: "bg-purple-600",
        features: ["4 Passengers", "3 Luggage", "Leather Seats", "Free Wi-Fi"],
        recommended: true,
    },
    {
        name: "Family Van",
        price: "$60",
        color: "bg-amber-500",
        features: ["7 Passengers", "5 Luggage", "Extra Legroom"],
        recommended: false,
    },
];

export function VehicleFleet() {
    return (
        <section id="vehicles" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Choose Your Ride</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Select the perfect vehicle for your journey. Whether it's a quick trip or a luxury experience, we have you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle, index) => (
                        <div
                            key={index}
                            className={`relative bg-card rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${vehicle.recommended ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}
                        >
                            {vehicle.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            {/* Image Placeholder */}
                            <div className={`aspect-video relative mb-6 rounded-2xl flex items-center justify-center overflow-hidden group ${vehicle.color} bg-opacity-10`}>
                                <div className={`absolute inset-0 ${vehicle.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                <Car className={`w-24 h-24 ${vehicle.color.replace('bg-', 'text-')} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                                <div className="absolute bottom-2 right-2 text-xs font-mono opacity-50">MHSRIDE FLEET</div>
                            </div>

                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <h3 className="text-xl font-bold">{vehicle.name}</h3>
                                    <p className="text-sm text-muted-foreground">Starting from</p>
                                </div>
                                <div className="text-2xl font-bold text-primary">{vehicle.price}</div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {vehicle.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="bg-primary/10 p-1 rounded-full">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${vehicle.recommended ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
                                Select Vehicle
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
