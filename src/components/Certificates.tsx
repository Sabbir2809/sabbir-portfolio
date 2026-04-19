import { Award, Shield } from "lucide-react";
import Badge from "./ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development With MERN",
      provider: "Batch-3",
      certificateId: "C6676",
      icon: "/ostad_logo.jpeg",
      color: "from-yellow-500 to-yellow-500",
      description: "Comprehensive MERN stack development course",
    },
    {
      title: "Next Level Full Stack Track Web Development",
      provider: "Batch-2",
      certificateId: "PHlevel2-batch2-fullstackL2B2-00421004",
      icon: "/programminghero_logo.jpeg",
      color: "from-purple-500 to-indigo-500",
      description: "Advanced full-stack development program",
    },
  ];

  return (
    <section id="certificates" className="py-8 md:py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Certificates
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional certifications and completed courses in web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <img src={cert.icon} alt={cert.title} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {cert.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">
                      Certificate ID :{" "}
                      <Badge
                        variant="outline"
                        className="border-green-300 text-green-800 bg-white font-mono text-sm"
                      >
                        {cert.certificateId}
                      </Badge>
                    </span>
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

export default Certificates;
