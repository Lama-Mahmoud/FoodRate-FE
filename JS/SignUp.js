
const email_field = document.getElementById("email"),
  password_field = document.getElementById("psw"),
  first_name=document.getElementById("fname"),
  last_name=document.getElementById("lname"),
  DOB=document.getElementById("lname"),
  profile_pic=document.getElementById('getFile').files[0];
  submit_btn = document.getElementById("signup");
  
  
submit_btn.onclick = () => {
	var gender;
    function displayRadioValue() {
        let ele = document.getElementsByName('gender');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            gender=ele[i].value;
        }
    }
    let data = new FormData();
    data.append("email", email_field.value);
    data.append("password", password_field.value);
    data.append("first_name",first_name.value);
    data.append("last_name",last_name.value);
    data.append("dob",DOB.value);
    data.append("gender",gender);
    data.append("profile_pic",profile_pic);
    console.log(data);

    axios({
        method: "post",
        url: "http://127.0.0.1/api/index.php?action=createUser",
        data: data,
      }).then(function (affected_rows) {
          console.log(affected_rows);
      });
};