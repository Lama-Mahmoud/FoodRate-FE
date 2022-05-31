const email_field = document.getElementById("email"),
  password_field = document.getElementById("password"),
  submit_btn = document.getElementById("login");

submit_btn.onclick = () => {
  let data = new FormData();
  data.append("email", email_field.value);
  data.append("password", password_field.value);
  console.log(data);
  axios({
    method: "post",
    url: "http://127.0.0.1/api/index.php?action=loginAdmin",
    data: data,
  }).then(function (response) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("admin_id", response.data.admin_id);
    window.location.replace("http://127.0.0.1:5500/ViewUsers.html");
  });
};
