function solution(bandage, health, attacks) {
    var cnt = 0;
    // 마지막 공격까지의 시간
    for(var i = 0; i < attacks.length; i++){
        var attack = attacks[i];
        if(cnt < attack[0]){
            cnt = attack[0];    
        }     
    }
    
    var health_now = health; // 현재 체력
    var bandage_time = 1; // 붕대감기 시간
    var at_t = 0; // 공격할 시간
    
    // 마지막 공격까지의 1초마다의 반복문
    for(var i = 1; i <= cnt; i++){
            console.log(health_now);
        
        if (i == attacks[at_t][0]){ // 공격할 시간
            health_now -= attacks[at_t][1];
            bandage_time = 1;
            at_t++;
            // console.log(health_now);
        }else{
            if(bandage_time == bandage[0]){ // 붕대감기 시간이 연속 붕대감기 시간과 같을때
                health_now += (bandage[2] + bandage[1]);
                bandage_time = 1;
                // console.log(health_now);
            }else{
                health_now += bandage[1];
                bandage_time++;
                // console.log(health_now);
            }
            
            if(health_now >= health){
                health_now = health;
            } 
        }
                
        if(health_now <= 0){
            return -1;
            break;
        }
    } 
    return health_now;
}

