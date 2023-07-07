// document.getElementById('resumeForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
  
//     var educationElements = document.querySelectorAll('#educationContainer .entry');
//     var education = [];
//     for (var i = 0; i < educationElements.length; i++) {
//       var institute = educationElements[i].querySelector('.institute').value;
//       var course = educationElements[i].querySelector('.course').value;
//       var percentage = educationElements[i].querySelector('.percentage').value;
//       education.push({ institute: institute, course: course, percentage: percentage });
//     }
  
//     var experienceElements = document.querySelectorAll('#experienceContainer .entry');
//     var experience = [];
//     for (var i = 0; i < experienceElements.length; i++) {
//       var organization = experienceElements[i].querySelector('.organization').value;
//       var position = experienceElements[i].querySelector('.position').value;
//       experience.push({ organization: organization, position: position });
//     }
  
//     // Generate resume content
//     var resumeContent = `
//       <h2>${name}</h2>
//       <p>Email: ${email}</p>
//       <p>Phone: ${phone}</p>
//       <h3>Education</h3>
//       ${generateEducationList(education)}
//       <h3>Experience</h3>
//       ${generateExperienceList(experience)}
//     `;
  
//     // Display generated resume
//     document.getElementById('output').innerHTML = resumeContent;
//   });
  
//   // Helper function to generate HTML list from an array
//   function generateList(items) {
//     var listItems = items.map(function(item) {
//       return `<li>${item}</li>`;
//     });
//     return `<ul>${listItems.join('')}</ul>`;
//   }
  
//   function generateEducationList(education) {
//     var educationItems = education.map(function(edu) {
//       return `<li>${edu.institute}, ${edu.course}, ${edu.percentage}</li>`;
//     });
//     return `<ul>${educationItems.join('')}</ul>`;
//   }
  
//   function generateExperienceList(experience) {
//     var experienceItems = experience.map(function(exp) {
//       return `<li>${exp.organization}, ${exp.position}</li>`;
//     });
//     return `<ul>${experienceItems.join('')}</ul>`;
//   }
  


// Add event listener for adding education entry
document.getElementById('addEducationButton').addEventListener('click', function(event) {
    var educationContainer = document.getElementById('educationContainer');
    var entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
      <label for="institute">Institute Name</label>
      <input type="text" class="institute" placeholder="Enter institute name" required>
  
      <label for="course">Course</label>
      <input type="text" class="course" placeholder="Enter course name" required>
  
      <label for="percentage">Percentage / CGPA</label>
      <input type="text" class="percentage" placeholder="Enter percentage or CGPA" required>
  
      <button class="remove-button" type="button">Remove</button>
    `;
    educationContainer.appendChild(entry);
  
    // Add event listener for removing education entry
    var removeButton = entry.querySelector('.remove-button');
    removeButton.addEventListener('click', function() {
      educationContainer.removeChild(entry);
    });
  });
  
  // Add event listener for adding experience entry
  document.getElementById('addExperienceButton').addEventListener('click', function(event) {
    var experienceContainer = document.getElementById('experienceContainer');
    var entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
      <label for="organization">Organization Name</label>
      <input type="text" class="organization" placeholder="Enter organization name" required>
  
      <label for="position">Position</label>
      <input type="text" class="position" placeholder="Enter your position" required>
  
      <button class="remove-button" type="button">Remove</button>
    `;
    experienceContainer.appendChild(entry);
  
    // Add event listener for removing experience entry
    var removeButton = entry.querySelector('.remove-button');
    removeButton.addEventListener('click', function() {
      experienceContainer.removeChild(entry);
    });
  });
  
  document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    var educationElements = document.querySelectorAll('#educationContainer .entry');
    var education = [];
    for (var i = 0; i < educationElements.length; i++) {
      var institute = educationElements[i].querySelector('.institute').value;
      var course = educationElements[i].querySelector('.course').value;
      var percentage = educationElements[i].querySelector('.percentage').value;
      education.push({ institute: institute, course: course, percentage: percentage });
    }
  
    var experienceElements = document.querySelectorAll('#experienceContainer .entry');
    var experience = [];
    for (var i = 0; i < experienceElements.length; i++) {
      var organization = experienceElements[i].querySelector('.organization').value;
      var position = experienceElements[i].querySelector('.position').value;
      experience.push({ organization: organization, position: position });
    }
  
    // Generate resume content
    var resumeContent = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h3>Education</h3>
      ${generateEducationList(education)}
      <h3>Experience</h3>
      ${generateExperienceList(experience)}
    `;
  
    // Display generated resume
    document.getElementById('output').innerHTML = resumeContent;
  });
  
  // Helper function to generate HTML list from an array
  function generateList(items) {
    var listItems = items.map(function(item) {
      return `<li>${item}</li>`;
    });
    return `<ul>${listItems.join('')}</ul>`;
  }
  
  function generateEducationList(education) {
    var educationItems = education.map(function(edu) {
      return `<li> <h3>${edu.institute}</h3>
                   <p> ${edu.course}</p>
                   <p> Percentage / CGPA : ${edu.percentage} </p> 
              </li>`;
    });
    return `<ul>${educationItems.join('')}</ul>`;
  }
  
  function generateExperienceList(experience) {
    var experienceItems = experience.map(function(exp) {
      return `<li> <h3>${exp.organization} </h3>
                   <p> As a ${exp.position} <p> 
             </li>`;
    });
    return `<ul>${experienceItems.join('')}</ul>`;
  }
  