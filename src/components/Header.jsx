import "../styles/header.css";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-container">
            <a href="" className="logo">
              <svg viewBox="0 0 24 24">
                <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53 1.25-.05 1.72-.8 3.24-.8s1.95.8 3.28.77c1.35 0 2.22-1.23 3.06-2.44a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.62-4.05z"></path>
              </svg>
            </a>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">iPhone 16</a>
              <a href="#">Store</a>
              <a href="#">Support</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
