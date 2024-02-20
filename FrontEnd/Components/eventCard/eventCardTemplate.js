import { html, css } from 'lit';
import { InputImage } from '../input-image/input-image';
import {CountdownTimer} from '../countdown-timer/countdown-timer';

export const eventCardTemplate = (context) => {
  return html`<style>
    .course-card {
      width: 250px; /* Adjust as needed */
      border: 1px solid #ddd;
      box-shadow: 0 0px 6px rgba(0, 0, 0, 0.4);
      transition: 0.3s;
      width: 300px;
      border-radius: 8px;
      overflow: hidden; /* This will make sure that the image and content stay within the card boundaries */
      margin: 10px;
      position: relative; /* Positioning context for the absolute positioned icons later */
  }

    .course-card img {
        width: 100%;
        height: auto;
        display: block; /* Removes any potential space at the bottom of the image */
    }

    .course-info {
        padding: 10px;
    }

    .course-card h4 {
        margin: 0;
        padding-bottom: 5px;
        color: rgb(6, 28, 113);
        font-size: 16px; /* Adjust as needed */
    }
    .course-card p {
      margin: 0;
      color: #777; /* Slightly grayed out text for the date, adjust as needed */
    }
      .description {
        padding: 5px;
        margin-top: 10px;
        font-size: 14px;
        color: #777;
      }
    </style>
    <div class="course-card">
    <input-image .selectedFile=${context.img}></input-image>
    <div class="course-info">
        <h4>${context.title}</h4>
        <p class="description">${context.description}</p>
        <countdown-timer></countdown-timer>
    </div>
  </div>`;
};
