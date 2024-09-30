function solution(my_string, is_suffix) {
    let s1 = [];
    let s2 = [];
    s1 = my_string.split('');
    s2 = is_suffix.split('');
    s11 = s1.reverse();
    s22 = s2.reverse();
    
    let i = 0;
    let answer = 0;
    
    if (s11.length >= s22.length){
        while( i < s22.length){

            if (s11[i] == s22[i]){
                answer = 1;
                i++;
            } else {
                answer = 0;
                break;
            }

        }
    }else {
        answer = 0;
    }
    
    // console.log(s22);
    // var answer = 0;
    return answer;
}