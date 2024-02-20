import { LitElement, html } from 'lit';
import {inputPasswordTemplate} from './input-password-template';

export class InputPassword extends LitElement {
    render() {
      return inputPasswordTemplate (this);
    }

    static get properties() {
        return {
           value: { type: String },
           width: { type: String },
           placeholder: { type: String },
           type: { type: String },
           tempValue: { type: String }
        };
        }
    
    constructor() {
        super();
        this.value = "";
        this.tempValue = "";
        this.width = "";
        this.placeholder = "";
        this.type = "";
        this.passwordRegex = /.*/
    }

    connectedCallback(){
        super.connectedCallback();
        if (!this.width) {
            this.width = 250;
        }
    }

    passwordFormatter(e) {
        if (e.key == "Backspace") {
            this.value = "";
            this.tempValue = "";
            return;
        } else if (String(e.key).length === 1) {
            e.preventDefault();
            this.value += e.key
            this.tempValue = this.value.replace(/./g, '*');
        }
    }

    showPassword(e) {
        this.tempValue = this.value;
    }

    dispatchCustomEvent(e) {
        const customEvent = new CustomEvent('custom-string-event', {
            detail: {
                type: this.type,
                value: this.value
            },
            bubbles: true, 
            composed: true 
        });

        this.dispatchEvent(customEvent);
    }
}


customElements.define('input-password', InputPassword);