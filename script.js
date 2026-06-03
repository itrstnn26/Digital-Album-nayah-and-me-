function checkPassword(){

    const password =
    document.getElementById("password").value;

    if(password === "022625"){

        document.getElementById("login")
        .style.display = "none";

        document.getElementById("website")
        .style.display = "block";
    }

    else{
        alert("Wrong answer 💜");
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
