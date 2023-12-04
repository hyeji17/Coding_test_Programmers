function solution(n) {
    var answer = "";
    n = String(n).split("");
    n.sort(function(a,b){
        return b-a;
    })
    for(var i = 0; i < n.length; i++){
        answer += n[i];
    }
    answer = parseInt(answer);
    return answer;
}