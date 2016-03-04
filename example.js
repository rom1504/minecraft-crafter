const findItemOrBlockByName=require("minecraft-data")("1.8").findItemOrBlockByName;
const niceCraft=require("minecraft-crafter").niceCraft;
const craft=require("minecraft-crafter").craft;

console.log(niceCraft(craft({id:findItemOrBlockByName("stone_pickaxe").id,count:1})));
