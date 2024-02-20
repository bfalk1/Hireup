import { html } from 'lit';

export const countdownTimerTemplate = (context) => {
    return html `
    <div style="padding-bottom:10px;">
    ${context.timeRemaining}
  </div>
     `  
}