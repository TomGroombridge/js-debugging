class Frog {
  constructor(){
    this.name = 'kevnin' 
    this.x = 0;
    this.y = 0;
    this.hungry = false;
  }

  greet(){
    return 'hello my name is this.name'
  }

  jump(){
    this.y = 1
  }

  eat() {
    this.hungry = true
  }


}