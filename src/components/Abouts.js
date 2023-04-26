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
            <h2>About Us</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className='row'>
            <div
              className='col-lg-6 aos-init aos-animate'
              data-aos='fade-right'
            >
              <img src='assets/img/about.jpg' className='img-fluid' alt='' />
            </div>
            <div
              className='col-lg-6 pt-4 pt-lg-0 content aos-init aos-animate'
              data-aos='fade-left'
            >
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className='fst-italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className='bi bi-check-circle'></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className='bi bi-check-circle'></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className='bi bi-check-circle'></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Abouts;
