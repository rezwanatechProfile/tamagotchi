

class Tamagotchi {

  constructor(name) {
    this.name = name
    this.age = 1
    // this.hunger = hunger
    // this.energy = energy
    // this.fun = fun
    // this.sleepiness = sleepiness
    this.interval;

  }



  starttheGame(){
    const stGame = document.getElementById("startBtn")

    stGame.addEventListener("click", ()=>{
      this.getName()
      stGame.classList.add('hide')
    })
  }


  hideElement(){
    // document.querySelector(".show").classList.add("hide")
    document.getElementById("btn-stop").classList.add("hide")
  }

  getName(){
    this.name = prompt("What is name of your Dinosour: ")
    return this.name
  }

  getinfo(){
    const infoBtn = document.getElementById("ibtn")
    const newDiv = document.createElement("div")

    infoBtn.addEventListener("click", ()=>{
      newDiv.innerText = `Name of the player is ${this.name}`
      document.body.appendChild(newDiv).classList.add("show")
    })
  }


  getFood() {
    const foodBtn = document.getElementById("fbtn")
    const progress = document.querySelector(".progress-bar-2")

    let finalValue = 0;
    let maxValue = 10;

    function changeWidth(){
      progress.style.width = `${(finalValue / maxValue) * 100}%`
      progress.innerText = `${Math.ceil((finalValue / maxValue) * 100)}%`
    }

    foodBtn.addEventListener("click", ()=>{

      if(finalValue < maxValue) {
        finalValue += 2
        changeWidth()
      } else if(finalValue === maxValue){
        alert(`it has 100% of food`)
        }

    })
  }

  getTime(){


    
  }



getSleep() {

  let seconds = 0;
  let tens = 0;
  let mins = 0;
  let arr = []
  let value = 0;
  let hungerValue = 0;
  let maxValue = 10;
  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  const appendmins = document.getElementById("mins");

  const buttonstop = document.getElementById("btn-stop");
  const sleepBtn = document.getElementById("sbtn");
  const progress2 = document.querySelector(".progress-bar-2");
  const progress1 = document.querySelector(".progress-bar-1");

  function changeWidth() {
    progress2.style.width = `${(value / maxValue) * 100}%`;
    progress2.innerText = `${Math.ceil((value / maxValue) * 100)}%`;

    progress1.style.width = `${(hungerValue / maxValue) * 100}%`;
    progress1.innerText = `${Math.ceil((hungerValue / maxValue) * 100)}%`;
  }

    function startTimer() {
      tens++
      if(tens < 9) {
        appendTens.innerHTML = "0" + tens
      }
      if(tens > 9){
        appendTens.innerHTML = tens
      }

      if(tens > 99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        tens = 0
        appendTens.innerHTML = "0" + 0
      }
      if(seconds > 9) {
        appendSeconds.innerHTML = seconds
      }

      if(seconds > 60){
        mins++
        appendmins.innerHTML = "0" + mins
        seconds = 0
        appendSeconds.innerHTML = "0" + 0
      }

      if(mins > 9) {
        appendmins.innerHTML = mins
      }
      arr.push(seconds)
      value = arr[arr.length-1]
      hungerValue = arr[arr.length-1]

      if (value < maxValue) {
        value += 1
        changeWidth();
      } else if (value === maxValue) {
        alert(`it has 100% of food`);
      }


      if (hungerValue < maxValue) {
        hungerValue += 2
        changeWidth();
      } else if (hungerValue === maxValue) {
        alert(`Your pet is very hungry`);
      }
     }

       sleepBtn.addEventListener("click", () => {
         this.interval = setInterval(startTimer, 20);
         document.getElementById("sbtn").classList.add("hide")
         document.getElementById("btn-stop").classList.remove("hide")
       });

       buttonstop.addEventListener("click", () => {
        document.getElementById("sbtn").classList.remove("hide")
         clearInterval(this.interval);
         document.getElementById("btn-stop").classList.add("hide")
       });



}



}

const charOne = new Tamagotchi("Dino")

charOne.hideElement()
charOne.starttheGame()
charOne.getFood()
charOne.getinfo()
charOne.getSleep()



