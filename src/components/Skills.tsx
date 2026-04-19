import { Cloud, Code, Database, Palette, Server, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-yellow-400 to-orange-500",
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
    },

    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-blue-400 to-cyan-500",
      skills: [
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          bg: "bg-white p-1 rounded",
        },
        {
          name: "Redux Toolkit",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
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
          name: "Ant Design",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
        },
        {
          name: "Material UI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
      ],
    },

    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-400 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          bg: "bg-white p-1 rounded",
        },
        {
          name: "REST APIs",
          logo: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
        },
        {
          name: "CORS",
          logo: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png",
        },
        {
          name: "JWT Authentication",
          logo: "https://jwt.io/img/pic_logo.svg",
        },
      ],
    },

    {
      title: "Databases & ORM",
      icon: Database,
      color: "from-purple-400 to-violet-500",
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
    },

    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-indigo-400 to-blue-500",
      skills: [
        {
          name: "Linux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
        },
        {
          name: "NGINX",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "GitHub Actions",
          logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubactions.svg",
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
      ],
    },

    {
      title: "Developer Tools",
      icon: Settings,
      color: "from-pink-400 to-rose-500",
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
          name: "Swagger",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[#0b0f1a] text-white">
      {/* Floating Glow Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <Card
              key={i}
              className="
                relative overflow-hidden
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-3xl
                shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                hover:scale-[1.03]
                transition duration-300
              ">
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

              <CardHeader className="text-center relative">
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}>
                  <category.icon className="text-white" />
                </div>

                <CardTitle className="text-white text-lg">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <div className="grid grid-cols-3 gap-5">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 group">
                      <div
                        className="
                        w-14 h-14
                        flex items-center justify-center
                        bg-white/10 backdrop-blur-md
                        border border-white/20
                        rounded-2xl
                        group-hover:bg-white/20
                        transition
                      ">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          loading="lazy"
                          decoding="async"
                          className={`w-8 h-8 object-contain ${skill.bg || ""}`}
                        />
                      </div>

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
