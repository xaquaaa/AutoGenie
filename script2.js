function generateResume() {
    // Getting values from the input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const profileImageUrl = document.getElementById("profile-image").value;
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("work-experience").value;
    const skills = document.getElementById("skills").value;

    // Check if required fields are filled
    if (!name || !email || !phone) {
        alert("Please fill out your Name, Email, and Phone.");
        return;
    }

    // Display the generated resume in the resume div
    const resumeContainer = document.getElementById("resume");

    resumeContainer.innerHTML = ""; // Clear the existing content

    // Adding Profile Image
    if (profileImageUrl) {
        const profileImageElement = document.createElement("img");
        profileImageElement.src = profileImageUrl;
        profileImageElement.id = "profile-pic";
        resumeContainer.appendChild(profileImageElement);
    }

    // Adding Name
    const nameElement = document.createElement("h3");
    nameElement.textContent = name;
    resumeContainer.appendChild(nameElement);

    // Adding Contact Information (Email and Phone)
    const contactInfo = document.createElement("p");
    contactInfo.innerHTML = `<strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}`;
    resumeContainer.appendChild(contactInfo);

    resumeContainer.appendChild(document.createElement("hr")); // Horizontal line

    // Adding Education
    const educationHeader = document.createElement("h4");
    educationHeader.textContent = "Education";
    resumeContainer.appendChild(educationHeader);

    const educationElement = document.createElement("p");
    educationElement.innerHTML = education.replace(/\n/g, '<br>'); // Replacing line breaks with <br>
    resumeContainer.appendChild(educationElement);

    resumeContainer.appendChild(document.createElement("hr")); // Horizontal line

    // Adding Work Experience
    const workHeader = document.createElement("h4");
    workHeader.textContent = "Work Experience";
    resumeContainer.appendChild(workHeader);

    const workElement = document.createElement("p");
    workElement.innerHTML = workExperience.replace(/\n/g, '<br>'); // Replacing line breaks with <br>
    resumeContainer.appendChild(workElement);

    resumeContainer.appendChild(document.createElement("hr")); // Horizontal line

    // Adding Skills
    const skillsHeader = document.createElement("h4");
    skillsHeader.textContent = "Skills";
    resumeContainer.appendChild(skillsHeader);

    const skillsElement = document.createElement("p");
    skillsElement.innerHTML = skills.replace(/\n/g, '<br>'); // Replacing line breaks with <br>
    resumeContainer.appendChild(skillsElement);

    // Make the download button visible
    document.getElementById("downloadButton").style.display = "inline-block";
}

function downloadResume() {
    const resumeContent = document.getElementById("resume").innerHTML;

    // Create the complete HTML structure with CSS
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume</title>
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                    background-color: #f9f9f9;
                    margin: 20px;
                    padding: 20px;
                }
                #resume {
                    background-color: white;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    width: 100%;
                    max-width: 800px;
                    margin: 0 auto;
                }
                #resume h3 {
                    font-size: 28px;
                    color: #333;
                    margin-bottom: 5px;
                    font-weight: 700;
                    border-bottom: 2px solid #ccc;
                    padding-bottom: 10px;
                }
                #resume h4 {
                    font-size: 20px;
                    color: #333;
                    margin-top: 20px;
                    margin-bottom: 5px;
                    font-weight: 600;
                    text-transform: uppercase;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 5px;
                }
                #resume p {
                    font-size: 16px;
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 10px;
                }
                #resume p strong {
                    color: #333;
                }
                #resume hr {
                    border: 0;
                    border-top: 1px solid #ddd;
                    margin: 20px 0;
                }
                #profile-pic {
                    max-width: 150px;
                    border-radius: 50%;
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <div id="resume">
                ${resumeContent}
            </div>
        </body>
        </html>
    `;

    // Create a Blob object with the full HTML content
    const blob = new Blob([fullHTML], { type: 'text/html' });
    
    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.html";
    
    // Programmatically click the download link
    link.click();
}

