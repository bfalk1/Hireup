import{x as e,s as t}from"./navbar-69232d55.js";import{R as i}from"./router-327a709d.js";import"./input-string-3883e88f.js";import"./input-password-2508bd28.js";import"./popup-6c6effc0.js";import"./privacy-8337faa6.js";import{a as r}from"./config-035642a6.js";customElements.define("info-box",class extends t{render(){return e`
    <style>
      .box {
        width: 100%;
        background-color: white;
        border: 1px solid lightgrey;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        flex: 1;
        padding: 5%;
        
      }

      .title {
        font-size: 28px;
        color: 62929E;
      }

      .description {
        font-size: 25px; /* Increase the font size */
        font-weight: bold; /* Make the text bold */
        text-align: left; /* Align the text to the left */
        color: black;
        padding-left:5%
    }


      .features {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:20px;
        padding-left:40px; 
        padding-right:40px; 
        
      }
      .feature {
        text-align: center;
        max-width: 30%;
        font-size: 15px;
      }
      .icon {
        width:130px;
        margin-bottom: 10px;
        color: #0078d4; /* Use your brand color */
      }
      .icons {
        width:150px;
        color: #0078d4; /* Use your brand color */
      }
      
      .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        
      }
    </style>
    <div class="box">
      <p class="description">Showcase Your Skills. <br/> Fast-Track Your Career.</p>
      <div class="features">
        <div class="feature">
        <img src="/assets/CompetitionB.png" class="icon" alt="Logo">
          <p >Compete for Jobs</p>
        </div>
        <div class="feature">
        <img src="/assets/ExperienceB.png" class="icon" alt="Logo">
          <p>Gain Experience</p>
        </div>
        <div class="feature">
        <img src="/assets/RecrutingB.png" class="icon" alt="Logo">
          <p>Simplify Recruiting</p>
        </div>
      </div>
      <!-- <pop-up 
    buttonTitle = "Learn more"
    > -->
    </pop-up>
    </div>
    
  `}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback(),console.log("Loaded into the dom")}});customElements.define("first-page",class extends t{render(){return e`
    <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      height: 100vh;
      margin: 0;
      display: flex;
      align-items:center;
      justify-content: center;
    }

    .container {
      background-color: #fff;
      display: flex;
      align-items:center;
      justify-content: center;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 7px;
      max-width: 1000px;
      margin-top: 100px;
    }
  
  .promo-section{
      padding-top:30px;
      padding-bottom: 30px;
      padding-left:30px;
     
  }
  .login-section {
    padding-right: 30px;
    padding-left: 100px;
    
  }

  .icons {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
  }
  
  .icons div {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  .login-section input {
      width: 100%;
      padding: 20px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
  }
  
  .login-btn, .create-account-btn, .ready-btn {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      color: white;
  }
  
  .login-btn {
      background-color: #1877F2;
  }
  
  .create-account-btn {
      background-color: #42B72A;
  }
  
  .ready-btn {
      background-color: #3B5998;
  }
  
    .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius:6px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
    .inputText {
      border-radius: 5px;
      width: 270px;
      background-color: #faf7f7;
      height: 30px;
      border-style: solid;
      border-color: lightgray;
      margin-left: 5px;
      margin-right: 5px;
  }
</style>
    ${(t=this).studentCheckBoxClicked?e`<style>
    .inputText {
      flex: 1;
      border-radius: 5px;
      width: 250px;
      background-color: #faf7f7;
      height: 30px;
      border-style: solid;
      border-color: lightgray;
      margin-left: 5px;
      margin-right: 5px;
  }
  .button {
      background-image: rgb(6, 28, 113);
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .labelClass {
      color: #aeaeae;
  }


  .row {
    display: flex;
      justify-content: space-between;
      
      margin-bottom: 10px;
      
      width:80%;
  }
  .header{
      text-align: center;
      margin-bottom: 10px;
      width:100%;
  }

  .input-component {
    width: 35%;
     
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .privacy-policy-checkbox {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.privacy-policy-checkbox input[type="checkbox"] {
  margin-right: 10px;
}

.privacy-policy-checkbox label {
  color: #555;
  font-size: 14px;
}

.privacy-policy-checkbox {
  background: none;
  border: none;
  color: #007bff; /* Link color */
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0;
}
.privacy-policy-link {
  background: none;
  border: none;
  color: #007bff; /* Link color */
  cursor: pointer;
  text-decoration: underline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0;
}



  </style>
  <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;">
      <div 
        style=
        "width: 65%;
        height: 65%;
        background-color:white;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        
        "
        >
        
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113); border-bottom-style: solid;text-align:center; padding-bottom: 20px;">Signup</h2>
          
          <div class="header">
          </div>
          <div class="header" style="color: rgb(6, 28, 113);
        font-size: x-large; text-align: left; margin-left: 11%;">
        Login Information
    </div>
    <div style="display: flex; justify-content: center;">
    <div class="row" style="">
              <div class="input-component" style="position: relative;
              top: 10px">
                <input-string
                width=90%;
                placeholder="Email"
                type="email"
                >
                </input-string>
              </div>
              <div class="input-component">
                  <input-password 
                    width=90%
                    placeholder="Password"
                    type="Password">
                  </input-password>
              </div>
              <div class="input-component">
              <input-password
                width=90%
                placeholder="Confirm Password"
              type="Confirm Password"
              >
              </input-password>
        </div>
          </div>
          </div>
          <div class="header" style="color: rgb(6, 28, 113);
        font-size: x-large;text-align: left; margin-left: 11%;">
        Personal Information
    </div>
    <div style="display: flex; justify-content: center;">
        <div class="row">
              <div class="input-component">
                <input-string
                width=90%
                placeholder="First Name"
                type="FirstName"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Last Name"
                type="LastName"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Age"
                type="Age"
                >
                </input-string>
              </div>
          </div>
          </div>
          <div style="display: flex; justify-content: center;">
          <div class="row">
              <div class="input-component">
                    <input-string
                    width=90%
                    placeholder="Phone Number"
                    type="Phone Number"
                    >
                    </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="School"
                type="school"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Years Completed"
                type="year"
                >
                </input-string>
              </div>
          </div>
          </div>
          <div style="display: flex; justify-content: center;">
          <div class="row">
              <div class="input-component">
                <input-string
                width=90%
                placeholder="GPA"
                type="gpa"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="City of residence"
                type="city"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Province"
                type="province"
                >
                </input-string>
              </div>
          </div>
          </div>
          <div style="
          height:18.5px;
          margin-left: 5px;
          color:rgb(6, 28, 113);
            ">
          ${t.error?e`${t.error}`:e``}
          </div>
          <div class="button-container">
            <button class="button" style="" @click=${e=>t.studentuncheckBox(e)}>
              Back
            </button>
            <div class="privacy-policy-checkbox">
              <input type="checkbox" id="privacy-policy-checkbox" @change=${e=>t.handleCheckboxChange(e)}>
              <label for="privacy-policy-checkbox">I have read and agree to the <button class="privacy-policy-link" @click=${e=>t.routeToPrivacy(e)}>Privacy Policy</button></label>
            </div>
            <div>
              <button class="button" style="${t.privacyCheckBoxClicked?"":"pointer-events: none; background-color: gray;"}" @click=${e=>t.routeToHome(e)}>
                Continue
              </button>
            </div>
            </div>
          </div>
      </div>
    </div>
    </div>
 `:e`
  
    <div style="display: flex; justify-content: center; width: 100vw;">
    <div class="container">
      <!-- Promotional Section -->
      <div class="promo-section">
        ${t.studentCheckBoxClicked?e``:e`<info-box></info-box>`}
      </div>
      <div class="login-section" >
        <div style="
         border: 1.5px solid lightgray;
         border-radius: 10px;
         padding:20px;
        ">
           <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113); border-bottom-style: solid;text-align:center; padding-bottom: 20px;">Login</h2>
           
           <input-string 
             width=97%
             placeholder="Email"
             type="Email">
          </input-string>
           <input-password 
             width=97%
            placeholder="Password"
             type="Password">
          </input-password>
           ${t.error?e`${t.error}`:e``}
           
          <button class="button" id="myButton" style=
          "width: 98.5%;
          background-color: #0af886;
          color: black;
          font-weight: 600;
            margin-left: 5px;
            margin-top: 30px;
            font-size: 15px;
            padding-bottom: 10px;"
          @click=${e=>t.memberLogin(e)}
          >Ready</button>
          <button id="myButton" style=
           "background-color: rgba(250,235,240,255);
            color: black;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
            border-radius: 6px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
            width: 98.5%;
            margin-left: 5px;
            margin-top: 20px;
            font-size: 15px;
            padding-bottom: 10px;
            margin-bottom:20px;
            "
          @click=${e=>t.studentcheckBox(e)}
          >
          Don't have an account? Sign up</button>
          <button 
          @click=${e=>t.routeToEnterprise(e)}>Enterprise Login</button>
        </div>
        
      </div>
    </div>
    </div>

`}
    `;var t}static get properties(){return{ButtonClicked:{Type:Boolean},studentCheckBoxClicked:{Type:Boolean},privacyCheckBoxClicked:{Type:Boolean},employeeCheckBoxClicked:{Type:Boolean},error:{Type:String},employmentButton:{Type:String}}}constructor(){super(),this.ButtonClicked=!1,this.studentCheckBoxClicked=!1,this.privacyCheckBoxClicked=!1,this.employeeCheckBoxClicked=!1,this.error=null,this.UserAttributes={FirstName:"",LastName:"",email:"",school:"",gpa:"",year:"",Password:"",province:"",city:"",events:[],experience:[],skills:[],role:"user"},sessionStorage.clear(),this.users="",this.currentUser=[],this.inputtedPassword=null,this.employmentButton=!1,this.validCrendentials=!1,this.pageHeight=0,this.addEventListener("custom-string-event",this.handleChangedValue)}connectedCallback(){super.connectedCallback(),this.pageHeight=document.documentElement.scrollHeight}handleChangedValue(e){switch(e.stopPropagation(),e.detail.type){case"Email":this.userEmailLogin(e.detail.value,null);break;case"Password":this.inputtedPassword=e.detail.value,this.UserAttributes.Password=e.detail.value;break;case"Confirm Password":if(e.detail.value!==this.UserAttributes.Password)return void(this.error="Passwords do not match");this.error=null;break;case"Age":this.validateAge(e.detail.value,e.detail.type);break;case"email":this.validateEmail(e.detail.value,e.detail.type);break;case"year":this.validateYearsCompleted(e.detail.value,e.detail.type);break;case"Phone Number":this.validatePhoneNumber(e.detail.value,e.detail.type);break;case"gpa":this.validateGPA(e.detail.value,e.detail.type);break;default:return void this.validateString(e.detail.value,e.detail.type)}}studentcheckBox(e){this.studentCheckBoxClicked=!0,this.error=null,this.currentUser=null,this.inputtedPassword=null}handleCheckboxChange(e){this.privacyCheckBoxClicked=!this.privacyCheckBoxClicked}studentuncheckBox(e){this.studentCheckBoxClicked=!1,this.error=null,this.currentUser=null,this.inputtedPassword=null}areAllFieldsFilled(e){for(const t in e)if(e.hasOwnProperty(t)){const i=e[t];if(Array.isArray(i))continue;if("string"==typeof i&&""===i.trim())return!1}return!0}convertValuesToLowerCaseJson(e){for(let t=0;t<e.length;t++){const i=e[t];for(const e in i)i.hasOwnProperty(e)&&"string"==typeof i[e]&&(i[e]=i[e].toLowerCase())}return e}convertAllCharsToLowerCase(e){if("string"==typeof e)return e.toLowerCase()}routeToHome(e){this.areAllFieldsFilled(this.UserAttributes)?(this.error=null,this.UserAttributes.Name=this.UserAttributes.FirstName+" "+this.UserAttributes.LastName,this.UserAttributes.aboutMe="",console.log(this.UserAttributes),this.addUser(this.UserAttributes)):this.error="Invalid Sign up credentials"}routeToEnterprise(e){i.go("/enterpriseLoginPage")}memberLogin(e){console.log(r),this.currentUser?this.inputtedPassword?this.currentUser.Password!==this.inputtedPassword?this.error="Incorrect password or email":(sessionStorage.setItem("email",this.currentUser.email),sessionStorage.setItem("role","user"),i.go("/home")):this.error="Please Enter Password":this.error="Please Enter valid Email Address"}validateEmail(e,t){if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)){if(!t)return!0;this.error=null,this.UserAttributes[t]=this.convertAllCharsToLowerCase(e)}else{if(!t)return!1;this.error="Invalid Email"}}userEmailLogin(e,t){fetch(`${r}/api?username=${e}`).then((e=>e.json())).then((t=>{this.currentUser.Password=t.Password,this.currentUser.Name=t.Name,this.currentUser.email=e,console.log(t)})).catch((e=>{this.error="User Not Found"})),this.validateEmail(e,t)?this.currentUser.email=e:this.error="Invalid Email"}userEmailPassword(e){this.currentUser||(this.error="Please enter an email address")}validateAge(e,t){e>=15&&e<=100?(this.error=null,this.UserAttributes[t]=String(e)):this.error="Please Enter a Valid Age"}validateGPA(e,t){e>=1.5&&e<=4.3?(this.error=null,this.UserAttributes[t]=String(e)):this.error="Please Enter a Valid Age"}validateString(e,t){/^[a-zA-Z \p{P}]*$/u.test(e)?(this.error=null,this.UserAttributes[t]=e):this.error="Invalid Input"}validateYearsCompleted(e,t){e>=0&&e<=4?(this.error=null,this.UserAttributes[t]=String(e)):this.error="Invalid Input"}validatePhoneNumber(e,t){/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(e)?(this.error=null,this.UserAttributes[t]=String(e)):this.error="Invalid Input"}addUser(e){fetch(`${r}/api/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{"Account exists under this email"===e.message?this.error="Account exists under this email":(sessionStorage.setItem("email",this.UserAttributes.email),sessionStorage.setItem("role","user"),i.go("/home"))})).catch((e=>{console.error("Error adding user:",e)}))}routeToPrivacy(e){i.go("/privacy")}});
