import { html, css } from 'lit';

export const PopupTemplate = (context) => {
  // Function to close the pop-up when clicked outside
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup')) {
      context.closePopup();
    }
  };
  // Function to open the pop-up with event data
  const openPopup = (e, data) => {
    context.setPopupData(data);
    context.togglePopup(e);
  };

  return html`
    <style>
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
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        background-color: white;
        padding: 20px;
        text-align: left;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1010;
        width: ${context.width ? `${context.width}px`:`80%`};
        height: auto;
      }
      
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
      }
      .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        display: inline-block;
    }
      
    </style>
     ${context.popupOpen ? html`
      <div class="popup" @click=${handleBackgroundClick}>
        <div class="popup-content">
          <button class="close-button" @click=${(e) => context.closePopup()} >X</button>
          ${context.content}
        </div>
      </div>` 
    : html`<button class="button" @click=${(e) => context.togglePopup(e)}>${context.buttonTitle}</button>`}
  `;
};
