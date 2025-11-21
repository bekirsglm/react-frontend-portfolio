const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-28 pb-20">
      <section className="opacity-0 animate-about-fade flex flex-col md:flex-row items-center justify-between gap-20 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 text-center md:text-left bg-white/5 rounded-[40px] shadow-2xl shadow-purple-500/10 border border-white/10">
        <div className="flex-1 text-white space-y-5 text-center md:text-left">
          <p className="text-5xl mb-50 font-bold tracking-[0.3em] uppercase bg-linear-to-r from-white/90 via-purple-400 to-pink-300 bg-clip-text text-transparent">
            Hakkımda
          </p>
          <h1 className="text-4xl mb-10 md:text-3xl font-bold">BEKİR SAĞLAM</h1>
          <h2 className="text-xl md:text-2xl font-bold text-fuchsia-200">
            React Front-end Developer
          </h2>
          <div className="text-base leading-relaxed text-slate-200 space-y-4 text-left overflow-hidden wrap-break-word md:break-normal">
            <p className="text-xl mb-6 md:mb-15 font-bold wrap-break-word">
              Meslek hayatıma terzi olarak başladım. Bu süreç bana sabrı, titizliği, disiplinli çalışmayı ve estetik bir bakış açısını öğretti. Bugün aynı özeni yazılım dünyasında kullanıyor, kodu bir tasarım malzemesi gibi işleyerek kullanıcı deneyimini merkeze alan arayüzler geliştiriyorum.
            </p>
            <p className="text-xl mb-6 md:mb-15 font-bold wrap-break-word">
              Bir React Developer olarak modern web teknolojileriyle performanslı, ölçeklenebilir ve temiz bir mimariye sahip arayüzler geliştiriyorum. Geliştirme sürecimde React, Next.js, JavaScript, TypeScript, Tailwind CSS, CSS/SASS gibi teknolojileri aktif olarak kullanıyorum. Component Driven Development, Clean Code ve Agile prensipleri çalışma yaklaşımımın temelini oluşturuyor.
            </p>
            <p className="text-xl font-bold wrap-break-word">
              Her zaman öğrenmeye açık bir geliştirici olarak, kendimi yeni teknolojiler ve modern yaklaşımlarla sürekli güncel tutmayı önemsiyor; hem teknik kalitenin hem de kullanıcı deneyiminin sürekli gelişmesi için çalışıyorum.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center lg:space-y-6">
          {/* Ana Foto - Her cihazda görünür */}
          <img
            src="/logo.jpg"
            alt="Bekir SAĞLAM portre"
            className="w-full max-w-xs h-96 sm:max-w-sm sm:h-104 md:max-w-md md:h-120 lg:max-w-lg lg:h-136 object-cover object-center rounded-[36px] border border-white/20 shadow-[0_35px_110px_rgba(217,70,239,0.35)] bg-linear-to-b from-white/10 to-transparent"
          />

          {/* İkinci Foto - SADECE büyük ekranda, altta görünür */}
          <img
            src="/logo3.jpg"
            alt="Bekir SAĞLAM portre 2"
            className="hidden lg:block w-full max-w-lg h-136 object-cover object-center rounded-[36px] border border-white/20 shadow-[0_35px_110px_rgba(217,70,239,0.35)] bg-linear-to-b from-white/10 to-transparent"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
