
function render(vdom,container) {
    mount(vdom,container);
}

function mount(vdom,parentDOM) {
    let newDOM = createDOM(vdom,parentDOM);
    parentDOM.appendChild(newDOM);
}

function createDOM(vdom) {
    let {type,props} = vdom;
    let dom;
    if(typeof vdom === 'string' || typeof vdom=== 'number') {
        dom = document.createTextNode(type);
    }else {
        dom = document.createElement(type)
    }
    if(props) {
        updateProps(dom,{},props);
        if(Array.isArray(props.children)) {
            reconcileChildren(props.children,dom);
        }else {
            mount(props.children,dom);
        }
    }
}

function reconcileChildren(children,parentDOM) {
    children.forEach(child => mount(child,parentDOM))
}

function updateProps(dom,oldProps,newProps) {
    
}

const ReactDOM = {
    render
}

export default ReactDOM;