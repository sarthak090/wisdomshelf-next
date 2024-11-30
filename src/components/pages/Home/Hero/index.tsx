import Companies from "./Companies";

export default function Hero() {
  return (
    <section>
      <div className="bg-gray-50 lg:min-h-screen lg:flex flex-col items-center justify-center">
        <div className="lg:max-w-6xl mx-auto text-center p-6">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Dive into the brains of prominent people to discover their
            recommended books, routines, & rituals.
          </h1>
          <p className="text-lg mb-6">
            500+ experts, 1500+ series, 1000+ curated lists, and 100+ daily
            routines. Explore with confidence as we bring you 100% verified
            recommendations, continuously growing every month!
          </p>

          {/* Email Subscription Form */}
          <div className="flex justify-center mb-8">
            <input
              type="email"
              className="border  outline-none border-gray-300 p-3 rounded-l-lg w-80"
              placeholder="Email"
            />
            <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>

<Companies/>
        </div>
      </div>
    </section>
  );
}
