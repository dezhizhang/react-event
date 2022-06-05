





function createSyntheticEvent(Interface) {
    function SyntheticBaseEvent(reactName,reactEventType,targetInst,nativeEvent,nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.nativeEvent = nativeEvent;
        this.target = nativeEventTarget;
        this.currentTarget = null;
        for(const propName in Interface) {
            this[propName] = Interface[propName];
        }
    }
    return SyntheticBaseEvent;
}