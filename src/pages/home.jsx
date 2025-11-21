import { FaArrowRight, FaEnvelope, FaGithub, FaPhone, FaReact, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const sections = [
    {
      title: "Hakkımda",
      description: "Kısa bir biyografi ve hakkımda bilgiler.",
      to: "about",
      icon: <FaUser size={40} className="hover:bg-blue-500 bg-blue-400 rounded-full transition-colors duration-500" />,
    },
    {
      title: "Yetenekler",
      description: "Üzerinde çalıştığım teknolojiler ve becerilerim.",
      to: "skills",
      icon: <FaReact size={40} className="hover:bg-white/10 text-blue-400 rounded-full transition-colors duration-500" />,
    },
    {
      title: "Projelerim",
      description: "Tamamladığım projelerin birkaçı ve kullandığım teknolojiler.",
      to: "projects",
      icon: <FaGithub size={40} className="hover:bg-blue-500 rounded-full text-white transition-colors duration-500" />,
    },
    {
      title: "İletişim",
      description: "Bana ulaşabileceğiniz iletişim kanalları.",
      to: "contact",
      icon: <FaPhone size={40} className="hover:bg-blue-500 rounded-full bg-white/10 transition-colors duration-500" />,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pt-24 pb-10 text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-white via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Merhaba Hoş Geldiniz
        </h1>
        <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
          Benimle ilgili tüm bilgileri ve projeleri aşağıdaki bölümlerden keşfedebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {sections.map((section, idx) => (
          <Link
            key={idx}
            to={section.to}
            className="group relative flex flex-col justify-between p-8 rounded-3xl overflow-hidden shadow-xl border border-white/10 transition-all transform duration-500 hover:scale-105 bg-white/5 backdrop-blur-md opacity-0 animate-about-fade"
            style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-4 mb-6">
              {section.icon}
              <h2 className="text-3xl sm:text-4xl font-bold">{section.title}</h2>
            </div>
            <p className="text-white/90 text-lg sm:text-xl">{section.description}</p>
            <div className="mt-6 flex items-center gap-3 text-white font-semibold group-hover:text-white/90 transition-all duration-500">
              <span>İncelemek için</span>
              <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-2" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
