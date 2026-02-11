import "../styles/difference.css";
import Script from "next/script";
import Image from "next/image";
export default function Difference() {
  return (
     <section className='difference_section'>
       <div className='difference_content'>
          {/* Button */}
        <div className="difference-badge">
          <span>The difference
</span>
        </div>

        {/* Headings */}
        <h2 className="difference-title">What you’ve tried vs. what actually works
</h2>
        <p className="difference-subtitle">
          If you’ve worked with agencies before, this will feel familiar. Here’s how we do it differently and why it actually scales.

        </p>

       </div>
       <section className="compare-section">
      <div className="compare-container">
        
        {/* Left Card */}
        <div className="compare-card compare-left">
          <div className="compare-header">
            <Image
              src="/dif1.avif"
              alt="Most marketing agencies"
              width={300}
              height={80}
            />
            <h3>Most marketing agencies</h3>
          </div>

          <ul className="compare-list negative">
            <li>Only run your ads. Everything else is your problem</li>
            <li>Same playbook for every client</li>
            <li>You write briefs, follow up and chase progress</li>
            <li>Focused on spend and revenue, not actual profit</li>
            <li>You never know what’s live or what’s next</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="compare-card compare-right">
          <div className="compare-header">
            <Image
              src="/dif2.avif"
              alt="Brainy Ads Media"
              width={300}
              height={80}
            />
            <h3>Brainy Ads Media</h3>
          </div>

          <ul className="compare-list positive">
            <li>We run your full funnel</li>
            <li>Strategy based on your numbers, market and audience</li>
            <li>No briefs needed. We act without waiting for direction</li>
            <li>We script, edit and source UGC, built to convert cold traffic</li>
            <li>You always know what’s live, what’s next and why</li>
          </ul>
        </div>

      </div>

      {/* Button */}
      <div className="compare-btn-wrapper">
        <a
          href="https://calendly.com/yash-hypeon/30min?month=2026-02/"
          target="_blank"
          rel="noopener noreferrer"
          className="compare-btn"
        >
          Start your free growth audit
        </a>
      </div>
    </section>

     </section>
    );
}