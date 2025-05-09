import "../styles/hero.css";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>Iphone 16</h1>
          <div className="hero-tagline">Built for Apple Intelligence.</div>
          <p>Designed for brilliance.</p>

          <div className="phone-container">
            <div className="phone">
              <img
                className="phone-image"
                src="../assets/images/blue-iphone.png"
                alt="Iphone 16 blue"
              />
            </div>
          </div>

          <div className="color-options">
            <div
              className="color-option active"
              id="blue"
              data-color="blue"
            ></div>
            <div className="color-option" id="green" data-color="green"></div>
            <div className="color-option" id="pink" data-color="pink"></div>
            <div className="color-option" id="white" data-color="white"></div>
            <div className="color-option" id="black" data-color="black"></div>
          </div>

          <div className="size-options">
            <div className="size-option active" data-size="6.1">
              6.1" Display
            </div>
            <div className="size-option" data-size="6.7">
              6.7" Display
            </div>
          </div>
          <a
            className="cta-button"
            ref="https://www.apple.com/br/shop/buy-iphone/iphone-16?afid=p238%7CsHZwkdh19-dc_mtid_209258i342853_pcrid_733828020419_pgrid_170261805027_pexid_174209014752_ptid_kwd-2584029775_&cid=wwa-br-kwgo-iphone-slid-Zqsrvw92-Core-iPhone16-Evergreen-"
          >
            Buy
          </a>
          <p className="price">From $999.00 or $85 /mo. for 12 mo.‡</p>
          <p className="availability">Apple Intelligence available now.</p>
        </div>
      </section>
    </>
  );
}
