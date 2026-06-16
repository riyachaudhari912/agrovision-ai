import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">
          Login Page
        </h1>

        <p>
          User authentication page placeholder.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Login;