let users_data;
const admin_id = localStorage.getItem("admin_id");
const token = localStorage.getItem("token");
let headers = {};
headers.Authorization = "Bearer " + token;
axios({
  method: "get",
  url: `http://127.0.0.1/api/index.php?action=getUsers&admin_id=${admin_id}`,
  headers: headers,
}).then(function (response) {
  users_data = response.data;
  createAppendUserRows(users_data);
});

function createAppendUserRows(data) {
  let table = document.getElementById("users");
  data.forEach((element) => {
    let user_row = document.createElement("tr");
    let user_name_td = document.createElement("td");
    user_name_td.innerText = `${element.first_name} ${element.last_name}`;
    user_row.append(user_name_td);

    let user_email_td = document.createElement("td");
    user_email_td.innerText = element.email;
    user_row.append(user_email_td);
    
    let user_dob_td = document.createElement("td");
    user_dob_td.innerText = element.dob;

    user_row.append(user_dob_td);
    table.append(user_row);
  });
}
