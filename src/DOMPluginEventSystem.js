
import { allNativeEvents } from './EventRegister';
import * as SimpleEventPlugin from './SimpleEventPlugin';
import { dispatchEvent } from './ReactDOMEventListener';
import { getEventListenerSet } from './ReactDOMComponentTree';
import { addEventBubbleListener, addEventCaptureListener } from './EventListener';

//注册事件名称
SimpleEventPlugin.registerEvents();

export const nonDelegatedEvents = new Set(['scroll']);

//临听所有的绑定的插件
export function listenToAllSupportedEvents(container) {
    allNativeEvents.forEach(domEventName => {
        if (!nonDelegatedEvents.has(domEventName)) {
            listenToNativeEvent(domEventName, false, container);
        }
        listenToNativeEvent(domEventName, true, container);
    })
}

function listenToNativeEvent(domEventName, isCapturePhaseListener, rootContainerElement, eventSystemFlags = 0) {
    let listenerSet = getEventListenerSet(rootContainerElement);
    let listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
    if (listenerSet.has(listenerSetKey)) {
        addTrappedEventListener(
            rootContainerElement,
            domEventName,
            eventSystemFlags,
            isCapturePhaseListener
        )

    }
}

function addTrappedEventListener(rootContainerElement, domEventName, eventSystemFlags, isCapturePhaseListener) {
    let listener = dispatchEvent.bind(null,domEventName,eventSystemFlags,rootContainerElement);
    if (isCapturePhaseListener) {
        addEventCaptureListener(rootContainerElement, domEventName, listener);
    } else {
        addEventBubbleListener(rootContainerElement, domEventName, listener);
    }
}

function getListenerSetKey(domEventName, isCapturePhaseListener) {
    return `${domEventName}__${isCapturePhaseListener ? 'capture' : 'bubble'} `;
}

export function dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,targetInst,targetContainer) {
    let nativeEventTarget = nativeEvent.target;
    let dispatchQueue = [];
    SimpleEventPlugin.extractEvents(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        eventSystemFlags,
        targetContainer
    )
}

export function accumulateSinglePhaseListeners() {
    
}