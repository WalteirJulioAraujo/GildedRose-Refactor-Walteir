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
  
  if (!isAgedBrie(item) && !isBackstagePasses(item)) {
    if (item.quality > 0) {
      decreaseQuality(item);
    }
  } else {
    if (item.quality < 50) {
     increaseQuality(item);
      if (isBackstagePasses(item)) {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
           increaseQuality(item);
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
           increaseQuality(item);
          }
        }
      }
    }
  }
  
  decreaseSellIn(item);
  
  if (item.sellIn < 0) {
    if (!isAgedBrie(item)) {
      if (!isBackstagePasses(item)) {
        if (item.quality > 0) {
          decreaseQuality(item);
        }
      } else {
        item.quality = 0;
      }
    } else {
      if (item.quality < 50) {
       increaseQuality(item);
      }
    }
  }
}

function isSulfuras(item){
  return item.name === "Sulfuras, Hand of Ragnaros";
}
function isBackstagePasses(item){
  return item.name === "Backstage passes to a TAFKAL80ETC concert"
}
function isAgedBrie(item){
  return item.name === "Aged Brie";
}

function increaseQuality(item){
  item.quality ++;
};
function decreaseQuality(item){
  item.quality --;
}
function decreaseSellIn(item){
  item.sellIn --;
}

module.exports = {
  Item,
  Shop
}