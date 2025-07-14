import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Video, 
  Users, 
  Home, 
  Activity, 
  Eye, 
  Timer,
  TrendingUp,
  Calendar
} from "lucide-react";

const FocusDashboard = () => {
  const focusScore = 87;
  const currentStreak = 12;
  const todayMinutes = 145;

  const meetingOptions = [
    {
      title: "Join Google Meet",
      description: "Start or join a meeting with focus tracking",
      icon: Video,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      action: "Connect"
    },
    {
      title: "Join Zoom Meeting", 
      description: "Professional meetings with productivity insights",
      icon: Users,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      action: "Connect"
    },
    {
      title: "Personal Focus Room",
      description: "Distraction-free environment for deep work",
      icon: Home,
      color: "bg-gradient-primary",
      action: "Enter"
    }
  ];

  const stats = [
    {
      label: "Today's Focus",
      value: `${todayMinutes}min`,
      icon: Timer,
      trend: "+12%"
    },
    {
      label: "Focus Streak",
      value: `${currentStreak} days`,
      icon: TrendingUp,
      trend: "+3 days"
    },
    {
      label: "Distractions",
      value: "3 blocked",
      icon: Eye,
      trend: "-67%"
    },
    {
      label: "Sessions",
      value: "5 today",
      icon: Calendar,
      trend: "+2"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 mb-4">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Live Dashboard</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Focus Command Center
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time insights and smart meeting integration
          </p>
        </div>

        {/* Main Focus Score Card */}
        <Card className="mb-8 bg-gradient-card border-border/50 backdrop-blur-sm shadow-glow-accent/10">
          <CardHeader className="text-center pb-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-glow-primary">
              <Brain className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl text-foreground">Current Focus Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {focusScore}%
            </div>
            <Badge 
              variant="secondary" 
              className="mb-6 bg-primary/20 text-primary border-primary/30"
            >
              Excellent Focus
            </Badge>
            <Progress value={focusScore} className="w-full max-w-md mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Your focus is at peak performance. Keep up the great work!
            </p>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-glow-accent/10 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-accent font-medium">{stat.trend}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Meeting Options */}
        <div className="grid md:grid-cols-3 gap-6">
          {meetingOptions.map((option, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-glow-accent/20 transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${option.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  size="lg"
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusDashboard;