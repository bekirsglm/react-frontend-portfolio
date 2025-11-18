const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-28 pb-20">
      <section className="opacity-0 animate-about-fade flex flex-col md:flex-row items-center justify-between gap-20 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 text-center md:text-left bg-white/5 rounded-[40px] shadow-2xl shadow-purple-500/10 border border-white/10">
        <div className="flex-1 text-white space-y-5 text-center md:text-left">
        <p className="text-xl font-bold tracking-[0.3em] uppercase text-fuchsia-400">
          Hakkımda
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">BEKİR SAĞLAM</h1>
        <h2 className="text-xl md:text-2xl font-bold text-fuchsia-200">
          React Frontend Developer
        </h2>
        <div className="text-base leading-relaxed text-slate-200 space-y-4 text-left">
          <p className="text-xl font-bold">
            Meslek hayatıma terzi olarak başladım. Bu süreç bana sabrı, titizliği
            ve estetik bakış açısını kazandırdı. Bugün bu detaycılığı yazılım
            geliştirme süreçlerinde kullanarak kodu bir “tasarım malzemesi”
            gibi işliyorum.
          </p>
          <p className="text-xl font-bold" >
            Frontend geliştirme alanında modern web teknolojileriyle kullanıcı
            deneyimi odaklı, performanslı ve ölçeklenebilir arayüzler
            geliştiriyorum. Geliştirme sürecinde Clean Code, Component Driven
            Development (CDD) ve Agile yaklaşımlarını benimsiyorum.
          
            <p className="text-xl font-bold"></p>
          </p>
          
        </div>

      </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/logo.jpg"
            alt="Bekir SAĞLAM portre"
            className="w-full max-w-xs h-96 sm:max-w-sm sm:h-104 md:max-w-md md:h-120 lg:max-w-lg lg:h-136 object-cover object-center rounded-[36px] border border-white/20 shadow-[0_35px_110px_rgba(217,70,239,0.35)] bg-linear-to-b from-white/10 to-transparent"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
