function ContactForm() {
  return (
    <section className="contactForm p-4 m-4  items-center justify-center text-center">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <section>
        <form action="./ space-y-4">
          <section>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </section>

          <section>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="number"
              id="number"
              placeholder="Phone "
            />
          </section>

          <section>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </section>

          <section>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              name="message"
              id="message"
              placeholder="Message"
              rows={4}
            ></textarea>
          </section>
          <section className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
            >
              Submit Application
            </button>
          </section>
        </form>
      </section>
    </section>
  );
}
export default ContactForm;
