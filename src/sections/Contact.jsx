import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      // keep status visible shortly if success or error
      setTimeout(() => setStatus(null), 3500);
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          type="text"
          placeholder="Your Name"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder="Your Email"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Your Message"
          className="border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className={`rounded-lg p-3 font-semibold transition ${
            status === "loading"
              ? "bg-gray-400"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <div className="text-green-700 mt-2">
            Thanks — your message was sent.
          </div>
        )}
        {status === "error" && (
          <div className="text-red-600 mt-2">
            Sorry — there was an error. Try again later.
          </div>
        )}
      </form>
    </section>
  );
}
