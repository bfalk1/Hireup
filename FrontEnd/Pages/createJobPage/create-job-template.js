import { html} from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';
import { Navbar } from '../../Components/navbar/navbar';
import { PopupPage } from '../../Components/popup/popup';
import { InputString } from '../../Components/input-string/input-string';
import { InputImage } from '../../Components/input-image/input-image';
import { InputParagraph } from '../../Components/input-paragraph/input-paragraph';


const xptemplate = (context) =>{
    return html`
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
  
      <button class="button" @click=${(e) => context.addEvent(e)}>Add</button>
      ${context.error !==null ? html`<h2 style="
          height:18.5px;
          margin-left: 5px;
          position: absolute;
            top: 92%;
          color:rgb(6, 28, 113);">${context.error}</h2>`
          :html``}
    </div>
    `;
  
  }

export const CreateJobTemplate = (context) => {
    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains('popup')) {
            context.closePopup();
        }
    };

    const openPopup = (e, eventData) => {
      context.setPopupData(eventData);
      context.togglePopup(e);
    };
   return html `
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
   ${context.eventData ? context.eventData.map(event => html `
     <button class="card-button" @click=${(e) => openPopup(e, event)}>
       <event-card
         .eventTitle=${event.eventTitle}
         .eventenddate=${event.eventEndDate}
         .eventstartdate=${event.eventStartDate}
         .eventdescription = ${event.eventDescription}
         .companyName = ${event.companyName}
         .title=${event.title}
         description=${event.shortdescription}
         img=${event.img}
         placeholder=""
       ></event-card>
     </button>`) : html``}
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
    <pop-up buttonTitle="+" .content=${xptemplate(context)}></pop-up>
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
    ${context.popupOpen ? html`
      <div class="popup" @focusout=${handleBackgroundClick}>
        <div class="popup-content">
          <button class="close-button" @click=${(e) => context.closePopup(e,context.popupData.id)} >X</button>
          <h1 style="
          border-bottom: 
          lightgray;
          text-align: center;
          border-bottom-style: solid; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">${context.popupData.eventTitle}</h1>
          <h3 style="
          text-align: center;
          border-bottom-style: none; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">Event Details</h3>
          <p>${context.popupData.eventDescription}</p>
          <div>${context.popupData.eventStartDate} - ${context.popupData.eventEndDate}</div>
          <h3 style="
          text-align: center;
          border-bottom-style: none; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">Company Details</h3>
          <p>${context.popupData.longdescription}</p>
          <h3 style="
          text-align: center;
          border-bottom-style: none; 
          margin-bottom:2px;
          color: rgb(6, 28, 113);
          margin-top: 0px">Attachments and Dowloads</h3>
        </div>
      </div>
      
      `: html``}
   
   
   
   
   
   
   
   `
};