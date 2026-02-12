const repeatString = function(string,num) {
    if(num<0){
        return 'ERROR';
    }else{
        let final=""
        for(let i=0;i<num;i++){
            final+=string
        }
        return final
    }
};

// Do not edit below this line
module.exports = repeatString;
