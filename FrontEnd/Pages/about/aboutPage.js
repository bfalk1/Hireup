import { LitElement, html } from 'lit';
import {AboutPageTemplate} from './aboutPage-template';

export class AboutPage extends LitElement {
    render() {
      return AboutPageTemplate(this);
    }

    static get properties() {
        return {

        };
        }
    
        constructor() {
            super();
        }


}


customElements.define('about-page', AboutPage);