const email_field = document.getElementById("email"),
  password_field = document.getElementById("psw"),
  first_name=document.getElementById("fname"),
  last_name=document.getElementById("lname"),
  DOB=document.getElementById("lname"),
  gender=document.querySelector('input[name="rate"]:checked').value;
  profile_pic=document.getElementById('getFile').files[0];
  submit_btn = document.getElementById("signup");

  
submit_btn.onclick = () => {
	
    let data = new FormData();
    data.append("email", email_field.value);
    data.append("password", password_field.value);
    data.append("first_name",first_name);
    data.append("last_name",last_name);
    data.append("dob",DOB);
    data.append("gender",gender);
    data.append("profile_pic",profile_pic);
    console.log(data);

    axios({
        method: "post",
        url: "http://127.0.0.1/api/index.php?action=createUser",
        data: data,
      });

};