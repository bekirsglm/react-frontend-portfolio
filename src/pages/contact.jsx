const icons = {
  github: (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-white group-hover:fill-fuchsia-700 transition-colors"
      aria-hidden
    >
      <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.31-.54-1.56.12-3.24 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.68.25 2.93.12 3.24.77.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.64-5.47 5.94.43.36.82 1.08.82 2.18v3.23c0 .32.22.7.82.58A12 12 0 0 0 12 0Z" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-white/80 group-hover:fill-fuchsia-700 transition-colors"
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.7v1.64h.05c.52-.98 1.8-2 3.7-2 4 0 4.7 2.63 4.7 6.05V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H9z" />
    </svg>
  ),
  mail: (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 stroke-white/80 group-hover:stroke-fuchsia-700 transition-colors"
      fill="none"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/bekirsglm",
    href: "https://github.com/bekirsglm",
    description: "Projelerimi ve açık kaynak kodlarımı inceleyin.",
    icon: icons.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bekirsaglam",
    href: "https://www.linkedin.com/in/bekirsaglam",
    description: "Profesyonel ağ üzerinden iletişime geçin.",
    icon: icons.linkedin,
  },
  {
    label: "E-posta",
    value: "bekirsglm34@gmail.com",
    href: "mailto:bekirsglm34@gmail.com",
    description: "Projeleriniz için e-posta gönderin.",
    icon: icons.mail,
  },
];

const Contact = () => {
  return (
    <section className="pt-[100px] sm:pt-[120px] min-h-screen px-4 sm:px-6 md:px-10 xl:px-16 py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl shadow-purple-500/10 animate-fadeIn">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-[1.1]">
            <p className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-fuchsia-400">
              İLETİŞİM
            </p>
            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-4xl font-bold text-white">
              Bana Ulaşmanın En Kolay Yolu
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Aşağıdaki iletişim kanallarından dilediğinizi seçerek benimle
              kolayca iletişime geçebilirsiniz. İlgili sayfalara erişmek için
              tıklamanız yeterli.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:gap-6">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex-shrink:0 flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 border border-white/15">
                    {item.icon}
                  </span>
                  <div className="flex-1 flex flex-col justify-center overflow-hidden">
                    <p className="text-xl sm:text-2xl font-semibold text-white group-hover:text-fuchsia-300 transition-colors truncate">
                      {item.label}
                    </p>
                    {/* Value kısmını sadece mail için göstereceğiz */}
                    {item.label === "E-posta" && (
                      <p className="text-sm sm:text-lg text-fuchsia-200 mt-1 truncate">
                        {item.value}
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-slate-300 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex w-px bg-linear-to-b from-transparent via-white/15 to-transparent rounded-full"></div>

          <div className="flex-[1.5] flex flex-col">
            <p className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-fuchsia-400">
              Konum
            </p>
            <h2 className="mt-2 sm:mt-3 text-3xl sm:text-4xl font-bold text-white">
              İstanbul, Ümraniye
            </h2>
            <p className="text-lg sm:text-xl font-semibold mt-1 sm:mt-2"></p>

            <div className="mt-4 sm:mt-6 rounded-2xl overflow-hidden border border-white/10 w-full h-64 sm:h-80 lg:h-[450px]">
              <iframe
                title="Bekir Sağlam Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12053.50337520476!2d29.091353574895188!3d41.02324472981989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7f1c3f8a1c5%3A0x9a5f8c1ea688f3a0!2s%C3%9Cmraniye%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1731907200000!5m2!1str!2str"
                className="w-full h-full object-cover"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* CV ve Sertifikalar Butonları */}
            <div className="mt-10 sm:mt-12 animate-fadeIn flex flex-col gap-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-5 px-8 rounded-2xl border border-white/15 bg-linear-to-r from-fuchsia-500 via-pink-500 to-purple-500 text-white font-semibold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:via-pink-500 hover:to-fuchsia-500"
              >
                Özgeçmişimi/CV'mi İncelemek İçin Tıkla
              </a>

              <a
                href="/sertifikalarım.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center py-5 px-8 rounded-2xl border border-white/15 bg-linear-to-r from-purple-500 via-pink-500 to-fuchsia-500 text-white font-semibold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-105 hover:from-fuchsia-500 hover:via-pink-500 hover:to-purple-500"
              >
                Sertifikalarımı İncelemek İçin Tıkla
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
