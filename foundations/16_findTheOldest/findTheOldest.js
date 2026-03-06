function getAge(birth,death){
    if(!death){
        death= new Date().getFullYear();
    }
    return death-birth;
}

const findTheOldest = function(array) {
    let oldest;
    oldest=array[0]
    for(let i=0;i<array.length;i++){
        if(getAge(oldest.yearOfBirth,oldest.yearOfDeath)<getAge(array[i]['yearOfBirth'],array[i]['yearOfDeath'])){
            oldest=array[i]
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
