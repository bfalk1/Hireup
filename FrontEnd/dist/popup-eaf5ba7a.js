import{x as t,s as p}from"./navbar-5d6428c0.js";customElements.define("pop-up",class extends p{render(){return t`
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
        width: ${(p=this).width?`${p.width}px`:"80%"};
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
     ${p.popupOpen?t`
      <div class="popup" @click=${t=>{t.target.classList.contains("popup")&&p.closePopup()}}>
        <div class="popup-content">
          <button class="close-button" @click=${t=>p.closePopup()} >X</button>
          ${p.content}
        </div>
      </div>`:t`<button class="button" @click=${t=>p.togglePopup(t)}>${p.buttonTitle}</button>`}
  `;var p}static get properties(){return{popupOpen:{type:Boolean},popupData:{type:Object},buttonTitle:{type:String},content:{type:t},width:{type:String},height:{type:String}}}constructor(){super(),this.popupData={},this.popupOpen=!1,this.buttonTitle="",this.content=null,this.width="",this.height=""}togglePopup(t){this.popupOpen=!this.popupOpen}closePopup(t){this.popupOpen=!1}setPopupData(t){this.popupData=t}});
