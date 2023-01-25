

class Tamagotchi {
  constructor() {
    this.name = "";
    this.age = 1;
    this.interval;
    this.seconds = 0;
    this.tens = 0;
    this.mins = 0;
    this.value = 0;
    this.hungerValue = 0;
    this.maxValue = 10;
    this.arr = [];
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

    }, 9000)
  }

  getValue() {
    return this.value;
  }

  starttheGame() {
    const stGame = document.getElementById("startBtn");

    stGame.addEventListener("click", () => {
      this.getName();
      this.getinfo()
      document.querySelector(".img-1").classList.remove("hide");
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
    document.getElementById("stopPlay").classList.add("hide");

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

  changeWidth() {
    const progress1 = document.querySelector(".progress-bar-1");
    const progress2 = document.querySelector(".progress-bar-2");
  
    const progress3 = document.querySelector(".progress-bar-3");
    const progress4 = document.querySelector(".progress-bar-4");

    progress1.style.width = `${(this.hungerValue / this.maxValue) * 100}%`;
    progress1.innerText = `${Math.ceil((this.hungerValue / this.maxValue) * 100)}%`;

    progress2.style.width = `${(this.value / this.maxValue) * 100}%`;
    progress2.innerText = `${Math.ceil((this.value / this.maxValue) * 100)}%`;

    progress3.style.width = `${(this.value / this.maxValue) * 100}%`;
    progress3.innerText = `${Math.ceil((this.value / this.maxValue) * 100)}%`;

    progress4.style.width = `${(this.value / this.maxValue) * 100}%`;
    progress4.innerText = `${Math.ceil((this.value / this.maxValue) * 100)}%`;
  }


  getFood() {
    // let hvalue = 0;

    const foodStopBtn = document.getElementById("foodStop-btn");
    const foodBtn = document.getElementById("fbtn");
    let counter = 0
    let cc = 0

    foodBtn.addEventListener("click", () => {


      this.interval = setInterval(() => {
        if (counter == 10){
          clearInterval()
        } else {
          counter += 1
          cc -= 1
        }

        this.value = counter
        this.hungerValue = cc

        if (this.value < this.maxValue) {
          this.value ++;
          this.changeWidth()
        } else if (this.finalValue === this.maxValue) {
          this.displayResult(`Your pet ate enough food`);
        }

        if (this.hungerValue < this.maxValue || this.hungerValue === this.maxValue) {
          this.hungerValue--
          this.hungerValue = 0
          this.changeWidth();
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

      this.interval = setInterval(() => {
        if (counter == 10){
          clearInterval()
        } else {
          counter += 1
        }

        this.value = counter
        this.hungerValue = counter

        if (this.value < this.maxValue) {
          this.value++;
          this.changeWidth()
        } else if (this.finalValue === this.maxValue) {
          this.displayResult(`Your pet has 100% of energy`);
        }

        if (this.hungerValue < this.maxValue) {
          this.hungerValue++;
          this.changeWidth();
        } else if (this.hungerValue === this.maxValue) {
          this.displayResult(`Your pet is very hungry`);
        }

      }, 1000)


      document.getElementById("sbtn").classList.add("hide");
      document.getElementById("btn-stop").classList.remove("hide");
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
    const stopPlay = document.getElementById("stopPlay");
    const startPlay = document.getElementById("pbtn");


    startPlay.addEventListener("click", () => {
      document.querySelector(".img-3").classList.add("hide");
      document.querySelector(".img-1").classList.add("hide");
      document.querySelector(".img-4").classList.remove("hide");
      document.getElementById("pbtn").classList.add("hide");
      document.getElementById("stopPlay").classList.remove("hide");

      this.interval = setInterval(() => {
        if (counter == 10){
          clearInterval()
        } else {
          counter += 1
        }

        this.value = counter
        this.hungerValue = counter

        if (this.value < this.maxValue) {
          this.value++;
          this.changeWidth()
        } else if (this.finalValue === this.maxValue) {
          this.displayResult(`Your pet has 100% of energy`);
        }

        if (this.hungerValue < this.maxValue) {
          this.hungerValue++;
          this.changeWidth();
        } else if (this.hungerValue === this.maxValue) {
          this.displayResult(`Your pet is very hungry`);
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

}

const charOne = new Tamagotchi("Dino")

charOne.starttheGame()
charOne.hideElement()
charOne.getAge()
charOne.getFood()
charOne.getinfo()
charOne.getSleep()
charOne.startPlay()

console.log(charOne.getValue())



