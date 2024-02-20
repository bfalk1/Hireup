import{x as t,s as e}from"./navbar-5d6428c0.js";import"./eventCard-037d4348.js";import"./popup-eaf5ba7a.js";import"./input-string-4061eec9.js";import"./input-paragraph-58921b30.js";import{a as i}from"./config-1948f1ba.js";import"./router-97df8b65.js";const o=e=>t`
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centers horizontally in a column flex container */
       
        height: 100vh; /* Full viewport height */
        
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
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
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

      .profile-box {
        width: 80%; /* Adjust the width as needed */
        margin: 0 auto; /* Centering horizontally */
        background-color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 100px;
        border-radius:10px;
        position: relative;
        
      }
      .h-stack {
        display: flex;
        justify-content: space-between; /* Space elements evenly */
      }
      
      .event-grid {
        display: flex; /* Use flexbox to create a flex container */
        overflow-x: auto; /* Enable horizontal scrolling */
        width: 95%; /* Set the width of the container */
        padding: 1%;
    }
      .experience-box {
        background-color: white;
        width: 80%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius:10px;
      }

      .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f7f7f7;
  }

  .job-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
}

.job-card {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 2px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

  .job-logo {
      width: 50px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
  }
  .job-title {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
}

.job-title h2 {
    margin: 0;
    font-size: 18px;
}

.job-details {
    margin-top: 10px;
    font-size: 14px;
    color: #777;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
}
.skill-item {
  flex: 0 0 50%;  /* takes up half the width of the container */
  list-style-type: disc;  /* bullet point style */
  padding: 5px;
}
    </style>
    <div class="container">
      <div class="profile-box">
      ${e.isCurrentUsersPage?t`<div class="button-container" style="position: absolute;
      top: 10px; 
      right: 10px; ">
   <pop-up buttonTitle="+" .content=${n(e)}></pop-up>

      </div>
      `:t``}
        <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 0px">${e.user.FirstName} ${e.user.LastName}</h1>
        <div class="h-stack" style="width:50%">
          <h4 class=""> Student at ${e.user.school}</h4>
          <h4 class="">GPA: ${e.user.gpa}</h4>
          <h4 class="">Year: ${e.user.year}</h4>
        </div>
        <div class="h-stack">
          <h4 class="">${e.user.city}, ${e.user.province}</h4>
          </div>
        <div>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid;">About Me</h2>
        ${console.log(e.user.aboutMe)}
        <p>${e.user.aboutMe}</p>
        </div>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 10px">Contact Information</h2>
        <div class="h-stack">
        <h4 class="">${e.user.email}</h4>
        </div>
      </div>
        <div class="profile-box" style="margin-top:10px;">
        <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid;">Past Events</h1>
      <div class="event-grid">
        ${e.eventData.map((i=>t`
          <button class="card-button" @click=${t=>((t,i)=>{e.setPopupData(i),e.togglePopup(t)})(t,i)}>
            <event-card
              title=${i.title}
              description=${i.shortdescription}
              img=${i.img}
              placeholder=""
            ></event-card>
          </button>
        `))}
      </div>
      </div>
      <div class="experience-box">
          <h1 style="color:rgb(6, 28, 113); border-bottom: lightgray; border-bottom-style: solid; margin-bottom:10px;">Experience</h1>
          <div class="job-container">
          ${e.experience.map((e=>t`
          <div class="job-card">
          <div class="job-title">
          <h2>${e.position}</h2>
          <div class="job-details">
            ${e.company}<br>
            ${e.StartDate}- ${e.EndDate}<br>
            ${e.city}, ${e.province}, ${e.country} · Hybrid
            <br>${e.description}
          </div>
          </div>
          </div>
        `))}
          ${e.isCurrentUsersPage?t` <pop-up buttonTitle="+" .content=${r(e)}></pop-up>`:t``}
      </div>
        </div>
        <div class="experience-box">
          <h1 style="color:rgb(6, 28, 113); border-bottom: lightgray; border-bottom-style: solid; margin-bottom:10px;">Skills</h1>
          <ul class="skills-container">
          ${e.user&&e.user.skills?e.user.skills.map((e=>t`
          <li class="skill-item">${e}</li>
        `)):t`<li class="skill-item">No skills available</li>`}
        </ul>
          ${e.isCurrentUsersPage?t` <pop-up buttonTitle="+" width=600 .content=${s(e)}></pop-up>`:t``}
        </div>
    </div>
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
    </div>
      </body>
      </div>
    
      
      `:t``}
    
  `,r=e=>t`
  <style>
  .row {
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap; 
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

@media (max-width: 600px) {
  .input-component {
      min-width: auto; /* Let the components take the full width */
      width: 100%; /* Take full width */
  }

  .button {
      width: 100%; /* Let the button take the full width */
      margin-top: 10px; /* Space from the above element */
  }
}
  </style>
  <div>
  <h1>Add New Experience</h1>
  <div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="Position" type="position"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="Company" type="company"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="Start Date" type="StartDate"></input-string>
</div>
</div>
<div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="End Date" type="EndDate"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="Country" type="country"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="Province" type="province"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="City" type="city"></input-string>
  </div>
  <div class="input-component">
  <input-paragraph width=250 placeholder="Description" type="description"></input-paragraph>
  </div>
</div>

    <button class="button" @click=${t=>e.addExperience(t,{})}>Add</button>
  </div>
  `,s=e=>t`
  <style>
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .required {
    color: red;
  }
  
  .modal-body {
    margin-top: 20px;
  }
  
  #skill-input {
  }
  
  .suggested-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  
  .suggested-skills button {
    padding: 5px 15px;
    background: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .suggested-skills button:hover {
    background: #ddd;
  }
  
  .save-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgb(6, 28, 113);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .save-btn:hover {
    background: darkblue;
  }
  </style>
  <div class="modal">
  <div class="modal-header">
    <h2>Add skill</h2>
  </div>
  <div class="modal-body">
    <p><span class="required">*</span> Indicates required</p>
    <label for="skill-input">Skill<span class="required">*</span></label>
    <input-string width=95% placeholder="" id="skill-input" type="skill"></input-string>
    <h3>Suggested based on your profile</h3>
    <div class="suggested-skills">
      <button>SQL</button>
      <button>Node.js</button>
      <button>Artificial Intelligence (AI)</button>
      <button>DevOps</button>
      <button>C++</button>
      <button>Express.js</button>
      <button>Agile Methodologies</button>
      <button>Confluence</button>
      <button>Object Oriented Design</button>
      <button>Full-Stack Development</button>
    </div>
    <button class="save-btn" @click=${t=>e.saveSkill(t)}>Save</button>
  </div>
</div>
`,n=e=>t`
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
  <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
  border-bottom-style: solid; margin-bottom:2px;margin-top: 10px;margin-bottom:10px;">Edit Personal Information</h1>
  <div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="FirstName" type="FirstName"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="School" type="school"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="GPA" type="gpa"></input-string>
</div>
</div>
<div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="years completed" type="year"></input-string>
  </div>
  <div class="input-component">
  <input-paragraph width=250 placeholder="About Me" type="aboutMe"></input-paragraph>
  </div>
</div>

    <button class="button" @click=${t=>e.editPersonalInformation(t)}>Save</button>
  </div>
  `;class a extends e{render(){return o(this)}static get properties(){return{experience:{type:Object},newXP:{type:Object},user:{type:Array},eventData:{type:Object},popupData:{type:Object},error:{type:String},popupOpen:{type:Boolean},triggerRerender:{type:Number}}}constructor(){super(),this.experience=[],this.error="",this.popupData=[],this.newXP={company:"",position:"",StartDate:"",EndDate:"",description:"",city:"",country:"",province:""},this.user=[],this.popupOpen=!1,this.eventData=[],this.currentUser={email:sessionStorage.getItem("email")},this.role=sessionStorage.getItem("role"),this.isCurrentUsersPage=!1,this.addEventListener("custom-string-event",this.handleChangedValue)}connectedCallback(){if(super.connectedCallback(),!this.user)return this.isCurrentUsersPage=!0,void this.fetchUserData(String(this.currentUser.email));this.fetchUserData(String(this.user)),this.user.toLowerCase()!==this.currentUser.email.toLowerCase()?this.isCurrentUsersPage=!1:this.isCurrentUsersPage=!0}fetchUserData(t){fetch(`${i}/api/profile?username=${t}`).then((t=>t.json())).then((t=>{this.user=t,console.log(this.user),this.user.events.filter((t=>0===t.submissions.length||(this.eventData.push(t),!1))),this.user.experience.filter((t=>0===t.length||(this.experience.push(t),!1)))})).catch((t=>{this.error="User Not Found"}))}closePopup(t,e){this.filePopup=!1,this.popupOpen=!1}addExperience(t){this.validateExperienceInput(this.newXP)?(this.experience.push(this.newXP),this.experience=[...this.experience],this.addExperienceToUser(this.currentUser.email,this.experience[this.experience.length-1])):this.error="Please fill out all fields"}validateExperienceInput(t){const e=["company","position","StartDate","EndDate","description"];for(let i of e)if(!t[i]||""===t[i].trim())return!1;return!0}editPersonalInformation(t){}saveSkill(t){this.addskillToUser(this.user.email,this.user.skills[this.user.skills.length-1])}togglePopup(t){this.popupOpen=!this.popupOpen}setPopupData(t){this.popupData=t}handleChangedValue(t){switch(t.stopPropagation(),t.detail.type){case"company":this.newXP.company=t.detail.value;break;case"city":this.newXP.city=t.detail.value;break;case"country":this.newXP.country=t.detail.value;break;case"province":this.newXP.province=t.detail.value;break;case"position":this.newXP.position=t.detail.value;break;case"StartDate":this.newXP.StartDate=t.detail.value;break;case"EndDate":this.newXP.EndDate=t.detail.value;break;case"description":this.newXP.description=t.detail.value;break;case"skill":t.detail.value.length>0&&this.user.skills.push(t.detail.value);break;case"aboutMe":this.user.aboutMe=t.detail.value,this.triggerRerender+=1;break;default:return void this.validateString(t.detail.value,t.detail.type)}}validateString(t,e){/^[a-zA-Z ]*$/.test(t)?(this.error=null,this.user[e]=String(t)):this.error="Invalid Input"}async addExperienceToUser(t,e){try{const o=await fetch(`${i}/user/addExperience/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({experience:e})});if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return await o.json()}catch(t){throw console.error("Error:",t),t}}async addskillToUser(t,e){console.log(e);try{const o=await fetch(`${i}/user/addskill/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({skill:e})});if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return await o.json()}catch(t){throw console.error("Error:",t),t}}}customElements.define("profile-page",a);export{a as ProfilePage};
