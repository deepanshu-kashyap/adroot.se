import "../styles/section2.css";

export default function Section2() {
  return (
    <section className="growth-section">
      <div className="growth-container">

        {/* Left Content */}
        <div className="growth-left">
          <button className="growth-badge">Your last growth system</button>

          <h2>
            The last growth system 
            you’ll ever need
          </h2>

          <ul className="growth-points">
            <li>No slow processes</li>
            <li>No excuses</li>
            <li>Not just media buying</li>
            <li className='active'>Just a full growth system</li>
          </ul>


      </div>

          <div className="growth-features">
            <div className="feature-box">
              <img src='growth1.avif' />
              <h4>Full team, no hand-holding</h4>
              <p>
                We plug into your brand as your growth department. You focus on your product — we run the rest.
              </p>
            </div>

            <div className="feature-box">
            	<img src='growth2.png' />
              <h4>Direct access. Zero friction</h4>
              <p>
                No gatekeepers. You talk directly to the team doing the work with full clarity.
              </p>
            </div>

            <div className="feature-box">
            	<img src='growth3.avif' />
              <h4>One system. Everything aligned</h4>
              <p>
                Creative, ads, CRO and retention run under one strategy from first click to repeat customer.
              </p>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
 <a
        href="https://calendly.com/yash-hypeon/30min?month=2026-02"
        target="_blank"
        className="growth-badge-1"
        
      >
        Start your free growth audit
      </a>
       
  
    </section>
  );
}
