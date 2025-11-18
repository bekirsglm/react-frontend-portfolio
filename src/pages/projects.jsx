import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "X (Twitter) Clone",
    description:
      "Gerçek zamanlı tweet paylaşımı, düzenleme, silme, beğenme ve medya yükleme özelliklerine sahip modern bir X (Twitter) klonu.",
    gif: "/gifler/proje1.gif",
    tech: ["React", "Firebase", "TailwindCSS", "Context API", "React Router"],
    github: "https://github.com/bekirsglm/x-twitter-clone",
  },
  {
    title: "COVID-19 Küresel Harita",
    description:
      "Dünya genelindeki COVID-19 verilerini interaktif harita üzerinde görselleştiren uygulama.",
    gif: "/gifler/proje2.gif",
    tech: ["React", "React Simple Maps", "RapidAPI", "TailwindCSS", "Axios"],
    github: "https://github.com/bekirsglm/covid-map",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Gerçek zamanlı mesajlaşma uygulaması, kullanıcı giriş & kayıt, güvenli chat odaları.",
    gif: "/gifler/proje3.gif",
    tech: ["React", "Firebase", "TailwindCSS", "Context API", "React Router"],
    github: "https://github.com/bekirsglm/chat-app",
  },
  {
    title: "React Netflix Clone",
    description:
      "Netflix benzeri web uygulaması, API ile dinamik veri, video oynatma ve responsive tasarım.",
    gif: "/gifler/proje4.gif",
    tech: ["React", "Redux", "Axios", "React Router", "TailwindCSS", "Vite"],
    github: "https://github.com/bekirsglm/netflix-clone",
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-10 pt-24 pb-20 text-white">
      {/* Başlık */}
      <div className="max-w-4xl mx-auto text-center mb-16">
  <h1 className="text-4xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-white via-purple-500 to-pink-500 bg-clip-text text-transparent leading-snug inline-block">
    Projelerim Hakkında
  </h1>
  <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
    Projelerimden birkaçından hangi teknolojileri kullandığımı ve projelerin
    özelliklerini inceleyebilirsiniz.
  </p>
</div>


      {/* Projeler Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300 opacity-0 animate-fadeIn flex flex-col"
            style={{
              animationDelay: `${idx * 0.2}s`,
              animationFillMode: "forwards",
            }}
          >
            {/* GIF / Görsel */}
            <div className="w-full h-64 bg-black/20">
              <img
                src={project.gif}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* İçerik */}
            <div className="p-5 flex flex-col flex-1">
              <div>
                <h2 className="text-2xl sm:text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-white/80 text-base">{project.description}</p>

                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-white/80 text-xs sm:text-sm px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub link en altta */}
              <div className="mt-auto pt-4 flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-pink-500 transition-colors cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-bold">İncelemek için</span>
                  <FaGithub
                    size={28}
                    className="bg-white/20 p-1.5 rounded-full transition-all duration-300 group-hover:text-pink-500 group-hover:shadow-[0_0_8px_#ff00ff]"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tüm projeler GitHub linki */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-xl sm:text-xl font-bold mb-3 hover:text-pink-600 transition-colors">
          TÜM PROJELERİMİ GÖRMEK İÇİN
        </h1>
        <a
          href="https://github.com/bekirsglm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/50 hover:text-pink-600 transition-colors text-lg"
        >
          <FaGithub size={28} />
          GİTHUB'DA İNCELE
        </a>
      </div>

      {/* Fade-in Animasyon */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation-name: fadeIn;
            animation-duration: 0.8s;
          }
        `}
      </style>
    </section>
  );
}
