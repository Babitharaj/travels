import Link from "next/link";
import styles from "./modalSmall.module.scss"
import { useState } from "react";

export default function ModalSmall(props) {
  const { width } = props;
  const data = props?.item;

  //console.log(data);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    currentCity: '',
    age: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = 'Field is required';
    } else if (formData.phoneNumber.length < 10) {
      validationErrors.phoneNumber = 'PhoneNo. must be at least 10 digits';
    }
    if (!formData.age) {
      validationErrors.age = 'Field is required';
    }
    if (!formData.currentCity) {
      validationErrors.currentCity = 'Field is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid, submit data or perform further actions
      console.log('Form submitted:', formData);
      // Reset form fields and errors
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        currentCity: '',
        age: '',
      });
      setErrors({});
    }
  };
  
  return (

     <div className={styles["content"]} style={{width: width}}>
     <div className={styles["formWrap"]}>
       <div className={styles["heading"]}>
         <p className={styles["top-head"]}>
           <span style={{fontSize: '16px'}}>
             {data?.heading?.value}
           </span>
         </p>
         <p>{data?.subHeading?.value}</p>
       </div>
      
       <form   onSubmit={handleSubmit}>
         <div className="input_section">
           <div className={styles["form-field"]}>
             <input
               type="text"
               className={styles["form-control"]}
               placeholder="Name"
               name="name"
               value={formData.name}
               onChange={handleChange}
               style={{border:errors.name ? "1px solid red": "1px solid #cbd5dd"}}
             />
           </div>
           <div className={styles["form-field"]}>
             <input
               type="email"
               name="email"
               className={styles["form-control"]}
               placeholder="Email"
               value={formData.email}
               onChange={handleChange}
               style={{border:errors.email ? "1px solid red": "1px solid #cbd5dd"}}
             />
           </div>
           <div className={`${styles["num-IND"]} ${styles["form-field"]}`}>
             <input
               type="text"
               className={styles["form-control"]}
               placeholder="91"
             />
           </div>
           <div className={`${styles["num-field"]} ${styles["form-field"]}`}>
             <input
               type="text"
               name="phoneNumber"
               className={styles["form-control"]}
               value={formData.phoneNumber}
              onChange={handleChange}
               placeholder="Mobile"
               style={{border:errors.phoneNumber ? "1px solid red": "1px solid #cbd5dd"}}
             />
           </div>
           <div className={styles["form-field"]}>
             <select
               className={styles["form-control"]}
               name="age"
               style={{ color: "rgb(118, 118, 118)", border:errors.phoneNumber ? "1px solid red": "1px solid #cbd5dd" }}
               value={formData.age}
                onChange={handleChange}
             >
               <option value="">Age</option>
               {age?.map((data,i)=>(
              <option value={data?.value} key={i}>{data?.value}</option>
              ))}
             </select>
           </div>
           <div className={styles["form-field"]}>
             <select
               className={styles["form-control"] + " input-field"}
               name="currentCity"
               value={formData.currentCity}
               onChange={handleChange}
               style={{ color: "rgb(118, 118, 118)",  border:errors.phoneNumber ? "1px solid red": "1px solid #cbd5dd" }}
             >
               <option value="">Where are you from ?</option>
               {cities?.map((city,i)=>(
                  <option value={city?.name} key={i}>{city?.name}</option>
                  ))}

             </select>
           </div>
     
           <div className={styles["buttonCenter"]}>
             <input
               id={styles["callToAction"]}
               className={styles["btn-default"]}
               type="submit"
               value="Submit"
             />
           </div>
 
           <div id={styles["newdiv"]}>
             <input type="checkbox" id="newCheckbox"/>
             <label>
             {data?.declarationText?.value}
             </label>
           </div>
           <Link href="/" legacyBehavior>
             <a id={styles["loginPromptLink"]} target="blank">
               Already a member? Log In.
             </a>
           </Link>
           <div
             className="errorBlock"
             style={{ display: "none", color: "red" }}
           ></div>
         </div>
       </form>
     </div>
     </div>
   
  );
}
export const age=[
  {value:"<24"}, {value:"25-28"},
  {value:"29-35"}, {value:"36-49"},
  {value:"50-55"}, 
  {value:">55"}
]
export const cities=[
  {name:"Bangaloore"}, {name:"Vishakhapatnam"}, {name:"Sholapur"}, {name:"Sitapur"},
  {name:"Tuticorin"}, {name:"Warangal"}, {name:"Sivasagar"}, {name:"Tuticorin"},
  {name:"Udaipur"}, {name:"Wayanad"}, {name:"Tezpur"}, {name:"Thekkady"},
  {name:"Vadodara"}, {name:"Warangal"}, {name:"Trichy"}, {name:"Trivandrum"},
  {name:"Ujjain"}, {name:"Yercaud"}, {name:"Thane"}, {name:"Thrissur"},
  {name:"Una"}, {name:"Yavatmal"}, {name:"Tinsukia"}, {name:"Solan"},
  {name:"Udupi"}, {name:"Zira"}, {name:"Tirupati"}, {name:"Srinagar"},
  {name:"Vellore"}, {name:"Zirakpur"}, {name:"Sivasagar"}, {name:"Tezpur"},
  {name:"Vijayawada"}, {name:"Sangrur"}, {name:"Tuticorin"}, {name:"Tiruvananthapuram"},
  {name:"Vellore"}, {name:"Samrala"}, {name:"Thekkady"}, {name:"Siliguri"},
  {name:"Varanasi"}, {name:"Secundarabad"}, {name:"Tuticorin"}, {name:"Shimla"},
]