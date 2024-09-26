let array = [];

for(i=0; i<5; i++){
    array.push(Number(prompt('Digitar numero')));
    if(array[i]<0){
    	array.pop()
        array.push(0)
    }
}
document.write(array)