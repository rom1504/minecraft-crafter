'use strict';

const Recipe=require("prismarine-recipe")("1.8").Recipe;
const findItemOrBlockById=require("minecraft-data")("1.8").findItemOrBlockById;

function craft(item)
{
  const id=item.id;
  const count=item.count;
  const recipes=Recipe.find(id);
  if(recipes.length==0)
    return {itemsRequired:[item],recipesToDo:[]};
  const firstRecipe=recipes[0];
  const recipeApplications=Math.ceil(count/firstRecipe.result.count);
  const itemsNeeded=firstRecipe.delta
    .filter(e => e.id!=id)
    .map(e => ({id:e.id,count:-recipeApplications*e.count}));

  return itemsNeeded.reduce((acc,item) => {
    const r=craft(item);
    return {itemsRequired:acc.itemsRequired.concat(r.itemsRequired),recipesToDo:r.recipesToDo.concat(acc.recipesToDo)};
  },{itemsRequired:[],recipesToDo:[{recipeApplications:recipeApplications,recipe:firstRecipe}]});
}

function niceCraft(craftResult)
{
  let text="";
  text+="Get "+craftResult.itemsRequired.map(item => item.count+" "+findItemOrBlockById(item.id).displayName).join(", ");
  text+=" then craft in order "+craftResult.recipesToDo.map(recipe => recipe.recipeApplications*recipe.recipe.result.count+" "+findItemOrBlockById(recipe.recipe.result.id).displayName).join(", ");
  return text;
}

module.exports={
  craft:craft,
  niceCraft:niceCraft
};