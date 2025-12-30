const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            answer.style.maxHeight = (answer.scrollHeight + 100) + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
