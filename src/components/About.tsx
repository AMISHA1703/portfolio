import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div id ="about"className="flex flex-col md:flex-row items-center  p-6 gap-10 bg-black/60 mt-15  border-top rounded-md  shadow-xl backdrop-blur-sm min-h-screen">
      
      {/* Image Section */}
      <div className="md:w-[40%] w-full flex justify-center">
        <img
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-white/60  sm:mt-30 md:mt-10 lg:mt-0 shadow-[0_0_15px_rgba(255,255,255,0.2) ]"
          src="https://res.cloudinary.com/db9dqphdc/image/upload/v1751191396/c80d99f4-c9f7-4617-899f-189341ce91e2_wqbek3.jpg"
          alt="Amisha Singh"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-[60%] w-full text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          I'm Amisha Singh
        </h1>
        <h2 className=" text-teal-600 text-2xl text-semibold md:text-xl font-bold  mb-1">Full Stack Developer</h2>
        <p className="text-gray-300 leading-relaxed sm:text-justify">
          Computer Science student with hands-on experience in building full
          stack apps using React.js, Node.js, Express, and MongoDB. Comfortable
          with HTML, CSS, JavaScript, Git, and REST APIs. Currently learning
          Docker and PostgreSQL while building a project to apply
          containerization and relational database concepts.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a href="https://x.com/AmishaS86389365?s=08" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-cyan-400 text-xl" />
          </a>
          <a href="https://github.com/AMISHA1703" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-cyan-400 text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/amisha-singh1701/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-cyan-400 text-xl" />
          </a>
        </div>

        {/* view resume Button */}
        <div className="mt-5">
          <a
            href="https://drive.google.com/file/d/1UglfvTRcF13xhRrNirfvQwRJNDGeYkWd/view?usp=sharing" 
            download
            className="inline-block px-6 py-2 bg-cyan-400 text-black rounded-full font-semibold hover:bg-cyan-500 transition"
          >
            view Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
