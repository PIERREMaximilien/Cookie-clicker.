(() => {

    /* 
    *  ====== variable ====== 
    */

    let covid = 1, // number of covid each click
        multi = 2, // multiplier on each click
        multiPrice = 10, // price of each multiplier click
        autoPrice = 10, // price of each autoclick click
        lifevirus = 0, // number of covid spreat since begginning
        currentvirus = 0, // number of covid at the moment (minus prices)
        timer = 0, // initial timer
        persec = 0.5, // initial multiplier
        bonus, //
        random; // random apparition of bonus


    /*   
    *  ====== Buttons ====== 
    */

    //disable buttons

    setInterval(() => {
        if (currentvirus < multiPrice) {
            document.getElementById("multi").className = "disabled";
        }
        else {
            document.getElementById("multi").className = "myButton";
        }
    }, 500);

    setInterval(() => {
        if (currentvirus < autoPrice) {
            document.getElementById("auto-clicker").className = "disabled";
        }
        else {
            document.getElementById("auto-clicker").className = "myButton";
        }
    }, 500);


    /*  
    *  ===== Multiplicateur =====  
    */


    setInterval(() => {
        if (currentvirus < multiPrice) {
            document.getElementById("multi").className = "disabled";
        }
        else {
            document.getElementById("multi").className = "myButton";
        }
    }, 500);

    setInterval(() => {
        if (currentvirus < autoPrice) {
            document.getElementById("auto-clicker").className = "disabled";
        }
        else {
            document.getElementById("auto-clicker").className = "myButton";
        }
    }, 500);

    document.getElementById("multi").addEventListener("click", () => {

        if (multiPrice <= currentvirus) {
            covid *= multi;
            currentvirus -= multiPrice;
            multiPrice *= 10;
        }

        document.getElementById("showvirus").innerHTML = covid;
        document.getElementById("showprice").innerHTML = multiPrice;
        document.getElementById("target").innerHTML = currentvirus;
    });

    /*
    *  ====== Covid click ======
    */


    document.getElementById("covid").addEventListener("click", () => {

        currentvirus += covid;
        lifevirus += covid;

        document.getElementById("target").innerHTML = currentvirus;
        document.getElementById("life").innerHTML = lifevirus;

        /* add a small display virus on click on position */

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

    /*
    *  ====== Bonus ======
    */

    bonus = document.getElementById("bonus"); // take id bonus
    random = entierAleatoire(90000, 120000); // random entre 30 secondes et 2 minutes

    function entierAleatoire(min, max) // fonction de random
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setInterval(() => { // display or not bonus
        bonus.style.display = "block";
        setTimeout(() => {
            bonus.style.display = "none";
        }, 30000);
    }, random);

    setInterval(() => {
        if (timer > 0) {
            timer -= 1; // reduce timer by one every seconde
        }
        document.getElementById("timer").innerHTML = timer; // display countdown
    }, 1000)

    document.getElementById("bonus").addEventListener("click", () => {

        timer = 30; // set timer at 30 
        covid *= 2; // doubles income 
        persec *= 2; // doubles income
        bonus.style.display = "none"; // display none bonus after click

        setTimeout(() => { // time 30 secondes bonus
            covid /= 2;
            persec /= 2;
        }, 30000);
    });

    /* 
    *  ====== Auto click ======
    */

    document.getElementById("auto-clicker").addEventListener("click", () => {

        if (autoPrice <= currentvirus) {

            currentvirus -= autoPrice;

            setInterval(() => {

                currentvirus += persec;
                lifevirus += persec;

                document.getElementById("life").innerHTML = lifevirus;
                document.getElementById("target").innerHTML = currentvirus;
                document.getElementById("click").innerHTML = persec;
            }, 1000)

            persec *= 2 // multi per seconde bonus by 2
            autoPrice *= 100; // multi Price by itself

            document.getElementById("autoprice").innerHTML = autoPrice;
        }
    });
})();
