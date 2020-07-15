(() => {

    // variable 

    let cookie = 1,multi = 2,price=10,lifecookie=0, currentcookie = 0,timer;

    // Multiplicateur

    document.getElementById("multi").addEventListener("click", () => {

				if (price<=currentcookie) {
        cookie = cookie*multi;
        currentcookie = currentcookie-price;
        multi = multi*2;
        price = price*price;
        }
        
        document.getElementById("showcookie").innerHTML = cookie;
        document.getElementById("showprice").innerHTML = "cost " + price + " cookies";
        document.getElementById("target").innerHTML = "Current " + currentcookie + " Cookies";


    });
    
    // cookie click


    document.getElementById("cookie").addEventListener("click", () => {

        currentcookie += cookie;
        currentcookie = Math.round(currentcookie);
        lifecookie += cookie;
        lifecookie = Math.round(lifecookie);

        document.getElementById("target").innerHTML = "Current " + currentcookie + " Cookies";
        document.getElementById("life").innerHTML = lifecookie + " lifetime Cookies";


    });

        //  Bonus special


        document.getElementById("bonus").addEventListener("click", () => {
            
            timer = 30
            setInterval(function(){ 
                timer = timer-1;
                document.getElementById("timer").innerHTML = "Current " + currentcookie + " Cookies";
            }, 1000)
            
            
            cookie = cookie*2

            setTimeout(special,30000);
            
            function special() { 
                cookie = cookie/2
            }

        });


        console.log("gfhgdfh")


        // Auto- click
        
        let click= 1 ;
        
        function updateCounter(){
                               let counter = parseInt(document.getElementById("showcookie").innerHTML);
                               document.getElementById("showcookie").innerHTML = counter + click;
                           }
                           function myFunction(){
                            setInterval(updateCounter, 3000);
                           }



})();