# VibeShift Remote Recovery - Nomadic Balance Landing Page

## Overview
**VibeShift** is a boutique wellness agency offering remote nutrition counseling and mental health coaching for digital nomads. This landing page promotes the **Nomadic Balance Program**, helping remote workers manage burnout, stress, and nutrition while traveling. The design is modern, travel-inspired, and mobile-first to align with the lifestyle of digital nomads.

---

## Features

1. **Hero Section**
    - Eye-catching typography and background image.
    - Clear CTA for a **free 15-minute consultation**.
    - Mobile-first, easy and responsive design.

2. **Interactive Burnout Assessment ("Quick Check" Widget)**
    - 3 question JavaScript-based quiz.
    - Shows personalized recommendations:
        - *"Nutrition Deep-Dive"*
        - *"Stress Management Plan"*
        - *Postive maintenance feedback*
    - Fully functional with no console errors.

3. **Program Features Section**
    - Highlights the 3 core pillars:
        1. Circadian Rhythm Alignment
        2. Cross-Border Nutrition
        3. Mental Resilience Coaching
    - Clean grid layout with images and descriptive text

4. **Lead Capture Form**
    - Fields: Name, Email, Current Location (All required).
    - Client-side validations:
        - Required fields.
        - Email format check.
    - Simulated submission with confirmation message.

5. **Mobile-First & Responsive Design**
    - Optimized for mobile, tablet, and desktop
    - Fast load times for slow travel connections.
    - Flexbox/Grid layout ensures dynamic resizing.

---

## Technologies Used

- **HTML5** - semantic markup for accessibility and SEO.
- **CSS3** - responsive styling: BEM-inspired class naming.
- **Vanilla JavaScript** - interactive quiz logic & form validation.
- **Assets** - local images for hero, features etc.

---

## Project Setup & Run
1. Clone the Repository
git clone https://github.com/saqibaltaf27/VibeShift-Remote-Recovery.git

2. Install Dependencies
npm install

3. Run Live Server
npm run live-server

It will open this url in Web: http://127.0.0.1:8080

---

## Interactive Features

### Quick Check Widget

- Answer 3 multiple-choice questions.
- Click `Get Recommendation`.
- Personalized result displayed below the form.

### Logic

- High Stress/exhaustion -> Stress Management Plan
- Low diet score -> Nutrition Deep-Dive
- Otherwise -> Positive Maintenance feedback

### Contact Form Validation

- Fields: Name, Email, Location
- Email validated via regex
- Submission prevented if fields are empty or email invalid.
- Confirmation message displayed on successful submission.

---

## Deployment

1. Github (https://github.com/saqibaltaf27/VibeShift-Remote-Recovery.git)
2. Vercel (https://vibe-shift-remote-recovery.vercel.app)