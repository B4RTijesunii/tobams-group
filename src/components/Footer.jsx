import logo from "../assets/tobams-logo.png";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#11040E] text-white py-10 px-6 xl:px-16">
      <div className="max-w-328 mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div>
            <img src={logo} className="h-10 w-auto mb-4" alt="Tobams Group" />
            <p className="text-sm text-white/70 leading-[150%]">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">What We Do</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>Sustainability Services</li>
              <li>Strategy Planning and Implementation</li>
              <li>Tech Talent Solutions</li>
              <li>Training and Development</li>
              <li>IT Consulting Services</li>
              <li>Social Impact</li>
              <li>Talent Recruitment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>About</li>
              <li>Jobs</li>
              <li>Projects</li>
              <li>Our Founder</li>
              <li>Business Model</li>
              <li>The Team</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Solution</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>Tobams Group Academy</li>
              <li>Help a Tech Talent</li>
              <li>Campus Ambassadors Program</li>
              <li>Join Our Platform</li>
              <li>Pricing</li>
              <li>Book a Consultation</li>
              <li>Join Our Slack Community</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#1F131C] pt-8 grid grid-cols-1 xl:grid-cols-3 gap-8 px-6 py-6 rounded-lg">
          <div>
            <h3 className="font-semibold mb-2">Registered Offices</h3>
            <p className="text-sm text-secondary font-medium">United Kingdom</p>
            <p className="text-sm text-white/70">
              07451196 (Registered by Company House)
            </p>
            <p className="text-sm text-white/70">
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
              RM1 4QA
            </p>
          </div>
          <div>
            <p className="text-sm text-secondary font-medium mt-6 xl:mt-0">
              Nigeria
            </p>
            <p className="text-sm text-white ">
              RC 1048722 (Registered by the Corporate Affairs Commission)
            </p>
            <p className="text-sm text-white">4, Muaz Close, Angwar-Rimi</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p className="text-sm text-white flex items-center gap-2">
              <Mail className="w-4 h-4" /> theteam@tobamsgroup.com
            </p>
            <p className="text-sm text-white flex items-center gap-2 mt-1">
              <Phone className="w-4 h-4" /> +447886600748
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col xl:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
