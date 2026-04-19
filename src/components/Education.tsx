import { Award, CalendarDays, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Education = () => {
  const education = [
    {
      institution: "Daffodil International University",
      degree: "B.Sc. in Computer Science & Engineering",
      duration: "2019 - 2023",
      grade: "CGPA: 3.53 out of 4.0",
      level: "Bachelor's",
      logo: "/diu_logo.jpeg",
    },
    {
      institution: "Savar Model College",
      degree: "Higher Secondary Certificate",
      duration: "2015 - 2017",
      grade: "GPA: 4.50 out of 5.0",
      level: "Higher Secondary",
      logo: "/smc_logo.jpeg",
    },
    {
      institution: "Shahorail High School",
      degree: "Secondary School Certificate",
      duration: "2013 - 2015",
      grade: "GPA: 4.33 out of 5.0",
      level: "Secondary",
      logo: "/shc_logo.jpg",
    },
  ];

  return (
    <section className="py-8 md:py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Education
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-r from-white to-indigo-50"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br flex items-center justify-center">
                      <img src={edu.logo} alt={edu.institution} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        {edu.institution}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-indigo-600 mt-1">
                        <Award className="w-3 h-3" />
                        <span>{edu.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600 bg-indigo-100 px-4 py-2 rounded-lg">
                    <CalendarDays className="w-4 h-4" />
                    <span className="font-semibold">({edu.duration})</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-lg text-gray-700 font-medium">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                      {edu.grade}
                    </p>
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

export default Education;
