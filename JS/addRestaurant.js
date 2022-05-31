const admin_id = localStorage.getItem("admin_id");
const token = localStorage.getItem("token");

add = document.getElementById("add");
add.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("Description").value;
  const image = document.getElementById("getFile").files[0];

  //   const fileReader = new FileReader();
  //   let base64_image = "";
  //   fileReader.onload = () => {
  //     base64_image = fileReader.result; // base64
  //   };
  //   fileReader.readAsDataURL(image);

  let data = new FormData();

  data.append("rest_name", name);
  data.append("rest_desc", description);
  data.append("rest_pic", image);
  console.log(data);
  let headers = {};
  headers.Authorization = "Bearer " + token;
  axios({
    method: "post",
    url: `http://127.0.0.1/api/index.php?action=createRestaurant&admin_id=${admin_id}`,
    headers: headers,
    data: data,
  }).then(function (response) {
    console.log(response.data);
  });
});

// function Add(){

// let url = "http://localhost/";
// let id = localStorage.getItem("user_id");
// url += "?user_id=" + id;
// }
