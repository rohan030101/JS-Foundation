function person(name,age){
    this.name = name ;
    this.age = age;
}

person.prototype.greet = function(){
    return "Hello, " + this.name;
};

var person1 = new person("Rohan",23);
console.log(person1.greet());
console.log(person1.age);