import "../styles/work.css";

import Link from "next/link";
import Image from "next/image";

export default function WorkWithUs() {
  return (
    <section className="work-section">
      <div className="work-container">

        {/* Heading */}
        <h2 className="work-title">What it feels like to work with us</h2>
        <p className="work-subtitle">
          No chasing. No handovers. No bottlenecks.<br />
          Just fast moves, clear next steps and a team that runs the system like it’s theirs.
        </p>

        {/* Cards */}
        <div className="work-grid">

          {/* Card 1 */}
          <div className="work-card">
            <Image
              src="/work1.avif"
              alt=""
              width={400}
              height={250}
              className="work-img"
            />
            <h4>We move fast, no confusion</h4>
            <p>You’re not chasing updates or repeating yourself. We make quick calls because speed matter.</p>
            <ul>
              <li>✔ You don’t brief us. We brief ourselves</li>
              <li>✔ The team is synced. You don’t have to be</li>
              <li>✔ One message and we’re on it</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="work-card">
            <Image
              src="/work2.avif"
              alt=""
              width={400}
              height={250}
              className="work-img"
            />
            <h4>You know what's going on</h4>
            <p>No “just checking in” emails. No radio silence. Just real visibility and quick responses.</p>
            <ul>
              <li>✔ You never wonder what’s live or what’s next</li>
              <li>✔ You’re synced with the team. No layers</li>
              <li>✔ Next steps are always clear</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="work-card">
            <Image
              src="/work3.avif"
              alt=""
              width={400}
              height={250}
              className="work-img"
            />
            <h4>We take ownership</h4>
            <p>You don’t remind us or follow up. We act early, solve issues and move growth forward.</p>
            <ul>
              <li>✔ We act before being asked</li>
              <li>✔ Problems get solved fast</li>
              <li>✔ Growth doesn’t stall when you’re busy</li>
            </ul>
          </div>

        </div>

        {/* Button */}
        <div className="work-btn">
          <Link href="https://calendly.com/yash-hypeon/30min" target="_blank">
            Start your free growth audit
          </Link>
        </div>

      </div>
<footer className='footer'>
      <div className='container'>
        {/* Logo */}
        <div className='column'>
          <img
            src="/logo3.png"
            alt="adroot"
            className='logo'
          />
        </div>

        {/* Business Info */}
        <div className='column'>
          <h2>Business info</h2>
          <p>
            <strong>Address:</strong>
            <br />
            Mörbylund 15B, 182 30 Danderyd, Sweden
          </p>
          {/*
          <p>
            <strong>CVR:</strong>
            <br />
            42896322 – adroot
            <br />
            45607968 – adroot
          </p> */}
        </div>

        {/* Contact Us */}
        <div className='column'>
          <h2>Contact Us</h2>
          <p>
            <strong>Call us:</strong>
            <br />
            +46 73 569 34 21
          </p>
          {/*
          <p>
           <strong>Mail us:</strong>
            <br />
            adrootab_3275@emailportal.bjornlunden.com
          </p> 
          */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='bottom'>
        <p>Copyright © 2026. All rights reserved adroot ab.</p>
      </div>
    </footer>

    </section>
  );
}
