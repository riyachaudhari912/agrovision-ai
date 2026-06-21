import { useState, useEffect } from "react";
import { Button, Input, Loader, Toast, Modal } from "../components/ui";

function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen p-8 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          UI Component Showcase
        </h1>

        <Button
          variant="secondary"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </Button>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button disabled>Disabled</Button>
      </div>

      {/* INPUTS */}
      <div className="mt-8 max-w-md space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          error="Password is required"
        />
      </div>

      {/* LOADER */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Loader Component
        </h2>
        <Loader />
      </div>

      {/* TOAST */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Toast Component
        </h2>
        <Button onClick={Toast}>
          Show Success Toast
        </Button>
      </div>

      {/* MODAL */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Modal Component
        </h2>

        <Button onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="AgroVision AI Modal"
      >
        <p>
          This is a reusable modal component. It supports title,
          children, close button and Escape key closing.
        </p>
      </Modal>
    </div>
  );
}

export default ComponentShowcase;