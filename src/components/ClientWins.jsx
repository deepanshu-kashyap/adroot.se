import "../styles/clientWins.css";
import Script from "next/script";

export default function ClientWins() {
  return (
    <section className="clientwins-section">
      <div className="clientwins-container">
        
        {/* Button */}
        <div className="clientwins-badge">
          <span>Client wins</span>
        </div>

        {/* Headings */}
        <h2 className="clientwins-title">Get Brainy Ads</h2>
        <h6 className="clientwins-subtitle">
          Real stories from founders who finally got flow.
        </h6>

        {/* Videos Grid */}
        <div className="clientwins-grid">
         <div className="wistia-wrapper">
  <iframe
    src="https://fast.wistia.net/embed/iframe/4tfjgrcpu6?videoFoam=true"
    allow="autoplay; fullscreen"
    frameBorder="0"
    scrolling="no"
    className="wistia-iframe"
  ></iframe>
</div>
<div className="wistia-wrapper">
  <iframe
    src="https://fast.wistia.net/embed/iframe/wvkzyq5nex?videoFoam=true"
    allow="autoplay; fullscreen"
    frameBorder="0"
    scrolling="no"
    className="wistia-iframe"
  ></iframe>
</div>


        
        </div>

        {/* Wistia Script */}
        <Script
          src="https://fast.wistia.net/player.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
