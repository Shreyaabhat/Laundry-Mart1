# Laundry-Mart1
🧺 Laundry Mart - Professional Laundry Service Website
A modern, responsive website for laundry services with an interactive booking system and automated email confirmations using EmailJS.
📋 Table of Contents

Features
Demo
Technologies Used
Installation
Configuration
Usage
Project Structure
EmailJS Setup
Screenshots
Contributing
License
Contact

✨ Features
🎯 Core Features

Interactive Service Selection: Add/remove services from cart with real-time updates
Dynamic Cart Management: View selected services with automatic total calculation
Email Confirmation System: Automated booking confirmations via EmailJS
Responsive Design: Mobile-first design that works on all devices
Modern UI/UX: Clean, professional interface with smooth animations

🛠️ Services Offered

🧺 Dry Cleaning - ₹200.00
👕 Wash & Fold - ₹100.00
👔 Ironing - ₹30.00
🧴 Stain Removal - ₹500.00
🧥 Leather & Suede Cleaning - ₹999.00
👰 Wedding Dress Cleaning - ₹2800.00

📧 Email Features

Instant booking confirmation emails
Professional email templates
Customer details included in confirmation
Service list with pricing breakdown
Total amount calculation

🌐 Demo
Live Demo: View Demo (Add your GitHub Pages link here)
Quick Look
Home → Browse Services → Add to Cart → Fill Details → Book Now → Receive Email ✅
🚀 Technologies Used
TechnologyPurposeHTML5Structure and contentCSS3Styling and animationsJavaScript (ES6+)Interactive functionalityEmailJSEmail automation serviceFont Awesome 6.0Icons libraryGoogle FontsTypography (Poppins)
📦 Installation
Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)
Text editor (VS Code, Sublime Text, etc.)
EmailJS account (free tier available)

Steps

Clone the repository

bash   git clone https://github.com/yourusername/laundry-mart.git
   cd laundry-mart

Open the project

No build process required!
Simply open index.html in your browser
Or use a local server:



bash     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     
     # Using VS Code Live Server extension
     Right-click index.html → Open with Live Server

Configure EmailJS

See EmailJS Setup section below



⚙️ Configuration
EmailJS Configuration

Sign up at EmailJS
Get your credentials

Public Key: Found in Account → General
Service ID: From Email Services section
Template ID: From Email Templates section


Update script.js

javascript   // Line 3: Replace with your Public Key
   emailjs.init("YOUR_PUBLIC_KEY");
   
   // Line 117: Replace with your Service ID and Template ID
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
Email Template Setup
Create a template in EmailJS with these variables:
Template Settings:

To Email: {{user_email}}
Subject: Laundry Mart - Booking Confirmation

Template Variables:
{{user_name}}       - Customer's full name
{{user_email}}      - Customer's email address
{{user_phone}}      - Customer's phone number
{{services_list}}   - List of booked services
{{total_amount}}    - Total booking amount
Sample Template:
Hello {{user_name}},

Thank you for booking with Laundry Mart!

Booking Details:
{{services_list}}

Total Amount: {{total_amount}}

Contact Information:
Email: {{user_email}}
Phone: {{user_phone}}

We will contact you shortly to confirm your pickup time.

Best regards,
Laundry Mart Team
📖 Usage
For Customers

Browse Services

Scroll to the "Our Services" section
View all available services with pricing


Add to Cart

Click "Add Item" button on desired services
Services appear in the "Added Items" table
Total amount updates automatically


Book Appointment

Fill in your details:

Full Name
Email Address
Phone Number (10 digits)


Click "Book Now"
Receive instant confirmation email



For Developers
Customize Services:
html<div class="service-item" data-service="service-id" data-price="100" data-name="Service Name">
    <div class="service-info">
        <span class="icon">🧺</span>
        <span class="service-name">Service Name</span>
        <span class="price">₹100.00</span>
    </div>
    <button class="btn-add" onclick="addItem(this)">Add Item</button>
</div>
Modify Prices:

Edit the data-price attribute in HTML
Prices automatically reflect in cart and email

Customize Styling:

Modify style.css for design changes
CSS variables make customization easy

📁 Project Structure
laundry-mart/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── washing.webp        # Hero image
├── README.md           # Documentation
│
└── assets/             # Additional assets (optional)
    ├── images/
    └── fonts/
File Descriptions
FileDescriptionindex.htmlMain structure, navigation, services, booking formstyle.cssComplete styling, responsive design, animationsscript.jsCart management, form handling, EmailJS integrationwashing.webpHero section image
📧 EmailJS Setup
Detailed Step-by-Step Guide
1. Create Account

Go to https://www.emailjs.com/
Sign up (free tier: 200 emails/month)
Verify your email

2. Add Email Service

Dashboard → Email Services → Add New Service
Choose provider (Gmail recommended)
Follow authentication steps
Copy your Service ID (e.g., service_8575fv4)

3. Create Email Template

Dashboard → Email Templates → Create New Template
Set up template (see configuration above)
Copy your Template ID (e.g., template_eqr8ek9)

4. Get Public Key

Dashboard → Account → General
Copy your Public Key

5. Update Code
javascript// script.js
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
6. Test

Open website
Fill booking form
Check email inbox (and spam folder)

Troubleshooting
IssueSolution"Recipient's address is empty"Set To Email field to {{user_email}} in templateEmail not receivedCheck spam folder, verify service is connected"emailjs is not defined"Clear browser cache, check CDN linkInvalid credentialsVerify Service ID, Template ID, and Public Key
🖼️ Screenshots
Desktop View
Add screenshot of desktop homepage
Mobile View
Add screenshot of mobile responsive design
Booking Form
Add screenshot of booking form
Email Confirmation
Add screenshot of confirmation email
🎨 Customization
Colors
css/* Main brand color */
--primary-color: #4296d4;      /* Blue */
--secondary-color: #5b4cdb;    /* Purple */
--accent-color: #ff4757;       /* Red */
Fonts
cssfont-family: 'Poppins', sans-serif;
Services
Modify the service list in index.html to add/remove services.
🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository
Create a feature branch

bash   git checkout -b feature/AmazingFeature

Commit your changes

bash   git commit -m 'Add some AmazingFeature'

Push to the branch

bash   git push origin feature/AmazingFeature

Open a Pull Request

Development Guidelines

Follow existing code style
Test thoroughly before submitting
Update documentation as needed
Add comments for complex logic

🐛 Known Issues

None currently reported

Report bugs: GitHub Issues
📝 Future Enhancements

 Payment gateway integration
 User authentication system
 Booking history and tracking
 Admin dashboard
 Multiple language support
 Dark mode toggle
 SMS notifications
 Pickup scheduling calendar
 Price calculator
 Customer reviews section

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
👨‍💻 Author
Your Name

GitHub: @yourusername
LinkedIn: Your Name
Email: your.email@example.com
Portfolio: yourportfolio.com

🙏 Acknowledgments

EmailJS - Email automation service
Font Awesome - Icon library
Google Fonts - Typography
Inspiration from modern service websites

📞 Support
Need help? Here's how to get support:

Documentation: Read this README thoroughly
Issues: Open an issue
Email: your.email@example.com
Discussions: GitHub Discussions

⭐ Show Your Support
Give a ⭐️ if this project helped you!

<div align="center">
Made with ❤️ and ☕
⬆ Back to Top
</div>
