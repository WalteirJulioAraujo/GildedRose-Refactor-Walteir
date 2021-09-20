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
    if(isQualityMax(item)) return;
    increaseQuality(item);

    if(!isExpired(item)) return;

    if(isQualityMax(item)) return;
    increaseQuality(item);
  }
  
  if (isBackstagePasses(item)) {
    if(isQualityMax(item)) return;
    increaseQuality(item);
    if(item.sellIn < 11){
      increaseQuality(item);
    }
    if(item.sellIn < 6){
      increaseQuality(item);
    }

    if(!isExpired(item)) return;
    item.quality = 0
    
  }

  if(isNormalItem(item)){
    if (item.quality > 0) {
      decreaseQuality(item);
    }
    if(isExpired(item)){
      decreaseQuality(item);
    }
  }
  
  decreaseSellIn(item);
  
}

function isQualityMin(item){
  const minQuality = 0 ;
  return item.quality > 0;
}

function isQualityMax(item){
  const maxQuality = 50;
  return item.quality >= maxQuality;
}

function isExpired(item){
  return item.sellIn <= 0;
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
function isNormalItem(item){
  return !(isSulfuras(item) || isBackstagePasses(item) || isAgedBrie(item));
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