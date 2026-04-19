import { Briefcase, Coffee, ExternalLink, Sprout } from "lucide-react";
import Badge from "./ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ZuiMi Restaurant",
      description:
        "A full-stack restaurant management system allowing customers to browse menus, place orders, and submit reviews, while admins manage food items, categories, orders, and reviews.",
      features: [
        "Modern, responsive UI with mobile-first design",
        "Food browsing by category with ratings and reviews",
        "Shopping cart and order placement",
        "Admin dashboard with CRUD for foods and categories",
        "JWT authentication and role-based access",
        "Image uploads with Cloudinary",
      ],
      technologies: [
        "Next.js",
        "React ",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "MongoDB + Mongoose",
        "Cloudinary",
        "JWT + bcrypt",
      ],
      icon: Coffee,
      link: "https://zuimi-restaurant.vercel.app",
      color: "red",
    },
    {
      id: 2,
      title: "RBAC Project Manager",
      description:
        "Frontend application for a role-based project management system with invitation-only user onboarding, connecting to a backend API for authentication and project/user management.",
      features: [
        "Invite-based registration flow",
        "JWT authentication and role-based UI",
        "User management for admins (invite, role changes, activate/deactivate)",
        "Project management with create, edit, soft delete",
        "Protected routes with loading and error states",
        "Optimistic UI updates",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Context API",
        "React Router DOM",
        "Axios",
        "React Query",
        "js-cookie",
        "React Toastify",
      ],
      icon: Briefcase,
      link: "https://rbac-project-manager-frontend.vercel.app",
      color: "blue",
    },
    {
      id: 3,
      title: "Farmers Market",
      description:
        "A farmer support platform providing auction, help center, donations, investment, and microcredit services with a responsive and interactive user experience.",
      features: [
        "Farmer product auction system",
        "Help Center for farmer support",
        "Donation and investment modules",
        "Microcredit services for farmers",
        "Responsive and interactive UI",
        "Form handling with validation",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "TanStack Query",
        "React Hook Form",
      ],
      icon: Sprout,
      link: "https://farmers.nosyndicate.com",
      color: "green",
    },
  ];

  const colorMap: Record<string, string> = {
    red: "from-red-500 to-red-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              My Projects
            </h2>
          </div>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white rounded-xl"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${
                        colorMap[project.color]
                      } rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-7 h-7 text-white drop-shadow-sm" />
                    </div>
                    <CardTitle
                      className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                        project.color === "red"
                          ? "from-red-600 to-pink-500"
                          : project.color === "blue"
                          ? "from-blue-600 to-indigo-500"
                          : "from-green-600 to-teal-500"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  {/* External Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-700 p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 hover:from-blue-200 hover:to-purple-200 transform hover:scale-105 transition-all duration-200"
                      >
                        {tech}
                      </Badge>
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
