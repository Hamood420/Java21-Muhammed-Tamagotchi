export class Tamagotchi {
  #Hungerlevel = 5;
  #Happinesslevel = 5;
  #Name;
  #Type;

  #HungerInterval;
  #HappinessInterval;
  
  constructor(Type, Name) {
    this.#Name = Name;
    this.#Type = Type;
    console.log(this.#Type, this.#Name);
  }

  getType(){
    return this.#Type;
  }

  getName(){
    return this.#Name;
  }

  getHappinesslevel() {
    return this.#Happinesslevel;
  }

  getHungerlevel() {
    return this.#Hungerlevel;
  }

  hungerDrain() {
   this.#Happinesslevel = setInterval(() => {
      if (this.#Hungerlevel < 10) {
        this.#Hungerlevel +=1;
        document.querySelector("#Hunger").innerText = this.#Hungerlevel;
        this.ripTamagotchi();
      }
      if  (this.#Hungerlevel == 10) {
        var Refresh = confirm("Your Tamagotchi was too hungry and died. Try again");
      if (Refresh)
	{
			setTimeout("location.reload(true);",4000);
	}
      }
    }, 4000);
    }

    happinessDrain() {
    this.#HungerInterval = setInterval(() => {
        if (this.#Happinesslevel > 0) {
          this.#Happinesslevel -= 1;
          document.querySelector("#Happy").innerText = this.#Happinesslevel;
          this.ripTamagotchi();
        }
        if (this.#Happinesslevel == 0) {
          var Refresh = confirm("Your Tamagotchi died because of low happiness. Try again");
        if (Refresh)
    {
        setTimeout("location.reload(true);",4000);
        clearInterval(this.#HungerInterval, this.#HappinessInterval);
    }
        }
      }, 4000);
    }
  
    restartTheGame() {
      if (this.#Happinesslevel == 0 || this.#Hungerlevel == 10) {
        location.reload();
      }
    }
  
    Eat() {
      this.#Hungerlevel -= 1;
      console.log(this.#Hungerlevel);
    }
  
    Play() {
      this.#Happinesslevel += 1;
      console.log(this.#Happinesslevel);
    }
  

    ripTamagotchi () {
      if (this.#Hungerlevel == 10 || this.#Happinesslevel == 0) {
        document.querySelector("#status").innerText = "dead";  
        return true;
      } else {
        return false;
      }
    }
}