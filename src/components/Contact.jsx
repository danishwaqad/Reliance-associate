import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Not Implement a method for submit a form
  return (
    <motion.div
      initial={isMobile ? {opacity: 1, x: 0} : {opacity: 0, x: -200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true,amount: 0.15}}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-white text-slate-900 rounded-2xl"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        For consultation, construction projects, tax and real estate services, reach out directly on call or email.
      </p>

      {/* Contact form disabled (no backend yet)
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name 
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required />            
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email 
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required />            
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
        </div>
        <button onClick={() => toast.error("Not Implemented Form Submit Method")} className="bg-emerald-700 text-white py-2 px-10 mb-10 rounded-md">
          Send Message
        </button>
      </form>
      */}

      <div className="max-w-xl mx-auto mt-4 mb-10 border border-emerald-200 rounded-lg bg-white text-slate-900 p-6 shadow-md shadow-emerald-100">
        <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
        <p className="text-sm text-gray-600 mb-4">
          For appointments, consultations or project inquiries, please contact:
        </p>
        <p className="text-sm">
          <span className="font-semibold">Cell:</span> +92-313-3330803
        </p>
        <p className="text-sm">
          <span className="font-semibold">Landline:</span> +92-61-6220033
        </p>
        <p className="text-sm">
          <span className="font-semibold">Email:</span> reliancesolutionofficial@gmail.com
        </p>
        <p className="text-sm">
          <span className="font-semibold">Website:</span> reliancesolution.org
        </p>
        <p className="text-sm">
          <span className="font-semibold">Address:</span> 6 No. Chungi, Bosan Road, Multan, Punjab, Pakistan
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
