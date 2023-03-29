const projectElem = document.getElementById("projects");

const projectFactory = (title, year, description, links) => {
    return {
        title,
        year,
        description,
        links}
}

const projects = [
    projectFactory("This website", "2023", "Rather self-explanatory, this portfolio website is also technically part of the portfolio.", ['<a href="#">Portfolio</a>']),
    projectFactory("Game Picker", "2023", "This is a simple project that I decided to do to practice JavaScript syntax. It has most of the video games from my library, and it generates random messages picking the genre, the game in that genre, and the play time for you every time you run it.", '<a href="https://github.com/TrueAxeon/Game-Picker" target="_blank">Github</a>'),
    projectFactory("Tangle-free exploration with a tethered mobile robot", "2020", "This was my Master's thesis topic, as well as a published peer-reviewed journal paper. The software used Python to implement the algorithms, interfaced with ROS framework on an on-board Linux computer on the robot.", '<a href="https://bitbucket.org/wvufarolab/workspace/projects/TET" target="_blank">Bitbucket</a>, <a href="https://www.mdpi.com/2072-4292/12/23/3858" target="_blank">MDPI</a>'),
    projectFactory("Custom microgravity 3D printer control software design", "2019", "This was when I was part of the Microgravity Research Team at WVU. Our team was developing a custom 3D foam printer for use in zero-G environments, and I was tasked with developing the control system for it. The implementation used Python for the main script, interfacing it with both an Arduino microcontroller to gather data from the sensors, as well as automating the printer itself using the data from said sensors.", "No public links, unfortunately.")
];

let arrow, elem, title, year, description, links, arrowDiv, projectDiv;
for (let project of projects) {
    arrowDiv = document.createElement("div");
    arrowDiv.className = "arrow";
    projectDiv = document.createElement("div");
    projectDiv.className = "project";

    title = document.createElement("h3");
    title.innerHTML = project.title;
    year = document.createElement("p");
    year.innerHTML = `<strong>Year:</strong> ${project.year}`;
    description = document.createElement("p");
    description.innerHTML = `<strong>Description:</strong> ${project.description}`;
    links = document.createElement("p");
    links.innerHTML = `<strong>Links:</strong> ${project.links}`;

    arrow = document.createElement("p");
    arrow.innerHTML = "&#x25BC";
    arrowDiv.appendChild(arrow);

    projectDiv.appendChild(title);
    projectDiv.appendChild(year);
    projectDiv.appendChild(description);
    projectDiv.appendChild(links);

    elem = document.createElement("div");
    elem.className = "container";
    elem.appendChild(arrowDiv);
    elem.appendChild(projectDiv);

    projectElem.appendChild(elem);

    arrow.addEventListener("click", toggleExpand);
}

function toggleExpand(event) {
    let container = event.target.parentElement.parentElement;
    if (container.style.maxHeight !== "20rem") {
        container.style.maxHeight = "20rem";
        event.target.style.transform = "rotate(0)";
    }
    else {
        container.style.maxHeight = "3.5rem";
        event.target.style.transform = "rotate(-90deg)";
    }
}