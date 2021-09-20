const {sellIn,isQualityMin,isQualityMax,isExpired} = require("./verification");
const { increaseQuality,decreaseQuality,qualityTo } = require("./helpers");
function agedBrieRules(item) {
  if (isQualityMax(item)) return;
  increaseQuality(item);

  if (!isExpired(item)) return;

  if (isQualityMax(item)) return;
  increaseQuality(item);
}

function backstageRules(item) {
  if (isQualityMax(item)) return;
  increaseQuality(item);
  if (sellIn(item, 11)) {
    increaseQuality(item);
  }
  if (sellIn(item, 6)) {
    increaseQuality(item);
  }

  if (isExpired(item)) {
    qualityTo(item, 0);
  }
}

function normalRules(item) {
  if (isQualityMin(item)) {
    decreaseQuality(item);
  }
  if (isExpired(item)) {
    decreaseQuality(item);
  }
}

module.exports = {
    agedBrieRules,
    backstageRules,
    normalRules
}
