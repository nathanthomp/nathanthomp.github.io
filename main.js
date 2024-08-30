const projects = [
    {
        title: "Budget Calculator and Analyzer",
        description: "Utilizing  Spring Boot and JPA frameworks to create a web application with data \
        persistence for users, accounts, transactions, categories, as well as authentication.",
        tags: [
            "Java",
            "Spring Boot",
            "JPA"
        ],
        difficulty: 4,
        startMonth: 3,
        startYear: 2024,
        isCompleted: false
    },
    {
        title: "Nit Version Control",
        description: "This project consisted of creating a framework in Java for a custom version control \
        system using a directed acyclic graph to manage the changes and merges to the mock repository."
        ,
        tags: [
            "Java",
        ],
        difficulty: 2,
        startMonth: 5,
        startYear: 2023,
        isCompleted: true
    },
    // {
    //     title: "Title3",
    //     description: "Aliquam non ligula arcu. \
    //             Maecenas efficitur nisl magna, non maximus odio malesuada at. In \
    //             hac habitasse platea dictumst. Cras at maximus orci.",
    //     tags: [
    //         "C",
    //         "Tag8",
    //         "Tag9"
    //     ],
    //     difficulty: 4,
    //     startMonth: 1,
    //     startYear: 2024,
    //     isCompleted: false
    // },
    {
        title: "This Website!",
        description: "Creating this website was a great opportunity to demonstrate a skill that I have not\
        worked on in some time. Using HTML, CSS, and vanilla JavaScript I was able to display more information about \
        myself in the form of a portfilio website.",
        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        difficulty: 1,
        startMonth: 8,
        startYear: 2024,
        isCompleted: false
    },
    {
        title: "C Squared Programming Language",
        description: "Utilized lexical and syntactical analysis to create the front end of a \
        custom compiler in C#. Designed a recursive descent parser using a custom context-free \
        grammar for C code generation.",
        tags: [
            "C",
            "C#"
        ],
        difficulty: 4,
        startMonth: 1,
        startYear: 2024,
        isCompleted: false
    },
    // {
    //     title: "Title6",
    //     description: "In tempor ut nulla eu posuere. Aliquam non ligula arcu. \
    //             Maecenas efficitur nisl magna, non maximus odio malesuada at. In \
    //             hac habitasse platea dictumst. Cras at maximus orci.",
    //     tags: [
    //         "Tag16",
    //         "Tag17",
    //         "Tag18"
    //     ],
    //     difficulty: 5,
    //     startMonth: 6,
    //     startYear: 2024,
    //     isCompleted: true
    // },
];

const sortParameters = [ 
    "Date",
    "Title",
    "Difficulty"
]

const tags = getUniqueTags();

var currentSort;
var currentFilter;

window.onload = function() {
    loadSort();
    loadFilter();
    refreshProjects();
}

function getUniqueTags() {
    var result = [ "All" ];
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

    currentSort = sortSelectElement.value;

    sortSelectElement.onchange = function() {
        currentSort = sortSelectElement.value;
        refreshProjects();
    }
}

function loadFilter() {
    var filterLabelElement = document.createElement("label");
    filterLabelElement.setAttribute("for", "filterParameters");
    filterLabelElement.append("Filter");

    var filterSelectElement = document.createElement("select");
    filterSelectElement.setAttribute("id", "filterParameters");

    for (var i = 0; i < tags.length; i++) {
        optionElement = document.createElement("option");

        // checkboxInputElement = document.createElement("input");
        // checkboxInputElement.setAttribute("type", "checkbox");
        // checkboxInputElement.append();

        optionElement.append(tags[i]);
        filterSelectElement.append(optionElement);
    }

    var filterElement = document.getElementById("filter");
    filterElement.append(filterLabelElement);
    filterElement.append(filterSelectElement);

    currentFilter = filterSelectElement.value;

    filterSelectElement.onchange = function() {
        currentFilter = filterSelectElement.value;
        refreshProjects();
    }
}

function getProjects() {
    if (!tags.includes(currentFilter)) {
        return;
    }

    if (!sortParameters.includes(currentSort)) {
        return;
    }

    var result = [...projects];
    
    if (!(currentFilter === "All")) {
        result = projects.filter(project => project.tags.includes(currentFilter) === true);
    }

    switch (currentSort) {
        case "Date":
            result.sort((a, b) => {
                if (a.startYear > b.startYear) { return -1; }
                if (a.startYear < b.startYear) { return 1; }
                if (a.startMonth > b.startMonth) { return -1; }           
                if (a.startMonth < b.startMonth) { return 1; }
            })
            break;
        case "Title":
            result.sort((a, b) => a.title.localeCompare(b.title))
            break;
        case "Difficulty":
            result.sort((a, b) => b.difficulty - a.difficulty)
            break;
        default:
            break;
    }

    return result;
}

function loadProjects(projectsToLoad) {
    var projectsElement = document.getElementById("projects");
    
    for (var i = 0; i < projectsToLoad.length; i++) {
        var project = projectsToLoad[i];

        // Project
        var projectElement = document.createElement("li");
        projectElement.classList.add("project");

        // Project content
        var projectContentElement = document.createElement("div");
        projectContentElement.classList.add("project-content");
        projectElement.append(projectContentElement);

        // Project difficulty
        var projectDifficultyElement = document.createElement("div");
        projectDifficultyElement.classList.add("project-difficulty");
        projectDifficultyElement.append("Difficulty: " + project.difficulty + "/5");
        projectContentElement.append(projectDifficultyElement);

        // Project title
        var projectTitleElement = document.createElement("div");
        projectTitleElement.classList.add("project-title");
        projectTitleElement.append(project.title);
        projectContentElement.append(projectTitleElement);

        // Project description
        var projectDescriptionElement = document.createElement("div");
        projectDescriptionElement.classList.add("project-description");
        projectDescriptionElement.append(project.description);
        projectContentElement.append(projectDescriptionElement);

        // Project start
        var projectStartElement = document.createElement("div");
        projectStartElement.classList.add("project-start");
        projectStartElement.append("Started " + getMonthByNumber(project.startMonth) + ", " + project.startYear); 
        projectContentElement.append(projectStartElement);

        // Project status
        var projectStatusElement = document.createElement("div");
        projectStatusElement.classList.add("project-status");
        if (project.isCompleted) {
            projectStatusElement.append("Completed"); 
        } else {
            projectStatusElement.append("In Progress");
        }
        projectContentElement.append(projectStatusElement);

        // Project tags
        var projectTagsElement = document.createElement("ul");
        projectTagsElement.classList.add("project-tags");
        for (var j = 0; j < project.tags.length; j++) {
            var projectTagElement = document.createElement("li");
            projectTagElement.classList.add("project-tag");
            projectTagElement.append(project.tags[j]);
    
            // Add tag to set of tags for sorting
    
            projectTagsElement.append(projectTagElement);
        }
        projectContentElement.append(projectTagsElement);

        projectsElement.append(projectElement);
    }
}

function refreshProjects() {
    var projectsElement = document.getElementById("projects");
    while (projectsElement.firstChild) {
        projectsElement.removeChild(projectsElement.firstChild);
    }

    var projectsToLoad = getProjects();
    loadProjects(projectsToLoad);
}

// Utility members

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