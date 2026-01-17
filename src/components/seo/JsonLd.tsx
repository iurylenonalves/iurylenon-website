export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Or "Organization"
    "name": "Iury Lenon Tech Solutions",
    "url": "https://iurylenon.com",
    "logo": "https://iurylenon.com/images/iury-lenon-logotype.png",
    "image": "https://iurylenon.com/images/iury-lenon-full-stack-software-engineer.webp",
    "description": "High-Performance Web Platforms, Private Cloud Infrastructure, and Business Automation Expert based in London.",
    "founder": {
      "@type": "Person",
      "name": "Iury Lenon"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "priceRange": "$$$",
    "sameAs": [
      "https://github.com/iurylenonalves",
      "https://linkedin.com/in/iurylenon"
      // add other social profiles if any
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}