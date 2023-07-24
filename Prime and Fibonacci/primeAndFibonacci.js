let cache=new Map();
function isPrime(){
    const candidate = document.getElementById('prime').value;
    const number = Number.parseInt(candidate);
    
    if(number<=1){
        alert(`${number} is not a prime number!`);
        return false;
    }
    else{
        if(cache.has(number)){
            if(cache.get(number)==true){
                console.log(cache);
                console.log("Yes from cache");
                alert(`${number} is a prime number!`);
                return true;
            }
            else{
                alert(`${number} is not a prime number!`);
                return false;
            }
        }
        else{
            for(let i=2;i<number;i++){
                if(number%i==0){
                    alert(`${number} is not a prime number!`);
                    cache.set(number, false);
                    return false;
                }
            }
            alert(`${number} is a prime number!`);
            cache.set(number, true);
            
        }
    }
    
}

function fibSeries(){
    const numberFib = document.getElementById('numberFib').value;
    const number = Number.parseInt(numberFib);
    let fibArr = [0,1];
    
    if(number==0){
        alert("Fibonacci series: 0");
        return true;
    }
    else{
        for(let i=0; i<number-2; i++){
            let previous = fibArr[fibArr.length-1];
            let oneBeforePrev = fibArr[fibArr.length-2];
            fibArr.push(previous + oneBeforePrev);
        }
    }
    alert(`Fibonacci series: ${fibArr}`);
}