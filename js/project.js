const url = "https://606db98c603ded0017504764.mockapi.io/mechack/v1/projects"

function getProjects() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let firstCard = document.querySelector(".firstCard");
            firstCard.append(addProjectCard(data[-1]));
        });

}

const addProjectCard = (project) => {

    // create differents elements for card project
    let projectCardContent = document.createElement('div');
    let projectCardImages = document.createElement('div');
    let projectImage = document.createElement('img');
    let projectCardDetails = document.createElement('div');
    let projectCardDetailsItem = document.createElement('div');
    let projectName = document.createElement('p');
    let projectNameSpan = document.createElement('span');
    let projectClient = document.createElement('p');
    let projectClientSpan = document.createElement('span');
    let projectTypeApplication = document.createElement('p');
    let projectTypeApplicationSpan = document.createElement('span');
    let projectTechUsed = document.createElement('div');
    let frontendTechIcon = document.createElement('span');
    let backEndTechIcon = document.createElement('span');

    // add style for Element

    projectCardContent.classList.add("project__card__content");
    projectCardImages.classList.add("project__card__images");
    projectImage.classList.add("project__img");
    projectCardDetails.classList.add("project__card__details");
    projectCardDetailsItem.classList.add('project__card__details__item');
    projectNameSpan.classList.add('project__name');
    projectClientSpan.classList.add('project__client');
    projectTypeApplicationSpan.classList.add('project__type');
    projectTechUsed.classList.add('project__tech-used');
    frontendTechIcon.classList.add('iconify');
    backEndTechIcon.classList.add('iconify');

    // nested element to build cardProject

    projectCardContent.append(projectCardImages, projectCardDetails);
    projectCardImages.append(projectImage);
    projectCardDetails.append(projectCardDetailsItem, projectTechUsed);
    projectCardDetailsItem.append(projectName);
    projectName.append(projectNameSpan);
    projectCardDetailsItem.append(projectClient);
    projectClient.append(projectClientSpan);
    projectCardDetailsItem.append(projectTypeApplication);
    projectTypeApplication.append(projectTypeApplicationSpan);
    projectTechUsed.append(frontendTechIcon, backEndTechIcon);


    // set data

    projectImage.src = project.image;
    projectName.innerText = "Nom: ";
    projectNameSpan.innerText = project.name;
    projectClient.innerText = "Client: ";
    projectClientSpan.innerText = project.client;
    projectTypeApplication.innerText = "Type d'application: ";
    projectTypeApplicationSpan.innerText = project.category;
    projectTechUsed.innerText = "Technologies utilisées: ";
    frontendTechIcon.setAttribute("data-icon", project.technologies[0]);
    backEndTechIcon.setAttribute("data-icon", project.technologies[1]);

    return projectCardContent;




}

getProjects();