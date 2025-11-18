import { 
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaGitAlt, FaServer 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiFirebase, SiRedux, SiTypescript, SiNextdotjs, SiBootstrap, SiJenkins, SiSwagger 
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-300" /> },
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-700" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-700" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
  { name: "Jenkins", icon: <SiJenkins size={40} className="text-red-500" /> },
  { name: "Swagger", icon: <SiSwagger size={40} className="text-green-600" /> },
  { name: "Server / Cloud", icon: <FaServer size={40} className="text-gray-400" /> },
];

export default function Skills() {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-10 pt-24 pb-20 text-white">
     <div className="max-w-4xl mx-auto text-center mb-16">
  <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Yeteneklerim
  </h1>
  <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
    İşte üzerinde çalıştığım teknolojiler ve becerilerim.
  </p>
</div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300 opacity-0 animate-skillFadeIn"
            style={{
              animationDelay: `${idx * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            {skill.icon}
            <span className="text-sm sm:text-base text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Animasyon */}
      <style>
        {`
          @keyframes skillFadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-skillFadeIn {
            animation-name: skillFadeIn;
            animation-duration: 0.7s;
          }
        `}
      </style>
    </section>
  );
}
