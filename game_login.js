function adduser(){
    var user1=document.getElementById("player1name").value;
    var user2=document.getElementById("player2name").value;
    localStorage.setItem("Person1",user1);
    localStorage.setItem("Person2",user2);
    window.location="game_page.html"
}