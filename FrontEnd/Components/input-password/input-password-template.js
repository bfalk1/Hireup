import { html } from 'lit';
//import {eyeIcon} from "../../Components/icons"

export const inputPasswordTemplate = (context) => {
    return html `
    <style>
    .inputText {
        border-radius: 5px;
        width: 100%;
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        margin-left: 5px;
        margin-right: 5px;
        margin-top:10px;
       
    }
    .inputWrapper {
        position: relative;
        width: ${context.width};  /* or any desired width */
        display: inline-block;
    }
    .eyeIcon {
        width: 20px;
        cursor: pointer;
        position: absolute;
        top: 17px;  /* centers the icon vertically */
        right: 0px;  /* distance from the right edge */
    }
    </style>
    <div class="inputWrapper">
    <input 
    type="text" 
    .value=${context.tempValue}
    class="inputText" 
    placeholder=${context.placeholder} 
    @keydown=${(e) => context.passwordFormatter(e)}
    @blur=${(e) => context.dispatchCustomEvent(e)}
    >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
    class="eyeIcon"
    left: ${context.width - 15}px;
    " @click=${(e) => context.showPassword(e)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
    </div>

     `  
}