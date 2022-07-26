import { Tamagotchi } from "./moduler/Tamagotchi.js";

document.querySelector("#submitName").addEventListener("click", startGame);

function startGame(e) {
    e.preventDefault();
    var myTamagotchi;

    let TamagotchiName = document.querySelector("#enterName").value;
    let TamagotchiTypeName = document.querySelector("#Tamagotchitype").value;

    myTamagotchi = new Tamagotchi(TamagotchiTypeName,TamagotchiName);


    myTamagotchi.hungerDrain();
    myTamagotchi.happinessDrain();

    function FeedMyTamagotchi(){
    myTamagotchi.Eat();
    document.querySelector("#Hunger").innerText = myTamagotchi.getHungerlevel();
    
    }    
    
    function HaveFunTamagotchi() {
    myTamagotchi.Play();
    document.querySelector("#Happy").innerText = myTamagotchi.getHappinesslevel();
    }

    document.querySelector("#Eat").addEventListener("click", FeedMyTamagotchi);
    document.querySelector("#Play").addEventListener("click", HaveFunTamagotchi);

    //myTamagotchi.ripTamagotchi();
    //myTamagotchi.restartTheGame();
}