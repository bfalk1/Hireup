import { html } from 'lit';
import { InputString } from '../../Components/input-string/input-string';
import { InputPassword } from '../../Components/input-password/input-password';
import { Navbar } from '../../Components/navbar/navbar';


export const EnterprisePageTemplate = (context) => {
    return html `
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
    
    ${context.loginClicked ? html`<style>
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
          ${context.error ? html`${context.error}` : html``}
          </div>
          <div class="button-container">
            <button class="button" style="" @click=${(e) => context.loginBox(e)}>
              Back
            </button>
            <div class="privacy-policy-checkbox">
              <input type="checkbox" id="privacy-policy-checkbox" @change=${(e) => context.handleCheckboxChange(e)}>
              <label for="privacy-policy-checkbox">I have read and agree to the <button class="privacy-policy-link" @click=${(e) => context.routeToPrivacy(e)}>Privacy Policy</button></label>
            </div>
            <div>
              <button class="button" style="${context.privacyCheckBoxClicked ? '' : 'pointer-events: none; background-color: gray;'}" @click=${(e) => context.routeToHome(e)}>
                Continue
              </button>
            </div>
            </div>
          </div>
      </div>
    </div>
    </div>` : 
  html ``}
    
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
           ${context.error ? html`${context.error}` : html``}
           
          <button class="button" id="myButton" style=
          "width: 98.5%;
          background-color: #0af886;
          color: black;
          font-weight: 600;
            margin-left: 5px;
            margin-top: 30px;
            font-size: 15px;
            padding-bottom: 10px;"
          @click=${(e) => context.memberLogin(e)}
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
          @click=${(e) => context.loginBox(e)}
          >
          Don't have an account? Sign up</button>
          <button 
          @click=${(e) => context.routeToFirst(e)}
          >Member Login</button>
        </div>
        </div>
        
        
      </div>
    </div>
    </div>


    `;
}
