import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VehicleFleet } from "@/components/VehicleFleet";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <VehicleFleet />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
