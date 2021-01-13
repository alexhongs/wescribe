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

  alert(new Date().toLocaleDateString());
}