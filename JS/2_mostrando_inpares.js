function impares (){
    for(let i = 1; i <=20; i++){
        if(i == 15){
            break
        }else if(i % 2 != 0){
            console.log(i)
        }else{
            continue
        }
    }
}


impares();