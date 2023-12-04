function solution(x) {
    var a = "";
    var num = 0;
    a = String(x).split("");
    for(var i = 0; i < a.length; i++){
        a[i] = parseInt(a[i]);
        num += a[i];
    }
    if(x % num == 0){
        return true;
    }else{
        return false;
    }
}