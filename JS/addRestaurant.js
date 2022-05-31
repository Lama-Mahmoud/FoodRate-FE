window.onload=function(){

	
	function openNav() {
	  document.getElementById("mySidenav").style.display = "block";
	}

	function closeNav() {
	  document.getElementById("mySidenav").style.display = "none";
	}
	
	add=document.getElementById("add");
	add.addEventListener("click",Add);
	
	function Add(){
		const name = document.getElementById("name").value;
		const description = document.getElementById("Description").value;
		const number = document.getElementById("Phone").value;
		const location = document.getElementById("location").value;

		let data = new FormData();
		data.append('fname', name);
		data.append('email', description);
		data.append('number', number);
		data.append('message', location);
		
		let url = 'http://localhost/';
		let id = localStorage.getItem("user_id");
		url += "?user_id=" + id;
	}
	
}