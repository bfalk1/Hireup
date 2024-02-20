import { LitElement, html } from 'lit';
import {inputParagraphTemplate } from './input-paragraph-template';

export class InputParagraph extends LitElement {
    render() {
      return inputParagraphTemplate (this);
    }

    static get properties() {
        return {
           value: { type: String },
           width: { type: Number },
           placeholder: { type: String },
           type: { type: String },
           expanded: { type: Boolean }
        };
        }
    
    constructor() {
        super();
        this.value = "";
        this.width = "";
        this.placeholder = "";
        this.type = "";
        this.expanded = false;
        this.regex = /.*/
    }

    expandTypingArea(e) {
       this.expanded = !this.expanded;
    }

    updateValue(e) {
        if (e.inputType === "deleteContentBackward") {
            this.value = this.value.slice(0, -1);
        }
        if (this.regex.test(e.data) && e.data!==null) {
            this.value+=(e.data);
        }
    }

    dispatchCustomEvent(e) {
        if (!this.expanded) {
            this.value = this.shadowRoot.querySelector('.inputText').value;
        } else {
            this.value = this.shadowRoot.querySelector('.inputTextExpanded').value;
        }
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


customElements.define('input-paragraph', InputParagraph);