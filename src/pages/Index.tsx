import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FocusDashboard from "@/components/FocusDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <FocusDashboard />
      </main>
    </div>
  );
};

export default Index;
