import { html } from 'lit';
import { Navbar } from '../../Components/navbar/navbar';


export const ApplicantsPageTemplate = (context) => {
  return html `
    <style>
      body {
  font-family: 'Arial', sans-serif;
  margin-top: 0;
  padding: 0;
  background: #f4f4f4;
}

.members-container {
  width: 90%;
  margin: 20px auto;
  margin-top:100px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.toolbar {
  padding: 10px;
  text-align: right;
}

.button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background: #0056b3;
}

.members-table {
  width: 100%;
  border-collapse: collapse;
}

.members-table thead {
  background: #eee;
}

.members-table th,
.members-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.members-table th {
  text-transform: uppercase;
  font-size: 14px;
}

.members-table td img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.login-button {
  background: #28a745;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background: #218838;
}
.filter-section {
  background-color: #f4f4f4;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-group {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px; /* Space between rows */
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, border-color 0.3s;

  /* Ensuring same size for all buttons */
  min-width: 120px; /* Adjust this value as needed */
  text-align: center; /* Center text in button */
  white-space: nowrap; /* Prevents text from wrapping */
}

.filter-btn:hover,
.filter-btn.active {
  border-color: #28a745;
  background-color: #28a745;
  color: #fff;
}
.filter-btn.inactive {
  border-color: #D3D3D3;
  background-color: #D3D3D3;
  color: #fff;
}


/* Responsive adjustments */
@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
  }
  .filter-group {
    justify-content: center;
  }
}

.popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }
      .popup-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .popup-content {
        max-height: 500px;
        overflow-y: auto;
      }
      .close-button, .download-button {
        cursor: pointer;
        
      }
      .popup-content pre {
        white-space: pre-wrap; /* Since programming files might contain long lines */
        word-wrap: break-word;
        overflow-x: auto; /* Enable horizontal scrolling if needed */
        max-height: 400px; /* Example fixed height */
        overflow-y: auto; /* Enable vertical scrolling */
      }


    </style>
    <div class="container">
    <div class="members-container">
    <div class="filter-section">
  <!-- GPA Filter -->
  <div class="filter-group">
    <button class="filter-btn ${context.gpa === 0 ? 'active' : ''}" @click=${(e) => context.handleGPAChange(e, 0)} >All GPAs</button>
    <button class="filter-btn ${context.gpa === 4.0 ? 'active' : ''}" @click=${(e) => context.handleGPAChange(e, 4.0)}>4.0</button>
    <button class="filter-btn ${context.gpa === 3.7 ? 'active' : ''}" @click=${(e) => context.handleGPAChange(e, 3.7)}>3.7+</button>
    <button class="filter-btn ${context.gpa === 3.5 ? 'active' : ''}" @click=${(e) => context.handleGPAChange(e, 3.5)}>3.5+</button>
    <button class="filter-btn ${context.gpa === 3.0 ? 'active' : ''}" @click=${(e) => context.handleGPAChange(e, 3.0)}>3.0+</button>
    <!-- More GPA buttons -->
  </div>

  <!-- Year Filter -->
  <div class="filter-group">
    <button class="filter-btn ${context.year === 0 ? 'active' : ''}" @click=${(e) => context.handleYearChange(e, 0)}>All Years</button>
    <button class="filter-btn ${context.year === 1 ? 'active' : ''}" @click=${(e) => context.handleYearChange(e, 1)}>Freshman</button>
    <button class="filter-btn ${context.year === 2 ? 'active' : ''}" @click=${(e) => context.handleYearChange(e, 2)}>Sophomore</button>
    <button class="filter-btn ${context.year === 3 ? 'active' : ''}" @click=${(e) => context.handleYearChange(e, 3)}>Junior</button>
    <button class="filter-btn ${context.year === 4 ? 'active' : ''}" @click=${(e) => context.handleYearChange(e, 4)}>Senior</button>
    <!-- More year buttons -->
  </div>

  <!-- Previous Experience Filter -->
  <div class="filter-group">
    <button class="filter-btn ${context.exp === 'all' ? 'active' : ''}" @click=${(e) => context.handleXPChange(e, 'all')}>All Experiences</button>
    <button class="filter-btn ${context.exp === 'none' ? 'active' : ''}" @click=${(e) => context.handleXPChange(e, 'none')}>None</button>
    <button class="filter-btn ${context.exp === 'internship' ? 'active' : ''}" @click=${(e) => context.handleXPChange(e, 'internship')}>Internship</button>
    <button class="filter-btn ${context.exp === 'part-time' ? 'active' : ''}" @click=${(e) => context.handleXPChange(e, 'part-time')}>Part-time</button>
    <button class="filter-btn ${context.exp === 'full-time' ? 'active' : ''}" @click=${(e) => context.handleXPChange(e, 'full-time')}>Full-time</button>
    <!-- More experience buttons -->
  </div>
  <div class="filter-group">
  <button class="filter-btn ${context.liked === true ? 'active' : ''}" @click=${(e) => context.filterLiked(e)}>Liked Candidates</button>
  </div>
</div>


    <table class="members-table">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Year</th>
          <th>GPA</th>
          <th>Submissions</th>
          <th>Profile</th>
          <th>Add to <br/>Liked</th>
        </tr>
      </thead>
      <tbody>
          ${context.filteredSubmissions.map(submission => html`
            <tr>
              <td><img src="${submission.photoPath}" alt="Member photo"></td>
              <td>${submission.name}</td>
              <td>${submission.email}</td>
              <td>${submission.year}</td>
              <td>${submission.gpa}</td>
              <td><button class="login-button" @click=${(e) => context.openFile(e,filePath)}>file</button></td>
              <td><button class="login-button" @click=${(e) => context.togglePopup(e, submission)} >View</button></td>
              <td><button class="login-button" @click=${(e) => submission.liked ? context.removeLiked(e,submission) : context.addLiked(e,submission)}>
                ${submission.liked ? '✔' : '+'}
              </button></td>
            </tr>
          `)}
        </tbody>
    </table>
  </div>
  ${context.filePreview ? html`
  <div class="popup">
    <div class="popup-header">
      <button class="close-button" @click=${(e) => context.togglePopup(e,)}>Back</button>
      <button class="download-button" @click=${context.downloadFile}>Download</button>
    </div>
    <div class="popup-content">
      <pre>${context.fileContent}</pre> <!-- Display file content here -->
    </div>
  </div>
` : html``}

  `
}