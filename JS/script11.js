var num;

function primo(num){
    
    var divisores=0;
  
    for(var count=1 ; count<=num ; count++)
     if(num % count == 0)
         divisores++;
    
    if(divisores==2)
        console.log('É primo');
    else
        console.log('Não é primo');
  }
  