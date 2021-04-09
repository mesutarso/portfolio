const url = "https://606db98c603ded0017504764.mockapi.io/mechack/v1/projects"

function getProjects() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data[data.length - 1].name);
            const firstCard = document.querySelector(".first-card");
            const secondCard = document.querySelector(".second-card");
            const thirdCard = document.querySelector(".third-card");
            addProjectCard(data[data.length - 1], firstCard);
            addProjectCard(data[data.length - 1], secondCard);
            addProjectCard(data[data.length - 1], thirdCard);

        });




}

const addProjectCard = (project, classContent) => {

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
    // const textName = document.createTextNode("Nom: ");
    // const textClient = document.createTextNode("Client: ");
    // const textCategory = document.createTextNode("Type d'application: ");
    // const textTechUsed = document.createTextNode("Technologies utilisées: ");
    // const textName = document.createTextNode("Nom: ");

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

    // set data

    projectImage.setAttribute('src', project.image);
    projectName.innerText = "Nom: ";
    projectNameSpan.innerText = project.name;
    projectClient.innerText = "Client: ";
    projectClientSpan.innerText = project.client;
    projectTypeApplication.innerText = "Type d'application: ";
    projectTypeApplicationSpan.innerText = project.category;
    projectTechUsed.innerText = "Technologies utilisées: ";
    frontendTechIcon.setAttribute("data-icon", project.tehnologies[0]);
    backEndTechIcon.setAttribute("data-icon", project.tehnologies[1]);


    // nested element to build cardProject
    classContent.append(projectCardContent)
    projectCardContent.append(projectCardImages, projectCardDetails);
    projectCardImages.appendChild(projectImage);
    projectCardDetails.append(projectCardDetailsItem, projectTechUsed);
    projectCardDetailsItem.appendChild(projectName);
    projectName.appendChild(projectNameSpan);
    projectCardDetailsItem.appendChild(projectClient);
    projectClient.appendChild(projectClientSpan);
    projectCardDetailsItem.appendChild(projectTypeApplication);
    projectTypeApplication.appendChild(projectTypeApplicationSpan);
    projectTechUsed.append(frontendTechIcon, backEndTechIcon);
    projectCardDetailsItem.appendChild(projectTechUsed);
    console.log(projectName);






}

getProjects();