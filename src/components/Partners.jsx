import "../styles/partners.css";

export default function Partners() {
  const logos = [
    "partner1.avif",
    "partner2.avif",
    "partner3.avif",
    /*"partner4.avif",*/
    "partner5.avif",
    
  ];

  return (
    <section className="partners">
      <h2>Our partners</h2>
      <div className="partner-grid">
        {logos.map((img, i) => (
          <img key={i} src={img} alt="partner" />
        ))}
      </div>
    </section>
  );
}
