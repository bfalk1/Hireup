import{x as e,s as t}from"./navbar-5d6428c0.js";import{R as i}from"./router-97df8b65.js";import"./input-string-4061eec9.js";import"./input-password-10530f18.js";import{a as r}from"./config-1948f1ba.js";class o extends t{render(){return e`
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
      border-radius: 10px;
      max-width: 500px;
      margin-top: 100px;
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
    <div style="position: fixed;">
    
    ${(t=this).loginClicked?e`<style>
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
        
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113); border-bottom-style: solid;text-align:center; padding-bottom: 20px;">Company Sign Up</h2>
          
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
        Company Information
    </div>
    <div style="display: flex; justify-content: center;">
        <div class="row">
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Company Name"
                type="CompanyName"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="FirstName"
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
                placeholder="Website URL"
                type="WebUrl"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Your Position"
                type="Position"
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
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Country"
                type="country"
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
            <button class="button" style="" @click=${e=>t.loginBox(e)}>
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
    </div>`:e``}
    
    <div style="display: flex; justify-content: center; width: 100vw;">
    <div class="container">
      
      <div class="login-section" >
        <div style="
         border: 1.5px solid lightgray;
         border-radius: 10px;
         padding:20px;
        ">
           <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113); border-bottom-style: solid;text-align:center; padding-bottom: 20px;">Enterprise Login</h2>
           
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
          @click=${e=>t.loginBox(e)}
          >
          Don't have an account? Sign up</button>
          <button 
          @click=${e=>t.routeToFirst(e)}
          >Member Login</button>
        </div>
        </div>
        
        
      </div>
    </div>
    </div>


    `;var t}static get properties(){return{ButtonClicked:{Type:Boolean},privacyCheckBoxClicked:{Type:Boolean},loginClicked:{Type:Boolean},error:{Type:String},employmentButton:{Type:String}}}constructor(){super(),this.ButtonClicked=!1,this.error=null,this.UserAttributes={CompanyName:"",FirstName:"",LastName:"",email:"",PhoneNumber:"",Position:"",WebUrl:"",Password:"",country:"",province:"",city:"",events:[],team:[],role:"enterprise"},this.users="",this.currentUser=[],this.userPassword="",this.employmentButton=!1,this.validCrendentials=!1,this.addEventListener("custom-string-event",this.handleChangedValue)}connectedCallback(){super.connectedCallback()}userEmailLogin(e,t){fetch(`${r}/api/enterprise?username=${e}`).then((e=>e.json())).then((e=>{this.currentUser.Password=e.Password,this.currentUser.Name=e.Name})).catch((e=>{this.error="User Not Found"}))}handleChangedValue(e){switch(e.detail.type){case"Email":this.validateEmail(e.detail.value,null)?this.userEmailLogin(e.detail.value,"email"):this.error="Invalid Email";break;case"Password":this.userPassword=e.detail.value,this.UserAttributes.Password=e.detail.value;break;case"Confirm Password":if(e.detail.value!==this.UserAttributes.Password)return void(this.error="Passwords do not match");this.error=null;break;case"Age":this.validateAge(e.detail.value,e.detail.type);break;case"email":this.validateEmail(e.detail.value,e.detail.type);break;case"Years Completed":this.validateYearsCompleted(e.detail.value,e.detail.type);break;case"Phone Number":this.validatePhoneNumber(e.detail.value,e.detail.type);break;case"GPA":this.validateGPA(e.detail.value,e.detail.type);break;default:return void this.validateString(e.detail.value,e.detail.type)}}loginBox(e){this.loginClicked=!this.loginClicked,this.error=null,this.currentUser=null,this.userPassword=null}handleCheckboxChange(e){this.privacyCheckBoxClicked=!this.privacyCheckBoxClicked}validSignUpCredentials(){return!!this.currentUser||void 0!==this.UserAttributes.Password&&void 0!==this.UserAttributes.email}convertValuesToLowerCaseJson(e){for(let t=0;t<e.length;t++){const i=e[t];for(const e in i)i.hasOwnProperty(e)&&"string"==typeof i[e]&&(i[e]=i[e].toLowerCase())}return e}convertAllCharsToLowerCase(e){if("string"==typeof e)return e.toLowerCase()}routeToFirst(e){i.go("/")}memberLogin(e){this.error=null,this.currentUser?this.userEmailPassword?this.currentUser.Password!==this.userPassword?this.error="Incorrect password or email":(sessionStorage.setItem("email",String(this.currentUser.email)),sessionStorage.setItem("Name",String(this.currentUser.Name)),sessionStorage.setItem("role","enterprise"),i.go("/enterpriseHome")):this.error="Please Enter Password":this.error="Please Enter valid Email Address"}validateEmail(e,t){return!!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)&&(this.error=null,this.currentUser.email=e,!0)}userEmailPassword(e){this.currentUser||(this.error="Please enter an email address")}validateString(e,t){/^[a-zA-Z ]*$/.test(e)?(this.error=null,this.UserAttributes[t]=e):this.error="Invalid Input"}validatePhoneNumber(e,t){/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(e)?(this.error=null,this.UserAttributes[t]=e):this.error="Invalid Input"}addUser(e){console.log(JSON.stringify(e)),fetch("http://localhost:5001/api/company",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log("User added successfully:"),sessionStorage.setItem("email",String(this.currentUser.email)),sessionStorage.setItem("Name",String(this.currentUser.Name)),sessionStorage.setItem("role","enterprise"),i.go("/enterpriseHome")})).catch((e=>{console.error("Error adding user:",e)}))}}customElements.define("enterprise-page",o);export{o as EnterprisePage};
