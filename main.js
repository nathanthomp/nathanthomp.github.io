const projects = [
    {
        title: "Title1",
        description: "Description1",
        tags: [
            { name: "tag1", value: "Tag1" },
            { name: "tag2", value: "Tag2" },
            { name: "tag3", value: "Tag3" }
        ]

    },
    {
        title: "Title2",
        description: "Description2",
        tags: [
            { name: "tag4", value: "Tag4" },
            { name: "tag5", value: "Tag5" },
            { name: "tag6", value: "Tag6" }
        ]
    },
    {
        title: "Title3",
        description: "Description3",
        tags: [
            { name: "tag7", value: "Tag7" },
            { name: "tag8", value: "Tag8" },
            { name: "tag9", value: "Tag9" }
        ]
    },
    {
        title: "Title4",
        description: "Description4",
        tags: [
            { name: "tag10", value: "Tag10" },
            { name: "tag11", value: "Tag11" },
            { name: "tag12", value: "Tag12" }
        ]
    },
    {
        title: "Title5",
        description: "Description5",
        tags: [
            { name: "tag13", value: "Tag13" },
            { name: "tag14", value: "Tag14" },
            { name: "tag15", value: "Tag15" }
        ]
    },
    {
        title: "Title6",
        description: "Description6",
        tags: [
            { name: "tag16", value: "Tag16" },
            { name: "tag17", value: "Tag17" },
            { name: "tag18", value: "Tag18" }
        ]
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

    var projectTagsElement = document.createElement("ul");
    projectTagsElement.classList.add("project-tags");

    for (var i = 0; i < project.tags.length; i++) {
        var projectTagElement = document.createElement("li");
        projectTagElement.classList.add("project-tag");
        projectTagElement.append(project.tags[i].value);

        // Add tag to set of tags for sorting

        projectTagsElement.append(projectTagElement);
    }

    projectElement.append(projectTagsElement);


    return projectElement;
}
