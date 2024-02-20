import{x as t,s as e}from"./navbar-5d6428c0.js";import"./eventCard-037d4348.js";import"./input-string-4061eec9.js";import{a as o}from"./config-1948f1ba.js";import"./router-97df8b65.js";const r=e=>t`
    <style>
      .event-section {
        background-color: white; /* Set the background color to white */
        border-radius: 15px;
        padding: 20px;
        max-width: 90%; /* Set maximum width for the section */
        margin: 0 auto; /* Center the section horizontally */
        margin-top:100px;
        
    }
    
    .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24%, 1fr)); /* Adjusted grid-template-columns */
      gap: 20px;
      width: 100%; /* Set width to 100% */
      border-radius: 5px;
      padding: 1%;
      margin-top: 10px;
      overflow-y: auto;
  }


      .container-popup {
        width: 50%;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
  
      a {
        color: #007BFF;
        text-decoration: none;
      }
  
      p {
        font-family: arial,sans-serif;
        color: #292929;
        font-size: large;
      }
    
      a:hover {
          text-decoration: underline;
      }
  
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        padding: 20px;
        
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
        background-color: white;
        width: 100%;
        display: inline-block;
        cursor: pointer;
        border: none;
        padding: none;
        margin: none;
        transition: 0.3s; /* Add transition for smooth hover effect */
      }
      .card-button:hover {
        
        transform: scale(1.03); /* Scale up the button slightly */
      }
      
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
      }
      .enroll-button{
          background-color: rgb(6, 28, 113);
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
          left: 10%%;
      }
    </style>
    <section class="event-section">
    <h1 style="
    border-bottom: 
    lightgray; 
    text-align: center;
    border-bottom-style: solid; 
    padding-bottom: 10px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Upcoming Events</h1>
      <div class="event-grid">
        ${e.eventData.map((o=>t`
          <button class="card-button" @click=${t=>((t,o)=>{e.setPopupData(o),e.togglePopup(t)})(t,o)}>
            <event-card
              title=${o.title}
              description=${o.shortdescription}
              img=${o.img}
              placeholder=""
            ></event-card>
          </button>
        `))}
      </div>
    </section>
    

    ${e.popupOpen?t`
    <div class="popup" @focusout=${t=>{t.target.classList.contains("popup")&&e.closePopup()}}>
    <body>
    <div class="container-popup">
    <button class="close-button" @click=${t=>e.closePopup(t,e.popupData.id)} >X</button>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 10px">${e.popupData.eventTitle}</h2>
        <p>${e.popupData.eventDescription}</p>
        <p>${e.popupData.eventStartDate} - ${e.popupData.eventEndDate}</p>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 30px">${e.popupData.companyName} Company Information</h2>
        <p>${e.popupData.longdescription}</p>
      </body>
      <h3 style="
      text-align: center;
      border-bottom-style: none; 
      margin-bottom:2px;
      color: rgb(6, 28, 113);
      margin-top: 0px">Attachments and Dowloads</h3>
          ${null!==e.succesfullyEnrolled?t`<h3 style="
          
          margin-left: 5px;
          position: relative;
          
          color:rgb(6, 28, 113);">${e.succesfullyEnrolled}</h3>`:t`<button class="enroll-button" @click=${t=>e.handleEnroll(t,e.popupData)}>Enroll</button>`}
        </div>
      </div>`:t``}
  `;class n extends e{render(){return r(this)}static get properties(){return{popupOpen:{type:Boolean},eventData:{type:Object},user:{type:Object},succesfullyEnrolled:{type:String}}}constructor(){super(),this.popupData={},this.popupOpen=!1,this.eventData=[],this.currentUser={email:sessionStorage.getItem("email")},this.role=sessionStorage.getItem("role"),this.user="",this.succesfullyEnrolled=null}connectedCallback(){super.connectedCallback(),console.log(this.currentUser),0===this.eventData.length&&fetch(`${o}/api/events`).then((t=>t.json())).then((t=>{this.eventData=t})).catch((t=>{console.error("Error fetching data:",t)})),this.fetchUserData(String(this.currentUser.email))}fetchUserData(t){fetch(`${o}/api/home/?username=${t}`).then((t=>t.json())).then((t=>{this.currentUser.events=t.events})).catch((t=>{this.error="User Not Found"}))}togglePopup(t){this.popupOpen=!this.popupOpen}closePopup(t){this.popupOpen=!1,this.succesfullyEnrolled=null}setPopupData(t){this.popupData=t}handleEnroll(t,e){this.isInputMatchingKey(e.id,this.currentUser.events)?this.succesfullyEnrolled=" You have already registered for this event":this.addUserToEvent(this.currentUser.email,e).then((t=>{this.succesfullyEnrolled="Sucessfully Regitered",this.addEventToUser(this.currentUser.email,e)})).catch((t=>{this.succesfullyEnrolled="Application Error"}))}isInputMatchingKey(t,e){for(const o of e)if(o.id===t)return!0;return!1}async addUserToEvent(t,e){try{const r=await fetch(`${o}/addEvent/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventId:e})});if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return await r.json()}catch(t){throw console.error("Error:",t),t}}async addEventToUser(t,e){e.submissions=[];try{const r=await fetch(`${o}/user/addEvent/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventId:e})});if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return await r.json()}catch(t){throw console.error("Error:",t),t}}}customElements.define("home-page",n);export{n as HomePage};
