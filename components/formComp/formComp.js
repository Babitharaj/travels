
// import styles from "./formComp.module.scss"
// import { useState } from "react";
// export default function FormSection(props){
//   const Data= props?.data;

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     currentCity: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData,[e.target.name] : e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation
//     const validationErrors = {};

//     if (!formData.name) {
//       validationErrors.name = 'Name is required';
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       validationErrors.email = 'Email is required';
//     } 
//     // else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//     //   validationErrors.email = 'Email is invalid';
//     // }
//     else if(!emailRegex.test(formData.email)){
//       validationErrors.email = 'Email is invalid';
//     }

//     if (!formData.phoneNumber) {
//       validationErrors.phoneNumber = 'Field is required';
//     } else if (formData.phoneNumber.length < 10) {
//       validationErrors.phoneNumber = 'PhoneNo. must be at least 10 digits';
//     }

//     if (!formData.currentCity) {
//       validationErrors.currentCity = 'Current-City is required';
//     } else if (! /\d/.test(formData.currentCity)) {
//       validationErrors.currentCity = 'Current-City is invalid';
//     }
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       // Form is valid, submit data or perform further actions
//       console.log('Form submitted:', formData);
//       // Reset form fields and errors
//       setFormData({
//         name: '',
//         email: '',
//         phoneNumber: '',
//         currentCity: '',
//       });
//       setErrors({});
//     }
//   };
  
 

//     return(
//         <div className={styles["form_section"]}>
//         <form
//           className="frmsubmit"
//           name="registration" 
//           onSubmit={handleSubmit}>

//           <div className={styles["form-group"]}>
          
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
                
//                 className={styles["form-control"]}
//                 style={{border:errors.name ? "1px solid red": "none"}}
//               />
//              {errors.name && <span className={styles["form-control__label"]}>{errors.name}</span>}

//           </div>
//           <div className={styles["form-group"]}>

//               <input
//                 type="text"
//                 placeholder="Current City"
//                 name="currentCity"
//                 value={formData.currentCity}
//                 onChange={handleChange}
//                 className={styles["form-control"]}
//                 style={{border:errors.currentCity ? "1px solid red": "none"}}
//               />
//                {errors.currentCity && <span className={styles["form-control__label"]}>{errors.currentCity}</span>}
            
          
//           </div>
//           <div className={styles["form-group"]}>
//           <input type="text" className={styles["form-control"]} placeholder="+91"  style={{width: '90px', pointerEvents: 'none', color:'#827e7e'}}/>
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               style={{width: 'calc(100% - 105px)', float: 'right', border:errors.phoneNumber ? "1px solid red": "none"}}
//               className={styles["form-control"]}
              
//             />
//            {errors.phoneNumber && <span className={styles["form-control__label"]}>{errors.phoneNumber}</span>}
//           </div>

//           <div className={styles["form-group"]}>
          
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               id="email"
//               value={formData.email}
//              onChange={handleChange}
//               className={styles["form-control"]}
//               style={{border:errors.email ? "1px solid red": "none"}}
//             />
//             {errors.email && <span className={styles["form-control__label"]}>{errors.email}</span>}
//           </div>

//           <div className={styles["form-group"]}>
//                 <div className={styles["custom_checkbox"]}>
               
//                   <input
//                     type="checkbox"
//                     className={styles["check"] + " form-check-input"}
//                     id="newCheckbox"
                  
//                   />
               
//                   <label>
//                   {Data?.formDeclaration?.value}
//                   </label>
                 
//                 </div>
              
//               </div>
           
//           <div className={styles["btn-submit"]}>
//             <input
//               type="submit"
//               className={styles["submit"]}
//               value={Data?.FormButton?.value}
             
//             />
//           </div>
//         </form>
        
//       </div>
//     )
// }



import styles from "./formComp.module.scss"
import { useState } from "react";
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'
export default function FormSection(props){
  const Data= props?.data;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    countryCode: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate name
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }else if(!nameRegex.test(name)){
      newErrors.name = 'Invalid Name';
    }
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if(!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    // Validate current city
    
    if (city.trim() === '') {
      newErrors.city = 'City is required';
      valid = false;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/; // Assumes 10-digit phone numbers
    if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Invalid phone number';
      valid = false;
    }

    // Validate country code
    const pattern = /^\+\d{2,3}$/;
    if (countryCode.trim() === '') {
      newErrors.countryCode = 'Country code is required';
      valid = false;
    }
    else if(!pattern.test(countryCode)){
      newErrors.countryCode = 'Invalid Country code';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form or perform any other desired actions
      console.log('Form submitted successfully!');
    } else {
      console.log('Form contains errors. Please correct them.');
    }
  };


    return(
        <div className={styles["form_section"]}>
        <form
          className="frmsubmit"
          name="registration" 
          onSubmit={handleSubmit}>

          <div className={styles["form-group"]}>
          
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
                className={styles["form-control"]}
                style={{border:errors.name ? "1px solid red": "none"}}
              />
             {errors.name && <span className={styles["form-control__label"]}>{errors.name}</span>}

          </div>
          <div className={styles["form-group"]}>

              <input
                type="text"
                placeholder="Current City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)} 
                className={styles["form-control"]}
                style={{border:errors.city ? "1px solid red": "none"}}
              />
               {errors.city && <span className={styles["form-control__label"]}>{errors.city}</span>}
            
          </div>
          <div className={styles["form-group"]}>
          <input 
           type="text"
           name="countryCode"
           value={countryCode}
           onChange={(e) => setCountryCode(e.target.value)} 
           className={styles["form-control"]} placeholder="+91"  
           style={{width: '90px', color:'#827e7e', border:errors.countryCode ? "1px solid red": "none"}}/>
            
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{width: 'calc(100% - 105px)', float: 'right', border: errors.phone ? "1px solid red": "none"}}
              className={styles["form-control"]}  
            />
            {/* <PhoneInput
                  country={"in"}
                  autoFormat={false}
                  inputProps={{
                    name: "phone",
                    className: `form-control px-5  ${styles["form-control"]}`,
                    required: true,
                    autoFocus: false,
                  }}
                  placeholder={"Enter Phone Number*"}
                  countryCodeEditable={false}
                // onlyCountries={process.env.profileConfig.mobileCountryCode}
                //country={process.env.profileConfig.defaultMobileCountryCode}
                /> */}
            {errors.phone && <span className={styles["form-control__label"]}>{errors.phone}</span>}
          </div>
          

          <div className={styles["form-group"]}>
          
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles["form-control"]}
              style={{border:errors.email ? "1px solid red": "none"}}
            />
            {errors.email && <span className={styles["form-control__label"]}>{errors.email}</span>}
          </div>

          <div className={styles["form-group"]}>
                <div className={styles["custom_checkbox"]}>
               
                  <input
                    type="checkbox"
                    className={styles["check"] + " form-check-input"}
                    id="newCheckbox"
                  
                  />
               
                  <label>
                  {Data?.formDeclaration?.value}
                  </label>
                 
                </div>
              
            </div>
           
          <div className={styles["btn-submit"]}>
            <input
              type="submit"
              className={styles["submit"]}
              value={Data?.FormButton?.value}
             
            />
          </div>
        </form>
        
      </div>
    )
}