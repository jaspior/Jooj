gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1_1final = [];

gdjs.GameCode.GDPlayerObjects2_1final = [];

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDGrassObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDPlayerObjects2_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);

for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);

for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition1IsTrue_1.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2_1final, gdjs.GameCode.GDPlayerObjects2);
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("walking");
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDPlayerObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDPlayerObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects1_1final.indexOf(gdjs.GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects1_1final.push(gdjs.GameCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition1IsTrue_1.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects1_1final.indexOf(gdjs.GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects1_1final.push(gdjs.GameCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects1_1final, gdjs.GameCode.GDPlayerObjects1);
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationName("Jooj");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "r"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{gdjs.evtsExt__Game__Record.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{gdjs.evtsExt__Game__Jooj.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDGrassObjects3.length = 0;

gdjs.GameCode.eventsList3(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
