class CaffeineBeverage {
    constructor() {
    }
    prepareRecipe() {
        this.boilWater()
        this.pourInCup()
        this.Brew()
        if (this.customerWantsCondiments) {
            this.addCondiments()
        }
    }
    boilWater() {
        console.log('把水烧开')
    }
    pourInCup() {
        console.log('把饮料到杯子里')
    }
    Brew() {
        console.log('该方法必须重写')
    }
    addCondiments() {
        console.log('该方法必须重写')
    }
    //默认加上小料
    customerWantsCondiments() {
        return true
    }
}

class Coffee extends CaffeineBeverage {
    constructor() {
        super()
    }
    Brew() {
        console.log("从咖啡机想咖啡倒进去!")
    }
    addCondiments() {
        console.log('添加糖和牛奶')
    }
    customerWantsCondiments() {
        return confirm("你想添加糖和牛奶吗？")
    }
}
var coffee = new Coffee()
coffee.prepareRecipe()