function solution(n)
{
    var answer = 0;
    n = String(n).split('');
    
    for(var i = 0; i < n.length; i++){
        n[i] = parseInt(n[i]);
        answer += n[i];        
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(n);

    return answer;
}