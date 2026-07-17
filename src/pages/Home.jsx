import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* HERO */}
      <section
        id="hero"
        className="hero"
      >
        <div className="hero-content">

          <p className="sub-heading">
            Premium Interior & Exterior
            Solutions
          </p>

          <h1>
            Carving Your Dreams Into
            Reality
          </h1>

          <p className="hero-text">
            Premium GRC, POP,
            Interior & Exterior Design
            Solutions Crafted To
            Perfection
          </p>

          <div className="hero-buttons">

            <a href="#products">
              <button className="btn-primary">
                Explore Products
              </button>
            </a>

            <a
              href="https://wa.me/919049163541"
              target="_blank"
            >
              <button className="btn-secondary">
                Get Quote
              </button>
            </a>

          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="services"
      >
        <h2>Our Services</h2>

        <div className="services-container">

          <div className="service-card">
            <h3>GRC Work</h3>
            <p>
              Premium GRC solutions
              for homes and
              commercial spaces.
            </p>
          </div>

          <div className="service-card">
            <h3>Interior Design</h3>
            <p>
              Elegant interiors crafted
              for modern living.
            </p>
          </div>

          <div className="service-card">
            <h3>Exterior Design</h3>
            <p>
              Elevation and facade
              designs built beautifully.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}

      <section
        id="products"
        className="products"
      >
        <h2>Featured Products</h2>

        <div className="products-container">

          <div className="product-card">
            <img
              src="https://picsum.photos/500/400?1"
              alt="Columns"
            />

            <h3>POP Columns</h3>
            <p>
              Elegant decorative
              columns for premium
              architecture.
            </p>
          </div>

          <div className="product-card">
            <img
              src="https://picsum.photos/500/400?2"
              alt="Mouldings"
            />

            <h3>POP Mouldings</h3>
            <p>
              Decorative moulding
              designs for interiors
              and ceilings.
            </p>
          </div>

          <div className="product-card">
            <img
              src="https://picsum.photos/500/400?3"
              alt="Jali"
            />

            <h3>GRC Jali Designs</h3>
            <p>
              Premium customized
              jali designs for elegant
              exteriors.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="transformation"
      >

        <div className="transformation-content">

          <div className="left-side">
            <p className="section-tag">
              Real Transformations
            </p>

            <h2>
              Bringing Spaces To Life
            </h2>

            <p>
              We transform simple
              structures into premium
              architectural spaces
              with precision and
              creativity.
            </p>

            <button className="btn-primary">
              View Projects
            </button>
          </div>

          <div className="right-side">
            <img
              src="https://picsum.photos/800/500"
              alt="Transformation"
            />
          </div>

        </div>
      </section>

      {/* FOOTER */}

     <footer className="footer">

  <div className="footer-container">

    {/* LEFT */}

    <div className="footer-section">

      <h2>TMT Arts</h2>

      <p className="footer-desc">
        Premium Interior & Exterior
        Design, GRC, POP & Fiber
        Decor solutions crafted with
        precision and elegance.

        <br /><br />

        Carving Your Dreams Into Reality.
      </p>

    </div>

    {/* CONTACT */}

    <div className="footer-section">

      <h3>Contact</h3>

      <p>
        📍
        <a
          href="https://maps.app.goo.gl/mMgsmL9YRZDVjPWJ8"
          target="_blank"
          rel="noreferrer"
        >
          Vasai, Maharashtra
        </a>
      </p>

      <p>
        📞 Treson:-   
        <a href="tel:+919049163541"> 
           +91 9049163541
        </a>
      </p>

      <p className="footer-contact">
  <span className="contact-icon">
    📧
  </span>

  <a href="mailto:carvalhotreson@gmail.com">
    carvalhotreson@gmail.com
  </a>
</p>
      <p>
        📷
        <a
          href="https://www.instagram.com/tmtarts?igsh=ZnZkaDB1bzJ6OWxn"
          target="_blank"
          rel="noreferrer"
        >
          @tmtarts
        </a>
      </p>

    </div>

  </div>

  <div className="footer-bottom">

    <p>
      © 2025 TMT Arts.
      All Rights Reserved.
    </p>

    <p className="credits">
  Designed & Developed by
</p>

<p className="credit-name">
  <a
    href="https://linktr.ee/AaronVaz"
    target="_blank"
    rel="noreferrer"
  >
    Aaron Vaz
  </a>
</p>

<p className="credit-contact">
  Contact:
  <a href="tel:+919552046225">
    {" "}+91 9552046225
  </a>
</p>

  </div>

</footer>

      {/* WHATSAPP FLOAT */}

      <a
        href="https://wa.me/919049163541"
        target="_blank"
        className="whatsapp-btn"
      >
        💬
      </a>

    </div>
  );
}

export default Home;