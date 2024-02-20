import { LitElement} from 'lit';
import { Router } from "@vaadin/router";
import {FirstPageTemplate} from './FirstPage-template';
import { apiUrl } from '../../config.js';
import { initRouter } from "../../router";


class FirstPage extends LitElement {
  render() {
    return FirstPageTemplate(this);
  }
  static get properties() {
    return {
        ButtonClicked: { Type: Boolean},
        studentCheckBoxClicked: { Type: Boolean},
        privacyCheckBoxClicked: { Type: Boolean},
        employeeCheckBoxClicked: { Type: Boolean},
        error: { Type: String},
        employmentButton: { Type: String},
    };
    }

    constructor() {
        super();
        this.ButtonClicked = false;
        this.studentCheckBoxClicked = false;
        this.privacyCheckBoxClicked = false;
        this.employeeCheckBoxClicked = false;
        this.error = null;
        this.UserAttributes = {
            "FirstName":"",
            "LastName":"",
            "email":"",
            "school":"",
            "gpa":"",
            "year":"",
            "Password":"",
            "province":"",
            "city":"",
            "events":[],
            "experience":[],
            "skills":[],
            "role": "user"
        };
        sessionStorage.clear();
        this.users = "";
        this.currentUser = [];
        this.inputtedPassword = null;
        this.employmentButton = false;
        this.validCrendentials = false;
        this.pageHeight = 0;
        this.addEventListener('custom-string-event', this.handleChangedValue);
    }

    connectedCallback() {
        super.connectedCallback();
        this.pageHeight = document.documentElement.scrollHeight;
    }

    handleChangedValue(e) {
        e.stopPropagation();
        switch(e.detail.type) {
            case "Email" :
                this.userEmailLogin(e.detail.value,null);
                break;
            case "Password" :
                this.inputtedPassword = e.detail.value;
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
            case "year":
                this.validateYearsCompleted(e.detail.value,e.detail.type);
                break;
            case "Phone Number":
                this.validatePhoneNumber(e.detail.value,e.detail.type);
                break;
            case "gpa":
                this.validateGPA(e.detail.value,e.detail.type);
                break;
            default: 
                this.validateString(e.detail.value,e.detail.type);
                return;     
        }
    }

    studentcheckBox(e) {
        this.studentCheckBoxClicked = true;
        this.error = null;
        this.currentUser = null;
        this.inputtedPassword = null;
    }
    handleCheckboxChange(e) {
        this.privacyCheckBoxClicked = !this.privacyCheckBoxClicked;

    }

    studentuncheckBox(e) {
        this.studentCheckBoxClicked = false;
        this.error = null;
        this.currentUser = null;
        this.inputtedPassword = null;
    }

    areAllFieldsFilled(userAttributes) {
        for (const key in userAttributes) {
            if (userAttributes.hasOwnProperty(key)) {
                const value = userAttributes[key];
                if (Array.isArray(value)) {
                    continue;
                }
                if (typeof value === 'string' && value.trim() === "") {
                    return false;
                }
            }
        }
        return true;
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

    routeToHome(e) {
        if (!this.areAllFieldsFilled(this.UserAttributes)) {
            this.error = "Invalid Sign up credentials";
            return;
        } else {
            this.error = null;
        }
        this.UserAttributes["Name"] = this.UserAttributes["FirstName"]+" "+this.UserAttributes["LastName"];
        this.UserAttributes["aboutMe"] ="";
        console.log(this.UserAttributes);
        this.addUser(this.UserAttributes);
    }
    routeToEnterprise(e) {
        Router.go(`/enterpriseLoginPage`);
    }
   

    memberLogin(e) {
        if (!this.currentUser) {
            this.error = "Please Enter valid Email Address";
            return;
        } else if (!this.inputtedPassword) {
            this.error = "Please Enter Password";
            return;
        }
        if (this.currentUser.Password!== this.inputtedPassword) {
            this.error = "Incorrect password or email";
        } else {
            sessionStorage.setItem('email', this.currentUser.email);
            sessionStorage.setItem('role', "user");
            Router.go(`/home`);
        }
    }

    validateEmail(input,type) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(input)) {
            if (!type) {
                return false; //Used for user login
            }
           this.error = "Invalid Email";
        } else {
            if (!type) {
                return true; //Used for user login
            }
            this.error = null;
            this.UserAttributes[type] = this.convertAllCharsToLowerCase(input);
        }
    }

    userEmailLogin(input,type) {
        
        fetch(`${apiUrl}/api?username=${input}`)
        .then(response => response.json())
        .then(data => {
          // Log the response from the API
          this.currentUser["Password"] = data.Password;
          this.currentUser["Name"] = data.Name;
          this.currentUser["email"] = input;
        })
        .catch(error => {
           this.error = "User Not Found"
        });
        if (this.validateEmail(input,type)) {
            this.currentUser["email"] = input;
        } else {
            this.error = "Invalid Email";
        }
        
        
    }

    userEmailPassword(input) {
        if (!this.currentUser) {
            this.error = "Please enter an email address"
        }
    }

    validateAge(input,type) {
        if (input >= 15 && input <= 100) {
            this.error = null;
            this.UserAttributes[type] = String(input);
        } else {
            this.error = "Please Enter a Valid Age";
        }
    }

    validateGPA(input,type) {
        if (input >= 1.5 && input <= 4.3) {
            this.error = null;
            this.UserAttributes[type] = String(input);
        } else {
            this.error = "Please Enter a Valid Age";
        }
    }

    validateString(input,type) {
        const alphabetRegex =  /^[a-zA-Z \p{P}]*$/u;
        if (alphabetRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

    validateYearsCompleted(input,type) {
        if (input >= 0 && input <= 4) {
            this.error = null;
            this.UserAttributes[type] = String(input);
        } else {
            this.error = "Invalid Input";
        }
    }

    validatePhoneNumber(input,type) {
        const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        if (phoneRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = String(input);
        } else {
           this.error = "Invalid Input";
        }
    }

    addUser(newUser) {
        fetch(`${apiUrl}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then(response => response.json())
          .then(data => {
            if (data.message ==="Account exists under this email") {
                this.error = "Account exists under this email";
            } else {
                sessionStorage.setItem('email', this.UserAttributes["email"]);
                sessionStorage.setItem('role', "user");
                Router.go(`/home`);
            }
          })
          .catch(error => {
            console.error("Error adding user:", error);
          });
      }
      routeToPrivacy(e) {
        Router.go(`/privacy`);
         
      }

}

customElements.define('first-page', FirstPage);
