import { LitElement, html } from 'lit';
import {countdownTimerTemplate } from './countdown-timer-template';

export class CountdownTimer extends LitElement {
    render() {
      return countdownTimerTemplate (this);
    }

    static get properties() {
        return {
            startDateTime: { type: String },
            endDateTime: { type: String },
            timeRemaining: { type: String }
        };
        }
    
    constructor() {
        super();
        this.startDateTime = "2023-10-27T12:00:00Z";
        this.endDateTime = "2023-10-28T15:30:00Z";
        this.timeRemaining = "";

    }

    connectedCallback() {
        super.connectedCallback();
    
        // Start the countdown timer
        this.updateCountdown();
      }
    
      disconnectedCallback() {
        super.disconnectedCallback();
    
        // Stop the countdown timer when the component is removed
        clearInterval(this.intervalId);
    }

    updateCountdown() {
        const update = () => {
          // Parse the start and end date strings into Date objects
          const startDate = new Date(this.startDateTime);
          const endDate = new Date(this.endDateTime);
    
          // Calculate the time remaining
          const currentTime = new Date();
          const timeRemaining = endDate - currentTime;
    
          if (timeRemaining <= 0) {
            this.timeRemaining = 'Countdown expired';
            clearInterval(this.intervalId);
          } else {
            const hours = Math.floor(timeRemaining / 3600000);
            const minutes = Math.floor((timeRemaining % 3600000) / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);
    
            this.timeRemaining = `${hours} hours : ${minutes} minutes :  ${seconds} seconds remaining`;
          }
        };
        update();

        this.intervalId = setInterval(update, 1000);
    }
}


customElements.define('countdown-timer',  CountdownTimer);