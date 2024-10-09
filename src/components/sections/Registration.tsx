import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

// Replace with your social media icons
const socialLinks = [
  { icon: "path/to/facebook-icon.png", url: "https://facebook.com" },
  { icon: "path/to/twitter-icon.png", url: "https://twitter.com" },
  { icon: "path/to/linkedin-icon.png", url: "https://linkedin.com" },
];

const RegistrationPage = () => {
  return (
    <div className="p-10 bg-[space-blue]"> {/* Keeps space blue background for the overall page */}
      <h1 className="text-6xl font-bold text-center mb-6">
        Register for Illuminate Workshop
      </h1>

      <div className="text-2xl flex flex-col items-center mb-10">
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
        <p className="font-semibold">Deadline for Registration: <span className="text-red-600">30th October</span> (20% discount)</p>
        <p>Full fees applicable after the deadline.</p>
        <p className="font-semibold">Event Details:</p>
        <p>Date: <span className="text-blue-600">14th December</span></p>
        <p>Venue: <span className="text-blue-600">MGM University, 10 AM - 5 PM</span></p>
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
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={link.icon} alt="Social Icon" className="h-8 w-8" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(RegistrationPage, "registration");
