import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   // const [confirmPassword, setConfirmPassword] = useState('');
  //   const [gender, setGender] = useState('');
  //   const [bloodGroup, setBloodGroup] = useState('');
  //   const [address, setAddress] = useState('');
  //   const [city, setCity] = useState('');
  //   const [isChecked, setIsChecked] = useState(false);
  //   const [organ, setOrgan] = useState('');

  //   const [age, setAge] = useState('');
  //   const navigate= useNavigate();

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     window.alert(`Thank you for submitting, ${firstName}!`);
  //     // do something with the user data
  //   };
  //   const handleCheckboxChange = () => {
  //     setIsChecked(!isChecked);
  //   };

  //   const collectData = async () => {
  //     console.warn(
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       age,
  //       gender,
  //       bloodGroup,
  //       city,
  //       address,
  //       isChecked,
  //       organ
  //     );
  //     let result = await fetch('http://127.0.0.1:4000/Donar', {
  //       method: 'post',
  //       body: JSON.stringify({
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //         age,
  //         gender,
  //         bloodGroup,
  //         city,
  //         address,
  //         isChecked,
  //         organ
  //       }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //     result = await result.json();
  //     console.warn(result);
  //     localStorage.setItem('items', JSON.stringify(result));
  //     if (result) {
  //         navigate('/DonarLogin');
  //     }
  //   };
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');
  // const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    window.alert(`Thank you for submitting, ${Name}!`);
  };

  const collectData = async () => {
    console.warn(Name, Email, Phone, Message,subject);
    let result= await fetch('http://127.0.0.1:4000/Contact',{
      method:'post',
      body: JSON.stringify({
        Name,Email,Phone,subject,Message,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    result= await result.json();
    console.warn(result);
    localStorage.setItem('items', JSON.stringify(result));
  };
  return (
    <div>
      <section onSubmit={handlelogin} className='contact-sec sec-pad'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='contact-detail'>
                <h1 className='section-title'>Contact us</h1>
                <ul className='contact-ul'>
                  <li>
                    <i className='fa fa-location-dot' /> Jitodia, Anand
                  </li>
                  <li>
                    <i className='fa fa-phone' />
                    <a href='tel:08510004495'>
                      <b>0255000XXXX</b>
                    </a>
                    ,
                    <a href='tel:08510005495'>
                      <b>0251600XXXX</b>
                    </a>
                  </li>
                  <li>
                    <i className='fa-solid fa-envelope' />
                    <a href='mailto:rudrabhatiya967@gmail.com'>
                      <b> sj650300@gmail.com</b>
                    </a>
                  </li>
                </ul>
                {/* <span>
            <a href="#" className="fb">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#" className="insta">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" className="twitter">
              <i className="fa-brands fa-twitter" />
            </a>
          </span> */}
              </div>
            </div>
            <div className='col-md-6'>
              <form action='#' className='contFrm' method='POST'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Your Name'
                      className='inptFld'
                      required=''
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email Address'
                      className='inptFld'
                      required=''
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='tel'
                      name='phone'
                      placeholder='Phone Number'
                      className='inptFld'
                      required=''
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      name='sub'
                      placeholder='Subject'
                      className='inptFld'
                      required=''
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className='col-12'>
                    <textarea
                      className='inptFld'
                      rows=''
                      cols=''
                      placeholder='Your Message...'
                      required=''
                      defaultValue={''}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='submit'
                      name='submit'
                      defaultValue='SUBMIT'
                      className='inptBtn'
                      onClick={collectData}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <p> Copyright © All rights reserved | Samir Jana</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
