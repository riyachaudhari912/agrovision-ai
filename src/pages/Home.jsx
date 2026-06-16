import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card
            title="Crop Disease Detection"
            description="Identify crop diseases from leaf images using AI-powered computer vision."
          />

          <Card
            title="Crop Health Monitoring"
            description="Monitor crop growth and health conditions using image and sensor data."
          />

          <Card
            title="AI Recommendations"
            description="Get personalized recommendations for irrigation, fertilizers, and pest control."
          />

          <Card
            title="Yield Prediction"
            description="Predict crop yield using machine learning and agricultural data analysis."
          />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;