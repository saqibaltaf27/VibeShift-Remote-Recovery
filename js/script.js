// Quick Check Widget Logic

document.getElementById('checkButton').addEventListener('click', function() {

    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;

    let recommendation = '';

    if(q1 === 'high' || q3 === 'high') {
        recommendation = "You need a Stress Management Plan to perform better and maintain worklife balance.";
    } else if (q2 === 'low') {
        recommendation = "You need a Nutrition Deep-Dive. Start trying healthy nutrition diets for active diet.";
    } else {
        recommendation = "You are on the right track! Keep it up and Maintain your balance.";
    }

    document.getElementById('result').innerText = recommendation;

});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const location = document.getElementById('location').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+$/;

    let message = '';
    if(!name || !email || !location) {
        message = 'All fields are required.';
    } else if (!emailRegex.test(email)){
        message = 'This email is invalid! Please enter a valid email.';
    } else {
        message = 'Thank You! Your consultation request has been submitted. Someone will reach you out shortly.';
        document.getElementById('contactForm').requestFullscreen();
    }

    document.getElementById('formMessage').innerText = message;
});