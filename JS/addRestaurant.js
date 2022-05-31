const admin_id = localStorage.getItem("admin_id");
const token = localStorage.getItem("token");

add = document.getElementById("add");
add.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("Description").value;
  const image = document.getElementById("getFile").files[0];

  let data = new FormData();

  data.append("rest_name", name);
  data.append("rest_desc", description);
  data.append("rest_pic", image);

  let headers = {};
  headers.Authorization = "Bearer " + token;
  axios({
    method: "post",
    url: `http://127.0.0.1/api/index.php?action=createRestaurant&admin_id=${admin_id}`,
    headers: headers,
    data: data,
  }).then(function (response) {
    add.style.backgroundColor = "green";
  });
});
