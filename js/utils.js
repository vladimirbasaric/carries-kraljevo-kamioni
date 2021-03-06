function extractDate(fullDate) {
    var date = fullDate.split('T')[0];
    var dateArray = date.split('-');
    date = dateArray[2]+"."+dateArray[1]+"."+dateArray[0]+".";
    return date;
}