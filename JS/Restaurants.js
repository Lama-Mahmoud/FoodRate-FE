let users_data;
const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
let headers = {};
headers.Authorization = "Bearer " + token;
axios({
    method: "get",
    url: `http://127.0.0.1/api/index.php?action=getRestaurants&user_id=${user_id}`,
    headers: headers,
}).then(function (response) {
  restaurants_data = response.data;
  createAppendResaurants(restaurants_data);
});

function createAppendResaurants(data)
{
    count=0;
    data.forEach((element) => {
        

    });

}