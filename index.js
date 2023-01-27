(function() {
  'use strict';

/*Creating a variable named each light and attaching it to
HTML class id.
*/
let stopLight = document.getElementById('stopLight')
let slowLight = document.getElementById('slowLight')
let goLight = document.getElementById('goLight')

/*Creating a variable named each button and attaching it to
HTML class id.
*/
let stopButton = document.getElementById('stopButton')
let slowButton = document.getElementById('slowButton')
let goButton = document.getElementById('goButton')
/*Creating a function to toggle the lights on and off
by clicking the button
*/
function switchStop(){
  stopLight.classList.toggle("stop")
  if(stopLight.classList.contains('stop')){
  console.log(stopButton.innerText + ' bulb on')
  } else {
    console.log(stopButton.innerText + " bulb off")
  }
}
function switchSlow(){
  slowLight.classList.toggle("slow")
  if(slowLight.classList.contains('slow')){
    console.log(slowButton.innerText + ' bulb on')
    } else {
      console.log(slowButton.innerText + " bulb off")
    }
}
function switchGo(){
  goLight.classList.toggle("go")
  if(goLight.classList.contains('go')){
    console.log(goButton.innerText + ' bulb on')
    } else {
      console.log(goButton.innerText + " bulb off")
    }
}
/* Attach each to an event listener.
*/
stopButton.addEventListener('click', switchStop)
slowButton.addEventListener('click', switchSlow)
goButton.addEventListener('click', switchGo)

//function to log Entered to the console
function entered(event){
  console.log('Entered ' + event.target.innerText + ' button' )
}
//function to log Left to the console
function exit(event){
  console.log('Left ' + event.target.innerText + ' button' )
}

// Adds two event listeners per button. One for mouseenter and one for mouseleave
stopButton.addEventListener('mouseenter', entered);
stopButton.addEventListener('mouseleave', exit);
slowButton.addEventListener('mouseenter', entered);
slowButton.addEventListener('mouseleave', exit);
goButton.addEventListener('mouseenter', entered);
goButton.addEventListener('mouseleave', exit);






  // YOUR CODE HERE
})();




/* ## Part 1

Add DOM event listeners and handlers to toggle the on/off state of three bulbs.

- When a user clicks on the "Stop" button, toggle the [stop bulb's color][stop-color].
- When a user clicks on the "Slow" button, toggle the [slow bulb's color][slow-color].
- When a user clicks on the "Go" button, toggle the [go bulb's color][go-color].

**TIP**: All three bulbs can be on/off independently of one another.
*/

/*
## Part 2

Add new DOM event listeners and handlers to log the mouse state of each button.

- When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
- When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.

**TIP:** Each event type will need a separate event listener.*/

/*
## Bonus

Add **one** DOM event listener and **one** handler to log the state of each bulb.

- When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
- When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.

**TIP:** A click on only a button should cause a message to be logged to the console.
 */