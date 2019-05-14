window.onload = function(){
	addButton = document.getElementById("add");

	addButton.onclick = function(){
		console.log("Add Button clicked!");


		// Save input into databases
		// sub_name = document.getElementById("name").value
		// console.log(sub_name);
		form = document.getElementById("form");
		a = formToJSON(form);
		console.log(a);

		// document.getElementById("name").value = "Johnny Bravo";
	};
};


function formToJSON( form ) {
	//preventDefault()
	var obj = {};
	var elements = form.querySelectorAll( "input, select");
	for( var i = 0; i < elements.length; ++i ) {
		var element = elements[i];
		var name = element.name;
		var value = element.value;

		if( name ) {
			obj[ name ] = value;
		}
	}
	return JSON.stringify( obj );
}


// Expected JSON output 
// {
//   ""subscription_name"": "Apple",
//   "pay_amount": "Jason Lengstorf",
//   "period": "I have a general question.",
//   "pay_date": "jason@lengstorf.com",
//   "free_period": "",
//   "url": "1b3a9374-1a8e-434e-90ab-21aa7b9b80e7"
// }





