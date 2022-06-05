



function functionThatReturnsTrue() {
    return true;
}

function functionThatReturnsFalse() {
    return false;
}


function createSyntheticEvent(Interface) {
    function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.nativeEvent = nativeEvent;
        this.target = nativeEventTarget;
        this.currentTarget = null;
        for (const propName in Interface) {
            this[propName] = Interface[propName];
        }
        this.isDefaultPrevented = functionThatReturnsFalse;
        this.isPropagationPrevented = functionThatReturnsFalse;

        return this;
    }

    Object.assign(SyntheticBaseEvent.prototype, {
        preventDefault() {
            this.defaultPrevented = true;
            const event = this.nativeEvent;
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            this.isDefaultPrevented = functionThatReturnsTrue;
        },
        stopPropagation() {
            this.defaultPrevented = true;
            const event = this.nativeEvent;
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
            this.isDefaultPrevented = functionThatReturnsTrue;
        }
    })
    return SyntheticBaseEvent;
}

const MouseEventInterface = {
    clientX: 0,
    clientY: 0,
}

export const SyntheticEvent = createSyntheticEvent({});

export const SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface) 