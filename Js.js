document.addEventListener("DOMContentLoaded", () => {
    /* with Ai*/
    const pageContent = document.querySelector('.page-body'); 

    if (pageContent) {
        pageContent.style.opacity = "0";
        pageContent.style.transform = "translateY(15px)";
        pageContent.style.transition = "opacity 0.4s ease-in-out, transform 0.4s ease-in-out";

        setTimeout(() => {
            pageContent.style.opacity = "1";
            pageContent.style.transform = "translateY(0)";
        }, 50);
    }

    const links = document.querySelectorAll(".links_Up a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetUrl = this.getAttribute("href");

            if (targetUrl && !targetUrl.startsWith("#") && targetUrl !== "") {
                e.preventDefault(); 
                if (pageContent) {
                    pageContent.style.opacity = "0";
                    pageContent.style.transform = "translateY(15px)";
                }
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400); 
            }
        });
    });

    const contactForm = document.getElementById("contactForm");
    const feedbackMsg = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); 

    
            const name = document.getElementById("formName").value.trim();
            const email = document.getElementById("formEmail").value.trim();
            const subject = document.getElementById("formSubject").value.trim();
            const message = document.getElementById("formMessage").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                feedbackMsg.style.color = "#ff4a4a";
                feedbackMsg.textContent = "Please fill in all fields before sending.";
            } else {
                feedbackMsg.style.color = "#4aff4a";
                feedbackMsg.textContent = "Your message has been sent successfully!";
                contactForm.reset(); 
            }
        });
    }
});