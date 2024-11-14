import styles from "./registerSection.module.scss"

export default function RegisterSection(props) {

  var lead = props?.uiLayout?.elements;

  // const formRef = useRef();

  // // const handleClick = () => {
  // //   formRef.current.reset();
  // // };
  // const nameRef = useRef()
  // const phoneRef = useRef()
  // const emailRef = useRef()

  // const [submit, setSubmit] = useState("")
  // const [error1, setError1] = useState('')
  // const [error2, setError2] = useState('')
  // const [error3, setError3] = useState('')
 

  // const handleSubmit = (e) => {
  //   console.log(e.type)
   
  //     e.preventDefault();
      
  //     const enteredName = nameRef.current.value;
  //     const enteredPhone = phoneRef.current.value;
  //     const enteredEmail = emailRef.current.value;


  //     var validationFlag1 = false;
  //     var validationFlag2 = false;
  //     var validationFlag3 = false;
     
  
  //     function validation(name, phoneNumber, email) {
  
  //       if ((name.match(/^[a-zA-Z'-]+$/)) && (name.length >= 3)) {
  //         setError1('')
  //         validationFlag1 = true;
  //       } else {
  //         setError1("Invalid Name");
  //         validationFlag1 = false;
  //       }
  
  //       // console.log(email)
  //       if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
  //         validationFlag2 = true;
  //         setError2('')
  //       } else {
  //         validationFlag2 = false;
  //         setError2("Invalid Email Address...!!!");
  //       }
  
  //       // console.log(subject.length)
  //       if (phoneNumber.length == 10) {
  //         validationFlag3 = true;
  //         setError3('')
  //       } else {
  //         validationFlag3 = false;
  //         setError3("Invalid PhoneNumber");
  //       }
  
  //     }
  
  //     validation(enteredName, enteredPhone, enteredEmail);
  
  //     if ((validationFlag1 == true) && (validationFlag2 == true) && (validationFlag3 == true)) {

  //       //setFocused(true)
  //       setSubmit("Your message has been sent. Thank you!")
  //       // return true;
  //     }
  //     else {
  //             //setFocused(false)
  //             setSubmit("Oops!, something went wrong. Please try again");
  //        }

  //     // if ((validationFlag1 == true) && (validationFlag2 == true) && (validationFlag3 == true) && (validationFlag4 == true)) {
  //     //   async function updateCacheForKey() {
  //     //     let payload = {
  //     //       pathParams: {},
  //     //       queryParams: {},
  //     //       data: {
  //     //         type: "P",
  //     //         name: `${enteredName} ${enteredSurname}`,
  //     //         designation: "",
  //     //         email: enteredEmail,
  //     //         subject: enteredSubject,
  //     //         message: enteredMsg,
  //     //       },
  //     //     };
  //     //     const result = await postHttpService("useractions", payload, "captureLead");

  //     //     if (result.status == 200 && result.data.status == 200) {
  //     //       console.log(result);
  //     //       var element = document.getElementById("successMessage");
  //     //        //setFocused(true)
  //     //        //setSubmit("Your message has been sent. Thank you!")
           
  //     //        element.innerHTML = "Thank You for Contacting Us. We will get back to you soon"
  //     //        formRef.current.reset();
  //     //        setTimeout(() => {
  //     //         element.innerHTML = null
  //     //       },5000)

  //     //     } else {
  //     //       //setFocused(false)
  //     //       setSubmit("Oops!, something went wrong. Please try again");
  //     //     }
  //     //   }
       
 
  //     // }
  
    
  // }


 // console.log(lead);
  return (
    <section
      id={styles["lead_form"]}
      className={styles["lead_form"]}
      style={{marginBottom: '320px',backgroundImage:`url(${lead?.leadSectionBg?.backgroundImage?.value})`}}
    >
      <div className={styles["container"] + " container"}>
        <div className="row">
          <div className={styles["form_section"]}>
            <figure>
              <img
                className=""
                alt="form"
                title="form" 
               src={lead?.leadSectionBg?.formBg?.value}
              />
            </figure>
            <form
              className="frmsubmit"
              name="registration"
              action="post"
             
            >
              <input type="hidden" name="page" value="home" />
              <h3>{lead?.Form?.FormTitle?.value}</h3>{" "}
              <div className={styles["form-group"]}>
                <span></span>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                 
                  className={styles["form-control"] + " user_name"}
                 
                />
              </div>
              <div className={styles["form-group"]}>
                <span data-validate-for="mobile_no"></span>
                <input type="text"  className={styles["form-control"]} placeholder="+91"  style={{width: '90px', pointerEvents: 'none',color: '#827e7e'}}/>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  id="mobile_no"
                
                  name="mobile_no"
                  style={{float: 'right', width:'calc(100% - 105px)'}}
                  className={styles["form-control"]}
                />
              </div>
              <div className={styles["form-group"]}>
                <span data-validate-for="email"></span>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                
                  className={styles["form-control"]}
                  
                />
              </div>
              <div className={styles["form-group"]} style={{background:'#f8f8f9'}}>
                <span data-validate-for="current_city"></span>

                <select
                  name="current_city"
                 
                  className={styles["form-control"]}
                  style={{height: '70px', background: '#f5f5f5', color: '#827e7e',
                  fontSize: '18px', outline:'none', marginBottom: '12px'}}
                >
                  <option >
                    Current City
                  </option>
                  {cities?.map((city,i)=>(

                  <option value={city?.name} key={i}>{city?.name}</option>
                  ))}
                </select>
              </div>
              <div
                className={styles["form-group"]}
             style={{background:"#f8f8f9", 
              marginTop:"-17px",
               paddingTop:"6px",
                paddingBottom:'20px'}}
              >
                <span></span>
                <select
                  className={styles["form-control"]} 
                  style={{height:'70px', background: '#f5f5f5', color: '#827e7e',
                     fontSize:'18px', outline:'none'}}
                  id="age_group"
                >
                  <option>
                    Age group
                  </option>
                {age?.map((data,i)=>(
                  <option value={data?.value} key={i}>{data?.value}</option>
                  ))}
                </select>
              </div>
              <div className={styles["form-group"]}>
                <div className={styles["custom_checkbox"]}>
             
                  <input
                   
                    type="checkbox"
                    className={styles["check"] + " form-check-input"}
               
                    id="flexCheckChecked"
                  
                  />
              
                  <label>
                  {lead?.Form?.formDeclaration?.value}
                  </label>
                 
                </div>
              </div>
              <div className={styles["btn-submit"]}>
                <input
                  type="submit"
                  className={styles["submit"]}
                  value= {lead?.Form?.FormButton?.value}
                  
                
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="popup_main lead_frm_thankyou" id="submitbtn">
        <div className="popup_sec">
          <div className="cross">
            <div className="icon"></div>
          </div>
          <div
            className="popup_body"
            data-gtm-vis-polling-id-63325_1216="30"
            data-gtm-vis-polling-id-9478612_193="49"
          >
            <img
              src="https://clubmahindra.gumlet.io/themes/prospect/assets/images/thanks-logo.png?w=640&amp;dpr=1.0"
              className="thank-logo gm-loaded gm-observing gm-observing-cb"
            />
            <h3>Congratulations!</h3>
            <h4>You have successfully fixed a date with our holiday expert </h4>
            <h5>
              Our holiday expert will revert back to you within 1 working day
            </h5>
          </div>
        </div>
        <div className="popup_overlay lead_frm_thankyou_overlay"></div>
      </div> */}
    </section>
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

{/* <option value=""></option>
<option value="Chandigarh">Chandigarh</option>{" "}
<option value="Chennai">Chennai</option>
<option value="New Delhi">New Delhi</option>
<option value="Hyderabad">Hyderabad</option>
<option value="Jaipur">Jaipur</option>
<option value="Cochin">Cochin</option>
<option value="Kolkata">Kolkata</option>
<option value="Lucknow">Lucknow</option>
<option value="Mumbai">Mumbai</option>
<option value="Pune">Pune</option>
<option value="Abohar">Abohar</option>
<option value="Agartala">Agartala</option>
<option value="Agra">Agra</option>
<option value="Ahmednagar">Ahmednagar</option>
<option value="Ajmer">Ajmer</option>
<option value="Akola">Akola</option>
<option value="Alapuzha">Alapuzha</option>
<option value="Aligarh">Aligarh</option>
<option value="Allahabad">Allahabad</option>
<option value="Ambala">Ambala</option>
<option value="Amravati">Amravati</option>
<option value="Amritsar">Amritsar</option>
<option value="Anand">Anand</option>
<option value="Asansol">Asansol</option>
<option value="Ashtamudi">Ashtamudi</option>
<option value="Aurangabad">Aurangabad</option>
<option value="Auroville">Auroville</option>
<option value="Ballarpur">Ballarpur</option>
<option value="Bareilly">Bareilly</option>
<option value="Barnala">Barnala</option>
<option value="Baroda">Baroda</option>
<option value="Barpeta">Barpeta</option>
<option value="Batala">Batala</option>
<option value="Berhampur">Berhampur</option>
<option value="Belgaum">Belgaum</option>
<option value="Bellary">Bellary</option>
<option value="Bharatpur">Bharatpur</option>
<option value="Bharuch">Bharuch</option>
<option value="Bhavnagar">Bhavnagar</option>
<option value="Bhilai">Bhilai</option>
<option value="Bhillai">Bhillai</option>
<option value="Bhilwara">Bhilwara</option>
<option value="Bhiwadi">Bhiwadi</option>
<option value="Bhopal">Bhopal</option>
<option value="Bhuvaneshwar">Bhuvaneshwar</option>
<option value="Bijapur">Bijapur</option>
<option value="Bikaner">Bikaner</option>
<option value="Bilaspur">Bilaspur</option>
<option value="Binsar">Binsar</option>
<option value="Bokaro">Bokaro</option>
<option value="Bongaigaon">Bongaigaon</option>
<option value="Calicut">Calicut</option>
<option value="Chamba">Chamba</option>
<option value="Chandrapur">Chandrapur</option>
<option value="Chikmagalur">Chikmagalur</option>
<option value="Coimbatore">Coimbatore</option>
<option value="Coorg">Coorg</option>
<option value="Corbett">Corbett</option>
<option value="Cuddalore">Cuddalore</option>
<option value="Cuttack">Cuttack</option>
<option value="Dahanu Road">Dahanu Road</option>
<option value="Daman">Daman</option>
<option value="Darjeeling">Darjeeling</option>
<option value="Davangere">Davangere</option>
<option value="Dehradun">Dehradun</option>
<option value="Dhamtari">Dhamtari</option>
<option value="Dhanbad">Dhanbad</option>
<option value="Dharamsala">Dharamsala</option>
<option value="Dibrugarh">Dibrugarh</option>
<option value="Dimapur">Dimapur</option>
<option value="Dhuri">Dhuri</option>
<option value="Dubai">Dubai</option>
<option value="Durg">Durg</option>
<option value="Durgapur">Durgapur</option>
<option value="Dwarka">Dwarka</option>
<option value="Ernakulam">Ernakulam</option>
<option value="Erode">Erode</option>
<option value="Faizabad">Faizabad</option>
<option value="Faridabad">Faridabad</option>
<option value="Faridkot">Faridkot</option>
<option value="Fazlika">Fazlika</option>
<option value="Ferozepur">Ferozepur</option>
<option value="Gandhidham">Gandhidham</option>
<option value="Gandhinagar">Gandhinagar</option>
<option value="Ganga Nagar">Ganga Nagar</option>
<option value="Gangtok">Gangtok</option>
<option value="Ghaziabad">Ghaziabad</option>
<option value="Goa">Goa</option>
<option value="Gobindgarh">Gobindgarh</option>
<option value="Gorakhpur">Gorakhpur</option>
<option value="Gulbarga">Gulbarga</option>
<option value="Guntur">Guntur</option>
<option value="Gurdaspur">Gurdaspur</option>
<option value="Gurgaon">Gurgaon</option>
<option value="Guwahati">Guwahati</option>
<option value="Gwalior">Gwalior</option>
<option value="Hamirpur">Hamirpur</option>
<option value="Hanumangarh">Hanumangarh</option>
<option value="Haridwar">Haridwar</option>
<option value="Haryana">Haryana</option>
<option value="Hassan">Hassan</option>
<option value="Hastinapur">Hastinapur</option>
<option value="H.P.">H.P.</option>
<option value="Himmat Nagar">Himmat Nagar</option>
<option value="Hospet">Hospet</option>
<option value="Hosur">Hosur</option>
<option value="Howrah">Howrah</option>
<option value="Hubli">Hubli</option>
<option value="Imphal">Imphal</option>
<option value="Indore">Indore</option>
<option value="Jabalpur">Jabalpur</option>
<option value="Jagraon">Jagraon</option>
<option value="Jaisalmer">Jaisalmer</option>
<option value="Jalandhar">Jalandhar</option>
<option value="Jalgaon">Jalgaon</option>
<option value="Jammu">Jammu</option>
<option value="Jamnagar">Jamnagar</option>
<option value="Jamshedpur">Jamshedpur</option>
<option value="Jhansi">Jhansi</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Jodhpur">Jodhpur</option>
<option value="Jorhat">Jorhat</option>
<option value="Kakinada">Kakinada</option>
<option value="Kalyan">Kalyan</option>
<option value="Kangra">Kangra</option>
<option value="Kanpur">Kanpur</option>
<option value="Kannur">Kannur</option>
<option value="Kapurthala">Kapurthala</option>
<option value="Karad">Karad</option>{" "}
<option value="Karnal">Karnal</option>
<option value="Kasargod">Kasargod</option>
<option value="Khanna">Khanna</option>{" "}
<option value="Kharar">Kharar</option>
<option value="Kharagpur">Kharagpur</option>
<option value="Kollam">Kollam</option>{" "}
<option value="Kolhapur">Kolhapur</option>
<option value="Korba">Korba</option>{" "}
<option value="Kota">Kota</option>
<option value="Kotkapura">Kotkapura</option>{" "}
<option value="Kottayam">Kottayam</option>
<option value="Kozhikode">Kozhikode</option>
<option value="Kufri">Kufri</option>
<option value="Kumbakonam">Kumbakonam</option>
<option value="Kurnool">Kurnool</option>
<option value="Kumbalgarh">Kumbalgarh</option>
<option value="Kuwait">Kuwait</option>
<option value="Lakhimpur">Lakhimpur</option>
<option value="Ludhiana">Ludhiana</option>
<option value="Madurai">Madurai</option>{" "}
<option value="Mahabaleshwar">Mahabaleshwar</option>
<option value="Malerkotla">Malerkotla</option>
<option value="Manali">Manali</option>
<option value="Mandi">Mandi</option>
<option value="Mangalore">Mangalore</option>
<option value="Mansa">Mansa</option>
<option value="Mathura">Mathura</option>
<option value="Meerut">Meerut</option>
<option value="Moga">Moga</option>
<option value="Mohali">Mohali</option>
<option value="Moradabad">Moradabad</option>
<option value="Mount Abu">Mount Abu</option>
<option value="Muktsar">Muktsar</option>
<option value="Munnar">Munnar</option>
<option value="Mysore">Mysore</option>
<option value="Nagaon">Nagaon</option>
<option value="Nagerkoil">Nagerkoil</option>
<option value="Nagpur">Nagpur</option>
<option value="Nainital">Nainital</option>
<option value="Nakodar">Nakodar</option>
<option value="Namakkal">Namakkal</option>
<option value="Nanded">Nanded</option>
<option value="Nashik">Nashik</option>
<option value="Navi Mumbai">Navi Mumbai</option>
<option value="Nawanshahr">Nawanshahr</option>
<option value="NCR">NCR</option>
<option value="Nellore">Nellore</option>
<option value="Noida">Noida</option>
<option value="Ooty">Ooty</option>
<option value="Palanpur">Palanpur</option>
<option value="Palampur">Palampur</option>
<option value="Palghat">Palghat</option>
<option value="Pali">Pali</option>
<option value="Panchkula">Panchkula</option>
<option value="Panipat">Panipat</option>
<option value="Panvel">Panvel</option>
<option value="Parbhani">Parbhani</option>
<option value="Pathankot">Pathankot</option>
<option value="Patiala">Patiala</option>
<option value="Patna">Patna</option>
<option value="Phagwara">Phagwara</option>
<option value="Phillaur">Phillaur</option>
<option value="Pinjore">Pinjore</option>
<option value="Pondicherry">Pondicherry</option>
<option value="Rae Bareli">Rae Bareli</option>
<option value="Raikot">Raikot</option>
<option value="Raipur">Raipur</option>
<option value="Rajamundry">Rajamundry</option>
<option value="Rajkot">Rajkot</option>
<option value="Rajnandgaon">Rajnandgaon</option>
<option value="Rajpura">Rajpura</option>
<option value="Ranchi">Ranchi</option>
<option value="Rankuwa">Rankuwa</option>
<option value="Ratlam">Ratlam</option>
<option value="Ratnagiri">Ratnagiri</option>
<option value="Renukoot">Renukoot</option>
<option value="Roorkee">Roorkee</option>
<option value="Ropar">Ropar</option>
<option value="Rourkela">Rourkela</option>
<option value="Salem">Salem</option>
<option value="Sambhalpur">Sambhalpur</option>
<option value="Samrala">Samrala</option>
<option value="Sangli">Sangli</option>
<option value="Sangrur">Sangrur</option>
<option value="Satara">Satara</option>
<option value="Secundarabad">Secundarabad</option>

*/}

