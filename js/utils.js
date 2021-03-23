function extractDate(fullDate) {
    var date = fullDate.split('T')[0];
    var dateArray = date.split('-');
    date = dateArray[2]+"."+dateArray[1]+"."+dateArray[0]+".";
    //console.log('date='+date);
    return date;
}

function extractHeadNews(fullContent) {

    if(fullContent.length < 110) {
        return fullContent;
    }

    var counter = 110;

    if(fullContent.includes("<a") || fullContent.includes("<b") || fullContent.includes("<i")) {
        counter = 200;
    }
    
    var char = 'x';
    var res = fullContent.substring(0,counter);
    console.log('res='+res);
    
    while((char != ' ')) {
        console.log('res='+res);
        char = res.charAt(res.length - 1);
        counter++;
        res = fullContent.substring(0,counter);
    }
    res = res.substring(0, res.length-2);
    res+="..";
    return res;
    
}