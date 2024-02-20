import { LitElement, html } from 'lit';
import {PrivacyTemplate} from './privacy-template';

export class Privacy extends LitElement {
    render() {
      return PrivacyTemplate(this);
    }

    static get properties() {
        return {

        };
        }
    
        constructor() {
            super();
        }


}


customElements.define('privacy-page', Privacy);