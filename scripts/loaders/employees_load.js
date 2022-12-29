function employeeHTML(employee) {
    return `<img src=${employee.avatar} class="employee_picture" alt="">
        <div class="employee_properties">
            <div class="employee_name">
                ${employee.name.title} ${employee.name.first} ${employee.name.last}
            </div>
            <div class="employee_location">
                ${employee.country}, ${employee.state}, ${employee.city}
            </div>
            <div class="employee_email">
                ${employee.email}
            </div>
            <div class="employee_phone">
                ${employee.phone}
            </div>
        </div>`
}

function employeeLoad(employee) {
    let employeeElem = document.createElement("div")
    employeeElem.className = "employee"
    employeeElem.innerHTML = employeeHTML(employee)
    return employeeElem
}