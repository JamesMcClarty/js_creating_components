//Students List
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

/*Challenge: Composition of smaller components
const h1Passing = (studentName) => {
    return `<h1 class="xx-large passing">${studentName}</h1>`
}

const h1Failing = (studentName) => {
    return `<h1 class="xx-large failing">${studentName}</h1>`
}

const section = (studentSubject) => {
    return `<section class="bordered dashed section--padded">${studentSubject}</section>`
}

const article = (studentInfo) => {
    return `<aside class="pushRight">${studentInfo}</aside>`
}
*/

//Challenge: Generic HTML Function

const element = (type, string, cssClass) => {
    return `<${type} class="${cssClass}">${string}</${type}>`
}

//Create student component (Refactored)
const createStudentComponent = (student) => {
    if (student.score >= 60){
    return `
        <div id="student">
            ${element("h1", student.name, "xx-large passing")}
            ${element("section", student.subject, "bordered dashed section--padded")}
            ${element("aside", student.info, "pushRight")}
        </div>`
    }

    else {
        return `
        <div id="student">
            ${element("h1", student.name, "xx-large failing")}
            ${element("section", student.subject, "bordered dashed section--padded")}
            ${element("aside", student.info, "pushRight")}
        </div>` 
    }
}

const studentContainer = document.querySelector("#container") // Creating new student container

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(students[i])
}