(() => {

    // variable 

    let covid = 1,multi = 2,price = 10,autoPrice = 10,lifevirus = 0, currentvirus = 0,timer = 0,persec = 0.5,bonus,random,elements;


    setInterval(() => {  
        if(currentvirus<price) {
            
            document.getElementById("multi").className = "disabled";
        } else{
        document.getElementById("multi").className = "myButton";}  
    },500);

    setInterval(() => {
        if(currentvirus<autoPrice) {
            document.getElementById("auto-clicker").className = "disabled";
            
        } else{document.getElementById("auto-clicker").className = "myButton";
        }  
    },500);




    // Multiplicateur


    
    


    setInterval(() => {
        if(currentvirus<price) {
            
            document.getElementById("multi").className = "disabled";
        } else{
        document.getElementById("multi").className = "myButton";}  
    },500);

    setInterval(() => {
        if(currentvirus<autoPrice) {
            document.getElementById("auto-clicker").className = "disabled";
            
        } else{document.getElementById("auto-clicker").className = "myButton";
        }  
    },500);

    document.getElementById("multi").addEventListener("click", () => {

        
        if (currentvirus >= price) {
           
        

				if (price<=currentvirus) {
        covid = covid*multi;
        currentvirus = currentvirus - price;
        multi = multi*2;
        price = price*price/2;
        }

        document.getElementById("showvirus").innerHTML = covid;
        document.getElementById("showprice").innerHTML = price;
        document.getElementById("target").innerHTML = currentvirus;
    }

    });
    
    // Virus click


    document.getElementById("covid").addEventListener("click", () => {

        currentvirus += covid;
        lifevirus += covid;

        document.getElementById("target").innerHTML = currentvirus;
        document.getElementById("life").innerHTML = lifevirus;


        let x = event.clientX;
        let y = event.clientY;
        let miniVirus = document.getElementById("miniVirus");
        miniVirus.style.display = 'block';
        miniVirus.style.position = 'absolute';
        miniVirus.style.left = x + 'px';
        miniVirus.style.top = y + 'px';
        setTimeout(() => {
            miniVirus.style.display = 'none';
        }, 150);




    });


        //  Bonus special



        bonus = document.getElementById("bonus"); // take id bonus
        random =entierAleatoire(90000,120000); // random entre 30 secondes et 2 minutes

        function entierAleatoire(min, max) // fonction de random
            {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }


        setInterval(() => { // display or not bonus
            bonus.style.display ="block";
            setTimeout(() => {
                bonus.style.display ="none";
            }, 30000);
            
        },random);


        setInterval(function(){ 
            if (timer > 0) {
            timer = timer-1; // reduce timer by one every seconde
            }
            document.getElementById("timer").innerHTML = timer; // display countdown
        }, 1000)

        document.getElementById("bonus").addEventListener("click", () => {

            timer = 30 // set timer at 30 

            covid = covid*2  // doubles income 
            persec = persec*2 // doubles income
            bonus.style.display ="none" // display none bonus after click
            setTimeout(special,30000); // time 30 secondes bonus
            function special() { 
                covid = covid/2 // take of the bonus
            }

        });
        
            // AUTO CLICK

        document.getElementById("auto-clicker").addEventListener("click", () => {
            if (currentvirus >= autoPrice) {

            if (autoPrice<=currentvirus) {
                
                currentvirus = currentvirus - autoPrice
                
                setInterval(function(){ 
                    currentvirus += persec;
                    lifevirus += persec;

                    document.getElementById("life").innerHTML = lifevirus;   
                    document.getElementById("target").innerHTML = currentvirus;   
                    document.getElementById("click").innerHTML = persec;   
                }, 1000)
 
                persec =persec*2 // multi per seconde bonus by 2
                autoPrice = autoPrice*2; // multi price by itself
                document.getElementById("autoprice").innerHTML = autoPrice;
            }
        }
    });
})();
