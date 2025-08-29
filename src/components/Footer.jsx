import Phone from '../images/phone-call.png';
import QrCode from '../images/qrcode.png';
import Facebook from '../images/facebook.png';
import Whatsapp from '../images/whatsapp.png';
import Instagram from '../images/instagram.png';


export default function Footer() {
  return (
    <footer className="bg-white text-white relative overflow-hidden" style={{ backgroundColor: '#005243' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-32 py-16">
        {/* Top Section with Logo */}
        <div className="text-center mb-12">
          <h1 
            className="font-castoro text-2xl md:text-3xl text-white mb-4"
          >
            Dar Al Huda Quran Academy
          </h1>
          <div className="w-full h-0.5 bg-white opacity-30 mx-auto"></div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-14 md:gap-16">
          {/* Left Side - Our Vision */}
          <div className="text-center md:text-left md:max-w-xs">
            <h3 
              className="font-inter text-xl md:text-2xl text-white mb-6 font-semibold"
              
            >
              Our Vision
            </h3>
            <p 
              className="font-inter text-white text-lg md:text-xl font-light max-w-xl"
            >
              A global community connected through  the teachings of the Qur'an.
            </p>
          </div>

          {/* Right Side - Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 flex-1 md:max-w-4xl">
            {/* Address */}
            <div className="text-center md:text-left">
              <h3 
                className="font-inter text-sm md:text-base text-white mb-6 font-semibold"
              >
                Address
              </h3>
              <div 
                className="font-inter text-white  text-xs md:text-sm leading-relaxed font-light"
              >
                <p>Dar Al Huda Quran Academy,</p>
                <p>Bahria Town phase 8, Sector C,</p>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>

            {/* Pages */}
            <div className="text-center md:text-left">
              <h3 
                className="font-inter text-sm md:text-base text-white mb-6 font-semibold"  
              >
                Pages
              </h3>
              <ul 
                className="font-inter text-white text-xs md:text-sm leading-relaxed font-light space-y-1"
              >
                <li><a href="/" className="hover:opacity-80 transition-opacity">Home</a></li>
                <li><a href="/about" className="hover:opacity-80 transition-opacity">About us</a></li>
                <li><a href="/courses" className="hover:opacity-80 transition-opacity">Courses Page</a></li>
                <li><a href="/fee-structure" className="hover:opacity-80 transition-opacity">Fee structure</a></li>
                <li><a href="/faq" className="hover:opacity-80 transition-opacity">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="text-center md:text-left">
              <h3 
                className="font-inter text-sm md:text-base text-white mb-6 font-semibold"
              >
                Contact Us
              </h3>
              
              {/* QR Code */}
              <div className="flex justify-center md:justify-start mb-4">
                <img 
                  src={QrCode} 
                  alt="QR Code" 
                  className="w-24 h-24 bg-white p-1 rounded-lg shadow-lg"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start space-x-2">
                <a href="tel:+923305580053" className="hover:scale-110 transition-transform">
                  <img 
                    src={Phone}
                    alt="Phone" 
                    className="w-5 h-5"
                  />
                </a>
                <a href="https://wa.me/+923305580053?text=Hello%20there!%20I%27m%20interested%20in%20your%20services." target="_blank" className="hover:scale-110 transition-transform">
                  <img 
                    src={Whatsapp}
                    alt="WhatsApp" 
                    className="w-5 h-5"
                  />
                </a>
                <a href="https://www.instagram.com/daralhuda.official?utm_source=qr&igsh=NGl2cXpzbXg1OTBr" target="_blank" className="hover:scale-110 transition-transform">
                  <img 
                    src={Instagram} 
                    alt="Instagram" 
                    className="w-5 h-5"
                  />
                </a>
                <a href="https://www.facebook.com/share/1JnHCVbf2G/" target="_blank" className="hover:scale-110 transition-transform">
                  <img 
                    src={Facebook} 
                    alt="Facebook" 
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-6 md:px-32 py-6">
          <p 
            className="font-castoro text-center text-white text-xs md:text-sm font-light"
          >
            © 2025 Dar Al Huda Quran Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}