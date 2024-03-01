import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center text-light bg-dark">
      <div className="container py-4">
        <div className="row border-bottom pb-4">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="col-lg-6">
            {/* Social network icons container */}
            <div style={{width:"100%", display: 'flex', justifyContent: 'space-around'}}>
              <Link to="/" className="me-3 text-white" style={{textDecoration: 'none', fontSize:"25px"}}><FaFacebook /></Link>
              <Link to="/" className="me-3 text-white" style={{textDecoration: 'none', fontSize:"25px"}}><FaTwitter /></Link>
              <Link to="/" className="me-3 text-white" style={{textDecoration: 'none' , fontSize:"25px"}}><FaInstagram /></Link>
              <Link to="/" className="me-3 text-white" style={{textDecoration: 'none' , fontSize:"25px"}}><FaLinkedin /></Link>
            </div>
          </div>
          <div className="col-lg-6">
            {/* Contact information */}
            <p className="mb-0">
              <i className="bi bi-geo-alt-fill me-2"></i>XYZ HOME
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope-fill me-2"></i>XYX@example.com
            </p>
          </div>
        </div>

        {/* Main container div: holds the entire content of the footer */}
        <div className="mt-4">
          <div className="row">
            {/* TW Elements section */}
            <div className="col-md-6 col-lg-3">
              <h6 className="mb-4 font-weight-bold">XYXZ</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                obcaecati quisquam nisi atque asperiores eius cupiditate
                aliquam, accusantium ipsam nobis perspiciatis dolores quia
                fuga similique quis.
              </p>
            </div>
            {/* Products section */}
            <div className="col-md-6 col-lg-3">
              <h6 className="mb-4 font-weight-bold"> TOP CATEGORIES</h6>
              <ul className="list-unstyled mb-0">
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Saree</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Kurtas</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Palazzos</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Straight Suit Sets</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Anarkali Suit Sets</Link></li>
              </ul>
            </div>
            {/* Useful links section */}
            <div className="col-md-6 col-lg-3">
              <h6 className="mb-4 font-weight-bold">BRAND</h6>
              <ul className="list-unstyled mb-0">
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>About us</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Investor Information</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Business Enquiry</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Achievements</Link></li>
                <li><Link to="/" className="text-light" style={{textDecoration: 'none'}}>Store</Link></li>
              </ul>
            </div>
            {/* Contact section */}
            <div className="col-md-6 col-lg-3">
              <h6 className="mb-4 font-weight-bold">Contact</h6>
              <p>
                If you have any questions or inquiries, feel free to contact us. We're here to help!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg- py-3">
        <div className="container text-center">
          <p className="mb-0 text-gray">
            © 2024 Copyright:{" "}
            <Link to="/" className="fw-bold text-light" style={{textDecoration: 'none'}}>
              wwww.clothesbrand.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
