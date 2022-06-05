import {
  registerSimpleEvents,
  topLevelEventsToReactNames,
} from "./DOMEventProperties";
import { SyntheticMouseEvent } from "./SyntheticEvent";

function extractEvents(
  dispatchQueue,
  domEventName,
  targetInst,
  nativeEvent,
  nativeEventTarget,
  eventSystemFlags,
  targetContainer
) {
  let reactName = topLevelEventsToReactNames.get(domEventName);
  let SyntheticEventCtor;
  let reactEventType = domEventName;
  switch (domEventName) {
    case "click":
      SyntheticEventCtor = SyntheticMouseEvent;
      break;

    default:
      break;
  }
  let inCapturePhase = (eventSystemFlags & 4) !== 0;
  const listener = accumulateSinglePhaseListeners(
    targetInst,
    reactName,
    nativeEvent.type,
    inCapturePhase
  );

  if (listener.length > 0) {
    // 如果有监听就创建一个新的对像
    const event = new SyntheticEventCtor(
      reactName,
      reactEventType,
      targetInst,
      nativeEvent,
      nativeEventTarget
    );
    dispatchQueue.push({
      event,
      listener,
    });
  }
}

export { registerSimpleEvents as registerEvents, extractEvents };
