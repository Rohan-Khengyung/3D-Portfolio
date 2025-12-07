const Footer = () => {
   const socialLinks = {
    github: "https://github.com/Rohan-Khengyung",
    linkedin: "https://www.linkedin.com/in/rohan-rai-096a182b2/",
    twitter: "https://x.com/Rohan_Rai99K"
  };
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon hover:opacity-80 transition-opacity cursor-pointer"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" /></a>
        </div>
        <div>
          <a href={socialLinks.twitter}  target="_blank" rel="noopener noreferrer" className="social-icon hover:opacity-80 transition-opacity cursor-pointer"><img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" /></a>
        </div>
        <div>
          <a href={socialLinks.linkedin} target="_blank"  rel="noopener noreferrer"  className="social-icon hover:opacity-80 transition-opacity cursor-pointer"><img src="/assets/linkedin.webp" alt="instagram" className="w-1/2 h-1/2" /></a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Rohan Rai All rights reserved.</p>
    </footer>
  );
};

export default Footer;
