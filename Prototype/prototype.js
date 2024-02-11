
//cosntructor without class
let Ferrari = function(name, speed, color, price) {
    
    this.name = name;
    this.speed = speed;
    this.color = color;
    this.price = price;

    //private declaration
    let discountPrice = 10000;

    //private declaration
    let calculateOfficialPrice = function() {
        return discountPrice + price;
    }

    this.getName = function() {
        return this.name;
    }
    
    this.getOfficialPrice = function() {
        return calculateOfficialPrice();
    }
    
};
Ferrari.prototype.getSpeed = function() {
    return this.speed;
}
Ferrari.prototype.getColor = function() {
    return this.color;
}

let f1 = new Ferrari('F430', 6000, 'Red', 6000);
console.log(f1.getName() + ' ' + f1.getSpeed() + ' ' + f1.getColor());
console.log('Official Price is: ' + f1.getOfficialPrice());