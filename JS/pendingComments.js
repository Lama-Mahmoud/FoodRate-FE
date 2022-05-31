window.onload=function(){

	
	
	
	function openNav() {
	  document.getElementById("mySidenav").style.display = "block";
	}

	function closeNav() {
	  document.getElementById("mySidenav").style.display = "none";
	}
	
	accept=document.getElementsByClassName("true");
	
	reject=document.getElementsByClassName("false");
	
	for(let i=0;i<reject.length;i++)
	{
		console.log("added");
		accept[i].addEventListener("click",accepted);
		reject[i].addEventListener("click",rejected);
	}
		
		
		
		function accepted()
		{
			alert("comment accepted");
		}
		function rejected()
		{
			alert("comment rejected");
		}
}