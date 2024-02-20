import { LitElement, html } from 'lit';
import {inputStringTemplate } from './input-string-template';

export class InputString extends LitElement {
    render() {
      return inputStringTemplate (this);
    }

    static get properties() {
        return {
           value: { type: String },
           width: { type: String },
           placeholder: { type: String },
           type: { type: String }
        };
        }
    
    constructor() {
        super();
        this.value = "";
        this.width = "";
        this.placeholder = "";
        this.type = "";
    }

    dispatchCustomEvent(e) {
        this.value = this.shadowRoot.querySelector('.inputText').value;
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


customElements.define('input-string', InputString);