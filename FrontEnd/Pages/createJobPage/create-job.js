import { LitElement} from 'lit';
import { Router } from "@vaadin/router";
import {CreateJobTemplate} from './create-job-template';
import { apiUrl } from '../../config.js';
import { initRouter } from "../../router";


export class CreateJob extends LitElement {
  render() {
    return CreateJobTemplate(this);
  }
  static get properties() {
    return {
        user: {type: Object},
        eventData: {type: Array},
        popupOpen: {type: Boolean},
        file: {type: Object},
        eventAttributes: {type: Object}, 
        error: {type : String}
       
    };
    }

    constructor() {
        super();
        this.currentUser = sessionStorage.getItem('Name');
        this.user = "";
        this.filePopup = false;
        this.popupOpen = false;
        this.error = null;
        this.eventData = [];
        this.eventAttributes=[];
        this.missingFields = [];
        this.addEventListener('custom-string-event', this.handleChangedValue);
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchCompanyData({"CompanyName":String(this.currentUser)});
    }

    fetchCompanyData(userData) {
        fetch("http://localhost:5001/api/findUserEnterprise", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            this.user = data;
            this.eventData = this.user.events 
            console.log(this.eventData);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }

    handleChangedValue(e) {
        e.stopPropagation();
        if (e.detail.type === "Image") {
            this.eventAttributes["img"] = e.detail.value;
            console.log(this.eventAttributes);
        }
        this.validateString(e.detail.value,e.detail.type);
    }

    addEvent(e) {
        this.missingFields = [];
        this.validateJobPosting();
        if (this.missingFields.length!==0) {
            this.error = "Missing Required Fields";
            return;
        }
        this.error = "Successfully Uploaded";
        this.eventAttributes["id"]=this.generateUniqueID();
        this.eventAttributes["shortdescription"] = this.getFirst100Words(this.eventAttributes["longdescription"]);
        this.eventData.push(this.eventAttributes);
        this.eventData = [...this.eventData];
        this.eventAttributes = [];
    }

    getFirst100Words(text) {
        const words = text.split(/\s+/);
        const first100Words = words.slice(0, 100);
        const result = first100Words.join(' ');
        return result;
      }

    validateString(input,type) {
        const alphabetRegex = /^[a-zA-Z ]*$/;
        if (alphabetRegex.test(input)) {
            this.error = null;
            this.eventAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

    validateJobPosting() {
        const requiredFields = ["Eventtitle", "companyName", "end-date","start-date",
        "event-description","event-end-date","event-start-date","longdescription",
        "title"];

        for (const field of requiredFields) {
            if (!this.eventAttributes.hasOwnProperty(field)) {
            this.missingFields.push(field);
            }
        }
        return this.missingFields;
    }

    generateUniqueID() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2);
        return `${timestamp}_${random}`;
    }

    togglePopup(e) {
        this.popupOpen = !this.popupOpen
    }

    closePopup(e,id) {
        this.error = null;
        this.filePopup = false;
        this.popupOpen = false;
    }

    setPopupData(event){
        this.popupData = event;
    }

    fileSubmissionButton(e) {
        this.filePopup = true;
    }

}

customElements.define('createjob-page', CreateJob);
