const projects = [
    {
        title: "Title1",
        description: "Ut eget facilisis leo, vel finibus risus. Fusce in fringilla \
                enim. In tempor ut nulla eu posuere. Aliquam non ligula arcu. \
                Maecenas efficitur nisl magna, non maximus odio malesuada at. In \
                hac habitasse platea dictumst. Cras at maximus orci.",
        tags: [
            "Tag1",
            "Tag2",
            "Tag3"
        ],
        difficulty: 4,
        startMonth: 1,
        startYear: 2024,
        isCompleted: false
    },
    {
        title: "Title2",
        description: "Description2",
        tags: [
            "Tag4",
            "Tag5",
            "Tag6"
        ],
        difficulty: 1,
        startMonth: 2,
        startYear: 2024,
        isCompleted: true
    },
    {
        title: "Title3",
        description: "Aliquam non ligula arcu. \
                Maecenas efficitur nisl magna, non maximus odio malesuada at. In \
                hac habitasse platea dictumst. Cras at maximus orci.",
        tags: [
            "Tag7",
            "Tag8",
            "Tag9"
        ],
        difficulty: 4,
        startMonth: 3,
        startYear: 2024,
        isCompleted: false
    },
    {
        title: "Title4",
        description: "Description4",
        tags: [
            "Tag10",
            "Tag11",
            "Tag12"
        ],
        difficulty: 1,
        startMonth: 4,
        startYear: 2024,
        isCompleted: false
    },
    {
        title: "Title5",
        description: "Description5",
        tags: [
            "Tag13",
            "Tag14",
            "Tag15"
        ],
        difficulty: 2,
        startMonth: 5,
        startYear: 2024,
        isCompleted: true
    },
    {
        title: "Title6",
        description: "In tempor ut nulla eu posuere. Aliquam non ligula arcu. \
                Maecenas efficitur nisl magna, non maximus odio malesuada at. In \
                hac habitasse platea dictumst. Cras at maximus orci.",
        tags: [
            "Tag16",
            "Tag17",
            "Tag18"
        ],
        difficulty: 5,
        startMonth: 6,
        startYear: 2024,
        isCompleted: true
    },
];

const sortParameters = [ 
    "Date",
    "Title",
    "Difficulty"
]



window.onload = function() {
    loadSort();
    loadFilter();

    var projectsToLoad = sortProjectsByStart();
    loadProjects(projectsToLoad);
}

function loadProjects(projectsToLoad) {
    var projectsElement = document.getElementById("projects");
    
    for (var i = 0; i < projectsToLoad.length; i++) {
        var projectElement = createProjectElement(projectsToLoad[i]);
        projectsElement.append(projectElement);
    }
}

function createProjectElement(project) {
    var projectElement = document.createElement("li");
    projectElement.classList.add("project");

    var projectContentElement = document.createElement("div");
    projectContentElement.classList.add("project-content");

    var projectDifficultyElement = document.createElement("div");
    projectDifficultyElement.classList.add("project-difficulty");
    projectDifficultyElement.append("Difficulty: " + project.difficulty + "/5");

    var projectTitleElement = document.createElement("div");
    projectTitleElement.classList.add("project-title");
    projectTitleElement.append(project.title);

    var projectDescriptionElement = document.createElement("div");
    projectDescriptionElement.classList.add("project-description");
    projectDescriptionElement.append(project.description);

    var projectStartElement = document.createElement("div");
    projectStartElement.classList.add("project-start");
    projectStartElement.append("Started " + getMonthByNumber(project.startMonth) + ", " + project.startYear); 

    var projectStatusElement = document.createElement("div");
    projectStatusElement.classList.add("project-status");
    if (project.isCompleted) {
        projectStatusElement.append("Completed"); 
    } else {
        projectStatusElement.append("In Progress");
    }

    var projectTagsElement = document.createElement("ul");
    projectTagsElement.classList.add("project-tags");

    for (var i = 0; i < project.tags.length; i++) {
        var projectTagElement = document.createElement("li");
        projectTagElement.classList.add("project-tag");
        projectTagElement.append(project.tags[i]);

        // Add tag to set of tags for sorting

        projectTagsElement.append(projectTagElement);
    }

    projectContentElement.append(projectDifficultyElement);
    projectContentElement.append(projectTitleElement);
    projectContentElement.append(projectDescriptionElement);
    projectContentElement.append(projectStartElement);
    projectContentElement.append(projectStatusElement);
    projectContentElement.append(projectTagsElement);

    projectElement.append(projectContentElement);

    return projectElement;
}

function unloadProjects() {
    var projectsElement = document.getElementById("projects");
    while (projectsElement.firstChild) {
        projectsElement.removeChild(projectsElement.firstChild);
    }
}

// Sort Members



function loadSort() {
    var sortLabelElement = document.createElement("label");
    sortLabelElement.setAttribute("for", "sortParameters");
    sortLabelElement.append("Sort");

    var sortSelectElement = document.createElement("select");
    sortSelectElement.setAttribute("id", "sortParameters");

    for (var i = 0; i < sortParameters.length; i++) {
        var optionElement = document.createElement("option");
        optionElement.append(sortParameters[i]);
        sortSelectElement.append(optionElement);
    }

    var sortElement = document.getElementById("sort");
    sortElement.append(sortLabelElement);
    sortElement.append(sortSelectElement);

    sortSelectElement.onchange = function() {

        var selected = sortSelectElement.value;
        if (!sortParameters.includes(selected)) {
            return;
        }

        unloadProjects();
        var projectsToLoad = [];
        switch (selected) {
            case "Date":
                projectsToLoad = sortProjectsByStart();
                break;
            case "Title":
                projectsToLoad = sortProjectsByTitle();
                break;
            case "Difficulty":
                projectsToLoad = sortProjectsByDifficulty();
                break;
            default:
                break;
        }

        loadProjects(projectsToLoad);
    };
}

function sortProjectsByStart() {
    var projectsCopy = [...projects];
    projectsCopy.sort((a, b) => {
        if (a.startMonth > b.startMonth) {
            return 1;
        }           
        
        if (a.startMonth < b.startMonth) {
            return -1;
        }

        if (a.startYear > b.startYear) {
            return -1;
        }

        if (a.startYear < b.startYear) {
            return 1;
        }
    })

    return projectsCopy;
}

function sortProjectsByTitle() {
    var projectsCopy = [...projects];
    projectsCopy.sort((a, b) => a.title.localeCompare(b.title))
    return projectsCopy;
}

function sortProjectsByDifficulty() {
    var projectsCopy = [...projects];
    projectsCopy.sort((a, b) => b.difficulty - a.difficulty)
    return projectsCopy;
}

// Filter Members

const tags = getUniqueTags();

function loadFilter() {

}

function getUniqueTags() {
    var result = [];
    for (var i = 0; i < projects.length; i++) {
        for (var j = 0; j < projects[i].tags.length; j++) {
            var tag = projects[i].tags[j];
            if (!result.includes(tag)) {
                result.push(tag);
            }
        }
    }
    return result;
}

// Utility Members

function getMonthByNumber(number) {
    switch (number) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
        default:
            break;
    }
}