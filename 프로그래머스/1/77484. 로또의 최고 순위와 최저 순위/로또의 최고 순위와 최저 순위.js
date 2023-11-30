function solution(lottos, win_nums) {
    var answer = [];
    var cnt_co = 0;
    var cnt_wr = 0;
    var cnt_ze = 0;
    
    for (var i = 0; i < win_nums.length; i++){
        for(var j = 0; j < lottos.length; j++){
            if (lottos[j] == win_nums[i]){
                cnt_co++;
            }
        }
    }
    for (var i = 0; i < lottos.length; i++){
        if(lottos[i] == 0){
            cnt_ze++;
        }
    }
    
    cnt_wr = 6 - cnt_co - cnt_ze;
    
    if(cnt_co == 6){
        answer[1] = 1;
    }else if(cnt_co == 5){
        answer[1] = 2;
    }else if(cnt_co == 4){
        answer[1] = 3;
    }else if(cnt_co == 3){
        answer[1] = 4;
    }else if(cnt_co == 2){
        answer[1] = 5;
    }else{
        answer[1] = 6;
    }
    
    if(cnt_wr == 0){
        answer[0] = 1;
    }else if(cnt_wr == 1){
        answer[0] = 2;
    }else if(cnt_wr == 2){
        answer[0] = 3;
    }else if(cnt_wr == 3){
        answer[0] = 4;
    }else if(cnt_wr == 4){
        answer[0] = 5;
    }else{
        answer[0] = 6;
    }
    
    if(cnt_co == 0 && cnt_wr == 0){
        answer = [1, 6];
    }
    
    return answer;
}