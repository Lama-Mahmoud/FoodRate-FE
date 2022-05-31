const email_field = document.getElementById("email"),
  password_field = document.getElementById("password"),
  submit_btn = document.getElementById("login");



submit_btn.onclick = () => {
	if(email_field.length==0 || password_field.length==0)
		{
			alert("error!! wrong email or password");
		}
	
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
