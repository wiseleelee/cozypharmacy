import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cozy Pharmacy - Your Trusted Community Pharmacy in Seremban</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <header>
        <nav className="container">
          <div className="logo">
            <img src="/images.jpeg" alt="Cozy Pharmacy Logo" style={{ height: '2.5rem', width: '2.5rem', marginRight: '10px', borderRadius: '8px', objectFit: 'cover' }} />
            Cozy Pharmacy
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Welcome to Cozy Pharmacy</h1>
              <p className="tagline">Your Trusted Community Pharmacy in Seremban</p>
              <a href="#contact" className="cta-button">Visit Us Today</a>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text fade-in">
                <h2>About Cozy Pharmacy</h2>
                <p>
                  At Cozy Pharmacy, we've been serving the Seremban community with dedication and care for years. 
                  Our mission is to provide accessible, affordable, and personalized healthcare solutions to every 
                  member of our community.
                </p>
                <p>
                  As a local community pharmacy, we understand the unique healthcare needs of our neighbors. 
                  Our experienced pharmacists are always ready to provide expert advice, medication counseling, 
                  and health consultations in a warm, welcoming environment.
                </p>
                <p>
                  We believe that healthcare should be personal, which is why we take the time to get to know 
                  each of our customers and their specific health requirements.
                </p>
              </div>
              <div className="about-image fade-in">
                🏪
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <h2 className="fade-in">Our Services</h2>
            <div className="services-grid">
              <div className="service-card fade-in">
                <span className="icon">💊</span>
                <h3>Prescription Dispensing</h3>
                <p>Fast and accurate prescription filling with thorough medication counseling and drug interaction checks.</p>
              </div>
              <div className="service-card fade-in">
                <span className="icon">🩺</span>
                <h3>Health Consultations</h3>
                <p>Professional advice on medication management, health conditions, and wellness from our qualified pharmacists.</p>
              </div>
              <div className="service-card fade-in">
                <span className="icon">🏥</span>
                <h3>Over-the-Counter Medications</h3>
                <p>Wide selection of OTC medicines, vitamins, supplements, and health products for your daily needs.</p>
              </div>
              <div className="service-card fade-in">
                <span className="icon">📋</span>
                <h3>Health Screenings</h3>
                <p>Basic health monitoring services including blood pressure checks and health assessments.</p>
              </div>
              <div className="service-card fade-in">
                <span className="icon">🚚</span>
                <h3>Delivery Service</h3>
                <p>Convenient medication delivery service for elderly patients and those with mobility challenges.</p>
              </div>
              <div className="service-card fade-in">
                <span className="icon">💝</span>
                <h3>Personal Care</h3>
                <p>Complete range of personal care products, baby care items, and health and beauty essentials.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="fade-in">Visit Us Today</h2>
            <div className="contact-content">
              <div className="contact-info fade-in">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <span className="icon">📍</span>
                  <div>
                    <strong>Address:</strong><br />
                    335, Jalan Berlian, Taman Senawang Jaya, Seremban, Negeri Sembilan<br />
                    Malaysia
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Phone:</strong><br />
                    06-6772446
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <div>
                    <strong>Email:</strong><br />
                    cozypharmacy@gmail.com
                  </div>
                </div>
              </div>
              <div className="hours fade-in">
                <h3>Operating Hours</h3>
                <div className="hours-item">
                  <span>Monday - Saturday</span>
                  <span>8:30 AM - 8:30 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>Close</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2025 Cozy Pharmacy. All rights reserved. | Serving the Seremban community with care.</p>
        </div>
      </footer>
    </>
  );
} 