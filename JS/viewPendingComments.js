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
    let status_text = "";
    if (element.status === 0) status_text = "Rejected";
    else if (element.status === 1) status_text = "Accepted";
    else status_text = "Pending";
    reveiw_status_td.innerText = status_text;

    review_id = element.review_id;
    let accept_icon = document.createElement("span");
    let reject_icon = document.createElement("span");
    accept_icon.innerHTML = "&nbsp&nbsp&nbsp &#x1F44D;&nbsp&nbsp&nbsp&nbsp";
    accept_icon.id = element.review_id;
    reject_icon.innerHTML = "&#x1F44E;";
    reject_icon.id = element.review_id;
    accept_icon.onclick = (e) => {
      data = new FormData();
      data.append("review_id", e.target.id);
      data.append("new_status", 1);
      axios({
        method: "post",
        url: `http://127.0.0.1/api/index.php?action=updateReviewStatus&admin_id=${admin_id}`,
        headers: headers,
        data: data,
      }).then(function () {
        location.reload();
      });
    };
    reject_icon.onclick = (e) => {
      data = new FormData();
      data.append("review_id", e.target.id);
      data.append("new_status", 0);
      axios({
        method: "post",
        url: `http://127.0.0.1/api/index.php?action=updateReviewStatus&admin_id=${admin_id}`,
        headers: headers,
        data: data,
      }).then(function () {
        location.reload();
      });
    };
    reveiw_status_td.append(accept_icon);
    reveiw_status_td.append(reject_icon);

    reveiw_row.append(reveiw_status_td);

    table.append(reveiw_row);
  });
}
