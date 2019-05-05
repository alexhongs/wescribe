window.onload = function(){
	addButton = document.getElementById("add");

	addButton.onclick = function(){
		console.log("Add Button clicked!");
		document.getElementById("subscription_name").value = "Johnny Bravo";
	};
};
