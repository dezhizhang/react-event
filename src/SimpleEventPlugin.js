import { registerSimpleEvents, topLevelEventsToReactNames } from "./DOMEventProperties";

function extractEvents(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer) {
    let reactName = topLevelEventsToReactNames.get(domEventName);
    let SyntheticEventCtor;
    let reactEventType = domEventName;
    switch(domEventName) {
        case 'click':
            SyntheticEventCtor = SyntheticMouseEvent;
            default:
                break;
    }
}



export { registerSimpleEvents as registerEvents,extractEvents };
