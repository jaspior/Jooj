gdjs.evtsExt__Game__Record = {};
gdjs.evtsExt__Game__Record.GDObjectObjects1= [];

gdjs.evtsExt__Game__Record.conditionTrue_0 = {val:false};
gdjs.evtsExt__Game__Record.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Game__Record.userFunc0x6bc7a8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
//recebe o objeto
const object = eventsFunctionContext.getObjects("Object")[0]


let data = object.getVariables().get("record_data").getAsString()

if (data === "0") {
    data = []
}

const frame = {
    xPos: object.getX(),
    yPos: object.getY(),
    animationName: object.getAnimationName(),
    animationFrame: object.getAnimationFrame()
}

// Don't store stationary frames
//nosso teste n tem idle, então isso n funciona
if (frame.animationName === "idle") {
    return
}

// Add the frame to the end of the array
data.push(frame)

//atualiza. Ver se da pra por uma variavel aqui que muda com o tempo
if (data.length > 50) {
    data.shift()
}
object.getVariables().get("record_data").setString(data)
};
gdjs.evtsExt__Game__Record.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Game__Record.userFunc0x6bc7a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Game__Record.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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

gdjs.evtsExt__Game__Record.GDObjectObjects1.length = 0;

gdjs.evtsExt__Game__Record.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

