import { Briefcase, CalendarDays, CheckCircle, MapPin } from "lucide-react";
import Badge from "./ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Experience = () => {
  const experiences = [
    {
      company: "Baraka FinTech Limited",
      position: "Software Engineer",
      duration: "01 July, 2024 - Present",
      location: "On-Site",
      description: [
        "Designed & developed scalable frontend architecture for web applications ensuring smooth user experience.",
        "Integrated backend services with frontend systems to enable efficient & reliable data flow across the application.",
        "Built responsive & user-friendly interfaces while optimizing performance & ensuring cross-device compatibility.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Metarial UI",
        "Ant Design",
      ],
      type: "Full-time",
    },
  ];

  return (
    <section
      id="experience"
      className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-violet-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white via-slate-50/50 to-violet-50/30 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-3">
                    <CardTitle className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded flex items-center justify-center shadow-lg">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-emerald-300 text-emerald-700 bg-emerald-50 font-medium">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-700">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-violet-200 text-violet-700 hover:bg-violet-50 transition-colors bg-violet-50/50 font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
