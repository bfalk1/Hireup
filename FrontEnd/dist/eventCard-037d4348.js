import{x as e,s as t}from"./navbar-5d6428c0.js";customElements.define("input-image",class extends t{render(){return e`
    <style>
    .file-label {
        cursor: pointer;
        background-color: rgb(6, 28, 113);
        padding: 10px 20px;
    }
    
      .drop-zone img {
        /* Add styles for the displayed image */
        width: 100%;
        height: 100%;
      }
    
    
    input[type="file"] {
        display: none;
    }
    .drop-zone {
        width: ${(t=this).imageClicked?e`300px;`:e`100%;`}
        ${0===t.selectedFile.length?e`border-style: 2px dashed;
        border-width: 2px;
        border-style: dashed;
        border-color: lightgray;`:e``}
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:10px;
    }

    
    .image-preview {
        margin-top: 20px;
        max-width: 100%;
        max-height: 300px;
    }
    </style>
    <div id="drop-zone" class="drop-zone">
        ${0===t.selectedFile.length?e`
        <svg fill="#d3d3d3" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.955 490.955" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_448_" d="M445.767,308.42l-53.374-76.49v-20.656v-11.366V97.241c0-6.669-2.604-12.94-7.318-17.645L312.787,7.301 C308.073,2.588,301.796,0,295.149,0H77.597C54.161,0,35.103,19.066,35.103,42.494V425.68c0,23.427,19.059,42.494,42.494,42.494 h159.307h39.714c1.902,2.54,3.915,5,6.232,7.205c10.033,9.593,23.547,15.576,38.501,15.576c26.935,0-1.247,0,34.363,0 c14.936,0,28.483-5.982,38.517-15.576c11.693-11.159,17.348-25.825,17.348-40.29v-40.06c16.216-3.418,30.114-13.866,37.91-28.811 C459.151,347.704,457.731,325.554,445.767,308.42z M170.095,414.872H87.422V53.302h175.681v46.752 c0,16.655,13.547,30.209,30.209,30.209h46.76v66.377h-0.255v0.039c-17.685-0.415-35.529,7.285-46.934,23.46l-61.586,88.28 c-11.965,17.134-13.387,39.284-3.722,57.799c7.795,14.945,21.692,25.393,37.91,28.811v19.842h-10.29H170.095z M410.316,345.771 c-2.03,3.866-5.99,6.271-10.337,6.271h-0.016h-32.575v83.048c0,6.437-5.239,11.662-11.659,11.662h-0.017H321.35h-0.017 c-6.423,0-11.662-5.225-11.662-11.662v-83.048h-32.574h-0.016c-4.346,0-8.308-2.405-10.336-6.271 c-2.012-3.866-1.725-8.49,0.783-12.07l61.424-88.064c2.189-3.123,5.769-4.984,9.57-4.984h0.017c3.802,0,7.38,1.861,9.568,4.984 l61.427,88.064C412.04,337.28,412.328,341.905,410.316,345.771z"></path> </g></svg>
        <input type="file" id="file-input" multiple style="display: none;" @change=${e=>t.handleFileChange(e)}>
        <label for="file-input" id="file-label" class="file-label">Upload Files</label>`:e``}
        ${t.selectedFile.length>0?e`<img src="${t.selectedFile}" alt="Selected Image" @click=${e=>t.viewImageSize(e)}/>
            `:e``}
    </div>
     `;var t}static get properties(){return{selectedFile:{type:File},imageClicked:{type:Boolean}}}constructor(){super(),this.selectedFile=[],this.type="Image",this.imageClicked=!1}connectedCallback(){super.connectedCallback()}handleFileChange(e){const t=e.target;t.files.length>0&&(this.selectedFile=URL.createObjectURL(t.files[0]),this.dispatchCustomEvent())}dispatchCustomEvent(e){this.value=this.selectedFile;const t=new CustomEvent("custom-string-event",{detail:{type:this.type,value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(t)}viewImageSize(e){this.imageClicked=!this.imageClicked}});customElements.define("countdown-timer",class extends t{render(){return e`
    <div style="padding-bottom:10px;">
    ${this.timeRemaining}
  </div>
     `}static get properties(){return{startDateTime:{type:String},endDateTime:{type:String},timeRemaining:{type:String}}}constructor(){super(),this.startDateTime="2023-10-27T12:00:00Z",this.endDateTime="2023-10-28T15:30:00Z",this.timeRemaining=""}connectedCallback(){super.connectedCallback(),this.updateCountdown()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.intervalId)}updateCountdown(){const e=()=>{new Date(this.startDateTime);const e=new Date(this.endDateTime)-new Date;if(e<=0)this.timeRemaining="Countdown expired",clearInterval(this.intervalId);else{const t=Math.floor(e/36e5),i=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3);this.timeRemaining=`${t} hours : ${i} minutes :  ${s} seconds remaining`}};e(),this.intervalId=setInterval(e,1e3)}});customElements.define("event-card",class extends t{render(){return e`<style>
    .course-card {
      width: 250px; /* Adjust as needed */
      border: 1px solid #ddd;
      box-shadow: 0 0px 6px rgba(0, 0, 0, 0.4);
      transition: 0.3s;
      width: 300px;
      border-radius: 8px;
      overflow: hidden; /* This will make sure that the image and content stay within the card boundaries */
      margin: 10px;
      position: relative; /* Positioning context for the absolute positioned icons later */
  }

    .course-card img {
        width: 100%;
        height: auto;
        display: block; /* Removes any potential space at the bottom of the image */
    }

    .course-info {
        padding: 10px;
    }

    .course-card h4 {
        margin: 0;
        padding-bottom: 5px;
        color: rgb(6, 28, 113);
        font-size: 16px; /* Adjust as needed */
    }
    .course-card p {
      margin: 0;
      color: #777; /* Slightly grayed out text for the date, adjust as needed */
    }
      .description {
        padding: 5px;
        margin-top: 10px;
        font-size: 14px;
        color: #777;
      }
    </style>
    <div class="course-card">
    <input-image .selectedFile=${(t=this).img}></input-image>
    <div class="course-info">
        <h4>${t.title}</h4>
        <p class="description">${t.description}</p>
        <countdown-timer></countdown-timer>
    </div>
  </div>`;var t}static get properties(){return{title:{type:String},description:{type:String},img:{type:String},placeholder:{type:String},popupOpen:{type:Boolean},eventTitleitle:{type:String},colour:{type:Object}}}constructor(){super(),this.title="",this.eventTitle="",this.eventstartdate="",this.eventenddate="",this.eventdescription="",this.companyName="",this.description="",this.img="",this.placeholder="",this.popupOpen=!1}togglePopup(e){this.popupOpen=!this.popupOpen}closePopup(e){this.popupOpen=!1}});
