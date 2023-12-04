function solution(n) {
    var answer = [];
    n = String(n).split("");
    for(var i = (n.length - 1); i >= 0; i--){
        n[i] = parseInt(n[i]);
        answer.push(n[i]);
    }
    
    return answer;
}