function solution(s){
    var answer = true;
    s = s.toLowerCase();
    s = s.split("");
    var cntp = 0;
    var cnty = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] == "y"){
            cnty++;
        }else if(s[i] == "p"){
            cntp++;
        }
    }
    
    if(cnty == cntp){
        return true;
    }else{
        return false;
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')


}