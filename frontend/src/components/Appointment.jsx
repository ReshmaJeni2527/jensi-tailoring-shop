import { useState } from "react";
import { submitAppointment } from "../services/api.js";
import Reveal from "./Reveal.jsx";

const SERVICES = [
  "Blouse Stitching",
  "Dress Stitching",
  "Saree Blouse Designing",
  "Custom Measurements",
  "Alterations",
  "Kids Dress Stitching",
];

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  address: "",
  message: "",
};

function getTodayISO() {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return today.toISOString().split("T")[0];
}

export default function Appointment() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    else if (form.name.trim().length < 2) newErrors.name = "Please enter your full name.";

    const phoneDigits = form.phone.replace(/[\s-]/g, "");
    if (!phoneDigits) newErrors.phone = "Please enter your mobile number.";
    else if (!/^(\+91)?[6-9]\d{9}$/.test(phoneDigits))
      newErrors.phone = "Please enter a valid 10-digit mobile number.";

    if (!form.email.trim()) newErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      newErrors.email = "Please enter a valid email address.";

    if (!form.service) newErrors.service = "Please select a service.";

    if (!form.date) newErrors.date = "Please choose a preferred date.";
    else if (form.date < getTodayISO()) newErrors.date = "Please choose a date from today onward.";

    if (!form.time) newErrors.time = "Please choose a preferred time.";

    if (!form.address.trim()) newErrors.address = "Please enter your address or location.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await submitAppointment(form);
      setStatus("success");
      setServerMessage(
        response.data?.message ||
          "Thank you! Your appointment request has been submitted successfully. We will contact you soon."
      );
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error.response?.data?.message ||
          "Something went wrong while submitting your appointment. Please check your connection and try again."
      );
    }
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-soft border bg-white/80 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/40 transition-colors ${
      errors[field] ? "border-red-400" : "border-gold-light/70"
    }`;

  return (
    <section id="appointment" className="py-20 md:py-28 bg-cream-dark/40">
      <div className="container-shell grid lg:grid-cols-5 gap-12 items-start">
        <Reveal className="lg:col-span-2">
          <p className="section-eyebrow">Book an Appointment</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5">
            Let's plan your perfect fit
          </h2>
          <p className="text-ink/70 leading-relaxed mb-6">
            Fill in the form and we'll confirm your appointment at Jensi Tailoring Shop. Bring along
            any reference designs or fabric you'd like us to work with.
          </p>
          <div className="flex items-start gap-3 text-ink/70 text-sm">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
            <span>All appointment requests are marked "Pending" until we confirm by phone.</span>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-soft shadow-card p-6 sm:p-8 space-y-5"
          >
            {status === "success" && (
              <div
                role="status"
                className="rounded-soft border border-green-300 bg-green-50 text-green-800 px-4 py-3 text-sm"
              >
                {serverMessage}
              </div>
            )}
            {status === "error" && (
              <div
                role="alert"
                className="rounded-soft border border-red-300 bg-red-50 text-red-800 px-4 py-3 text-sm"
              >
                {serverMessage}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink/80 mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses("name")}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink/80 mb-1.5">
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClasses("phone")}
                  placeholder="10-digit mobile number"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink/80 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClasses("email")}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-ink/80 mb-1.5">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClasses("service")}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="service-error" className="mt-1.5 text-sm text-red-600">
                  {errors.service}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-ink/80 mb-1.5">
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={getTodayISO()}
                  value={form.date}
                  onChange={handleChange}
                  className={inputClasses("date")}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? "date-error" : undefined}
                />
                {errors.date && (
                  <p id="date-error" className="mt-1.5 text-sm text-red-600">
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-ink/80 mb-1.5">
                  Preferred Time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  className={inputClasses("time")}
                  aria-invalid={Boolean(errors.time)}
                  aria-describedby={errors.time ? "time-error" : undefined}
                />
                {errors.time && (
                  <p id="time-error" className="mt-1.5 text-sm text-red-600">
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-ink/80 mb-1.5">
                Address / Location
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                className={inputClasses("address")}
                placeholder="Your address or preferred location"
                aria-invalid={Boolean(errors.address)}
                aria-describedby={errors.address ? "address-error" : undefined}
              />
              {errors.address && (
                <p id="address-error" className="mt-1.5 text-sm text-red-600">
                  {errors.address}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto bg-maroon text-cream px-8 py-3.5 rounded-soft font-sans tracking-wide hover:bg-maroon-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Submitting..." : "Book Appointment"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
