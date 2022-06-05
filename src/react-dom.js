


import { listenToAllSupportedEvents } from './DOMPluginEventSystem';
import { HostComponent } from './ReactWorkTags';
import { internalInstanceKey, internalPropsKey } from './ReactDOMComponentTree';

function render(vdom, container) {
    listenToAllSupportedEvents(container);
    mount(vdom, container);
}

function mount(vdom, parentDOM) {
    let newDOM = createDOM(vdom, parentDOM);
    parentDOM.appendChild(newDOM);
}

function createDOM(vdom, parentDOM) {
    let { type, props } = vdom;
    let dom;
    if (typeof vdom === 'string' || typeof vdom === 'number') {
        dom = document.createTextNode(vdom);

    } else {
        dom = document.createElement(type);
    }
    let returnFiber = parentDOM[internalInstanceKey] || null;
    
    let fiber = { tag: HostComponent, type, stateNode: dom }
    dom[internalInstanceKey] = fiber;
    dom[internalPropsKey] = props;
    if (props) {
        updateProps(dom, {}, props);
        if (Array.isArray(props.children)) {
            reconcileChildren(props.children, dom);
        } else {
            mount(props.children, dom)
        }
    }
    return dom
}


function updateProps() {

}

function reconcileChildren(children, parentDOM) {
    children.forEach(child => mount(child, parentDOM));
}

const ReactDOM = {
    render
}

export default ReactDOM