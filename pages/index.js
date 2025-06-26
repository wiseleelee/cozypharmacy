import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cozy Pharmacy - Your Trusted Community Pharmacy in Seremban</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <header className="modern-header">
        <nav className="container modern-nav">
          <div className="logo">
            <img src="/images.jpeg" alt="Cozy Pharmacy Logo" style={{ height: '2.5rem', width: '2.5rem', marginRight: '10px', borderRadius: '8px', objectFit: 'cover' }} />
            Cozy Pharmacy
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#extras">Extras</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="header-contact">
            <span className="phone">📞 06-6772446</span>
            <a href="#booking" className="booking-btn">Booking</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="modern-hero">
          <div className="container hero-flex">
            <div className="hero-text">
              <h1>Join our 28-day health & wellness program</h1>
              <ul className="hero-benefits">
                <li>Personalized Care</li>
                <li>Expert Pharmacists</li>
                <li>Lasting Benefits</li>
              </ul>
              <p className="hero-sub">Your trusted community pharmacy in Seremban</p>
              <a href="#contact" className="cta-button">Enroll Now</a>
            </div>
            <div className="hero-image">
              <img src="/images.jpeg" alt="Pharmacy Program" style={{ borderRadius: '1.5rem', width: '350px', boxShadow: '0 8px 32px rgba(102,126,234,0.15)' }} />
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
        {/* Service/Offer Cards Section */}
        <section className="service-cards-section">
          <div className="container service-cards-grid">
            <div className="service-card-modern">
              <h3>1 Month Healing Package</h3>
              <p>Quick start, natural wellness, expert support.</p>
              <div className="service-price">RM99</div>
              <a className="service-cta" href="#">Add To Cart</a>
            </div>
            <div className="service-card-modern popular">
              <h3>3 Month Healing Journey</h3>
              <p>Popular choice for lasting results and balance.</p>
              <div className="service-price">RM249</div>
              <a className="service-cta" href="#">Add To Cart</a>
            </div>
            <div className="service-card-modern">
              <h3>1 Year Full Body Recovery</h3>
              <p>Comprehensive, holistic, and personalized care.</p>
              <div className="service-price">RM899</div>
              <a className="service-cta" href="#">Add To Cart</a>
            </div>
            <div className="service-card-modern">
              <h3>Custom Individual Package</h3>
              <p>Tailored to your unique health needs.</p>
              <div className="service-price">Price Varies</div>
              <a className="service-cta" href="#">Add To Cart</a>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="feature-section">
          <div className="container feature-flex">
            <div className="feature-image">
              <img src="/images.jpeg" alt="Natural Healing" />
            </div>
            <div className="feature-text">
              <h2>Unlock your body's full healing potential with nature</h2>
              <ul className="feature-list">
                <li>Expert remedy preparation</li>
                <li>Custom potency formulation</li>
                <li>Careful & fast shipping</li>
              </ul>
              <a className="feature-cta" href="#">Learn More</a>
            </div>
          </div>
        </section>

        {/* Highlight/Promo Section */}
        <section className="highlight-section">
          <div className="container highlight-flex">
            <div className="highlight-text">
              <h3>LIMITED TIME OFFER</h3>
              <h2>Hair tissue mineral analysis testing included (RM150 value)!</h2>
              <p>Learn more about nature healing and get a free test with your first package.</p>
              <a className="highlight-cta" href="#">Learn More About Nature Healing</a>
            </div>
            <div className="highlight-image">
              <img src="/images.jpeg" alt="Promo" />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">“Chronic Tiredness: I feel so much better after my healing journey with Cozy Pharmacy!”</div>
              <div className="testimonial-author">- A. Lee</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">“High Blood Pressure: My readings are down and I feel more energetic.”</div>
              <div className="testimonial-author">- S. Tan</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">“Personalized approach and caring staff. Highly recommended!”</div>
              <div className="testimonial-author">- M. Kumar</div>
            </div>
          </div>
        </section>
      </main>
      {/* Modern Footer */}
      <footer className="modern-footer">
        <div className="container footer-flex">
          <div className="footer-logo">
            <img src="/images.jpeg" alt="Cozy Pharmacy Logo" style={{ height: '2rem', width: '2rem', marginRight: '8px', borderRadius: '6px', objectFit: 'cover' }} />
            Cozy Pharmacy
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-copy">&copy; 2025 Cozy Pharmacy. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
} 