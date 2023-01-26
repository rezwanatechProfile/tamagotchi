

class Tamagotchi {
  constructor() {
    this.name = "";
    this.age = 1;
    this.interval;
    this.value = 0;
    this.hungerValue = 0;
    this.maxValue = 10;
    this.boredom = 0;
    this.funValue = 0;
  }

  gethungerValue() {
    return this.hungerValue;
  }


  displayResult(result){
    const resultDiv = document.querySelector(".resultDiv")
    resultDiv.innerHTML = result
  }

  getAge() {
    let counter = 0;
    const age = document.querySelector('.age')
    const age1 = document.querySelector('.age1')

    setInterval(() => {
      if(counter === 35){
        clearInterval()
      } else{
        counter += 1
        this.age = counter
        age.innerHTML = this.age
        age1.innerHTML = this.age
      }

    }, 1500)
  }

  getValue() {
    return this.value;
  }

  starttheGame() {
    const stGame = document.getElementById("startBtn");

    stGame.addEventListener("click", () => {
      this.getName();
      this.getinfo();
      this.getAge()
      this.changeWidth()
      document.querySelector(".img-1").classList.remove("hide");
      document.querySelector(".child-div").classList.remove("hide")
      stGame.classList.add("hide");

    });
  }

  hideElement() {
    document.getElementById("btn-stop").classList.add("hide");
    document.getElementById("foodStop-btn").classList.add("hide");
    document.querySelector(".img-1").classList.add("hide");
    document.querySelector(".img-2").classList.add("hide");
    document.querySelector(".img-3").classList.add("hide");
    document.querySelector(".img-4").classList.add("hide");
    document.querySelector(".img-5").classList.add("hide");
    document.querySelector(".img-6").classList.add("hide");
    document.getElementById("stopPlay").classList.add("hide");
    document.getElementById("restartBtn").classList.add("hide")

    document.querySelector(".child-div").classList.add("hide")


  }

  getName() {
    this.name = prompt("What is name of your panda: ");
    return this.name;
  }

  getinfo() {
    // const infoBtn = document.getElementById("ibtn");
    // const newDiv = document.createElement("div");
    this.displayResult(`Name of the player is ${this.name}`);

  }

  resetButton = () => {
    const restartBtn = document.getElementById("restartBtn")

    restartBtn.addEventListener("click", ()=> {
      location.reload()
      stGame.classList.add("hide");
      this.getName();
      this.getinfo();
      this.getAge()
      this.changeWidth()
      document.querySelector(".img-1").classList.remove("hide");

    })


  }



  changeWidth() {
    const progress1 = document.querySelector(".progress-bar-1");
    const progress2 = document.querySelector(".progress-bar-2");
    const progress3 = document.querySelector(".progress-bar-3");
    const progress4 = document.querySelector(".progress-bar-4");

    progress1.style.width = `${(this.hungerValue / this.maxValue) * 100}%`;
    progress1.innerText = `${Math.ceil((this.hungerValue / this.maxValue) * 100)}%`;

    progress2.style.width = `${(this.value / this.maxValue) * 100}%`;
    progress2.innerText = `${Math.ceil((this.value / this.maxValue) * 100)}%`;

    progress3.style.width = `${(this.boredom / this.maxValue) * 100}%`;
    progress3.innerText = `${Math.ceil((this.boredom/ this.maxValue) * 100)}%`;

    progress4.style.width = `${(this.funValue / this.maxValue) * 100}%`;
    progress4.innerText = `${Math.ceil((this.funValue / this.maxValue) * 100)}%`;
  }


  getFood() {
    // let hvalue = 0;

    const foodStopBtn = document.getElementById("foodStop-btn");
    const foodBtn = document.getElementById("fbtn");
    let counter = 0
    let cc = 0

    foodBtn.addEventListener("click", () => {


      this.interval = setInterval(() => {



        if(counter === 100){
          clearInterval()
        } else{
          counter += 1
          this.funValue = counter
          this.hungerValue = counter
          this.value = counter
          this.boredom = counter
        }

//decrease fun
        if (counter < this.maxValue) {
            this.funValue++
          this.changeWidth();
          this.displayResult(`${this.name} is having fun while eating. To increase fun he needs to play.`);
        }else if (counter === this.maxValue) {
          this.displayResult(`${this.name} is satisfied with the food.`);
        }

//decrease hunger
        if(counter < this.maxValue) {
          while(this.hungerValue > 0){
            this.hungerValue--
          }
          this.changeWidth()
          this.displayResult(`${this.name} is enjoying his meal`);
        }

//increase energy
        if(counter < this.maxValue) {
            this.value++
            this.changeWidth()
            this.displayResult(`${this.name} is gaining energy. Ready sleep or play.`);
        } else if (this.value === this.maxValue) {
          this.displayResult(`${this.name} has gained energy from food. Ready to play another game`);
        }
//increase boredom
        if(counter < this.maxValue){
            while(this.boredom > 0){
            this.boredom--
          }
            this.changeWidth()
            this.displayResult(`${this.name} is having fun eating food.`);
          }

      }, 1000);

      document.querySelector(".img-1").classList.add("hide");
      document.querySelector(".img-2").classList.remove("hide");
      document.getElementById("fbtn").classList.add("hide");
      document.getElementById("foodStop-btn").classList.remove("hide");


    });

    foodStopBtn.addEventListener("click", () => {
      document.getElementById("fbtn").classList.remove("hide");
      document.querySelector(".img-1").classList.remove("hide");
      document.querySelector(".img-2").classList.add("hide");
      clearInterval(this.interval);
      document.getElementById("foodStop-btn").classList.add("hide");

    });

    return this.value
  }

