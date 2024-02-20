import { LitElement } from 'lit';
import { ProfileTemplate } from './profileTemplate';
import { apiUrl } from '../../config.js';
import { Navbar } from '../../Components/navbar/navbar';
import { Router } from "@vaadin/router";

export class ProfilePage extends LitElement {
    render() {
      return ProfileTemplate(this);
    }

    static get properties() {
        return {
          experience: {type: Object},
          newXP: {type: Object},
          user: {type: Array},
          eventData: {type: Object},
          popupData: {type: Object},
          error: {type: String},
          popupOpen: {type: Boolean},
          triggerRerender : {type: Number}

        };
        }
    
        constructor() {
            super();
            this.experience = [];
            this.error = "";
            this.popupData = [];
            this.newXP = {
              "company": "",
              "position": "",
              "StartDate": "",
              "EndDate": "",
              "description": "",
              "city":"",
              "country":"",
              "province":""
            }
            this.user = [];
            this.popupOpen = false;
            this.eventData= [];
            this.currentUser = {"email":sessionStorage.getItem('email')};
            this.role = sessionStorage.getItem('role');
            this.isCurrentUsersPage = false;
            this.addEventListener('custom-string-event', this.handleChangedValue);
        }

        connectedCallback() {
          super.connectedCallback();
          if (!this.user) {
            this.isCurrentUsersPage = true;
            this.fetchUserData(String(this.currentUser.email));
            return;
          }
          this.fetchUserData(String(this.user));
          if (this.user.toLowerCase() !== this.currentUser.email.toLowerCase()) {
            this.isCurrentUsersPage = false;
          } else {
            this.isCurrentUsersPage = true;
          }
      }

      fetchUserData(input) {
        fetch(`${apiUrl}/api/profile?username=${input}`)
        .then(response => response.json())
        .then(data => {
          this.user = data;
          console.log(this.user);
          this.user.events.filter(event => {
            if (event.submissions.length!==0) {
              this.eventData.push(event); 
              return false;
            }
            return true; 
          });
          this.user.experience.filter(ex => {
            if (ex.length!==0) {
              this.experience.push(ex); 
              return false;
            }
            return true; 
          });
          /*
          for (const index in this.submittedEvents) {
           this.displayFile(this.submittedEvents[index].submissions[0],this.submittedEvents[index].id);
          }
          */
        })
        .catch(error => {
           this.error = "User Not Found"
        });
      }

      closePopup(e,id) {
        this.filePopup = false;
        this.popupOpen = false;
    }
       
        addExperience(e){
          if (this.validateExperienceInput(this.newXP)) {
            this.experience.push(this.newXP);
            this.experience = [... this.experience];
            this.addExperienceToUser(this.currentUser.email,this.experience[this.experience.length-1]);
          } else {
            this.error = "Please fill out all fields";
          }
        }

        validateExperienceInput(newXP) {
          // Define an array of required fields
          const requiredFields = ["company", "position", "StartDate", "EndDate", "description"];
          
          // Check if all required fields are filled
          for (let field of requiredFields) {
              if (!newXP[field] || newXP[field].trim() === "") {
                  return false;
              }
          }
      
          return true;
      }

        editPersonalInformation(e) {
          
        }

        saveSkill(e) {
          this.addskillToUser(this.user.email,this.user.skills[this.user.skills.length-1])
        }

        togglePopup(e) {
          this.popupOpen = !this.popupOpen
        }

        setPopupData(event){
          this.popupData = event;
        }

        handleChangedValue(e) {
          e.stopPropagation();
          
          switch(e.detail.type) {
              case "company" :
                  this.newXP.company = e.detail.value
                  break;
              case "city" :
                  this.newXP.city = e.detail.value
                  break;
              case "country" :
                  this.newXP.country = e.detail.value
                  break;
              case "province" :
                  this.newXP.province = e.detail.value
                  break;
              case "position" :
                  this.newXP.position = e.detail.value
                  break;
              case "StartDate":
                  this.newXP['StartDate'] = e.detail.value
                  break;
              case "EndDate" :
                this.newXP['EndDate'] = e.detail.value
                  break;
              case "description" :
                this.newXP.description = e.detail.value
                  break;
              case "skill" :
                if (e.detail.value.length > 0) {
                  this.user.skills.push(e.detail.value);
              }
              break;
              case "aboutMe":
                this.user["aboutMe"]=e.detail.value;
                this.triggerRerender+=1; //Needs to be changed
                break;
              default: 
                  this.validateString(e.detail.value,e.detail.type);
                  return;     
          }
      }

      validateString(input,type) {
        const alphabetRegex = /^[a-zA-Z ]*$/;
        if (alphabetRegex.test(input)) {
            this.error = null;
            this.user[type] = String(input);
        } else {
           this.error = "Invalid Input";
        }
    }

    async addExperienceToUser(userId, experience) {
      try {
        const response = await fetch(`${apiUrl}/user/addExperience/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({experience}),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
  }

  async addskillToUser(userId, skill) {
    console.log(skill);
    try {
      const response = await fetch(`${apiUrl}/user/addskill/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({skill}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

}



customElements.define('profile-page', ProfilePage);