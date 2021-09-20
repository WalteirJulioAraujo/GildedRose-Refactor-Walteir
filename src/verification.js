function sellIn(item,day){
    return item.sellIn < day;
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

  module.exports = {
    sellIn,
    isQualityMin,
    isQualityMax,
    isExpired,
    isSulfuras,
    isBackstagePasses,
    isAgedBrie,
    isNormalItem
}