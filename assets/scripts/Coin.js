//the class should have a state property and methods flip(), tostring(),toHTML()
//inside each method add console.log 
//your coins calss constructor function should recieve an InitialState parameter and use this to set this.state property 
//in main.js define and console.log three coins
//const coin1 = new Coin(1)
// const coin2 = new Coin(0)
// const coin3 = new Coin(1)
// console.log({ coin1, coin2, coin3 })
//create a fourth coin instance just like the above


class Coin {
constructor(InitialState){
       this.state = InitialState
   }
   flip(){
console.log("coin.flip() has been invoked.")
   }
   toString(){
console.log("coin.toString() has been invoked.")
   }
   toHTML(){
console.log("coin.toHTML() has been invoked.")
   }
}

