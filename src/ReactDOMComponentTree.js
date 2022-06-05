
const randomKey = Math.random().toString(36).slice(2);

export const internalPropsKey = '__reactProps$' + randomKey;

export const internalInstanceKey = '__reactFiber$' + randomKey; 

export const internalEventHandlersKey = '_reactEvents$' + randomKey;

export function getEventListenerSet(node) {
    let elementListenerSet = node[internalEventHandlersKey];
    if(!elementListenerSet) {
        elementListenerSet = node[internalEventHandlersKey] = new Set();
    }
    return elementListenerSet;
}