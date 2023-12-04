function solution(num) {
    var answer = 0;
    var cnt = 0;
    if (num == 1){
        answer = 0;
    }else{
        while(num > 1){
            if(answer == 500){
                answer = -1;
                break;
            }else{
                if(num % 2 == 0){
                    num = num / 2;
                    answer++;
                }else{
                    num = num * 3 + 1;
                    answer++;
                }                
            }
        }
    }

    return answer;
}