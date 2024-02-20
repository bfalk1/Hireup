import { LitElement, html } from 'lit';
import {inputImageTemplate } from './input-image-template';

export class InputImage extends LitElement {
    render() {
      return inputImageTemplate (this);
    }

    static get properties() {
        return {
            selectedFile: {type: File},
            imageClicked: {type: Boolean}
        };
        }
    
    constructor() {
        super();
        this.selectedFile = [];
        this.type = "Image";
        this.imageClicked = false;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    handleFileChange(event) {
        const input = event.target;
        if (input.files.length > 0) {
          this.selectedFile =URL.createObjectURL(input.files[0]);
          this.dispatchCustomEvent();
        }
    }

    dispatchCustomEvent(e) {
        this.value = this.selectedFile
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

    viewImageSize(e) {
        this.imageClicked = !this.imageClicked;
    }
}


customElements.define('input-image', InputImage);