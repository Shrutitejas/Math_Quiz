player1name=localStorage.getItem("Person1");
player2name=localStorage.getItem("Person2");
player1score=0;
player2score=0;

document.getElementById("user1_name").innerHTML=player1name+":";
document.getElementById("user2_name").innerHTML=player2name+":";

document.getElementById("user1_score").innerHTML=player1score;
document.getElementById("user2_score").innerHTML=player2score;

document.getElementById("player_q").innerHTML="Question turn-"+player1name;
document.getElementById("player_a").innerHTML="Answer turn-"+player2name;

function send(){
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
    actual_answer = parseInt(number1)*parseInt(number2);

    question = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='checkinput'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    number1 = document.getElementById("no1").value="";
    number2 = document.getElementById("no2").value="";
}

qturn="player1";
aturn="player2";

function check(){
   ans=document.getElementById("input_box").value.toLowerCase();
   if(ans == actual_answer){
      if(aturn == "player1"){
         player1score= player1score +1;
         document.getElementById("user1_score").innerHTML=player1score;
        }
      else{
        player2score= player2score +1;
        document.getElementById("user2_score").innerHTML=player2score; 
      }
   }
   if(aturn == "player1"){
       aturn= "player2";
       document.getElementById("player_a").innerHTML="Answer turn-"+player2name;
     
    }
    else{
        aturn= "player1";
        document.getElementById("player_a").innerHTML="Answer turn-"+player1name;
     
    }
    if(qturn == "player1"){
        qturn= "player2";
        document.getElementById("player_q").innerHTML="Question turn-"+player2name;
      
     }
     else{
         aturn= "player1";
         document.getElementById("player_q").innerHTML="Question turn-"+player1name;
      
    }
    document.getElementById("output").innerHTML="";
 
}