const fibonacci = function(num) {
    count=parseInt(num);
    let a=1
    let b=0
    if(count<0){
        return 'OOPS'
    }else if(count ===0){
        return 0
    }else if(count>0 && count<3){
        return a;
    }else{
        for(let i=2;i<=count;i++){
            let current=a+b;
            b=a;
            a=current;
        }
        return a
    }
};

// Do not edit below this line
module.exports = fibonacci;
