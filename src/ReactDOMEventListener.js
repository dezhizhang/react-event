import { getClosestInstanceFromNode } from "./ReactDOMComponentTree";



export function dispatchEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent) {
    let nativeEventTarget = nativeEvent.target || nativeEvent.srcElement || window;
    let targetInst = getClosestInstanceFromNode(nativeEventTarget);


    console.log(targetInst);
}