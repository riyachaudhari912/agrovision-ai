import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Crop Disease Detection"
            description="Identify crop diseases using AI-powered image analysis."
          />

          <Card
            title="Crop Health Monitoring"
            description="Track crop growth and health conditions in real time."
          />

          <Card
            title="AI Recommendations"
            description="Get suggestions for irrigation, fertilizers and pest control."
          />

          <Card
            title="Yield Prediction"
            description="Predict future crop yield using agricultural data."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;