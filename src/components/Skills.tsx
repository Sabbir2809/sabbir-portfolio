import { Code, Database, Palette, Server, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
      icon: Code,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React JS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "Next JS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          bg: "bg-white p-1 rounded", // fix visibility
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
          name: "Material UI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
      ],
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node JS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express JS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          bg: "bg-white p-1 rounded", // fix dark icon
        },
      ],
      icon: Server,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database & ORM",
      skills: [
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Mongoose",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Prisma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
      ],
      icon: Database,
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          bg: "bg-white p-1 rounded",
        },
        {
          name: "Bitbucket",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
        },
        {
          name: "Postman",
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Vercel",
          logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
          bg: "bg-white p-1 rounded",
        },
        {
          name: "Netlify",
          logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
      ],
      icon: Settings,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-14 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 mt-2">Technologies I work with</p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, i) => (
            <Card
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl hover:scale-105 transition">
              <CardHeader className="text-center">
                <div
                  className={`w-14 h-14 mx-auto bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-3`}>
                  <category.icon className="text-white" />
                </div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 group">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 flex items-center justify-center 
                      bg-white/10 rounded-xl backdrop-blur
                      group-hover:scale-110 transition">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-8 h-8 object-contain ${skill.bg || ""}`}
                        />
                      </div>

                      {/* Name */}
                      <p className="text-xs text-gray-300 text-center">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
