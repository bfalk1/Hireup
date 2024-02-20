import { LitElement, html } from 'lit';
import {infoboxTemplate} from './infoboxTemplate';

export class Infobox extends LitElement {
    render() {
      return infoboxTemplate(this);
    }

    static get properties() {
        return {
           
        };
        }
    
        constructor() {
            super();
            
        }

        connectedCallback() {
            super.connectedCallback();
            console.log("Loaded into the dom");
        }
        
        
}


customElements.define('info-box', Infobox);