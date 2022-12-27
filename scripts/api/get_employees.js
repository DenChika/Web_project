const randomUserAPI = "https://randomuser.me/api/"

const fetchUsers = async (nat, results) => {
    let nationalities = "au, br, ca, ch, de, dk, es, fi, fr, gb, ie"
    if (nat === '1') {
        nationalities = "in, ir, mx, nl, no, nz, rs, tr, ua, us"
    }
    const response = await fetch(`${randomUserAPI}?nat=${nationalities}&results=${results}`);
    return await response.json();
}

class Employee {
    constructor(avatar, name, location, email, phone) {
        this.avatar = avatar;
        this.name = name;
        this.country = location.country;
        this.state = location.state;
        this.city = location.city;
        this.email = email;
        this.phone = phone;
    }
}

const getEmployees = async (nat, results) => {
    const employeesBlock = document.getElementById("employees")
    loader = createPreloader()

    const employees = await Promise.all(
        await fetchUsers(nat, results)
            .then(resp => resp.results)
            .catch(function() {
                alert("Упс, что-то пошло не так...")
            })
            .then(data => data.map(async (emp) => {
                return new Employee(
                    emp.picture.medium,
                    emp.name,
                    emp.location,
                    emp.email,
                    emp.phone
                )
            }))
            .catch((e) => console.log(e))
    )
    loader.style.display = "none"
    employeesBlock.style.display = "block"
    for (let i = 0; i < employees.length; i++) {
        employeesBlock.insertAdjacentElement('beforeend', employeeLoad(employees[i]))
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    if (!localStorage.getItem('nat'))
        localStorage.setItem('nat', '0')

    await getEmployees(localStorage.getItem('nat'), 30);
    if (localStorage.getItem('nat') === '0')
        localStorage.setItem('nat', '1')
    else
        localStorage.setItem('nat', '0')
});

let loader

function createPreloader() {
    let mainContainer = document.getElementsByClassName("main_container")[0]
    let loader = document.createElement("div")
    loader.id = "loader"
    loader.innerHTML = `<img src="https://www.nyinst.com/wp-content/uploads/2019/03/15.03Go-programming.gif" alt="loader">`
    mainContainer.insertAdjacentElement('afterbegin', loader)
    return loader
}