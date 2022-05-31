const email_field = document.getElementById("email"),
  password_field = document.getElementById("pass"),
  submit_btn = document.getElementById("login");


	console.log("1");

submit_btn.onclick = () => {
	
  let data = new FormData();
  data.append("email", email_field.value);
  data.append("password", password_field.value);
  console.log(data);
  axios({
    method: "post",
    url: "http://127.0.0.1/api/index.php?action=loginUser",
    data: data,
  }).then(function (response) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("User_id", response.data.user_id);
    window.location.replace("http://127.0.0.1:5500/HomePageUser.html");
  });
};
