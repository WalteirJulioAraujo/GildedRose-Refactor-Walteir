const {Shop, Item} = require("../src/gilded_rose");

describe("Rules", function(){
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  it("should decrease the quality when it's expired", function() {
    const gildedRose = new Shop([new Item("foo", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
  it("should decrease the quality twice as fast when it's expired", function() {
    const gildedRose = new Shop([new Item("foo", 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });
  it("should decrease the quality when it's expired, but not be less than 0", function() {
    const gildedRose = new Shop([new Item("foo", 5, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
    gildedRose.updateQuality();
    const testQuality = gildedRose.updateQuality();
    expect(testQuality[0].quality).toBe(0);
  });
})

describe("Aged Brie", function() {
  it("should increases quality by one unit", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
});

describe("Sulfuras, Hand of Ragnaros", function() {
  it("should nothing change", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros",undefined,45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(45);
  });
});

describe("Backstage passes", function() {
  it("should increases by 2 units when the sale date is equal to or less than 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",8,20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });
  it("should increases by 3 units when the sale date is equal to or less than 5", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",4,20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });
  it("decrease The item's quality to 0 when the sale date has passed", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",0,20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
