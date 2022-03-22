var hum = 0
var cpu = 0


alert("Welcome to 20! You will face a computer by drawing numbers 1-10 until you choose to stop. The player closer to 20 is the winner!")

do {

  var cnum = 0
  var hnum = 0

  do {

    alert("The computer is drawing...")

    var ran = Math.floor(Math.random() *11)
    var cnum = cnum + ran

    alert(`The computers number was ${ran} its total is now ${cnum} ` );


  
  } while ((cnum) < 16)

  alert("I'm done drawing. Now it is your turn!")
  
  do {
      
      var run = Math.floor(Math.random() *11)
      var hnum = hnum + run

      alert(`Your number was ${run} its total is now ${hnum} ` );

     var ny = prompt("Do you want to keep drawing? Insert yes or no")
      

  } while ((hnum < 21) &&  (ny != "no"))

  if ((cnum < hnum) && (cnum > 21)) {
    alert(`You won! You got closer to 20!`)
    hum++
    alert(`you have ${hum} wins and I have ${cpu} wins!`)
    var yn = prompt(`Would you like to play again? Type yes or no.`)


    
  } else if ( (hnum < cnum ) && (hnum < 21) ) {
    alert(`You lose. Mine was closer to 20! `)
    cpu++
    alert(`You have ${hum} wins and I have ${cpu}`)

  } else if (cnum == hnum) {
      alert(`It was a draw!`)

      alert(`you have ${hum} wins and I have ${cpu} wins!`)   
  } 

    var yn = prompt(`Would you like to play again? Type yes or no.`)


} while (yn == 'yes')

alert(`Game over. Final score was ${hum} to ${cpu}!`)
