function solution(x, n) {
    var answer = [];
    var a = 0;
    for (var i = 0; i < n; i++){
        a += x;
        answer.push(a);
    }
    return answer;
}