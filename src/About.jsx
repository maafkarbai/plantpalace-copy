const About = () => {
  return (
    <section className="mx-auto animate-fade ease-in-out py-20 p-6" id="About">
      <div className="flex sm:flex-row flex-col max-w-7xl bg-accent text-black mx-auto p-6 rounded-md shadow-md">
        <img
          src="Images/AboutImage.jpg"
          className="drop-shadow-md h-96 object-cover"
        />

        <div className="my-auto p-3 flex flex-col justify-center">
          <p className="text-5xl font-semibold text-center sm:text-justify">
            Who Are We?
          </p>
          <p className="text-xl text-justify text-gray-600">
            At Plant Palace Nursery, we are passionate about all things green
            and growing. Our journey began with a simple idea: to create a haven
            for plant enthusiasts, both seasoned gardeners and budding green
            thumbs. Nestled in the heart of nature, our nursery is a sanctuary
            of botanical beauty and knowledge. What sets us apart is our
            unwavering commitment to helping you nurture your plants with
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
