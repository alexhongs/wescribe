window.onload = function(){
	//chrome.storage.sync.clear(); //  DEBUG ONLY---->  NEED TO BE DELETED LATER

	// Add Button
	document.getElementById("add").onclick = function(){
		// Input to JSON
		var form = document.getElementById("form");
		var value = formToJSON(form);

		// Store (JSON of JSON)
		var key  = hash(value);
		var obj = {};
		obj[key] = value;
		

		chrome.storage.sync.set(obj, function() {
			alert("SET \nKey: " + key + "\nValue: " + JSON.stringify(value));
		});
	};



	// See Stored items for DEBUGGING ONLY
	document.getElementById("storage").onclick =  function(){
		readStorage();
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
	return obj;
}

//Create unique output keys from json data format
function hash(JSON_input){
	var name = JSON.stringify(JSON_input["subscription_name"]);
	var date = JSON.stringify(JSON_input["pay_date"])
	var key = name + date;
	return key;
}

//Prints all stored items
function readStorage(){
	chrome.storage.sync.get(null, function(items){
		// alert("See Stored:\n" + JSON.stringify(items));
		statement = Object.keys(items).length + " entries \n"
		for (var item in items){
			statement += item + " : " + JSON.stringify(items[item])+ "\n";
		}
		alert("Storage: " + statement);
	});
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





