const {isSulfuras,isBackstagePasses,isAgedBrie,isNormalItem} = require("./verification")
const { agedBrieRules,backstageRules,normalRules } = require("./controllers");
const { decreaseSellIn } = require("./helpers");

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn; // numero de dias pra vende-lo
    this.quality = quality; //quao valioso ele é
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {

    this.items.forEach(updateQualityItem);
    
    return this.items;
  }
}

function updateQualityItem(item){

  if(isSulfuras(item)) return;

  if(isAgedBrie(item)){
    agedBrieRules(item);
  }
  
  if (isBackstagePasses(item)) {
    backstageRules(item);
  }

  if(isNormalItem(item)){
    normalRules(item);
  }
  
  decreaseSellIn(item);
  
}

module.exports = {
  Item,
  Shop
}