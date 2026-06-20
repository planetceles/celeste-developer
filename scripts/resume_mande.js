const resumeUrl = "https://planetceles.github.io/resume/data/resume.json";
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
        let resumeCall = document.createElement("div");
        let skillCard = document.createElement("div");

        let resumeName = document.createElement("h1");
        let resumeEmail = document.createElement("p");
        let resumePhone = document.createElement("p");
        
        // I will add a whatsapp icon to the phone number
        let resumePhoneWhatsapp = document.createElement("img");

        let resumeLinkedIn = document.createElement("p");
        let resumeAddress = document.createElement("p");
        let resumeTitle = document.createElement("p");
        let resumeSummary = document.createElement("p");
        let resumeSkillTitle = document.createElement("p");
        let resumeSkillPartOne = document.createElement("ul");
        let resumeSkillPartTwo = document.createElement("ul");
        let resumeExperienceTitle = document.createElement("p");
        let resumeExperience = document.createElement("div");
        let resumeTitles = document.createElement("div");
        // let resumeResponsibilities = document.createElement("ul");
        let resumeEducationTitle = document.createElement("p");
        let resumeEducation = document.createElement("ul");
        // let period = document.createElement("p");

        
        resumePaper.classList.add("resume-card");
        resumeCall.classList.add("email-phone");
        resumeName.classList.add("title-center");
        resumeEmail.classList.add("title-center");
        resumePhone.classList.add("title-center");
        resumeLinkedIn.classList.add("title-center");
        resumeAddress.classList.add("title-center", "address");
        resumeTitle.classList.add("title-resume");
        resumeSummary.classList.add("summary");
        resumeSkillTitle.classList.add("skill-title");
        skillCard.classList.add("skill-card");
        resumeExperienceTitle.classList.add("experience-title");
        resumeEducationTitle.classList.add("education-title");
        resumeExperience.classList.add("experience");
        resumeEducation.classList.add("education");

        details.skillPartOne.forEach(skill => {
            let skillList = document.createElement("li");
            skillList.textContent = skill;
            resumeSkillPartOne.appendChild(skillList);
        });
        details.skillPartTwo.forEach(skill => {
            let skillList = document.createElement("li");
            skillList.textContent = skill;
            resumeSkillPartTwo.appendChild(skillList);
        });
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
            experienceTitle.textContent = `${expert.position} | ${expert.company}`;
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
            educationInstitution.textContent = `${educated.institution}`;
            educationPeriod.textContent = `${educated.duration}`;

            institutionPeriod.appendChild(educationTitle);
            institutionPeriod.appendChild(educationPeriod);

            educationBlock.appendChild(institutionPeriod);
            // educationBlock.appendChild(institutionPeriod);
            educationBlock.appendChild(educationInstitution);
            educationBlock.appendChild(educationSkills);
            resumeEducation.appendChild(educationBlock);
        });

        resumeName.textContent = `${details.name}`;
        resumeEmail.innerHTML = `<a href="mailto:${details.email}" target="_blank" rel="noopener noreferrer">${details.email}</a>`;
        resumePhone.innerHTML = `<a href="tel:${details.phone}" target="_blank" rel="noopener noreferrer">${details.phone}</a>`;
        resumeLinkedIn.innerHTML = `<a href="${details.linkedIn}" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/celestin-mande-mande1</a>`;
        resumeAddress.textContent = `${details.address}`;
        resumeTitle.textContent = `${details.title}`;
        resumeSummary.textContent = `${details.summary}`;
        resumeSkillTitle.textContent = `${details.skill}`;
        resumeExperienceTitle.textContent = `${details.experienceTitle}`;
        resumeEducationTitle.textContent = `${details.educationTitle}`;
        // period.textContent = details.duration;

        resumeCall.appendChild(resumeEmail);
        resumeCall.appendChild(resumePhone);

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

        resumeData.appendChild(resumePaper);
    });
}
