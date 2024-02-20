import { html, css } from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';
import { InputString } from '../../Components/input-string/input-string';
import { Navbar } from '../../Components/navbar/navbar';




export const HomePageTemplate = (context) => {
  // Function to close the pop-up when clicked outside
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup')) {
      context.closePopup();
    }
  };


  // Function to open the pop-up with event data
  const openPopup = (e, eventData) => {
    context.setPopupData(eventData);
    context.togglePopup(e);
  };

  return html`
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
    </section>
    

    ${context.popupOpen ? html`
    <div class="popup" @focusout=${handleBackgroundClick}>
    <body>
    <div class="container-popup">
    <button class="close-button" @click=${(e) => context.closePopup(e,context.popupData.id)} >X</button>
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
          ${context.succesfullyEnrolled !==null ? html`<h3 style="
          
          margin-left: 5px;
          position: relative;
          
          color:rgb(6, 28, 113);">${context.succesfullyEnrolled}</h3>`
          :html`<button class="enroll-button" @click=${(e) => context.handleEnroll(e,context.popupData)}>Enroll</button>`}
        </div>
      </div>`
      : html``}
  `;
};
