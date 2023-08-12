import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto py-20 p-6 pt-28" id="Contact">
        <h2 className="text-3xl text-center  mb-4  p-2 text-[#334741]">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form
          action="#"
          className="space-y-8 p-10 bg-slate-300 max-w-3xl mx-auto"
        >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500"
              placeholder="name@plantpalace.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-accent "
          >
            Send message
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
