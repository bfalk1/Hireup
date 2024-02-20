import { html } from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';
import { Navbar } from '../../Components/navbar/navbar';

export const enterpriseHomeTemplate = (context) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup')) {
      context.closePopup();
    }
  };

  const openPopup = (e, eventData) => {
    context.setPopupData(eventData);
    context.togglePopup(e);
  };

  return html`
    <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
   .event-section {
        background-color: white; /* Set the background color to white */
        border-radius: 15px;
        padding: 20px;
        max-width: 95%; /* Set maximum width for the section */
        margin-top:80px;
        
    }
    .event-section h3,h1 {
      margin: 0;
      padding: 0;
      
    }

    .event-grid {
        display: flex; /* Use flexbox to create a flex container */
        overflow-x: auto; /* Enable horizontal scrolling */
        width: 95%; /* Set the width of the container */
        padding: 1%;
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
        .submit-button{
          background-color: rgb(6, 28, 113);
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
          position: absolute;
          left: 10%;
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
    <div class="container">
  ${context.eventData.length > 0 ? html`
  <div style=" background-color: white;
        width: 90%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 80px;
        border-radius:10px;
        position: relative;">
        <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; padding-top:10px;">Live Events</h1>
      <div class="event-grid">
        ${context.eventData.map(event => html`
          <button class="card-button" @click=${(e) => openPopup(e, event)}>
            <event-card
              title=${event.title}
              description=${event.shortdescription}
              img=${event.img}
              placeholder=""
            ></event-card>
          </button>
        `)}
      </div>
      </div>`: html`<section class="event-section"><h3 style=" text-align: center;
  border-bottom-style: none; 
  margin-bottom:2px;
  
  color: rgb(6, 28, 113); ">You have no events. Click create posting to start a new event!</h3></section>`}
   

    


    ${context.popupOpen ? html`
    <div class="popup" @focusout=${handleBackgroundClick}>
    <body>
    <div class="container-popup">
    <button class="close-button" @click=${(e) => context.closePopup(e, context.popupData.id)} >X</button>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 10px">${context.popupData.eventTitle}</h2>
        <p>${context.popupData.eventDescription}</p>
        <p>${context.popupData.eventStartDate} - ${context.popupData.eventEndDate}</p>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 30px">${context.popupData.companyName} Company Information</h2>
        <p>${context.popupData.longdescription}</p>
      </body>
      <h3 style="
      text-align: center;
      border-bottom-style: none; 
      margin-bottom:2px;
      color: rgb(6, 28, 113);
      margin-top: 0px">Attachments and Dowloads</h3>
          <button class="submit-button" @click=${(e) => context.fileSubmissionButton(e)}>Add Submission</button>
          ${context.filePopup ? html`
          <form 
          style="position: relative;
          top: 54px;" action="/upload" method="POST" enctype="multipart/form-data">
          <input  type="file" name="fileToUpload" id="fileToUpload">
          <input  type="submit" value="Upload File" @click=${(e) => context.fileSubmission(e, context.popupData.id)}>
        </form>`:
        html``}
        ${context.succesfullyUploaded !== null ? html`<h2 style="
          height:18.5px;
          margin-left: 5px;
          position: relative;
          top: 300px;
          color:rgb(6, 28, 113);">${context.succesfullyUploaded}</h2>`
        : html``}
        ${context.submittedEvents.some(event => event.id === context.popupData.id) ? html`
        <div style="position: relative;
        top: 230px;">
          <h1 id="fileLinksContainer" style="
            border-bottom: lightgray;
            text-align: center;
            border-bottom-style: solid; 
            margin-bottom: 2px;
            color: rgb(6, 28, 113);
            margin-top: 0px;
           ">Submissions
          </h1>
          <div>${context.filesToDisplay.find(item => item.id === context.popupData.id).link}</div>
        </div>
        
        `: html``}
        </div>
      </div>
      </div>
      
      `: html``}
  `;

};