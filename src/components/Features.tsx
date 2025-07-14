import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Camera, Users, Zap, Shield, BarChart3 } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Real-time Focus Analysis",
      description: "Advanced AI algorithms continuously monitor your focus levels and provide instant feedback to optimize your productivity.",
      gradient: "from-primary/20 to-accent/10"
    },
    {
      icon: Camera,
      title: "Distraction Detection",
      description: "Smart webcam integration identifies and alerts you to potential distractions in your environment before they impact your flow.",
      gradient: "from-accent/20 to-primary/10"
    },
    {
      icon: Users,
      title: "Meeting Integration", 
      description: "Seamlessly join Google Meet or Zoom calls with focus tracking enabled to maintain productivity during virtual meetings.",
      gradient: "from-primary/15 to-secondary/20"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Get notified immediately when your focus drops below optimal levels.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All analysis happens locally on your device - your data never leaves your computer.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Focus Analytics",
      description: "Track your productivity patterns with detailed insights and progress reports.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Everything you need to</span><br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">stay focused</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how NEUROFOCUSAI transforms your workspace into a productivity powerhouse
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-glow-accent/20 transition-all duration-300 group">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-glow-primary/50">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <Button variant="outline" size="sm" className="border-border/50 hover:bg-primary/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-glow-accent/10 transition-all duration-300">
              <div className={`w-16 h-16 rounded-full bg-card/50 flex items-center justify-center mx-auto mb-4 ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;