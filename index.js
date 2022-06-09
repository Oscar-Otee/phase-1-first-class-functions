function receivesAFunction(callBack) {
    return callBack();

}
function returnsANamedFunction() {
     const mike = (a, b) => a + b;
    return mike;

}


function returnsAnAnonymousFunction() {
    return () => "I";

    }
