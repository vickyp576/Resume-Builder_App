// Add event listener for adding education entry
document.getElementById('addEducationButton').addEventListener('click', function(event) {
    let educationContainer = document.getElementById('educationContainer');
    let entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
      <label for="institute">Institute Name :</label>
      <input type="text" class="institute" placeholder="Enter institute name" required>
  
      <label for="course">Course :</label>
      <input type="text" class="course" placeholder="Enter course name" required>
  
      <label for="percentage">Percentage / CGPA :</label>
      <input type="text" class="percentage" placeholder="Enter percentage or CGPA" required>
  
      <button class="remove-button" type="button">Remove</button>
    `;
    educationContainer.appendChild(entry);
  
    // Add event listener for removing education entry
    let removeButton = entry.querySelector('.remove-button');
    removeButton.addEventListener('click', function() {
      educationContainer.removeChild(entry);
    });
  });
  
  // Add event listener for adding experience entry
  document.getElementById('addExperienceButton').addEventListener('click', function(event) {
    let experienceContainer = document.getElementById('experienceContainer');
    let entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
      <label for="organization">Organization Name :</label>
      <input type="text" class="organization" placeholder="Enter organization name" required>
  
      <label for="position">Position :</label>
      <input type="text" class="position" placeholder="Enter your position" required>
  
      <button class="remove-button" type="button">Remove</button>
    `;
    experienceContainer.appendChild(entry);
  
    // Add event listener for removing experience entry
    let removeButton = entry.querySelector('.remove-button');
    removeButton.addEventListener('click', function() {
      experienceContainer.removeChild(entry);
    });
  });
  
  document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
  
    let educationElements = document.querySelectorAll('#educationContainer .entry');
    let education = [];
    for (let i = 0; i < educationElements.length; i++) {
      let institute = educationElements[i].querySelector('.institute').value;
      let course = educationElements[i].querySelector('.course').value;
      let percentage = educationElements[i].querySelector('.percentage').value;
      education.push({ institute: institute, course: course, percentage: percentage });
    }
  
    let experienceElements = document.querySelectorAll('#experienceContainer .entry');
    let experience = [];
    for (let i = 0; i < experienceElements.length; i++) {
      let organization = experienceElements[i].querySelector('.organization').value;
      let position = experienceElements[i].querySelector('.position').value;
      experience.push({ organization: organization, position: position });
    }
  
    // Generate resume content
    let resumeContent = `
      <h1>${name}</h1>
      <p><span> Email: </span> ${email} </p>
      <p> <span>Phone: </span> ${phone}</p>
      <hr><h3>Education</h3>
      ${generateEducationList(education)}
      <hr><h3>Experience</h3>
      ${generateExperienceList(experience)}
    `;
  
    // Display generated resume
    document.getElementById('output').innerHTML = resumeContent;

    // clear input data after generate resume
     name = document.getElementById('name').value="";
     email = document.getElementById('email').value="";
     phone = document.getElementById('phone').value="";
  
  });
  
  // Helper function to generate HTML list from an array
  function generateList(items) {
    let listItems = items.map(function(item) {
      return `<li>${item}</li>`;
    });
    return `<ul>${listItems.join('')}</ul>`;
  }
  
  function generateEducationList(education) {
    let educationItems = education.map(function(edu) {
      return `<li> <h4>${edu.institute}</h4>
                   <p> ${edu.course}</p>
                   <p> Percentage / CGPA : ${edu.percentage} </p> 
              </li>`;
    });
    return `<ul>${educationItems.join('')}</ul>`;
  }
  
  function generateExperienceList(experience) {
    let experienceItems = experience.map(function(exp) {
      return `<li> <h4>${exp.organization} </h4>
                   <p> As a ${exp.position} <p> 
             </li>`;
    });
    return `<ul>${experienceItems.join('')}</ul>`;
  }
  