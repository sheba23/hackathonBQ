
function addPost()
{

  var VALUE = document.getElementById("textboxId").value;

  var newText = document.createTextNode(VALUE);
  
  var newElement = document.createElement("span");

  form.appendChild(newText);





}
function clearData()
{
  userInput =document.getElementById("passwordTextId").value;
  if(password == userInput)
  {
    window.localStorage.clear();
    postList=[];
    display();
  }
  else
  {
    return;
  }
}
function display()
{

}
