import { Award, Medal, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Achievements = () => {
  const achievements = [
    {
      title: "DIU Take-Off Programming Contest",
      position: "4th Position",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      description: "Competitive programming contest",
    },
    {
      title: "DIU CSE Fest-2019",
      position: "Hunt Champion",
      icon: Medal,
      color: "from-green-400 to-emerald-500",
      description: "Campus-wide technical competition",
    },
    {
      title: "Technical Article Writing Contest 2023",
      position: "8th Position",
      icon: Award,
      color: "from-blue-400 to-indigo-500",
      description: "Technical writing competition",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-8 md:py-12 px-4 bg-gradient-to-br from-yellow-50 to-orange-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Achievements
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognition and awards in competitive programming and technical
            excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm group"
            >
              <CardHeader className="pb-4">
                <div
                  className={`mx-auto w-20 h-20 bg-gradient-to-br ${achievement.color} rounded flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                  {achievement.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  {achievement.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl">
                  <p className="text-blue-600 font-bold text-xl">
                    {achievement.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
