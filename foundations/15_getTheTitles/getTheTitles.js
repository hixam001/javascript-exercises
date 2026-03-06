const getTheTitles = function(array) {
    const bookTitle=[];
    for(let i=0;i<array.length;i++){
        bookTitle[i]=array[i]['title'];
    }
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
