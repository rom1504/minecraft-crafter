const niceCraft=require("minecraft-crafter").niceCraft;
const craft=require("minecraft-crafter").craft;
const blocks=require("minecraft-data")("1.8").blocksArray;
const items=require("minecraft-data")("1.8").itemsArray;


describe("craft everything",()=> {
  blocks.concat(items).forEach(item =>
    it("craft "+item.name,() => console.log(niceCraft(craft({id:item.id,count:1})))));
});