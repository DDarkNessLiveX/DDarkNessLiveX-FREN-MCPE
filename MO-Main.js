var PREFIX = "§e[§6Dioxyte-Ores§e]§r: ";

function newLevel(){
	clientMessage(PREFIX + "Coder par DDarkNessLiveX");
	}
//Textures - ID
/*
700 Epée Dioxyte / Dioxyte Sword [x]
701 Pioche Dioxyte / Dioxyte Pickaxe [x]
702 Hache Dioxyte / Dioxyte Axe [x]
703 Pelle Dioxyte / Dioxyte Shovel [x]
704 Houe Dioxyte / Dioxyte Hoe [x]

705 Marteau Dioxyte / Dioxyte Hammer []

706 Casque Dioxyte / Dioxyte Helmet []
707 Torse Dioxyte / Dioxyte Chestplate []
708 Jambières Dioxyte / Dioxyte Leggings []
709 Bottes Dioxyte / Dioxyte Boots []

750 Dioxyte / Dioxyte []
751 Minerai Dioxyte / Dioxyte Ore []
*/
//ID Item Officiel
var Stick = "280";
//ID Dioxyte_Mod
var Ore = "750";
//Textures de la Dioxyte Sword
var DS_Txtr = "dioxyte_sword";
var DS_Id = "700";

ModPE.setItem(DS_Id,DS_Txtr,0,"Dioxyte Sword");
Item.addShapedRecipe(DS_Id,1,0,[" d "," d "," s "],["d",Ore,0,"s",Stick,0]);

//Textures de la Dioxyte Pickaxe
var DP_Txtr = "dioxyte_pickaxe";
var DP_Id = "701";

ModPE.setItem(DP_Id,DP_Txtr,0,"Dioxyte Pickaxe");
Item.addShapedRecipe(DP_Id,1,0,["ddd"," s "," s "],["d",Ore,0,"s",Stick,0]);

//Textures de la Dioxyte Axe
var DA_Txtr = "dioxyte_axe";
var DA_Id = "702";

ModPE.setItem(DA_Id,DA_Txtr,0,"Dioxyte Axe");
Item.addShapedRecipe(DA_Id,1,0,[" dd"," sd"," s "],["d",Ore,0,"s",Stick,0]);

//Textures de la Dioxyte Shovel
var DSh_Txtr = "dioxyte_shovel";
var DSh_Id = "703";

ModPE.setItem(DSh_Id,DSh_Txtr,0,"Dioxyte Shovel");
Item.addShapedRecipe(DSh_Id,1,0,[" d "," s "," s "],["d",Ore,0,"s",Stick,0]);

//Textures de la Dioxyte Hoe
var DH_Txtr = "dioxyte_hoe";
var DH_Id = "704";

ModPE.setItem(DH_Id,DH_Txtr,0,"Dioxyte Hoe");
Item.addShapedRecipe(DH_Id,1,0,[" dd"," s "," s "],["d",Ore,0,"s",Stick,0]);

//Effect / Enchantment Item

var absorption = ;
var blindness = ;
var confusion = ;
var damageBoost = ;
var damageResistance = ;
var digSlowdown = ;
var digSpeed = ;
var fireResistance = ;
var harm = ;
var heal = ;
var healthBoost = ;
var hunger = ;
var invisibility = ;
var jump = ;
var movementSlowdown = ;
var movementSpeed = ;
var nightVision = ;
var poison = ;
var regeneration = ;
var saturation = ;
var waterBreathing = ;
var weakness = ;
var wither = ;

var Player = Player.getEntity();
function getCarriedItem(itemId,blockId){
	if(itemId==700){
		Entity.addEffect(Player);
		}
	else if(itemId!=700){
		Entity.removeAllEffects();
		}
	}
