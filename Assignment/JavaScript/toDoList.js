
$("document").ready(function () {
 
  //Submit button
    $("#submitButton").click(function () {
      
      var taskName =  document.getElementById("taskName").value;
      var deadline = document.getElementById("deadline").value; 

      if(taskName.length !=0 && deadline.length !=0 ){
      var checkBox = $(" <input type=checkbox>");
      var color;
       //select the color based on the priority
       if(document.getElementById("high").checked)
       color='#FF7F7F';
       else if(document.getElementById("medium").checked)
       color='#FED8B1';
       else if( document.getElementById("low").checked)
       color='#FFFFE0';
       var listItem = $("<li></li>").text(taskName+'  |  '+ deadline).append(checkBox).css({ "background-color" : color });
       //Set the icon
       var currentDate = new Date();
       var deadlineDate = new Date(deadline)
       
       currentDate.setHours(0, 0, 0, 0);
       deadlineDate.setHours(0, 0, 0, 0);
      //Deadline is passsed
      if(currentDate>deadlineDate)
       listItem.prepend('<img src= "../Assignment/images/cancel.png"/>  ');
       // Two days remaining for the deadline 
      else if((currentDate.getFullYear()==deadlineDate.getFullYear()) 
       && (currentDate.getMonth()==deadlineDate.getMonth()) 
       && ((deadlineDate.getDate()-currentDate.getDate())<3))
         listItem.prepend('<img src= "../Assignment/images/warning.png"/>  ');
      //Append listItem to the list
      $("#ToDoList").append(listItem);
    
      }
      else{
        alert("Please make sure all fields are filled");
      }
     
    });
    //Done Button
  $("#doneButton").click(function (){

    var markedCheckBox =  $(":checkbox:checked");
    if(markedCheckBox.length == 0)
    alert("You have to check the completed tasks");
   else{
    markedCheckBox.parent().remove(); 
    markedCheckBox.each(function(){
    var taskDetails = $(this).parent().text();
    var listItem = $("<li></li>");
    //Set properties
    listItem.text(taskDetails).css({ "background-color" : '#90EE90'}).prepend('<img src= "../Assignment/images/check-mark.png"/>');
    //Append listItem to the list
    $("#CompletedTaskList").append(listItem);

    });
    }
  

  });
  //show current date
  var date = new Date();
  var day = date.getDate();
  var month =date.getMonth()+1;
  var year =date.getFullYear();
$("#date").text(year+"-"+month+"-"+day);
  
  });

