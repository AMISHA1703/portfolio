import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div id ="about"className="flex flex-col md:flex-row items-center  p-6 gap-10 bg-black/60  shadow-xl backdrop-blur-sm min-h-screen">
      
      {/* Image Section */}
      <div className="md:w-[40%] w-full flex justify-center">
        <img
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-white/60 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          src="https://res.cloudinary.com/db9dqphdc/image/upload/v1751191396/c80d99f4-c9f7-4617-899f-189341ce91e2_wqbek3.jpg"
          alt="Amisha Singh"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-[60%] w-full text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          I'm Amisha Singh
        </h1>
        <h2 className=" text-teal-600 text-2xl text-semibold md:text-xl font-bold  mb-1">Full Stack Developer | Open to Work</h2>
        <p className="text-gray-300 leading-relaxed">
           a Computer Science student who enjoys building full-stack web applications. I’ve worked with React, Node.js, Express, and MongoDB, and I’m currently learning Docker and PostgreSQL by applying them in my own projects.I like figuring things out by building real stuff — from simple UIs to backend APIs. I’m comfortable with HTML, CSS, JavaScript, Git, and REST. Most of what I know, I’ve learned by doing and making mistakes.Right now, I’m looking for opportunities where I can work on real-world problems, learn from others, and improve my skills through hands-on work. I’m ready to contribute from day one.
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
