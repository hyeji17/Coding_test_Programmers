function solution(babbling) {
    var answer = 0;
    var bab_li = ["aya","ye","woo","ma"];
    
    for(var i = 0; i < babbling.length; i++){
        var str = babbling[i];
        for(var j = 0; j < bab_li.length; j++){
            if(str.includes(bab_li[j])){
                str= str.replace(bab_li[j], "1");
            }
        }
        str = str.replace(/1/gi,"");
        if(str.length == 0){
            answer++;
        }
    }
    
    
    return answer;
}