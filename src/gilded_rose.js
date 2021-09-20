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
    for (let i = 0; i < this.items.length; i++) {

      const itemName = this.items[i].name;
      const itemQuality = this.items[i].quality;

      if (itemName != 'Aged Brie' && itemName != 'Backstage passes to a TAFKAL80ETC concert') {
        if (itemQuality > 0) {
          if (itemName != 'Sulfuras, Hand of Ragnaros') {
            itemQuality--;
          }
        }
      } else {
        if (itemQuality < 50) {
          itemQuality++;
          if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (itemQuality < 50) {
                itemQuality++;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (itemQuality < 50) {
                itemQuality++;
              }
            }
          }
        }
      }
      if (itemName != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn--;
      }
      if (this.items[i].sellIn < 0) {
        if (itemName != 'Aged Brie') {
          if (itemName != 'Backstage passes to a TAFKAL80ETC concert') {
            if (itemQuality > 0) {
              if (itemName != 'Sulfuras, Hand of Ragnaros') {
                itemQuality--;
              }
            }
          } else {
            itemQuality -= itemQuality;
          }
        } else {
          if (itemQuality < 50) {
            itemQuality++;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
