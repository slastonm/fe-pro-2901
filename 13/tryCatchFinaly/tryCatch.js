try{
    let test = 10;
    if(test === 0){
        console.log('Try block');
    }
    if(typeof test == 'string'){
        throw 'string';
    }
    if(test>0){
        throw 'big value';
    }
}
catch(err){
    console.log(`Info from ${err}`);
    if(err == 'big value'){
        console.log('Call next function');
    }
    // console.log(err.name);
    // console.log(err.message);
    // console.log(err.stack);


}
// finally{
//     console.log('Finaly work');
// }