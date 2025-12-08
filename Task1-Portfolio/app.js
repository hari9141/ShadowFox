document.addEventListener("DOMContentLoaded", () => {
    initYear();
    initNav();
    initSmoothScroll();
    initContactForm();
    initContactFab();
  });
  
  function initYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }
  
  function initNav() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu?.classList.remove("open");
      });
    });
  
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset + 120;
  
      sections.forEach((section) => {
        const id = section.getAttribute("id");
        const top = section.offsetTop;
        const height = section.offsetHeight;
  
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (!link) return;
  
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  }
  
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"], .scroll-link');
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
  
        const target = document.querySelector(href);
        if (!target) return;
  
        e.preventDefault();
        const offsetTop = target.offsetTop - 70;
  
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      });
    });
  }
  
  function initContactFab() {
    const fab = document.getElementById("contact-fab");
    const contactSection = document.getElementById("contact");
  
    if (!fab || !contactSection) return;
  
    fab.addEventListener("click", (e) => {
      e.preventDefault();
      const offsetTop = contactSection.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }
  
  function initContactForm() {
    if (typeof emailjs === "undefined") return;
  
    emailjs.init("WsTJuOVeH7kmrHiQF");
  
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const submitText = document.getElementById("submit-text");
    const submitLoading = document.getElementById("submit-loading");
    const statusEl = document.getElementById("form-status");
  
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.from_name.value.trim();
      const email = form.from_email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        setStatus("Please fill in all fields.", "error");
        return;
      }
  
      if (!isValidEmail(email)) {
        setStatus("Please enter a valid email address.", "error");
        return;
      }
  
      setLoading(true);
      setStatus("", "");
  
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };
  
      emailjs
        .send("service_68foox7", "template_15csk6j", templateParams)
        .then(() => {
          setStatus("Message sent successfully. I'll get back to you soon.", "success");
          form.reset();
        })
        .catch(() => {
          setStatus(
            "Failed to send message. Please try again or mail me directly.",
            "error"
          );
        })
        .finally(() => {
          setLoading(false);
        });
  
      function setLoading(loading) {
        if (!submitBtn || !submitText || !submitLoading) return;
        submitBtn.disabled = loading;
        submitText.style.display = loading ? "none" : "inline";
        submitLoading.style.display = loading ? "inline-flex" : "none";
      }
  
      function setStatus(text, type) {
        if (!statusEl) return;
        statusEl.textContent = text;
        statusEl.className = `form-status ${type}`;
      }
    });
  }
  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
const certificateScroll = document.getElementById("cert-scroll");

let pressed = false;
let startX;
let scrollLeft;

if (certificateScroll) {
    certificateScroll.addEventListener("mousedown", (e) => {
        pressed = true;
        startX = e.pageX - certificateScroll.offsetLeft;
        scrollLeft = certificateScroll.scrollLeft;
    });

    certificateScroll.addEventListener("mouseleave", () => {
        pressed = false;
    });

    certificateScroll.addEventListener("mouseup", () => {
        pressed = false;
    });

    certificateScroll.addEventListener("mousemove", (e) => {
        if (!pressed) return;
        e.preventDefault();
        const x = e.pageX - certificateScroll.offsetLeft;
        const walk = (x - startX) * 1.3;
        certificateScroll.scrollLeft = scrollLeft - walk;
    });

    certificateScroll.addEventListener("touchstart", (e) => {
        pressed = true;
        startX = e.touches[0].pageX - certificateScroll.offsetLeft;
        scrollLeft = certificateScroll.scrollLeft;
    });

    certificateScroll.addEventListener("touchend", () => {
        pressed = false;
    });

    certificateScroll.addEventListener("touchmove", (e) => {
        if (!pressed) return;
        const x = e.touches[0].pageX - certificateScroll.offsetLeft;
        const walk = (x - startX) * 1.3;
        certificateScroll.scrollLeft = scrollLeft - walk;
    });
}
