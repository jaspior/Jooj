gdjs.evtsExt__Game__Jooj = {};
gdjs.evtsExt__Game__Jooj.GDObjectObjects1= [];

gdjs.evtsExt__Game__Jooj.conditionTrue_0 = {val:false};
gdjs.evtsExt__Game__Jooj.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Game__Jooj.userFunc0x684bd0 = function(runtimeScene, eventsFunctionContext) {
"use strict";

const object = eventsFunctionContext.getObjects("Object")[0]

//pega o record data
let data = object.getVariables().get("record_data").getAsString()

//se n tem data n tem data
if (data.length === 0 || data === "0") {
    return
}

// Get and remove the newest/last frame in the array 
const frame = data.pop()

// Apply the frame to the scene
object.setX(frame.xPos)
object.setY(frame.yPos)
object.setAnimationName(frame.animationName)
object.setAnimationFrame(frame.animationFrame)

object.getVariables().get("record_data").setString(data)
};
gdjs.evtsExt__Game__Jooj.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Game__Jooj.userFunc0x684bd0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Game__Jooj.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Game__Jooj.GDObjectObjects1.length = 0;

gdjs.evtsExt__Game__Jooj.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

