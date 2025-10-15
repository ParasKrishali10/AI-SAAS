import { Instagram, Twitter, Linkedin, Youtube, Camera } from 'lucide-react';
import AnimateInView from './AnimateInView';
export default function Footer() {
  return (


    <footer className="footer-container">
        <AnimateInView>
      <div className="footer-main-content">

        <div className="footer-brand-section">
          <div className="footer-logo ">

            <Camera className="h-10 w-10 bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl shadow-md" />
            <span>SocialCraft</span>
          </div>
          <p className="footer-description">
            The complete platform to create viral social media content with AI-powered tools and analytics.
          </p>
          <div className="footer-social-icons">

            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>


        <div className="footer-links-group">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="mt-6 footer-bottom-bar">
        <p>© 2025 SocialCraft. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

        </AnimateInView>
    </footer>
  );
}