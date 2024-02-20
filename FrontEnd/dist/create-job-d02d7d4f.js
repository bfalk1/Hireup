import{x as t,s as e}from"./navbar-5d6428c0.js";import"./router-97df8b65.js";import"./eventCard-037d4348.js";import"./popup-eaf5ba7a.js";import"./input-string-4061eec9.js";import"./input-paragraph-58921b30.js";const o=e=>t`
   <style>
   .event-grid {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 20px;
     overflow-y: auto;
     max-height: 800px;
     padding-top:80px;
     width:100%
   }

   .h-stack {
    display: flex;
    align-items: center;
    padding-top: 20px;
  }

     .popup {
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background-color: rgba(0, 0, 0, 0.3);
       justify-content: center;
       align-items: center;
       z-index: 1000;
       display: flex;
       cursor: pointer;
     }

     .popup-content {
       background-color: white;
       padding: 20px;
       border-radius: 5px;
       text-align: left;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       z-index: 1010;
       width: 70%;
       height: 80%;
     }
     .card-button {
       color: black;
       background-color: rgba(243,242,240,255);
       display: inline-block;
       cursor: pointer;
       border: none; /* Remove the border */
       padding: 0; /* Remove padding */
       margin: 0; /* Remove margin */
     }
     .close-button{
       background-color: red;
       position: absolute;
       top: 0%;
       right: 0%;
     }
       .submit-button{
         background-color: rgb(6, 28, 113);
         color: #fff;
         padding: 10px 20px;
         border: none;
         cursor: pointer;
         border-radius: 10px;
         box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
         position: absolute;
         left: 10%%;
     }

     .file-input-button {
       background-color: rgb(6, 28, 113);
       color: #fff;
       padding: 10px 20px;
       border: none;
       cursor: pointer;
       border-radius: 10px;
       box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
     }
   </style>
   <div>
   <h1 style="
   border-bottom: 
   lightgray; 
   position: relative;
   top: 68px;
   text-align: center;
   border-bottom-style: solid; 
   margin-bottom:2px;
   color: rgb(6, 28, 113);
   margin-top: 0px">Ongoing Events</h1>
  
   <div class="event-grid">
   ${e.eventData?e.eventData.map((o=>t`
     <button class="card-button" @click=${t=>((t,o)=>{e.setPopupData(o),e.togglePopup(t)})(t,o)}>
       <event-card
         .eventTitle=${o.eventTitle}
         .eventenddate=${o.eventEndDate}
         .eventstartdate=${o.eventStartDate}
         .eventdescription = ${o.eventDescription}
         .companyName = ${o.companyName}
         .title=${o.title}
         description=${o.shortdescription}
         img=${o.img}
         placeholder=""
       ></event-card>
     </button>`)):t``}
 </div>
 <div class="experience-box">
  <div class="h-stack">
    <h2 style="
    padding-top: 10px;
    text-align: left;
    margin-right: 20px;
    border-bottom-style: none;
    margin-bottom: 2px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Create Posting</h2>
    <pop-up buttonTitle="+" .content=${(e=>t`
    <style>
    .row {
      display: flex;
      margin-bottom: 20px;
     } 
     .button {
      background-color: rgb(6, 28, 113);
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      width: 10%;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
    </style>
    <div>
    <h3 style="
    border-bottom-style: None; 
    margin-bottom:2px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Select Header Photo</h3>
    <input-image></input-image>
    <h4 style="
    border-bottom-style: None; 
    margin-bottom:20px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Click on the image to view aspect ratio it will be displayed in</h4>
    <h3 style="
    border-bottom-style: None; 
    margin-bottom:2px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Job description</h3>
    <div class="row">
    <div class="input-component">
    <input-string width=250px; placeholder="Position Title" type="title"></input-string>
    </div>
    <div class="input-component">
    <input-string width=250px; placeholder="Company Name" type="companyName"></input-string>
    </div>
    <div class="input-component">
    <input-string width=250px; placeholder="Start Date" type="start-date"></input-string>
  </div>
  </div>
  <div class="row">
    <div class="input-component">
    <input-string width=250px; placeholder="End Date" type="end-date"></input-string>
    </div>
    <div class="input-component">
    <input-paragraph width=250 placeholder="Description" type="longdescription"></input-paragraph>
    </div>
  </div>
  <h3 style="
    border-bottom-style: None; 
    margin-bottom:2px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Event Details</h3>
    <div class="row">
    <div class="input-component">
    <input-string width=250px; placeholder="Event Title" type="Eventtitle"></input-string>
    </div>
    <div class="input-component">
    <input-string width=250px; placeholder="Event Start Date" type="event-start-date"></input-string>
    </div>
    <div class="input-component">
    <input-string width=250px; placeholder="Event End Date" type="event-end-date"></input-string>
    </div>
    </div>
    <div class="row">
    <div class="input-component">
    <input-paragraph width=250 placeholder="Description" type="event-description"></input-paragraph>
    </div>
    </div>
  
      <button class="button" @click=${t=>e.addEvent(t)}>Add</button>
      ${null!==e.error?t`<h2 style="
          height:18.5px;
          margin-left: 5px;
          position: absolute;
            top: 92%;
          color:rgb(6, 28, 113);">${e.error}</h2>`:t``}
    </div>
    `)(e)}></pop-up>
  </div>
</div>
    <h1 style="
    border-bottom: 
    lightgray; 
    text-align: center;
    border-bottom-style: solid; 
    margin-bottom:2px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Past Events</h1>
</div>
</div>
    ${e.popupOpen?t`
      <div class="popup" @focusout=${t=>{t.target.classList.contains("popup")&&e.closePopup()}}>
        <div class="popup-content">
          <button class="close-button" @click=${t=>e.closePopup(t,e.popupData.id)} >X</button>
          <h1 style="
          border-bottom: 
          lightgray;
          text-align: center;
          border-bottom-style: solid; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">${e.popupData.eventTitle}</h1>
          <h3 style="
          text-align: center;
          border-bottom-style: none; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">Event Details</h3>
          <p>${e.popupData.eventDescription}</p>
          <div>${e.popupData.eventStartDate} - ${e.popupData.eventEndDate}</div>
          <h3 style="
          text-align: center;
          border-bottom-style: none; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">Company Details</h3>
          <p>${e.popupData.longdescription}</p>
          <h3 style="
          text-align: center;
          border-bottom-style: none; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">Attachments and Dowloads</h3>
        </div>
      </div>
      
      `:t``}
   
   
   
   
   
   
   
   `;class i extends e{render(){return o(this)}static get properties(){return{user:{type:Object},eventData:{type:Array},popupOpen:{type:Boolean},file:{type:Object},eventAttributes:{type:Object},error:{type:String}}}constructor(){super(),this.currentUser=sessionStorage.getItem("Name"),this.user="",this.filePopup=!1,this.popupOpen=!1,this.error=null,this.eventData=[],this.eventAttributes=[],this.missingFields=[],this.addEventListener("custom-string-event",this.handleChangedValue)}connectedCallback(){super.connectedCallback(),this.fetchCompanyData({CompanyName:String(this.currentUser)})}fetchCompanyData(t){fetch("http://localhost:5001/api/findUserEnterprise",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{this.user=t,this.eventData=this.user.events,console.log(this.eventData)})).catch((t=>{console.error("Error fetching data:",t)}))}handleChangedValue(t){t.stopPropagation(),"Image"===t.detail.type&&(this.eventAttributes.img=t.detail.value,console.log(this.eventAttributes)),this.validateString(t.detail.value,t.detail.type)}addEvent(t){this.missingFields=[],this.validateJobPosting(),0===this.missingFields.length?(this.error="Successfully Uploaded",this.eventAttributes.id=this.generateUniqueID(),this.eventAttributes.shortdescription=this.getFirst100Words(this.eventAttributes.longdescription),this.eventData.push(this.eventAttributes),this.eventData=[...this.eventData],this.eventAttributes=[]):this.error="Missing Required Fields"}getFirst100Words(t){return t.split(/\s+/).slice(0,100).join(" ")}validateString(t,e){/^[a-zA-Z ]*$/.test(t)?(this.error=null,this.eventAttributes[e]=t):this.error="Invalid Input"}validateJobPosting(){const t=["Eventtitle","companyName","end-date","start-date","event-description","event-end-date","event-start-date","longdescription","title"];for(const e of t)this.eventAttributes.hasOwnProperty(e)||this.missingFields.push(e);return this.missingFields}generateUniqueID(){return`${Date.now()}_${Math.random().toString(36).substring(2)}`}togglePopup(t){this.popupOpen=!this.popupOpen}closePopup(t,e){this.error=null,this.filePopup=!1,this.popupOpen=!1}setPopupData(t){this.popupData=t}fileSubmissionButton(t){this.filePopup=!0}}customElements.define("createjob-page",i);export{i as CreateJob};
