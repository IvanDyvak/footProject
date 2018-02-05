        var div1;
        var w = 1;
        var h = 1;
        var fs = 1;
        var div2;
        var w1 = 50;
        var h1 = 50;
        var fs1 = 10;
        window.onload = function () {
            div1 = document.getElementById("div1");
            div2 = document.getElementById("div2");
            var move = setInterval(function(){
                if(w == 80 && h == 80){
                    div1.style.backgroundColor = 'blue';
                
                                var change = setInterval(function(){
                                if (w == 1 && h == 1) {
                                    clearInterval(change);
                                    div1.style.backgroundColor = 'yellow';
                                }else{
                                        div1.style.width = w + "px";
                                        div1.style.height = h + "px";
                                        div1.style.fontSize = fs + "px";
                                        w -= 1;
                                        h -= 1;
                                        fs-=0.5;
                                           
                                    }
                                }, 6); 
                        
                                      
                }else{
                    div1.style.width = w + "px";
                    div1.style.height = h + "px";
                    div1.style.fontSize = fs + "px";
                    w += 1;
                    h += 1;
                    fs+=0.5;
                }      
            }, 12);
                var move1 = setInterval(function(){
                if(w1 == 1 && h1 == 1){
                    div2.style.backgroundColor = 'yellow';
                
                                var change1 = setInterval(function(){
                                if (w1 == 80 && h1 == 80) {
                                    clearInterval(change1);
                                    div2.style.backgroundColor = 'blue';
                                }else{
                                        div2.style.width = w1 + "px";
                                        div2.style.height = h1 + "px";
                                        div2.style.fontSize = fs1 + "px";
                                       
                                            w1 += 1;
                                            h1 += 1;
                                            fs1+=0.5;
                                    }
                                }, 6); 
                        
                                      
                }else{
                    div2.style.width = w1 + "px";
                    div2.style.height = h1 + "px";
                    div2.style.fontSize = fs1 + "px";
                    w1 -= 1;
                    h1 -= 1;
                    fs1-=0.5;
                }      
            }, 12);
            
 
        }