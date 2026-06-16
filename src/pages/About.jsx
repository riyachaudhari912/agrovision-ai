import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">
          About Page
        </h1>

        <p>
          This is the About page of AgroVision AI.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;