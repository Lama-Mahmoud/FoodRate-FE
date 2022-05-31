let reviews_data;
const admin_id = localStorage.getItem("admin_id");
const token = localStorage.getItem("token");
let headers = {};
headers.Authorization = "Bearer " + token;
axios({
  method: "get",
  url: `http://127.0.0.1/api/index.php?action=getReviews&admin_id=${admin_id}`,
  headers: headers,
}).then(function (response) {
  reviews_data = response.data;
  console.log(reviews_data);
  createAppendReviewsRows(reviews_data);
});

function createAppendReviewsRows(data) {
  let table = document.getElementById("reviews");
  data.forEach((element) => {
    let reveiw_row = document.createElement("tr");

    let review_id_td = document.createElement("td");
    review_id_td.innerText = `${element.review_id}`;
    reveiw_row.append(review_id_td);

    let review_email_td = document.createElement("td");
    review_email_td.innerText = element.email;
    reveiw_row.append(review_email_td);

    let reveiw_rest_name_td = document.createElement("td");
    reveiw_rest_name_td.innerText = element.rest_name;
    reveiw_row.append(reveiw_rest_name_td);

    let reveiw_content_td = document.createElement("td");
    reveiw_content_td.innerText = element.review_content;
    reveiw_row.append(reveiw_content_td);

    let reveiw_rate_td = document.createElement("td");
    reveiw_rate_td.innerText = element.rate;
    reveiw_row.append(reveiw_rate_td);

    let reveiw_status_td = document.createElement("td");
    reveiw_status_td.innerText = element.status;
    reveiw_row.append(reveiw_status_td);

    table.append(reveiw_row);
  });
}

// window.onload=function(){

// 	function openNav() {
// 	  document.getElementById("mySidenav").style.display = "block";
// 	}

// 	function closeNav() {
// 	  document.getElementById("mySidenav").style.display = "none";
// 	}

// 	accept=document.getElementsByClassName("true");

// 	reject=document.getElementsByClassName("false");

// 	for(let i=0;i<reject.length;i++)
// 	{
// 		console.log("added");
// 		accept[i].addEventListener("click",accepted);
// 		reject[i].addEventListener("click",rejected);
// 	}

// 		function accepted()
// 		{
// 			alert("comment accepted");
// 		}
// 		function rejected()
// 		{
// 			alert("comment rejected");
// 		}
// }
