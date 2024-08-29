const projects = [
    {
        title: "Title1",
        description: "Description1" 
    },
    {
        title: "Title2",
        description: "Description2" 
    },
    {
        title: "Title3",
        description: "Description3" 
    },
    {
        title: "Title4",
        description: "Description1" 
    },
    {
        title: "Title5",
        description: "Description2" 
    },
    {
        title: "Title6",
        description: "Description3" 
    },
];

window.onload = function() {
    loadProjects();

}

function loadProjects() {
    var projectsElement = document.getElementById("projects");
    
    for (var i = 0; i < projects.length; i++) {
        var projectElement = createProjectElement(projects[i]);
        projectsElement.append(projectElement);
    }
}

function createProjectElement(project) {
    var projectElement = document.createElement("li");
    projectElement.classList.add("project");

    var projectContentElement = document.createElement("div");
    projectContentElement.classList.add("project-content");

    var projectTitleElement = document.createElement("div");
    projectTitleElement.classList.add("project-title");
    projectTitleElement.append(project["title"]);

    var projectDescriptionElement = document.createElement("div");
    projectDescriptionElement.classList.add("project-description");
    projectDescriptionElement.append(project["description"]);

    projectContentElement.append(projectTitleElement);
    projectContentElement.append(projectDescriptionElement);

    projectElement.append(projectContentElement);
    return projectElement;
}
