import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function Dashboard() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/crops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch crop data");
        }
        return response.json();
      })
      .then((data) => {
        setCrops(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        Toast();
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-green-50 p-8">
        <h1 className="text-4xl font-bold mb-4 text-green-800">
          Farmer Dashboard
        </h1>

        <p className="mb-8 text-gray-700">
          Live crop data fetched from the AgroVision AI FastAPI backend.
        </p>

        {loading && <Loader />}

        {error && (
          <div className="rounded-lg bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {crops.map((crop) => (
              <div
                key={crop.id}
                className="rounded-xl bg-white p-6 shadow-md border border-green-100"
              >
                <h2 className="text-2xl font-bold text-green-700">
                  {crop.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  Type: {crop.type}
                </p>

                <p className="mt-2 text-gray-600">
                  Health Status: {crop.health_status}
                </p>

                <p className="mt-2 text-gray-600">
                  Location: {crop.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;