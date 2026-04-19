import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sabbirto13@gmail.com",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+88 01829723692",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: MessageCircle,
      title: "Social",
      value: "Connect with me",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-purple-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting
            projects. Feel free to reach out if you'd like to collaborate!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg ${method.bgColor}/50 backdrop-blur-sm rounded-2xl`}>
              <CardHeader className="pb-4 px-4">
                <div
                  className={`mx-auto w-16 h-16 bg-gradient-to-br ${method.color} rounded flex items-center justify-center mb-3 shadow-lg`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-800">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                {method.title === "Social" ? (
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/sabbir2809"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center hover:bg-blue-200 transition-all hover:scale-110 shadow-md">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href="https://github.com/Sabbir2809"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center hover:bg-slate-200 transition-all hover:scale-110 shadow-md">
                      <Github className="w-5 h-5 text-slate-700" />
                    </a>
                    <a
                      href="https://facebook.com/Sabbir2809"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center hover:bg-blue-200 transition-all hover:scale-110 shadow-md">
                      <Facebook className="w-5 h-5 text-blue-700" />
                    </a>
                  </div>
                ) : (
                  <p className="text-slate-600 font-medium">{method.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
