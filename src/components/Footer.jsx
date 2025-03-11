import '../css/Footer.css';

const FooterLinkSection = ({ title, links }) => (
  <div className="inside-text">
    <div className="head-text">
      <p className="head">{title}</p>
    </div>
    {links.map((link, index) => (
      <div className="line" key={index}>
        <p><a href="#">{link}</a></p>
      </div>
    ))}
  </div>
);

function Footer() {
  return (
    <div className="footer">
      <div className="content-footer">
        <div className="box">
          <div className="logo">
            <video src="https://framerusercontent.com/assets/RsAriLZGy8MSNSNwh3jj19nfjw.mp4" controls style={{ width: '30px' }} /> 
          </div>

          <FooterLinkSection 
            title="Paste" 
            links={["Try for free", "Get on Setapp", "Use cases", "Updates", "Pricing"]} 
          />
          <FooterLinkSection 
            title="Resources" 
            links={["Help & support", "Blog", "Terms of use", "Privacy Policy"]} 
          />
          <FooterLinkSection 
            title="More" 
            links={["About", "Contact", "Beta program", "Suggest a feature"]} 
          />
        </div>

        <div className="social">
          <div className="inside-social">
            <div className="head-text">
              <p>Follow us</p>
            </div>
            <div className="img-social">
              <div className="social-logo">
                <img src="https://framerusercontent.com/modules/Ha5LC44Kej1N9mT588s8/Fg0PGPIS9yiHmX80vQVX/assets/0r6IHdgzqImGvEMg7sgrAE8ZkQ.svg" alt="Social Media 1" />
              </div>
              <div className="social-logo">
                <img src="https://framerusercontent.com/modules/Ha5LC44Kej1N9mT588s8/Fg0PGPIS9yiHmX80vQVX/assets/TSw0SN3gJzyYIUBFqbAhSN2ss.svg" alt="Social Media 2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line-footer">
        <div className="line-inside"></div>
      </div>

      <div className="copyright">
        <div className="paste-team">
          <p>© 2025 Paste Team ApS. All rights reserved.</p>
        </div>
        <div className="All-trademarks">
          <p>All trademarks are the property of their respective owners.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
