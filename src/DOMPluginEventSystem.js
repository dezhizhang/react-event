
import { allNativeEvents } from './EventRegister';
import * as SimpleEventPlugin  from './SimpleEventPlugin';

//注册事件名称
SimpleEventPlugin.registerEvents();

export const nonDelegatedEvents = new Set(['scroll']);

//临听所有的绑定的插件
export function listenToAllSupportedEvents(container) {
    allNativeEvents.forEach(domEventName=> {
        if(!nonDelegatedEvents.has(domEventName)) {
            listenToNativeEvent(domEventName,false,container);
        }
        listenToNativeEvent(domEventName,true,container);
        console.log('domEventName',domEventName);
    })
}