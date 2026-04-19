import { Briefcase, Coffee, ExternalLink, Sprout } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ZuiMi Restaurant",
      description:
        "A full-stack restaurant management system allowing customers to browse menus, place orders, and submit reviews, while admins manage food items, categories, orders, and reviews.",
      features: [
        "Modern responsive UI",
        "Category-based food browsing",
        "Cart & order system",
        "Admin dashboard (CRUD)",
        "JWT authentication",
        "Cloudinary image upload",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "MongoDB",
        "Cloudinary",
      ],
      icon: Coffee,
      link: "https://zuimi-restaurant.vercel.app",
      color: "red",
    },
    {
      id: 2,
      title: "RBAC Project Manager",
      description:
        "Role-based project management system with invitation-only onboarding and full admin control over users and projects.",
      features: [
        "Invite-based system",
        "Role-based access control",
        "User management",
        "Project CRUD",
        "Protected routes",
        "Optimistic UI updates",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Context API",
        "React Router",
        "React Query",
        "Axios",
      ],
      icon: Briefcase,
      link: "https://rbac-project-manager-frontend.vercel.app",
      color: "blue",
    },
    {
      id: 3,
      title: "Farmers Market",
      description:
        "A farmer support platform with auction, donations, investment and microcredit system.",
      features: [
        "Auction system",
        "Donation module",
        "Investment system",
        "Microcredit service",
        "Responsive UI",
        "Form validation",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "React Hook Form",
      ],
      icon: Sprout,
      link: "https://farmers.nosyndicate.com",
      color: "green",
    },
  ];

  const colorMap: Record<string, string> = {
    red: "from-red-500 to-rose-500",
    blue: "from-blue-500 to-indigo-500",
    green: "from-green-500 to-emerald-500",
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            My Projects
          </h2>
          <div className="w-28 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
              {/* Top gradient bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${colorMap[project.color]}`}
              />

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        colorMap[project.color]
                      } flex items-center justify-center text-white shadow-md`}>
                      <project.icon className="w-6 h-6" />
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-black transition">
                      {project.title}
                    </CardTitle>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                        {t}
                      </span>
                    ))}
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

export default Projects;
