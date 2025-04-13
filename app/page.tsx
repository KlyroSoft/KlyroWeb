import Footer from "./partials/Footer";
import Navbar from "./partials/Navbar";
import Image from 'next/image'
import AnimatedNumber from "./handling/AnimatedNumber";


export default function Home() {
  
  return (
    <>
       
    <div className="mobile-nav" id="mobileNav">
        <button className="mobile-nav-close" id="mobileNavClose">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    <div className="overlay" id="overlay"></div>
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Mendorong Batas Kreativitas</h1>
              <p>Menciptakan Terobosan Untuk Pengalaman Luar Biasa</p>
              <a href="#portfolio" className="btn">Jelajahi Produk Kami</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <div className="container">
            <div className="section-title">
              <h2>Tentang KlyroSoft</h2>
            </div>
            <div className="about-content ">
              <p>Di KlyroSoft, kami berdedikasi diri dalam menciptakan pengalaman digital luar biasa yang memadukan teknologi inovatif dengan ide serta kreativitas...</p>
              <br />
              <p>Dengan keahlian di berbagai platform dan teknologi...</p>
            </div>
            <div className="stats">
              <div className="stat-item">
                 <h3><AnimatedNumber target={150} suffix="+" /></h3>
                <p>Klien Aktif</p>
              </div>
              <div className="stat-item">
                <h3><AnimatedNumber target={85} suffix="%" /></h3>
                <p>Kepuasan Klien</p>
              </div>
              <div className="stat-item">
                <h3><AnimatedNumber target={3} suffix="+" /></h3>
                <p>Produk Pilihan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section" id="portfolio" style={{ backgroundColor: '#f3f4f8' }}>
          <div className="container">
            <div className="section-title">
              <h2>Karya Pilihan Kami</h2>
            </div>
            <div className="featured-work">
                <div className="work-card">
                    <div className="work-img">
                        <img src="/cdn/syntaxx.jpg" alt="Project image"></img>
                    </div>
                    <div className="work-details">
                        <h3>SyntaxHunt</h3>
                        <p className="justifyed">SyntaxHunt adalah platform tempat developer dapat memamerkan keterampilan, memecahkan tantangan pengkodean dunia nyata, dan memperoleh penghargaan sambil terhubung dengan inovator yang berpikiran sama di komunitas teknologi.</p>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-img">
                        <img src="/cdn/zaidun.jpg" alt="Project image"></img>
                    </div>
                    <div className="work-details">
                        <h3>Zaidun Food</h3>
                        <p className="justifyed">Platform online yang dapat diakses kapan saja dan di mana saja, memungkinkan pembelian untuk diskon serta hadiah menarik, dan mendukung metode pembayaran favorit Anda secara praktis dan aman.</p>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-img">
                        <img src="/cdn/confes.png" alt="Project image"></img>
                    </div>
                    <div className="work-details">
                        <h3>ConfessAI</h3>
                        <p>Ungkapkan perasaanmu secara bebas dan tanpa identitas melalui pesan anonim yang bisa dibagikan langsung ke Instagram, dan terhubung dengan temanmu secara unik dan menyenangkan.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-title">
              <h2>Layanan Kami</h2>
            </div>
              <div className="featured-work">
                <div className="work-card">
                    <div className="work-details">
                        <h3>Pengembangan Perangkat Lunak </h3>
                        <p>Kami menciptakan aplikasi berkinerja tinggi dengan pengalaman pengguna yang sempurna dan kinerja yang dioptimalkan di seluruh platform web dan seluler</p>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-details">
                        <h3>Komunitas, Relasi dan Kreativtas</h3>
                        <p>Bangkitkan potensi anak bangsa melalui wadah inspiratif untuk menciptakan, mengembangkan keterampilan, serta meraih prestasi membanggakan di berbagai bidang impian mereka.</p>
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-details">
                        <h3>Komunikasi Dan Hubungan Individu</h3>
                        <p>Menjadi jembatan awal dalam membangun komunikasi yang lebih mudah, membantu individu menciptakan koneksi, serta mengekspresikan hubungan secara lebih terbuka dan bermakna</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact" style={{ backgroundColor: '#f3f4f8' }}>
          <div className="container">
            <div className="section-title">
              <h2>Get In Touch</h2>
            </div>
            <div className="about-content">
              <p>Siap mewujudkan ide Anda menjadi kenyataan? Hubungi kami hari ini...</p>
              <br />
              <a href="mailto:contact@klyrosoft.my.id" className="btn" style={{ background: 'linear-gradient(90deg, #3742fa, #5352ed)', color: 'white' }}>Hubungi Kami</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
