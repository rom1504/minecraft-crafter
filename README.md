# minecraft-crafter
[![NPM version](https://badge.fury.io/js/minecraft-crafter.svg)](http://badge.fury.io/js/minecraft-crafter)
[![Build Status](https://img.shields.io/circleci/project/rom1504/minecraft-crafter/master.svg)](https://circleci.com/gh/rom1504/minecraft-crafter)
[![Tonic](https://img.shields.io/badge/tonic-try%20it-blue.svg)](https://tonicdev.com/npm/minecraft-crafter)

Tells you how to get any item by crafting in minecraft

## Example

```js
const findItemOrBlockByName=require("minecraft-data")("1.8").findItemOrBlockByName;
const niceCraft=require("minecraft-crafter").niceCraft;
const craft=require("minecraft-crafter").craft;

console.log(niceCraft(craft({id:findItemOrBlockByName("stone_pickaxe").id,count:1})));
```

Will output "Get 3 Cobblestone, 1 Wood then craft in order 4 Wood Planks, 4 Stick, 1 Stone Pickaxe"

## Documentation

 * See [doc/history.md](doc/history.md)