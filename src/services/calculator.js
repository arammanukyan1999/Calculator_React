class Calculator {
    mull(a,b) {
        return a*b
    }
    sub(a,b) {
        return a-b
    }
    div(a,b) {
        return a/b
    }
    add(a,b) {
        return a+b
    }
    calculate(a,b,action) {
        const intA=parseInt(a,10);
        const intB=parseInt(b,10);
        switch (action) {
            case ACTIONS.ADD:
                return this.add(intA,intB);
             case ACTIONS.SUB:
                return this.sub(intA,intB);
            case ACTIONS.DIV:
                return this.div(intA,intB);
            case ACTIONS.MULL:
                return this.mull(intA,intB);
        
            default:
                break;
        }
    }

}
const ACTIONS={
    MULL: "*",
    DIV: "/",
    SUB:"-",
    ADD:"+"
}




export default new Calculator() 