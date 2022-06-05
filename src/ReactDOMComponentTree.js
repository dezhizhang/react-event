
const randomKey = Math.random().toString(36).slice(2);

const internalEventHandlersKey = '_reactEvents$' + randomKey;

export function getEventListenerSet(node) {
    let elementListenerSet = node[internalEventHandlersKey];
    if(!elementListenerSet) {
        elementListenerSet = node[internalEventHandlersKey] = new Set();
    }
    return elementListenerSet;
}