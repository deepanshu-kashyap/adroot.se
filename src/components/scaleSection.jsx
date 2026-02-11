import "../styles/scaleSection.css";

export default function ScaleSection() {
  return (
    <section className="scale-section">
      <div className="scale-header">
        <span className="scale-badge">Numbers that mean something</span>
        <h2>We scale brands</h2>
        <p>
          Behind every number is a brand that chose focus over hiring, and
          plugged into a team that already knew how to scale.
        </p>
      </div>

      <div className="scale-cards">
        {/* Card 1 */}
        <div className="scale-card">
          <h3>+$18M</h3>
          <h4>Spent on ads</h4>
          <p>
            We’ve profitably managed over $18 million in ad spend across paid
            media and more with full-funnel tracking behind every dollar.
          </p>
        </div>

        {/* Card 2 */}
        <div className="scale-card">
          <h3>+10</h3>
          <h4>Markets we’ve scaled in</h4>
          <p>
            We’ve helped brands grow across most major markets, including the
            US, Canada, Australia, UK, Germany, Scandinavia and Western Europe.
          </p>
        </div>

        {/* Card 3 */}
        <div className="scale-card">
          <h3>+$91M</h3>
          <h4>Generated in revenue</h4>
          <p>
            The brands we work with have driven over $91 million in tracked
            revenue built from cold traffic, not just returning customers.
          </p>
        </div>
      </div>

      <div className="scale-btn-wrap">
        <a href='https://calendly.com/yash-hypeon/30min?month=2026-02' target='_bla' className="scale-btn">Start your free growth audit</a>
      </div>
    </section>
  );
}
