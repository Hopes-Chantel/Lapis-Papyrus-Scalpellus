const user = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  };
  
    function buttonClick(e) {
    const choices = ["lapis", "papyrus", "scalpellus"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  
    //Converts the id to index
      
    if (e.target.id === "lapis") {
      user.currentChoice = choices[0];
    } else if (e.target.id === "papyrus") {
      user.currentChoice = choices[1];
    } else {
      user.currentChoice = choices[2];
    }
  
  // will let us know if there is a tie
  
  if (computer.currentChoice === user.currentChoice) {
      document.getElementById("results").innerText =
        "It's a Tie! The player and the computer both chose " + computer.currentChoice;
    }
  
    // If there isnt a  tie the code below will determine who wins
    else if (computer.currentChoice === choices[0]) {
      if (user.currentChoice === choices[1]) {
        document.getElementById("results").innerText =
          "The player wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
          user.currentChoice;
      } else {
        document.getElementById("results").innerText =
          "The computer wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
          user.currentChoice;
      }
    } else if (computer.currentChoice === choices[1]) {
      if (user.currentChoice === choices[2]) {
        document.getElementById("results").innerText =
          "The player wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
         user.currentChoice;
      } else {
        document.getElementById("results").innerText =
          "The computer wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
          user.currentChoice;
      }
    } else if (computer.currentChoice === choices[2]) {
      document.getElementById("results").innerText =
        "The player wins! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
        user.currentChoice;
    } else {
      document.getElementById("results").innerText =
        "The computer wins! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
       user.currentChoice;
    }
  }
  
  //Event handlers
  
  document.getElementById("lapis").addEventListener("click", buttonClick);
  document.getElementById("papyrus").addEventListener("click", buttonClick);
  document.getElementById("scalpellus").addEventListener("click", buttonClick);
  