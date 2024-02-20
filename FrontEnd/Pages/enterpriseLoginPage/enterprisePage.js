import { LitElement} from 'lit';
import { Router } from "@vaadin/router";
import {EnterprisePageTemplate} from './enterprisePageTemplate.js';
import { apiUrl } from '../../config.js';
import { initRouter } from "../../router.js";


export class EnterprisePage extends LitElement {
  render() {
    return EnterprisePageTemplate(this);
  }
  static get properties() {
    return {
        ButtonClicked: { Type: Boolean},
        privacyCheckBoxClicked: { Type: Boolean},
        loginClicked: { Type: Boolean},
        error: { Type: String},
        employmentButton: { Type: String},
    };
    }

    constructor() {
        super();
        this.ButtonClicked = false;
        this.error = null;
        this.UserAttributes = {
        "CompanyName": "",
        "FirstName":"",
        "LastName":"",
        "email":"",
        "PhoneNumber": "",
        "Position":"",
        "WebUrl": "",
        "Password":"",
        "country":"",
        "province":"",
        "city":"",
        "events":[],
        "team":[],
        "role": "enterprise"};
        this.users = "";
        this.currentUser = [];
        this.userPassword = ""
        this.employmentButton = false;
        this.validCrendentials = false;
        this.addEventListener('custom-string-event', this.handleChangedValue);
    }

    connectedCallback() {
        super.connectedCallback();
    }

    userEmailLogin(input,type) {
        fetch(`${apiUrl}/api/enterprise?username=${input}`)
        .then(response => response.json())
        .then(data => {
          // Log the response from the APIW
          //really bad to save password before logged in
          this.currentUser["Password"] = data.Password;
          this.currentUser["Name"] = data.Name;
          
        })
        .catch(error => {
           this.error = "User Not Found"
        });
        
        
        
    }

    handleChangedValue(e) {
        //e.stopPropagation();
        switch(e.detail.type) {
            case "Email" :
                if(this.validateEmail(e.detail.value,null)){
                    this.userEmailLogin(e.detail.value,"email");
                }
                else{
                    
                    this.error = "Invalid Email"
                }
                break;
            case "Password" :
                this.userPassword = e.detail.value;
                this.UserAttributes["Password"] = e.detail.value;
                break;
            case "Confirm Password":
                if (e.detail.value !== this.UserAttributes["Password"] ){
                    this.error = "Passwords do not match";
                    return
                } else {
                    this.error = null;
                }
                break;
            case "Age" :
                this.validateAge(e.detail.value,e.detail.type);
                break;
            case "email" :
                this.validateEmail(e.detail.value,e.detail.type);
                break;
            case "Years Completed":
                this.validateYearsCompleted(e.detail.value,e.detail.type);
                break;
            case "Phone Number":
                this.validatePhoneNumber(e.detail.value,e.detail.type);
                break;
            case "GPA":
                this.validateGPA(e.detail.value,e.detail.type);
                break;
            default: 
                this.validateString(e.detail.value,e.detail.type);
                return;     
        }
    }

    loginBox(e) {
        this.loginClicked = !this.loginClicked;
        this.error = null;
        this.currentUser = null;
        this.userPassword = null;
    }

    handleCheckboxChange(e) {
        this.privacyCheckBoxClicked = !this.privacyCheckBoxClicked;

    }

    validSignUpCredentials() {
        if (this.currentUser) {
            return true;
        }
        if (this.UserAttributes["Password"]!== undefined && this.UserAttributes["email"]!== undefined) {
            return true;
        } else {
            return false;
        }
    }

    convertValuesToLowerCaseJson(users) {
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          for (const key in user) {
            if (user.hasOwnProperty(key) && typeof user[key] === 'string') {
              user[key] = user[key].toLowerCase();
            }
          }
        }
        return users;
    }

    convertAllCharsToLowerCase(inputString) {
        if (typeof inputString === 'string') {
          return inputString.toLowerCase();
        }
    }

    
    routeToFirst(e) {
        Router.go(`/`);
    }

    memberLogin(e) {
        this.error = null
        if (!this.currentUser) {
            this.error = "Please Enter valid Email Address";
            return;
        } else if (!this.userEmailPassword) {
            this.error = "Please Enter Password";
            return;
        }
        if (this.currentUser.Password!== this.userPassword) {
            this.error = "Incorrect password or email";
        } else {
            sessionStorage.setItem('email', String(this.currentUser.email));
            sessionStorage.setItem('Name', String(this.currentUser.Name));
            sessionStorage.setItem('role', 'enterprise');


            Router.go(`/enterpriseHome`);
        }
    }

    validateEmail(input, type) {
        
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (emailRegex.test(input)) {
            
            this.error = null;
            this.currentUser.email = input;
            return true; // Used for user login
            
            
        } else {
            return false; // Used for user login
            
        }
    }
    

    

    userEmailPassword(input) {
        if (!this.currentUser) {
            this.error = "Please enter an email address"
        }
    }


    validateString(input,type) {
        const alphabetRegex = /^[a-zA-Z ]*$/;
        if (alphabetRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

    validatePhoneNumber(input,type) {
        const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        if (phoneRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

   
    addUser(newUser) {
        console.log(JSON.stringify(newUser));
        fetch("http://localhost:5001/api/company", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then(response => response.json())
          .then(data => {
            console.log("User added successfully:");
            sessionStorage.setItem('email', String(this.currentUser.email));
            sessionStorage.setItem('Name', String(this.currentUser.Name));
            sessionStorage.setItem('role', 'enterprise');
            Router.go(`/enterpriseHome`);
          })
          .catch(error => {
            console.error("Error adding user:", error);
          });
      }

}

customElements.define('enterprise-page', EnterprisePage);
