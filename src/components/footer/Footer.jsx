import React from 'react';
import './footer.css';

export function Footer() {
  return (
    <footer>
        <div class="address">
            500 Terry Francois Street <br/>
            San Francisco, CA 94158
        </div>
        <div class="contact-details">
            Tel: 123-456-7890 <br/>
            Email: info@mysite.com
        </div>
        <div class="copyright">
            © 2035 by Belle Weddings. <br/>
            Powered and secured by Wix
        </div>
        {/* <button class="cta">Book a Consultation</button> */}
    </footer>
  )
}

