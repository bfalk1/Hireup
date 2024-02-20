import { html } from 'lit';

export const inputStringTemplate = (context) => {
    return html `
    <style>
    .inputText {
        border-radius: 5px;
        width: ${context.width};
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        margin-left: 5px;
        margin-right: 5px;
    }
    </style>
    <input 
    type="text" 
    value=${context.value}
    class="inputText" 
    placeholder=${context.placeholder} 
    @blur=${(e) => context.dispatchCustomEvent(e)}
    >
     `  
}