import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

// Import icons from react-icons
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaGoogle } from "react-icons/fa";
import { EarthCanvas } from "../canvas";

// Define the social media links with their respective icons
const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/akashch1512" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/e-cell-jnec" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/ecell_jnec/" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@AkashChaudhari-o6d" },
  { icon: <FaTwitter />, url: "https://x.com/ecell_jnec" },
  { icon: <FaGoogle />, url: "mailto:ecelljnec2024@gmail.com" },
];

const RegistrationPage = () => {
  return (
    
    <div className="p-1 bg-[space-blue]"> {/* Keeps space blue background for the overall page */}
      <EarthCanvas/>      
      <h1 className="text-6xl font-bold text-left sm:text-center mb-10">
        Register for Illuminate Workshop
      </h1>

      <div className="text-2xl flex flex-col items-center text-center mb-10">
        <a
          href="https://ecelliitb.com/register"
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg shadow-lg mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Cell IITB Registration
        </a>
        <a
          href="https://ecelljnc.com/register"
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-lg shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Cell JNEC Registration
        </a>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center text-lg text-white mb-8"
      >
        <p className="font-semibold">
          Deadline for Registration: <span className="text-red-600">30th October</span> (20% discount)
        </p>
        <p>Full fees applicable after the deadline.</p>
        <p className="font-semibold text-xl"><br></br>Event Details</p>
        <p>Date: <span className="text-blue-600">14th December</span></p>
        <p>Venue: <span className="text-blue-600">MGM University,<br></br>10 AM - 5 PM</span></p>
      </motion.div>

      <h2 className="text-3xl text-white font-bold mb-4">Frequently Asked Questions</h2>

      <div
        className="bg-cover bg-center bg-black shadow-md rounded-lg p-5"
        style={{ backgroundImage: `url('/mnt/data/A_background_for_an_FAQ_section_in_a_deep_space_bl.png')` }}
      >
        <h3 className="font-semibold">1. What should I bring to the workshop?</h3>
        <p>Please bring a notebook and a pen for taking notes.</p>

        <h3 className="font-semibold mt-3">2. Is there any prerequisite for attending?</h3>
        <p>No prerequisites. All students are welcome!</p>

        <h3 className="font-semibold mt-3">3. Will food be provided?</h3>
        <p>Yes, snacks and refreshments will be available.</p>
      </div>

      <div className="flex justify-center mt-10">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white text-3xl hover:text-gray-400 transition duration-200"
          >
            {link.icon} {/* Render the icon directly */}
          </a>
        ))}
      </div>

      {/* Add clickable Akash Chaudhari line below the social links */}
      <div className="flex justify-center mt-4">
        <a 
          href="https://github.com/akashch1512" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:underline text-lg text-center hover:text-blue-500"
        >
          E-Cell JNEC<br></br>Akash Chaudhari
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(RegistrationPage, "registration");
