import{x as t,s as e}from"./navbar-5d6428c0.js";customElements.define("input-string",class extends e{render(){return t`
    <style>
    .inputText {
        border-radius: 5px;
        width: ${(e=this).width};
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        margin-left: 5px;
        margin-right: 5px;
    }
    </style>
    <input 
    type="text" 
    value=${e.value}
    class="inputText" 
    placeholder=${e.placeholder} 
    @blur=${t=>e.dispatchCustomEvent(t)}
    >
     `;var e}static get properties(){return{value:{type:String},width:{type:String},placeholder:{type:String},type:{type:String}}}constructor(){super(),this.value="",this.width="",this.placeholder="",this.type=""}dispatchCustomEvent(t){this.value=this.shadowRoot.querySelector(".inputText").value;const e=new CustomEvent("custom-string-event",{detail:{type:this.type,value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(e)}});
