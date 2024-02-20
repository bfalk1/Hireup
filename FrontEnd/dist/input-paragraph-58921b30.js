import{x as e,s as t}from"./navbar-5d6428c0.js";customElements.define("input-paragraph",class extends t{render(){return e`
    <style>
    .inputText {
        flex: 1;
        border-radius: 5px;
        width: ${(t=this).width}px;
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        margin-left: 5px;
        margin-right: 5px;
    }
    .inputTextExpanded {
        flex: 1;
        border-radius: 5px;
        width: 100%;
        background-color: #faf7f7;
        height: 100%;
        border-style: solid;
        border-color: lightgray;
        margin-left: 5px;
        margin-right: 5px;
        position: fixed;  /* Position fixed to make it relative to the viewport */
        top: 50%;         /* Center vertically */
        left: 50%;        /* Center horizontally */
        transform: translate(-50%, -50%);
    }
    .input-container {
        position: relative;
        width: 100%; 
    }
    .input-container-expanded {
    }
    </style>
        ${t.expanded?e`
    <div class="input-container-expanded">
    <textarea
        type="text" 
        .value=${t.value}
        class="inputTextExpanded" 
        placeholder=${t.placeholder}
        @input=${e=>t.updateValue(e)} 
        @blur=${e=>t.dispatchCustomEvent(e)}
        ></textarea>
        <svg fill="#d3d3d3" style="width: 30px;
        position: absolute;
        top: 0px;
        right: 0px;" height="30px" width="30px"  @click=${e=>t.expandTypingArea(e)} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M281.633,48.328C250.469,17.163,209.034,0,164.961,0C120.888,0,79.453,17.163,48.289,48.328 c-64.333,64.334-64.333,169.011,0,233.345C79.453,312.837,120.888,330,164.962,330c44.073,0,85.507-17.163,116.671-48.328 c31.165-31.164,48.328-72.599,48.328-116.672S312.798,79.492,281.633,48.328z M260.42,260.46 C234.922,285.957,201.021,300,164.962,300c-36.06,0-69.961-14.043-95.46-39.54c-52.636-52.637-52.636-138.282,0-190.919 C95,44.042,128.901,30,164.961,30s69.961,14.042,95.459,39.54c25.498,25.499,39.541,59.4,39.541,95.46 S285.918,234.961,260.42,260.46z"></path> <path d="M254.961,150H74.962c-8.284,0-15,6.716-15,15s6.716,15,15,15h179.999c8.284,0,15-6.716,15-15S263.245,150,254.961,150z"></path> </g> </g></svg>
        </div>`:e`
        <div class="input-container">
        <input 
        type="text" 
        .value=${t.value}
        @input=${e=>t.updateValue(e)} 
        class="inputText" 
        placeholder=${t.placeholder} 
        @blur=${e=>t.dispatchCustomEvent(e)}
        >
        <svg style="width: 20px;
        position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
        color:lightgray;"
        @click=${e=>t.expandTypingArea(e)}
        fill="#d3d3d3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.402 45.402" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path> </g> </g></svg>
        </div>`}
    `;var t}static get properties(){return{value:{type:String},width:{type:Number},placeholder:{type:String},type:{type:String},expanded:{type:Boolean}}}constructor(){super(),this.value="",this.width="",this.placeholder="",this.type="",this.expanded=!1,this.regex=/.*/}expandTypingArea(e){this.expanded=!this.expanded}updateValue(e){"deleteContentBackward"===e.inputType&&(this.value=this.value.slice(0,-1)),this.regex.test(e.data)&&null!==e.data&&(this.value+=e.data)}dispatchCustomEvent(e){this.expanded?this.value=this.shadowRoot.querySelector(".inputTextExpanded").value:this.value=this.shadowRoot.querySelector(".inputText").value;const t=new CustomEvent("custom-string-event",{detail:{type:this.type,value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(t)}});