  ///Get sleep

  getSleep() {

    let counter = 0
    const buttonstop = document.getElementById("btn-stop");
    const sleepBtn = document.getElementById("sbtn");


    sleepBtn.addEventListener("click", () => {
      document.querySelector(".light-change").classList.add("dark-light")
      document.querySelector(".img-3").classList.remove("hide");
      document.querySelector(".img-1").classList.add("hide");
      document.getElementById("sbtn").classList.add("hide");
      document.getElementById("btn-stop").classList.remove("hide");

      this.interval = setInterval(() => {

        if(counter === 100){
          clearInterval()
        } else{
          counter += 1
          this.funValue = counter
          this.hungerValue = counter
          this.value = counter
          this.boredom = counter
        }
//decrease fun
        if (counter < this.maxValue) {
          while(this.funValue > 1){
            this.funValue--
          }
          this.changeWidth();
          this.displayResult(`${this.name} needs to play.`);
        }

//increase hunger
        if(counter < this.maxValue) {
          this.hungerValue++
          this.changeWidth()
          this.displayResult(`${this.name} is feeling hungry`);
        }else if (this.hungerValue === this.maxValue) {
          this.petDied()
          this.displayResult(`${this.name} is very hungry. Feed him.`);
        }
//increase energy
        if(counter < this.maxValue) {
            this.value++
            this.changeWidth()
            this.displayResult(`${this.name} is gaining energy from sleep`);
        }else if (counter === this.maxValue) {
          this.displayResult(`${this.name} has gained energy from sleep. Ready to play another game`);
        }

//increase boredom
        if(counter < this.maxValue){
            this.boredom += 0.5
            this.changeWidth()
            this.displayResult(`${this.name} is bore`);
          }else if (counter === this.maxValue) {
            this.petDied()
            this.displayResult(`${this.name} is very bore. Let him play.`);
          }

      }, 1000)

    });

    buttonstop.addEventListener("click", () => {
      document.getElementById("sbtn").classList.remove("hide");
      document.querySelector(".light-change").classList.remove("dark-light")
      document.querySelector(".img-3").classList.add("hide");
      document.querySelector(".img-1").classList.remove("hide");
      clearInterval(this.interval);
      document.getElementById("btn-stop").classList.add("hide");
 
    });
  }

  startPlay() {
    let counter = 0
    let cc = 0
    const stopPlay = document.getElementById("stopPlay");
    const startPlay = document.getElementById("pbtn");


    startPlay.addEventListener("click", () => {
      document.querySelector(".img-3").classList.add("hide");
      document.querySelector(".img-1").classList.add("hide");
      document.querySelector(".img-4").classList.remove("hide");
      document.getElementById("pbtn").classList.add("hide");
      document.getElementById("stopPlay").classList.remove("hide");
     

      this.interval = setInterval(() => {

        if(counter === 100){
          clearInterval()
        } else{
          counter += 1
          this.funValue = counter
          this.hungerValue = counter
          this.value = counter
          this.boredom = counter
        }

        if (this.funValue < this.maxValue) {
          this.funValue++
          this.changeWidth();
          this.displayResult(`${this.name} is enjoying the game. ${this.name} is loosing his energy. He needs food. Happy.`);

        } else if (this.funValue === this.maxValue) {
          this.displayResult(`${this.name} enjoyed the game. He lost his energy. Feed him.He is not bore anymore.`);
        }

        if(counter < this.maxValue) {
          this.hungerValue++
          this.changeWidth()

        }else if (this.hungerValue === this.maxValue) {
          this.petDied()
          this.displayResult(`${this.name} is very hungry`);
        }

        if(counter < this.maxValue) {
          while(this.value > 1){
            this.value--
          }
          this.changeWidth()
          this.displayResult(`${this.name} has loosing his energy`);
        }

        if(counter < this.maxValue) {
          while(this.boredom > 1){
            this.boredom--
          }
            this.changeWidth()
            this.displayResult(`${this.name} is having fun. He is not bore anymore`);
          }

      }, 1000)


    })

    stopPlay.addEventListener("click", () => {
      document.getElementById("pbtn").classList.remove("hide");
      document.getElementById("stopPlay").classList.add("hide");
      document.querySelector(".img-3").classList.add("hide");
      document.querySelector(".img-1").classList.remove("hide");
      document.querySelector(".img-4").classList.add("hide");
      clearInterval(this.interval);

    });
  }

  petDied(){

    if(this.hungerValue === 10 || this.boredom === 10){
      clearInterval(this.interval);
      this.displayResult(`${this.name} died.`)

      document.querySelector(".img-6").classList.remove("hide");
      document.querySelector(".img-1").classList.add("hide");
      document.querySelector(".img-2").classList.add("hide");
      document.querySelector(".img-3").classList.add("hide");
      document.querySelector(".img-4").classList.add("hide");
      document.querySelector(".light-change").classList.remove("dark-light")
      document.getElementById("restartBtn").classList.remove("hide")
      document.getElementById("sbtn").disabled = true
      document.getElementById("pbtn").disabled = true
      document.getElementById("fbtn").disabled = true
      document.getElementById("foodStop-btn").disabled = true
      document.getElementById("stopPlay").disabled = true
      document.getElementById("btn-stop").disabled = true
    }
  }

}

const charOne = new Tamagotchi("Dino")

charOne.resetButton()
charOne.starttheGame()
charOne.hideElement()
charOne.getFood()
charOne.getinfo()
charOne.getSleep()
charOne.startPlay()


console.log(charOne.getValue())



