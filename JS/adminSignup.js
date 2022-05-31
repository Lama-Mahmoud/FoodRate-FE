const email_field = document.getElementById("email"),
  password_field = document.getElementById("password"),
  submit_btn = document.getElementById("signup");

submit_btn.onclick = () => {
  let data = new FormData();
  data.append("email", email_field.value);
  data.append("password", password_field.value);
  axios({
    method: "post",
    url: "http://127.0.0.1/api/index.php?action=createAdmin",
    data: data,
  }).then(function (response) {
    submit_btn.style.backgroundColor = "green";
  });
};
