const url = `http://localhost:8080`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

async function Fetch_admin() {

    let req = await fetch(`${url}/admin`);
    let res = await req.json();
    let admin_details = document.querySelector(".sales-details");
    let adminData = res;
    console.log(adminData);
    admin_details.innerHTML = adminData.map(el => {
        return `<div class="card">
        <div class="img"><img src="${el.image}" ></div>
        <div>
            <p><span class="name">Name:- </span><a href=""></a><span class="ans-name">${el.name}</span></p>
            <p><span class="name">LinkedIn:- </span><a href="${el.linkedin}" class="ans">${el.linkedin}</a></p>
            <p><span class="name">Github:- </span><a href="${el.Github}" class="ans">${el.Github}</a></p>
            <p><span class="name">E-Mail:- </span><a href="${el.email}" class="ans">${el.email}</a></p>
        </div>
    </div>`
    }).join("");

}
//render admin details 
Fetch_admin();

// let Admin_data = JSON.parse(localStorage.getItem("admin_data"));
// displayCards(Admin_data);

// document.querySelector("#admin_name").innerText = localStorage.getItem("admin_name")

countData();

async function countData() {
    try {
        let api_data = await fetch(
            `${url}/product`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        // .headers.get( "X-Total-Count" )
        let data = await api_data.json();
        document.getElementById("totalApicount").innerText = data.product.length;
        // document.getElementById("NewlyAdd").innerText = localStorage.getItem("count") || 0;
        document.getElementById("TotalEdited").innerText = localStorage.getItem("editcount") || 0;
        document.getElementById("TotalDelete").innerText = localStorage.getItem("deletecount") || 0;


    } catch (error) {
        // alert("Can't able to fetch Details of Admin");
    }
}

// userDetails();
function userDetails() {
    let admin = JSON.parse(localStorage.getItem("admin"));
    let cont = document.getElementById("admin_name");
    let cont2 = document.getElementById("img-admin");

    cont2.innerHTML = `<img src="${admin.image}">`
    cont.innerHTML = `${admin.name}`
};

document.getElementsByClassName("log_out")[0].addEventListener("click", () => {
    localStorage.clear("admin-signed");
    localStorage.clear("admin");
});