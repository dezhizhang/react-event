
const randomKey = Math.random().toString(36).slice(2);

export const internalPropsKey = '__reactProps$' + randomKey;

export const internalInstanceKey = '__reactFiber$' + randomKey;

export const internalEventHandlersKey = '_reactEvents$' + randomKey;


//获取离原生最近的节点
export function getClosestInstanceFromNode(targetNode) {
    return targetNode[internalInstanceKey];
}

// 从真实dom节点找到属性对像
export function getFiberCurrentPropsFromNode(targetNode) {
    return targetNode[internalPropsKey];
}

export function getEventListenerSet(node) {
    let elementListenerSet = node[internalEventHandlersKey];
    if (!elementListenerSet) {
        elementListenerSet = node[internalEventHandlersKey] = new Set();
    }
    return elementListenerSet;
}