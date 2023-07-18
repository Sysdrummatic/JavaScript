function getLength<T>(arg:T): number{
if(arg.hasOwnProperty("length")){
    return arg["length"];
}

return 0;
}
