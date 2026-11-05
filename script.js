// Kunin ang button
const backToTopBtn = document.getElementById("backToTopBtn");

// Kapag nag-scroll pababa ng 300px, ipakita ang button
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Kapag pinindot ang button, umakyat pabalik sa taas
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Dahan-dahang pag-akyat
    });
});
