import { LitElement, html } from 'lit';
import { eventCardTemplate } from './eventCardTemplate';

export class EventCard extends LitElement {
    render() {
        return eventCardTemplate(this);
    }

    static get properties() {
        return {
            title: { type: String },
            description: { type: String },
            img: { type: String },
            placeholder: { type: String },
            popupOpen: { type: Boolean },
            eventTitleitle: { type: String },
            colour: {type: Object}
        };
    }

    constructor() {
        super();
        this.title = "";
        this.eventTitle ="";
        this.eventstartdate = "";
        this.eventenddate = "";
        this.eventdescription = "";
        this.companyName = "";
        this.description = "";
        this.img = "";
        this.placeholder = "";
        this.popupOpen = false

    }
    
    togglePopup(e) {
        this.popupOpen = !this.popupOpen
    }

    closePopup(e) {
        this.popupOpen = false
    }
}


customElements.define('event-card', EventCard);