(() => {

    // variable 

    let cookie = 1,multi = 2,price=10,price2 =1,lifecookie=0, currentcookie = 0,timer,click = 1;

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
                if (timer > 0) {
                timer = timer-1;
                }
                document.getElementById("timer").innerHTML = timer + " secondes";
            }, 1000)
        
            
            cookie = cookie*2

            setTimeout(special,30000);
            
            function special() { 
                cookie = cookie/2
            }

        });


        console.log("a")


        // Auto- click
        
        document.getElementById("auto-clicker").addEventListener("click", () => {


        setInterval(function(){ 
            currentcookie = currentcookie + click;
            document.getElementById("counter").innerHTML = counter;
        }, 1000)

    });
})();