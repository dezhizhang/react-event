


import { listenToAllSupportedEvents } from './DOMPluginEventSystem';


function render(vdom,container) {
    listenToAllSupportedEvents(container);
    mount(vdom,container);
}

function mount(vdom,parentDOM) {
    let newDOM = createDOM(vdom,parentDOM);
    parentDOM.appendChild(newDOM);
}

function createDOM(vdom,parentDOM) {
    let { type,props } = vdom;
    let dom;
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        dom = document.createTextNode(vdom);

    }else {
        dom = document.createElement(type);
    }

    if(props) {
        updateProps(dom,{},props);
        if(Array.isArray(props.children)) {
            reconcileChildren(props.children,dom);
        }else {
            mount(props.children,dom)
        }
    }
}


function updateProps() {

}

function reconcileChildren() {

}

const ReactDOM = {
    render
}

export default ReactDOM