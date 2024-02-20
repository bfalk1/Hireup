import { LitElement, html } from 'lit';
import {HomePageTemplate} from './homePage-template';
import { apiUrl } from '../../config.js';

export class HomePage extends LitElement {
    render() {
      return HomePageTemplate(this);
    }

    static get properties() {
        return {
            popupOpen: {type: Boolean},
            eventData: {type: Object},
            user: {type: Object},
            succesfullyEnrolled: {type: String},

        };
        }
    
        constructor() {
            super();
            this.popupData = {}
            this.popupOpen = false
            this.eventData= [];
            this.currentUser = {"email":sessionStorage.getItem('email')};
            this.role = sessionStorage.getItem('role');
            this.user = "";
            this.succesfullyEnrolled = null;
        }

        connectedCallback() {
            super.connectedCallback();
            console.log(this.currentUser);
            if (this.eventData.length === 0) {
                fetch(`${apiUrl}/api/events`)
                .then(response => response.json())
                .then(data => {
                this.eventData = data; // Assign the data // Log the data here
            })
            .catch(error => {
              console.error("Error fetching data:", error);
            });
            }
            this.fetchUserData(String(this.currentUser.email));
            /*if (this.role === "enterprise") {
                console.log(this.currentUser);
                this.fetchCompanyData({"CompanyName":String(this.currentUser)});
            } else {
                this.fetchUserData({"Name":String(this.currentUser)});
            }*/
        }

        fetchUserData(input) {
            fetch(`${apiUrl}/api/home/?username=${input}`)
            .then(response => response.json())
            .then(data => {
            // Log the response from the API
            this.currentUser["events"] = data.events;
            })
            .catch(error => {
            this.error = "User Not Found"
            });
        }

        

        togglePopup(e) {
            this.popupOpen = !this.popupOpen
        }

        closePopup(e) {
            this.popupOpen = false;
            this.succesfullyEnrolled = null;
        }

        setPopupData(event){
            this.popupData = event;
        }

        handleEnroll(e,eventID) {
            if (this.isInputMatchingKey(eventID.id,this.currentUser.events)) {
                this.succesfullyEnrolled = " You have already registered for this event";
                return;
            } else {
                this.addUserToEvent(this.currentUser.email, eventID)
                    .then((data) => {
                        this.succesfullyEnrolled = "Sucessfully Regitered";
                        this.addEventToUser(this.currentUser.email, eventID)
                    })
                    .catch((error) => {
                        this.succesfullyEnrolled = "Application Error";
                    });
                }
        }

        isInputMatchingKey(input, array) {
            for (const obj of array) {
              if (obj.id === input) {
                return true; 
              }
            }
            return false;
        }

        async addUserToEvent(userId, eventId) {
            try {
              const response = await fetch(`${apiUrl}/addEvent/${userId}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ eventId }),
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

        async addEventToUser(userId, eventId) {
            eventId["submissions"] = [];
            try {
              const response = await fetch(`${apiUrl}/user/addEvent/${userId}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ eventId }),
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


customElements.define('home-page', HomePage);