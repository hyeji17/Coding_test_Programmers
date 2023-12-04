function solution(names) {
    var answer = [];
    for(var i = 0; i < names.length; i++){
        if(i % 5 == 0){
            answer.push(names[i]);
        }
    }
    // console.log(names);
    return answer;
}