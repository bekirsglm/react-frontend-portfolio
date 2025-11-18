import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 mt-16" style={{
      background: `radial-gradient(
        circle at 0% 50%,
        rgba(170, 0, 255, 0.30),
        transparent 62%
      ),
      radial-gradient(
        circle at 100% 50%,
        rgba(255, 50, 200, 0.25),
        transparent 62%
      ),
      #000000`
    }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* Copyright */}
        <p className="text-center text-purple-400 font-bold text-sm">
          CREATED BY <span className="hover:text-purple-400 text-white">BEKİR SAĞLAM</span> || &copy; 2025
        </p>

        {/* Sosyal ikonlar */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/bekirsglm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 rounded-full transition-colors"
            title="GitHub"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/bekirsaglam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 rounded-full transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://www.instagram.com/bekirsaglamo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 rounded-full transition-colors"
            title="Instagram"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://twitter.com/bekirsaglamo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 rounded-full transition-colors"
            title="Twitter"
          >
            <FaTwitter size={25 } />
          </a>
        </div>
      </div>

      {/* Fade-in animasyon */}
      <style>
        {`
          footer {
            opacity: 0;
            animation: fadeInFooter 0.9s forwards;
          }

          @keyframes fadeInFooter {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </footer>
  );
}
