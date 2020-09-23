gdjs.MenuCode = {};
gdjs.MenuCode.GDbotaoObjects1= [];
gdjs.MenuCode.GDbotaoObjects2= [];
gdjs.MenuCode.GDbotaoObjects3= [];
gdjs.MenuCode.GDinstrucaoObjects1= [];
gdjs.MenuCode.GDinstrucaoObjects2= [];
gdjs.MenuCode.GDinstrucaoObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbotaoObjects2Objects = Hashtable.newFrom({"botao": gdjs.MenuCode.GDbotaoObjects2});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbotaoObjects1Objects = Hashtable.newFrom({"botao": gdjs.MenuCode.GDbotaoObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("botao"), gdjs.MenuCode.GDbotaoObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbotaoObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbotaoObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDbotaoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbotaoObjects2[i].setAnimationName("hover");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao"), gdjs.MenuCode.GDbotaoObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbotaoObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbotaoObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDbotaoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbotaoObjects1[i].setAnimationName("nothover");
}
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList1(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDbotaoObjects1.length = 0;
gdjs.MenuCode.GDbotaoObjects2.length = 0;
gdjs.MenuCode.GDbotaoObjects3.length = 0;
gdjs.MenuCode.GDinstrucaoObjects1.length = 0;
gdjs.MenuCode.GDinstrucaoObjects2.length = 0;
gdjs.MenuCode.GDinstrucaoObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
