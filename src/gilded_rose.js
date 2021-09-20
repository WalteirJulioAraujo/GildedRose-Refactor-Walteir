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
  
  if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
    if (item.quality > 0) {
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        decreaseQuality(item);
      }
    }
  } else {
    if (item.quality < 50) {
     increaseQuality(item);
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
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
  if (item.name !== 'Sulfuras, Hand of Ragnaros') {
    item.sellIn --;
  }
  if (item.sellIn < 0) {
    if (item.name !== 'Aged Brie') {
      if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            decreaseQuality(item);
          }
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

function increaseQuality(item){
  item.quality ++;
};
function decreaseQuality(item){
  item.quality --;
}

module.exports = {
  Item,
  Shop
}