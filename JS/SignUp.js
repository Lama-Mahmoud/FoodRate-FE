
const email_field = document.getElementById("email"),
  password_field = document.getElementById("psw"),
  first_name=document.getElementById("fname"),
  last_name=document.getElementById("lname"),
  DOB=document.getElementById("DOB"),
  profile_pic=document.getElementById("getFile").files[0];
  submit_btn = document.getElementById("signup");
  
  
submit_btn.onclick = () => {
	var gender;
    function displayRadioValue() {
        let ele = document.getElementsByName('gender');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            gender=i;
        }
    }
    displayRadioValue();
    let data = new FormData();
    data.append("email", email_field.value);
    data.append("password", password_field.value);
    data.append("first_name",first_name.value);
    data.append("last_name",last_name.value);
    data.append("dob",DOB.value);
    data.append("gender",0);
    data.append("profile_pic",profile_pic);
    console.log(email_field.value);
    console.log(password_field.value);
    console.log(first_name.value);
    console.log(last_name.value);
    console.log(DOB.value);
    console.log(profile_pic);

    axios({
        method: "post",
        url: "http://127.0.0.1/api/index.php?action=createUser",
        data: data,
      }).then(function (affected_rows) {
          console.log(affected_rows);
      });
};