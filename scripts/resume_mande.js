// const resumeUrl = "https://planetceles.github.io/resume/data/resume.json";
const resumeUrl = "https://planetceles.github.io/celeste-developer/data/resume.json";
const resumeData = document.querySelector("#resume");

async function getResumeData() {
    try {
        const response = await fetch(resumeUrl);
        const data = await response.json();

        displayResume(data.resume);
    }
    catch (error) {
        console.error("Resume fetch error:", error);
    }
}
getResumeData();

const displayResume = (resume) => {
    resume.forEach((details) => {
        let resumePaper = document.createElement("section");
        resumePaper.classList.add("resume-card");


        let resumeCall = document.createElement("div");
        resumeCall.classList.add("email-phone");

        let skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");

        let resumeName = document.createElement("h1");
        resumeName.textContent = `${details.name}`;
        resumeName.classList.add("title-center");

        let resumeEmail = document.createElement("p");
        resumeEmail.innerHTML = `<a href="mailto:${details.email}" target="_blank" rel="noopener noreferrer">${details.email}</a>`;
        resumeEmail.classList.add("title-center");

        let resumePhone = document.createElement("p");
        resumePhone.innerHTML = `<a href="tel:${details.phone}" target="_blank" rel="noopener noreferrer">${details.phone}</a>`;
        resumePhone.classList.add("title-center");

        // I will add a whatsapp icon to the phone number
        let resumePhoneWhatsapp = document.createElement("img");
        resumePhoneWhatsapp.setAttribute("src", details.whatsappIcon);
        resumePhoneWhatsapp.setAttribute("alt", "WhatsApp Me");
        resumePhoneWhatsapp.setAttribute("loading", "lazy");
        resumePhoneWhatsapp.style.width = "20px";
        resumePhoneWhatsapp.style.height = "auto";
        // resumePhoneWhatsapp.style.display = "block";

        // I will add the whatsapp link
        let whatsappLink = document.createElement("a");
        whatsappLink.setAttribute("href", details.whatsapp);
        whatsappLink.setAttribute("target", "_blank");
        whatsappLink.setAttribute("rel", "noopener noreferrer");
        // whatsappLink.innerHTML = `<a href="${details.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a>`;

        // I will add the link to the whatsapp icon
        whatsappLink.appendChild(resumePhoneWhatsapp);

        // Here I will add my picture
        // let myPortrait = document.createElement("img");
        // myPortrait.setAttribute("src", details.myPhoto);
        // myPortrait.setAttribute("alt", `${details.name}`);
        // myPortrait.setAttribute("loading", "lazy");
        // myPortrait.style.width = "200px";
        // myPortrait.style.height = "auto";
        // myPortrait.style.display = "block";

        let resumeLinkedIn = document.createElement("p");
        resumeLinkedIn.innerHTML = `<a href="${details.linkedIn}" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/celestin-mande-mande1</a>`;
        resumeLinkedIn.classList.add("title-center");

        let resumeAddress = document.createElement("p");
        resumeAddress.classList.add("title-center", "address");
        resumeAddress.textContent = `${details.address}`;


        // let resumeTitles = document.createElement("div");
        let resumeTitle = document.createElement("p");
        resumeTitle.textContent = `${details.title}`;
        resumeTitle.classList.add("title-resume");

        let resumeSummary = document.createElement("p");
        resumeSummary.textContent = `${details.summary}`;
        resumeSummary.classList.add("summary");

        let resumeSkillTitle = document.createElement("p");
        resumeSkillTitle.textContent = `${details.skill}`;
        resumeSkillTitle.classList.add("skill-title");

        let resumeSkillPartOne = document.createElement("ul");
        details.skillPartOne.forEach(skill => {
            let skillList = document.createElement("li");
            skillList.textContent = skill;
            resumeSkillPartOne.appendChild(skillList);
        });

        let resumeSkillPartTwo = document.createElement("ul");
        details.skillPartTwo.forEach(skill => {
            let skillList = document.createElement("li");
            skillList.textContent = skill;
            resumeSkillPartTwo.appendChild(skillList);
        });

        let resumeExperienceTitle = document.createElement("p");
        resumeExperienceTitle.textContent = `${details.experienceTitle}`;
        resumeExperienceTitle.classList.add("experience-title");

        let resumeExperience = document.createElement("div");
        details.experience.forEach(expert => {
            let experienceBlock = document.createElement("div");
            let experienceTitle = document.createElement("p");
            let allPeriods = document.createElement("p");
            let responsibilitiesList = document.createElement("ul");

            let positionDuration = document.createElement("div");

            experienceBlock.classList.add("experience-block");
            // experienceTitle.classList.add("all-experience-title");
            positionDuration.classList.add("position-duration");
            allPeriods.classList.add("period");

            expert.responsibilities.forEach(responsibility => {
                let responsibilityList = document.createElement("li");
                responsibilityList.textContent = responsibility;
                responsibilitiesList.appendChild(responsibilityList);

                responsibilitiesList.classList.add("responsibility-list");
            });
            // experienceTitle.textContent = `${expert.position} | ${expert.company} | ${expert.duration}`;
            experienceTitle.innerHTML = `${expert.position} | <a href="${expert.companyWebsite}" target="_blank" rel="noopener noreferrer">${expert.company}</a>`;
            allPeriods.textContent = `${expert.duration}`;
            // period.textContent = expert.duration;
            positionDuration.appendChild(experienceTitle);
            positionDuration.appendChild(allPeriods);
            experienceBlock.appendChild(positionDuration);
            // experienceBlock.appendChild(experienceTitle);
            // experienceBlock.appendChild(allPeriods);
            experienceBlock.appendChild(responsibilitiesList);
            resumeExperience.appendChild(experienceBlock);
            // resumeTitles.appendChild(experienceTitle);
        });
        resumeExperience.classList.add("experience");

        // let resumeResponsibilities = document.createElement("ul");
        let resumeEducationTitle = document.createElement("p");
        resumeEducationTitle.textContent = `${details.educationTitle}`;
        resumeEducationTitle.classList.add("education-title");

        let resumeEducation = document.createElement("ul");
        details.education.forEach(educated => {
            let educationBlock = document.createElement("li");
            let educationTitle = document.createElement("p");
            let educationInstitution = document.createElement("p");
            let educationSkills = document.createElement("p");
            let educationPeriod = document.createElement("p");

            let institutionPeriod = document.createElement("div");

            institutionPeriod.classList.add("education-period");
            educationPeriod.classList.add("period");
            educationInstitution.classList.add("institution");
            educationBlock.classList.add("education-block");
            educationSkills.classList.add("education-skills");

            // educated.skills.forEach(skill => {
            //     let eduSkillList = document.createElement("span");
            //     eduSkillList.textContent = skill;
            //     educationSkills.appendChild(eduSkillList);
            // });
            educationSkills.textContent = `${educated.skills.join(", ")}`;

            // educated.institution.forEach(inst => {
            //     let institutionList = document.createElement("span");
            //     institutionList.textContent = inst;
            //     educationInstitution.appendChild(institutionList);
            // });
            // educationList.textContent = educated;
            educationTitle.textContent = `${educated.degree}`;
            educationInstitution.innerHTML = `<a href="${educated.instWebsite}" target="_blank" rel="noopener noreferrer">${educated.institution}</a>`;
            educationPeriod.textContent = `${educated.duration}`;

            institutionPeriod.appendChild(educationTitle);
            institutionPeriod.appendChild(educationPeriod);

            educationBlock.appendChild(institutionPeriod);
            // educationBlock.appendChild(institutionPeriod);
            educationBlock.appendChild(educationInstitution);
            educationBlock.appendChild(educationSkills);
            resumeEducation.appendChild(educationBlock);
        });
        resumeEducation.classList.add("education");

        
        
        
        


     


        resumeCall.appendChild(resumeEmail);
        resumeCall.appendChild(resumePhone);
        resumeCall.appendChild(whatsappLink);
        // resumeCall.appendChild(myPortrait);

        skillCard.appendChild(resumeSkillPartOne);
        skillCard.appendChild(resumeSkillPartTwo);

        resumePaper.appendChild(resumeName);
        resumePaper.appendChild(resumeCall);
        // resumePaper.appendChild(resumeEmail);
        // resumePaper.appendChild(resumePhone);
        resumePaper.appendChild(resumeLinkedIn);
        resumePaper.appendChild(resumeAddress);
        resumePaper.appendChild(resumeTitle);
        resumePaper.appendChild(resumeSummary);
        resumePaper.appendChild(resumeSkillTitle);
        resumePaper.appendChild(skillCard);
        // resumePaper.appendChild(resumeSkillPartOne);
        // resumePaper.appendChild(resumeSkillPartTwo);
        resumePaper.appendChild(resumeExperienceTitle);
        // resumePaper.appendChild(resumeTitles);
        resumePaper.appendChild(resumeExperience);
        // resumePaper.appendChild(resumeResponsibilities);
        resumePaper.appendChild(resumeEducationTitle);
        resumePaper.appendChild(resumeEducation);

        // if (resumeData) {
        //     resumeData.appendChild(resumePaper);
        // }
        resumeData.appendChild(resumePaper);
    });
}
