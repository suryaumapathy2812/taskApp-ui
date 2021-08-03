$("#header").load("../../components/_header/header.html");

function displayTasks() {
    let tasks = [
        {
            id: 1,
            name: "Install Chrome Browser",
            priority: "HIGH",
            createdDate: "2021-07-01 09:00",
            createBy: "Naresh",
            status: "COMPLETED",
        },
        {
            id: 2,
            name: "Install NodeJS",
            priority: "LOW",
            createdDate: "2021-07-01 09:00",
            createBy: "Naresh",
            status: "COMPLETED",
        },
        {
            id: 3,
            name: "Install VSCode",
            priority: "LOW",
            createdDate: "2021-07-01 09:00",
            createBy: "Naresh",
            status: "COMPLETED",
        },
    ];

    let content = "";
    S
    for (let taskObj of tasks) {
        content = content +
            `<tr>
                <td scope="row">${taskObj.id}</td>
                <td>${taskObj.name}</td>
                <td>${taskObj.priority}</td>
            </tr>`;
    }
    console.log(content);

    document.querySelector("#tasksTable").innerHTML = content;
}


displayTasks();