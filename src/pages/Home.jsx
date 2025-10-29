import Button from "../components/Button";
import Card from "../components/Card";
import heroCoffee from "../assets/hero-coffee.jpg";
import latte from "../assets/cappuccino.png";
import espresso from "../assets/cappuccino.png";
import cappuccino from "../assets/cappuccino.png";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${heroCoffee})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4">
            Brewed With Passion.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Discover the perfect blend of aroma, flavor, and comfort — all in
            one cup.
          </p>
          <Button text="Explore Our Menu" />
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-10">
          Our Signature Blends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          <Card
            image={latte}
            title="Vanilla Latte"
            description="Smooth, creamy, and lightly sweetened for a relaxing afternoon treat."
          />
          <Card
            image={espresso}
            title="Classic Espresso"
            description="A rich shot of pure energy — bold, aromatic, and unforgettable."
          />
          <Card
            image={cappuccino}
            title="Cappuccino"
            description="Perfectly balanced layers of espresso, steamed milk, and foam."
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-amber-700 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">
          Ready for your next cup?
        </h2>
        <Button text="Visit Us Today" />
      </section>
    </main>
  );
}
