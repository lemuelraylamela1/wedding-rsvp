import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CheckCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

interface RSVPFormProps {
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

export function RSVPForm({ isSubmitted, setIsSubmitted }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email, // guest email
      attending: formData.attending,
      message: formData.message,
      reply_to: formData.email, // <-- important
    };

    emailjs
      .send(
        "service_3dqjqcb",
        "template_qqa5xq8",
        templateParams,
        "smqDu5p_GMsqbrvce"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send RSVP. Please try again later.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 bg-gradient-to-b from-white to-rose-50 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-500" />
          <h2 className="text-4xl md:text-5xl text-rose-900 mb-4 font-serif">
            Thank You!
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Your RSVP has been received. We can’t wait to celebrate with you!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-rose-600 hover:text-rose-700 underline">
            Submit another RSVP
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-4 text-rose-400 fill-rose-400" />
          <h2 className="text-5xl md:text-6xl text-rose-900 mb-6 font-serif">
            RSVP
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            We would be honored to have you join us on our special day
          </p>
          <p className="text-rose-600 mt-2">
            Please respond by January 15, 2026
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-rose-900 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-rose-900 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Attending */}
          <div>
            <label className="block text-rose-900 mb-2">
              Will you be attending? *
            </label>
            <select
              name="attending"
              required
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all">
              <option value="">Please select</option>
              <option value="Joyfully accepts">Joyfully accepts</option>
              <option value="Regretfully declines">Regretfully declines</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-rose-900 mb-2">
              Message to the Couple
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all resize-none"
              placeholder="Share your well wishes..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Send className="w-5 h-5" />
            Send RSVP
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
