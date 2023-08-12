const Testimonials = () => {
  const testimonials = [
    {
      id: "t1",
      name: "John Smith",
      rating: "&#9733;&#9733;&#9733;&#9733;",
      Comment: "The Variety of products is amazing!",
      imageurl: "Images/Testimonials/Man1.png",
    },
    {
      id: "t2",
      name: "Ali Greymond",
      rating: "&#9733;&#9733;&#9733;",
      Comment: "Good quality products!",
      imageurl: "Images/Testimonials/Woman1.png",
    },
    {
      id: "t3",
      name: "Sarah Connor",
      rating: "&#9733;&#9733;&#9733;",
      Comment: "The plants are so beautiful!",
      imageurl: "Images/Testimonials/Woman2.png",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto py-20 p-6 grid" id="Gallery">
      <h2 className="text-3xl text-center  mb-4 bg-accent p-2 text-[#334741]">
        Testimonials
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 text-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col rounded max-w-xs mx-auto p-8 gap-5"
          >
            <img
              src={testimonial.imageurl}
              className="object-cover rounded-full"
              alt=""
            />
            <h2 className="font-bold text-lg">{testimonial.name}</h2>
            <p className="text-gray-500 ">{testimonial.Comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
