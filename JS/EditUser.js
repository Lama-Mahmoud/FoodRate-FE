submit_btn = document.getElementById("signup");
  
let email_field = document.getElementById("email"),
first_name=document.getElementById("fname"),
last_name=document.getElementById("lname"),
profile_pic=document.getElementById("getFile").files[0];

let users_data;
const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
let headers = {};
headers.Authorization = "Bearer " + token;
axios({
    method: "get",
    url: `http://127.0.0.1/api/index.php?action=getOneUser&user_id=${user_id}`,
    headers: headers,
}).then(function (response) {
  userdata_data = response.data;
  addUserData(user_data);
});
function addUserData(data){
    email_field.value=data.email;
    first_name.value=data.first_name;
    last_name.value=data.last_name;

}
  
submit_btn.onclick = () => {
    
first_name=document.getElementById("fname").value,
last_name=document.getElementById("lname").value,
profile_pic=document.getElementById("getFile").files[0];

axios
}