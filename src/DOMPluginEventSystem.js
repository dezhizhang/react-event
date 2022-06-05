
import { allNativeEvents } from './EventRegister';
import * as SimpleEventPlugin  from './SimpleEventPlugin';

//注册事件名称
SimpleEventPlugin.registerEvents();


//临听所有的绑定的插件
export function listenToAllSupportedEvents(container) {
    allNativeEvents.forEach(domEventName=> {
        console.log('domEventName',domEventName);
    })
}