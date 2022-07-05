// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }

  get diameter(){
    return this.radius * 2;
  }

  get circumference(){
    return Math.PI*this.radius*2;
  }

  get area(){
    return Math.PI*Math.pow(this.radius, 2)
  }

  set diameter(value){
    this.radius = value/2;
  }

  set circumference(value1){
    this.radius = value1/(Math.PI*2);
  }

  set area(value2){
    this.radius = Math.sqrt(value2 / Math.PI );
  }

}