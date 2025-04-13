import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-company">
            <Link href="#" className="logo" style={{ color: 'white' }}>
              {/* SVG logo */}
              Klyro Software
            </Link>
            <p>Menciptakan pengalaman digital luar biasa yang mengubah bisnis dan membantu anak bangsa.</p>
            <div className="social-links">
              {/* SVG social icons */}
            </div>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link href="https://syntaxhunt.my.id">SyntaxHunt</Link></li>
              <li><Link href="https://zaidunfood.my.id">Zaidun Food</Link></li>
              <li><Link href="https://confessai.my.id">Confess.ai</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@klyrosoft.my.id">Hallo@klyrosoft.my.id</a></li>
              <li><a href="tel:+6285156591459">+62 (877) 8701-0048</a></li>
              <li><a href="#">17123 Jl. Raya Perjuangan<br />Kota Bekasi, Jawa Barat, Indonesia</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 PT.KlyroSoft Technology Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
