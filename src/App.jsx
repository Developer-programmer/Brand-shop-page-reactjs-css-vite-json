import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaTelegramPlane,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'
import { SiPuma } from 'react-icons/si'
import './App.css'

const products = [
  {
    name: 'Essentials Oversized Tee',
    category: 'Everyday uniform',
    price: '$35',
    image: '/puma-tee.png',
    alt: 'Black PUMA Essentials oversized T-shirt',
    className: 'product-image--tee',
  },
  {
    name: 'Speedcat OG',
    category: 'Street icon',
    price: '$100',
    image: '/puma-speedcat.png',
    alt: 'Red and white PUMA Speedcat OG sneaker',
    className: 'product-image--shoe',
  },
  {
    name: 'Essentials Cat Cap',
    category: 'Finishing touch',
    price: '$25',
    image: '/puma-cap.png',
    alt: 'Black PUMA Essentials baseball cap',
    className: 'product-image--cap',
  },
]

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, color: '#1877f2', href: 'https://www.facebook.com/puma' },
  { name: 'Twitter', icon: FaTwitter, color: '#1d9bf0', href: 'https://twitter.com/puma' },
  { name: 'GitHub', icon: FaGithub, color: '#252525', href: 'https://github.com' },
  { name: 'LinkedIn', icon: FaLinkedinIn, color: '#0a66c2', href: 'https://www.linkedin.com/company/puma' },
  { name: 'Instagram', icon: FaInstagram, color: '#d62976', href: 'https://www.instagram.com/puma' },
  { name: 'Telegram', icon: FaTelegramPlane, color: '#229ed9', href: 'https://telegram.org' },
  { name: 'WhatsApp', icon: FaWhatsapp, color: '#25d366', href: 'https://www.whatsapp.com' },
  { name: 'YouTube', icon: FaYoutube, color: '#ff0033', href: 'https://www.youtube.com/puma' },
  { name: 'Reddit', icon: FaRedditAlien, color: '#ff4500', href: 'https://www.reddit.com' },
  { name: 'TikTok', icon: FaTiktok, color: '#111111', href: 'https://www.tiktok.com/@puma' },
  { name: 'Twitch', icon: FaTwitch, color: '#9146ff', href: 'https://www.twitch.tv' },
]

const navigation = ['Home', 'Shop', 'Customers', 'Branches', 'Contact Us', 'About Us']

function App() {
  return (
    <main className="storefront">
      <header className="site-header">
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a key={item} href={index === 1 ? '#shop' : '#home'}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="brand-mark" aria-label="PUMA">
          <SiPuma aria-hidden="true" />
          <span>PUMA</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow"><span /> THE NEW STREET UNIFORM</p>
          <h1 id="hero-title">MAKE<br />YOUR <em>MOVE.</em></h1>
          <p className="hero-description">
            Built for the ones who never stand still. Iconic form, all-day energy.
          </p>
          <a className="shop-link" href="#shop">
            SHOP THE DROP <span aria-hidden="true">↗</span>
          </a>
          <p className="edition-note">01 / 03 &nbsp; CITY ESSENTIALS</p>
        </div>

        <div className="shop-panel" id="shop">
          <div className="shop-panel-heading">
            <div>
              <p className="eyebrow">LATEST DROP / 2025</p>
              <h2>Everyday icons</h2>
            </div>
            <a href="https://us.puma.com/us/en" target="_blank" rel="noreferrer">
              VIEW ALL <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <a
                className={`product-card product-card--${index + 1}`}
                href="https://us.puma.com/us/en"
                target="_blank"
                rel="noreferrer"
                key={product.name}
              >
                <div className="product-image-wrap">
                  <img className={product.className} src={product.image} alt={product.alt} />
                  <span className="product-number">0{index + 1}</span>
                  <span className="product-quick-add" aria-hidden="true">+</span>
                </div>
                <div className="product-info">
                  <div>
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="product-footer">
            <span>DESIGNED TO MOVE YOU</span>
            <span>EST. 1948 &nbsp; / &nbsp; HERZOGENAURACH</span>
          </div>
        </div>
      </section>

      <aside className="social-rail" aria-label="Follow PUMA">
        {socialLinks.map(({ name, icon: Icon, color, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            title={name}
            style={{ '--social-color': color }}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </aside>
    </main>
  )
}

export default App
