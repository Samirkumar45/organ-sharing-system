// import React from 'react';
// import './About.css';

// const Abouts = () => {
//   return (
//     <div className="about-container">
//       <h2>About Us</h2>
//       <p>We are a nonprofit organization dedicated to saving lives through organ donation and transplantation. Our goal is to increase awareness about the importance of organ donation and make the process easier for both donors and recipients.</p>
//       <p>Our system connects donors and recipients in need of organs and provides a secure and efficient way to exchange information and communicate throughout the organ donation process. We work closely with hospitals, transplant centers, and other organizations to ensure that the organ donation process is safe and transparent.</p>
//       <h3>Our Mission</h3>
//       <p>Our mission is to increase the number of lifesaving organ donations by making the process easier and more accessible for everyone. We believe that everyone should have the opportunity to donate or receive an organ, regardless of their background or financial situation.</p>
//       <h3>Our Team</h3>
//       <p>We have a dedicated team of professionals who are passionate about saving lives through organ donation. Our team includes medical experts, software developers, and community advocates who work together to ensure that our system is safe, efficient, and accessible to everyone.</p>
//       <p>If you have any questions or would like to learn more about our organization, please don't hesitate to contact us.</p>
//       <button className="contact-button">Contact Us</button>
//     </div>
//   );
// }

// export default Abouts;

import React from 'react';

function Abouts() {
  return (
    <div>
      <section id='about' className='about'>
        <div className='container aos-init aos-animate' data-aos='fade-up'>
          <div className='section-title'>
            <h2>About</h2>
            <p>
              Organ donation is the selfless act of donating one's organs or
              tissues to save or improve the lives of others who are in need. It
              is a vital and life-saving practice that can help to enhance the
              quality of life for those who are suffering from debilitating
              illnesses or injuries.
            </p>
          </div>

          <div className='row'>
            <div
              className='col-lg-6 aos-init aos-animate'
              data-aos='fade-right'
            >
              <img
                src='  https://www.shutterstock.com/image-vector/organ-donation-web-banner-flyer-260nw-1569642214.jpg'
                className='img-fluid'
                alt=''
              />
            </div>
            <div
              className='col-lg-6 pt-4 pt-lg-0 content aos-init aos-animate'
              data-aos='fade-left'
            >
              <h3>Organ Donation process</h3>
              <h3>Step 1</h3>
              <p className='fst-italic'>
                <strong>Registration:</strong> Individuals who wish to become
                organ donors can register their decision online, through their
                driver's license or state ID, or by filling out a donor card.
                Registering as an organ donor is an important step in ensuring
                that your wishes are known and honored in the event of your
                death.
              </p>
              <h3>Step 2</h3>
              <p className='fst-italic'>
                <strong>Appointment:</strong> The customer contacts the service
                provider to request an appointment, either via phone, email, or
                an online booking system.
              </p>
            </div>
            <div className='section-title'>
              <h3>Step 3</h3>
              <p>
                <strong>Donate Organ:</strong> Organ donation is a life-saving
                process that can save and improve the lives of many people. It
                is important for individuals to register as organ donors and
                discuss their wishes with their family to help increase the
                number of organs available for transplantation.{' '}
              </p>
            </div>
            <div className='section-title'>
              <h3>Step 4</h3>
              <p>
                <strong>Save Life</strong> Saving a life can involve a wide
                range of actions, from providing CPR to administering emergency
                medication to providing emotional support. It is important to
                have basic knowledge of first aid and emergency response
                procedures, and to call for professional help in serious
                situations. Taking action to save a life can make a significant
                difference in the outcome for the individual in need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Abouts;
