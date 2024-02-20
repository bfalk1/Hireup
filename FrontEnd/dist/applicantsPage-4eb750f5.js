import{x as e,s as t}from"./navbar-5d6428c0.js";import"./router-97df8b65.js";import{a as i}from"./config-1948f1ba.js";class r extends t{render(){return e`
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
    <button class="filter-btn ${0===(t=this).gpa?"active":""}" @click=${e=>t.handleGPAChange(e,0)} >All GPAs</button>
    <button class="filter-btn ${4===t.gpa?"active":""}" @click=${e=>t.handleGPAChange(e,4)}>4.0</button>
    <button class="filter-btn ${3.7===t.gpa?"active":""}" @click=${e=>t.handleGPAChange(e,3.7)}>3.7+</button>
    <button class="filter-btn ${3.5===t.gpa?"active":""}" @click=${e=>t.handleGPAChange(e,3.5)}>3.5+</button>
    <button class="filter-btn ${3===t.gpa?"active":""}" @click=${e=>t.handleGPAChange(e,3)}>3.0+</button>
    <!-- More GPA buttons -->
  </div>

  <!-- Year Filter -->
  <div class="filter-group">
    <button class="filter-btn ${0===t.year?"active":""}" @click=${e=>t.handleYearChange(e,0)}>All Years</button>
    <button class="filter-btn ${1===t.year?"active":""}" @click=${e=>t.handleYearChange(e,1)}>Freshman</button>
    <button class="filter-btn ${2===t.year?"active":""}" @click=${e=>t.handleYearChange(e,2)}>Sophomore</button>
    <button class="filter-btn ${3===t.year?"active":""}" @click=${e=>t.handleYearChange(e,3)}>Junior</button>
    <button class="filter-btn ${4===t.year?"active":""}" @click=${e=>t.handleYearChange(e,4)}>Senior</button>
    <!-- More year buttons -->
  </div>

  <!-- Previous Experience Filter -->
  <div class="filter-group">
    <button class="filter-btn ${"all"===t.exp?"active":""}" @click=${e=>t.handleXPChange(e,"all")}>All Experiences</button>
    <button class="filter-btn ${"none"===t.exp?"active":""}" @click=${e=>t.handleXPChange(e,"none")}>None</button>
    <button class="filter-btn ${"internship"===t.exp?"active":""}" @click=${e=>t.handleXPChange(e,"internship")}>Internship</button>
    <button class="filter-btn ${"part-time"===t.exp?"active":""}" @click=${e=>t.handleXPChange(e,"part-time")}>Part-time</button>
    <button class="filter-btn ${"full-time"===t.exp?"active":""}" @click=${e=>t.handleXPChange(e,"full-time")}>Full-time</button>
    <!-- More experience buttons -->
  </div>
  <div class="filter-group">
  <button class="filter-btn ${!0===t.liked?"active":""}" @click=${e=>t.filterLiked(e)}>Liked Candidates</button>
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
          ${t.filteredSubmissions.map((i=>e`
            <tr>
              <td><img src="${i.photoPath}" alt="Member photo"></td>
              <td>${i.name}</td>
              <td>${i.email}</td>
              <td>${i.year}</td>
              <td>${i.gpa}</td>
              <td><button class="login-button" @click=${e=>t.openFile(e,filePath)}>file</button></td>
              <td><button class="login-button" @click=${e=>t.togglePopup(e,i)} >View</button></td>
              <td><button class="login-button" @click=${e=>i.liked?t.removeLiked(e,i):t.addLiked(e,i)}>
                ${i.liked?"✔":"+"}
              </button></td>
            </tr>
          `))}
        </tbody>
    </table>
  </div>
  ${t.filePreview?e`
  <div class="popup">
    <div class="popup-header">
      <button class="close-button" @click=${e=>t.togglePopup(e)}>Back</button>
      <button class="download-button" @click=${t.downloadFile}>Download</button>
    </div>
    <div class="popup-content">
      <pre>${t.fileContent}</pre> <!-- Display file content here -->
    </div>
  </div>
`:e``}

  `;var t}static get properties(){return{exp:{Type:String},year:{Type:Number},gpa:{Type:Number},enrolledUsers:{Type:Array},submissions:{Type:Array},filteredSubmissions:{Type:Array},liked:{Type:Boolean},likedCandidates:{Type:Array},filePreview:{Type:Boolean},fileUrl:{type:String},fileContent:{type:String}}}constructor(){super(),this.exp="all",this.gpa=0,this.year=0,this.enrolledUsers=["julianbrickman@gmail.com"],this.submissions=[{name:"Benjamin Falkner",email:"bfalkner9@gmail.com",gpa:3,year:0,exp:"none",liked:!1,filePath:"/Assets/360A5.txt"},{name:"Julia Brickman",email:"juliabrickman@gmail.com ",gpa:4,year:4,exp:"internship",liked:!1,filePath:"/Assets/360A5.txt"}],this.filteredSubmissions=this.submissions,this.liked=!1,this.likedCandidates=[],this.filePreview=!1,this.fileUrl="",this.fileContent=""}fetchUserData(){fetch(`${i}/api/fetchProfiles`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emails:this.enrolledUsers})}).then((e=>e.json())).then((e=>{Array.isArray(e)?console.log(e):(console.error("Expected an array of profiles, but received:",e),this.error="Invalid format of user data received")})).catch((e=>{this.error="Error fetching user data",console.error(e)}))}filterSubmissions(){this.fetchUserData(),this.filteredSubmissions=this.submissions.filter((e=>{const t=0===this.gpa||e.gpa===this.gpa,i=0===this.year||e.year===this.year,r="all"===this.exp||e.exp===this.exp;return t&&i&&r}))}filterLiked(e){this.liked=!this.liked,!0===this.liked?this.filteredSubmissions=this.likedCandidates:this.filteredSubmissions=this.submissions,this.gpa=0,this.year=0,this.exp="all"}
//!!!!!!!
addLiked(e,t){t.liked=!0,console.log(t),this.likedCandidates=[...this.likedCandidates,t]}removeLiked(e,t){t.liked=!1,console.log(t),this.likedCandidates=this.likedCandidates.filter((e=>e!==t))}handleXPChange(e,t){this.exp=t,this.filterSubmissions()}handleGPAChange(e,t){this.gpa=t,this.filterSubmissions()}handleYearChange(e,t){this.year=t,this.filterSubmissions()}handleFilePreview(e,t){this.filePreview=!this.filePreview}async updateFile(e,t){try{const e=await fetch(t.filePath);if(!e.ok)throw new Error("Network response was not ok.");this.fileContent=await e.text(),console.log(this.fileContent)}catch(e){console.error("Error fetching file:",e),this.fileContent="Error loading file content."}}async togglePopup(e,t){this.filePreview||(this.fileUrl=t.filePath,this.filePreview||await this.updateFile(e,t)),this.filePreview=!this.filePreview,this.requestUpdate()}downloadFile(){const e=document.createElement("a");e.href=this.fileUrl,e.download=this.fileUrl.split("/").pop(),document.body.appendChild(e),e.click(),document.body.removeChild(e)}}customElements.define("applicants-page",r);export{r as ApplicantsPage};
