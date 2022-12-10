function fibonacci(num){
    let a = 1
    let b = 0 
    let c = 0
    const hasil = []
    num = num*10;
    while (c < num){
        c = a+b;
        a = b
        b = c
        if (c<=num){
            hasil.push(c)
        }
    }
    return hasil;
}

function factorialize(num) {
    num = num/2;
    let output = " ";
    hasil = num;
    while(num>1){
        output = "x"+num+output;
        num--;
        hasil *= num;
    }
    output = "1" + output + "=" + hasil; 
    return output;
}

function hitung(){
    let x = document.getElementById('input').value;
    document.getElementById('jawab').innerHTML = x;
    if (0 <= x <= 100){
        if (x %2 == 0){
            hasil = factorialize(x);
            document.getElementById('jawab').innerHTML = hasil;
        }
        else {
            hasil = fibonacci(x);
            document.getElementById('jawab').innerHTML = hasil;
        }
    }

}
