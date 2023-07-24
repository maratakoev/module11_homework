function number(a,b) {
    let i = setInterval(function(){
      console.log(a++);
      if (a > b) clearInterval(i);
    }, 1000)
  }
  
  number(5, 10);
  