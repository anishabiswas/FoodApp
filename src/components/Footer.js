import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600 shadow-inner mt-8">
      <div>
        <h1>© {new Date().getFullYear()} FoodDelicacy. All rights reserved.</h1>
      </div>
      {/* social links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 pt-3">
          Follow Us
        </h3>
        <div className="flex gap-4 text-xl justify-center items-center mb-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/anishabiswas/FoodApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anishabiswas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* App Download Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 pt-3">
          Download Our App
        </h3>
        <div className="flex justify-center items-center gap-3">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play Store"
              className="h-12"
            />
          </a>
          <a
            href="https://www.apple.com/in/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
