import { BookingForm } from "@/components/BookingForm";
import { MapBackground } from "@/components/MapBackground";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <MapBackground />

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
