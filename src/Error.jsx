import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center"
      id="About"
    >
      <div className="flex flex-col text-4xl gap-2">
        404 | ERROR
        <Link to={"/"} className="p-2 text-center bg-accent">
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default Error;
