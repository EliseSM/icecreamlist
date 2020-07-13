
//Elise Schatzki-McClain
//2/10/2020
//CSC 220
//HW2
//Sources:I used this website to find information about html tables and their various functions in javascript
//https://www.w3schools.com/jsref/dom_obj_table.asp


btn1 = document.getElementById("color button1") //handler for the table approval button
btn1.onclick=approveTable
//approve function highlights the table and states that user approves
function approveTable() {
    
    var table = document.getElementById("IcecreamTable"); //handler of the table
    table.style.backgroundColor = "green" //this highlights the table
    
    let caption1 = table.createCaption(); //this creates an empty caption
    caption1.textContent = 'This chart is you approved!'; //this fills the caption in with approval message
}

btn2 = document.getElementById("color button2") //handler for the table disapproval button
btn2.onclick=nonapproveTable
//disapprove function highlights the table and states that user disapproves
function nonapproveTable() {
    
    var table = document.getElementById("IcecreamTable");  //handler of the table
    table.style.backgroundColor = "red"  //this highlights the table
    
    let caption2 = table.createCaption();  //this creates an empty caption
    caption2.textContent = 'This chart is NOT you approved!?!?'; //this fills the caption in with diapproval message
}


btn3 = document.getElementById("addIPinfo");   //handler for the adding info button
btn3.onclick=addPlace;

//this function adds a new ice cream place to the table
function addPlace() {

    var table = document.getElementById("IcecreamTable"); //handler for getting the table

    //handler events for info on favorite ice cream place
    place = document.getElementById("myplaceText").value
    city = document.getElementById("mycityText").value
    state = document.getElementById("mystateText").value
    flavor = document.getElementById("myflavorText").value

    let statement =table.createTFoot() //this creates an empty footer caption

    infoList = place +"               "+ city + "       " +state + "      " + flavor //this a string of IC place info
    statement.textContent = infoList //this adds the inofrmation string to the empty caption
}


btn4 = document.getElementById("remove button"); //this is the handler for the remove button
btn4.onclick=deleteRow;

//function that deletes user selected row
function deleteRow() {
    
    removeRank = document.getElementById("remove ranking").value //this is the handler for selected remove row
    table = document.getElementById("IcecreamTable") //handler for getting the table
    table.deleteRow(removeRank); //this deletes the selected row

   
  }
