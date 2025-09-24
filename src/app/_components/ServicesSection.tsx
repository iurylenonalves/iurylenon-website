export function ServicesSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Comprehensive web development solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Aqui você vai criar 4 cards, um para cada serviço */}
        <div className="border p-6 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-2">SEO-optimized landing pages</h3>
          <p>High-performance pages designed to rank and convert effectively.</p>
        </div>
        <div className="border p-6 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-2">Scalable SaaS MVPs</h3>
          <p>Rapid development of viable products to validate your business idea.</p>
        </div>
        <div className="border p-6 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-2">Secure API development</h3>
          <p>Custom APIs focusing on data integrity, security, and seamless integration.</p>
        </div>
        <div className="border p-6 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-2">Performance consulting</h3>
          <p>Strategies to optimize your web app, boost speed, and enhance UX.</p>
        </div>
      </div>
    </section>
  );
}