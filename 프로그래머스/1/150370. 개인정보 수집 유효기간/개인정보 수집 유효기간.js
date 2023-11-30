function solution(today, terms, privacies) {
    var answer = [];
    var today_li = today.split(".").map(Number);
    for(var i = 0; i < privacies.length; i++){
        var privacy = privacies[i].split(" ");
        var privacy_date = privacy[0].split(".").map(Number);
        for(var j = 0; j < terms.length; j++){
            var term = terms[j].split(" ");
            term[1] = parseInt(term[1]);
            if(privacy[1] == term[0]){
                privacy_date[1] += term[1];
                if(privacy_date[2] == 1){
                    privacy_date[1] -= 1;
                    privacy_date[2] = 28;
                }else{
                    privacy_date[2] -= 1;
                }
                
                while (privacy_date[1] > 12){
                    privacy_date[0] += 1;
                    privacy_date[1] -= 12;
                }
                
       
                 if (privacy_date[0] < today_li[0] ||
                    (privacy_date[0] == today_li[0] && privacy_date[1] < today_li[1]) ||
                    (privacy_date[0] == today_li[0] && privacy_date[1] == today_li[1] && privacy_date[2] < today_li[2])
                ) {
                     answer.push(i + 1);
                 }                
            }
        }
    }
    return answer;
}