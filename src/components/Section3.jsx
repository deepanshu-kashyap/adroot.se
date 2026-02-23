import "../styles/section3.css";
import Script from 'next/script';

export default function Section3() {
  return (
    <section className='profile_section'>
      <h1>Get a free, expert breakdown of your growth system</h1>
      <div className='profile_section_content'>
        <div className='profile_left_content'>
          <div className='box'>
            <p>We map your funnel, creative, offer and LTV setup and show you exactly where you’re losing momentum.</p>
            <p>We audit your full funnel & strategy including ads, landing pages, email flows and post-purchase setup. All mapped to awareness levels and conversion gaps.</p>
            <p>We analyze your current messaging & market, including brand - audience fit, content angles, and how well you speak to cold traffic.</p>
          </div>
          <div className='box'>
            <p>We pinpoint your bottlenecks and profit leaks based on real data, not guesses. And we give you a clear roadmap to fix them.</p>
            <p>We benchmark performance across 10+ markets and $91M+ in revenue so you know exactly where you stand and how far you can scale.</p>
            <p>We will walk you through our analysis on a 1:1 session. We'll look for bottlenecks, scaling opportunities and give you concrete examples on what your funnel is missing.</p>
          </div>
        </div>

        <div className='profile_right_content'>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/yash-hypeon/30min"
            style={{ minWidth: '200px', height: '600px' }}
          ></div>

          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  );
}
