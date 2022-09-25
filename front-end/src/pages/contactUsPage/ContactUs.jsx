import "./contactUs.css";

import SocialsLinks from "../../components/socials links/SocialsLinks";

const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <div className="contactUs-section">
        <h1 className="contactUs-section-title">Contact Us</h1>
        <p>yummy@cooking.com</p>
        <p>+370 6060 1234</p>
        <p>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Pastry str. 13, Utena&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Pastry str. 13, Utena, Lithuania"
              ></iframe>
            </div>
          </div>
          Pastry str. 13, Utena, Lithuania
        </p>
      </div>
      <SocialsLinks />
    </div>
  );
};

export default ContactUs;