function increaseQuality(item){
    item.quality ++;
  };
  function decreaseQuality(item){
    item.quality --;
  }
  function decreaseSellIn(item){
    item.sellIn --;
}
function qualityTo(item,value){
  item.quality = value;
}

module.exports = {
    increaseQuality,
    decreaseQuality,
    decreaseSellIn,
    qualityTo
}