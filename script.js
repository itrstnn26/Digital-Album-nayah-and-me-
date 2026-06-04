let pin = "";

function pressKey(num){

    if(pin.length < 6){
        pin += num;
        document.getElementById("pin-display").innerText = pin;
    }
}

function clearPin(){
    pin = "";
    document.getElementById("pin-display").innerText = "____";
}

function checkPin(){

    if(pin === "022625"){ // your anniversary PIN

        document.getElementById("login")
        .style.display = "none";

        document.getElementById("website")
        .style.display = "block";

    } else {
        alert("Wrong PIN 💜");
        clearPin();
    }
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("active");
        }

    });

});

window.dispatchEvent(new Event("scroll"));
