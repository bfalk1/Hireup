import{x as e,s as t}from"./navbar-5d6428c0.js";customElements.define("input-password",class extends t{render(){return e`
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
        width: ${(t=this).width};  /* or any desired width */
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
    .value=${t.tempValue}
    class="inputText" 
    placeholder=${t.placeholder} 
    @keydown=${e=>t.passwordFormatter(e)}
    @blur=${e=>t.dispatchCustomEvent(e)}
    >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
    class="eyeIcon"
    left: ${t.width-15}px;
    " @click=${e=>t.showPassword(e)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
    </div>

     `;var t}static get properties(){return{value:{type:String},width:{type:String},placeholder:{type:String},type:{type:String},tempValue:{type:String}}}constructor(){super(),this.value="",this.tempValue="",this.width="",this.placeholder="",this.type="",this.passwordRegex=/.*/}connectedCallback(){super.connectedCallback(),this.width||(this.width=250)}passwordFormatter(e){if("Backspace"==e.key)return this.value="",void(this.tempValue="");1===String(e.key).length&&(e.preventDefault(),this.value+=e.key,this.tempValue=this.value.replace(/./g,"*"))}showPassword(e){this.tempValue=this.value}dispatchCustomEvent(e){const t=new CustomEvent("custom-string-event",{detail:{type:this.type,value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(t)}});
