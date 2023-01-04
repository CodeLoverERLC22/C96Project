
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
    function player1_name(){
      localStorage.setItem(player_1_name_input);
    }
	  //Set "player2_name" using localStorage.setItem() function
    function player2_name(){
      localStorage.setItem(player_2_name_input);
    }
    window.location = "game_page.html";
}

