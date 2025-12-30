# 🌐 G Hari Haran – Portfolio Website

A modern, minimal, black-themed portfolio website with neon-blue aesthetics.  
Designed to showcase **projects, skills, certificates, and resume** in a clean and interactive way.

This portfolio is fully responsive and built using **HTML, CSS, and JavaScript**, with EmailJS integration for contact forms and a horizontal scroll gallery for certificates.

---

## 🚀 Features

### ✔ Clean & Modern UI  
- Black background with neon blue accents  
- Minimalistic design  
- Soft neon glow effects  
- Smooth animations (only where necessary)

### ✔ Hero Section  
- Introduction with name, role, and CTA buttons  
- Developer-themed layout with profile image

### ✔ About Section  
- Short biography  
- Education  
- Leadership experience  
- Primary focus areas

### ✔ Resume Section  
- One-click **view** and **download** options  
- Includes your PDF resume

### ✔ Projects Section  
Showcases key full-stack and AI/ML projects with:
- Project descriptions  
- Tech stack chips  
- GitHub link buttons  

### ✔ Skills Section  
- Programming languages  
- Frameworks & libraries  
- Databases  
- AI/ML technologies  
- Soft skills

### ✔ Certificates Section  
A horizontal scrollable certificate gallery with:
- Neon borders  
- Smooth drag/swipe gesture  
- Certificates as images  
- Scroll hint for user guidance  

### ✔ Contact Section  
- Contact information  
- Social links  
- EmailJS-powered contact form  
- Floating contact shortcut button

---

## 🛠 Tech Stack

### **Frontend**
- HTML5  
- CSS3  
- JavaScript (Vanilla)  

### **Styling**
- Custom neon-dark theme  
- Responsive grid system  
- Hover interactions  
- Smooth scrolling

### **External Services**
- **EmailJS** (for sending contact form messages)

---

## 📁 Folder Structure

```
root-folder/
│
├── index.html
├── style.css
├── app.js
│
├── profile.jpg
├── HARIHARAN_G_RESUME.pdf
│
├── certificate_frontend_page-0001.jpg
├── certificate_202510472857202_page-0001.jpg
├── 067f0e5d-ff96-4e2c-b7a6-d3e202013dd0.png
├── HARIHARAN_mlt_1_page-0001.jpg
├── Mlt_certificate3_page-0001.jpg
├── Mlt certificate 2_page-0001.jpg
├── Mlt certificate 4_page-0001.jpg
└── Mlt certificate 5_page-0001.jpg
```

---

## ⚙️ Setup Instructions

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/yourusername/your-portfolio.git
```

### **2️⃣ Open the project**
Just open **index.html** in any browser

or use VSCode Live Server:

```bash
right click → “Open with Live Server”
```

### **3️⃣ Configure EmailJS (Contact Form)**  
Replace the credentials inside `app.js`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
```

You will find these in your EmailJS dashboard.

---

## 📱 Responsive Design

The portfolio is optimized for:

- Desktop  
- Tablets  
- Mobile devices  

Including responsive navbar and touch-friendly certificate scroll.

---

## 🧑‍💻 Author

**G Hari Haran**  
Full-Stack Web Developer  
Chennai, India  

### 🌍 Social Links
- LinkedIn: https://www.linkedin.com/in/hariharan-g-067337288/  
- GitHub: https://github.com/hari9141  

---

## ⭐ Contributing

This is a personal portfolio — contributions are not required,  
but suggestions are always welcome!

---

## 📄 License

This project is released under the **MIT License**.
