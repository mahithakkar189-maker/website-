// Lawyer categories data
const lawyerCategories = [
    {
        id: 1,
        name: 'Corporate Law',
        icon: '🏢',
        description: 'Business contracts, mergers, acquisitions, and corporate compliance',
        lawyers: [
            { id: 1, name: 'John Mitchell', experience: '15 years', phone: '+1-800-123-4567' },
            { id: 2, name: 'Sarah Chen', experience: '12 years', phone: '+1-800-234-5678' },
            { id: 3, name: 'David Brown', experience: '10 years', phone: '+1-800-345-6789' }
        ]
    },
    {
        id: 2,
        name: 'Family Law',
        icon: '👨‍👩‍👧‍👦',
        description: 'Divorce, custody, adoption, and family matters',
        lawyers: [
            { id: 4, name: 'Emily Rodriguez', experience: '11 years', phone: '+1-800-456-7890' },
            { id: 5, name: 'Michael Thompson', experience: '14 years', phone: '+1-800-567-8901' },
            { id: 6, name: 'Jessica Martinez', experience: '9 years', phone: '+1-800-678-9012' }
        ]
    },
    {
        id: 3,
        name: 'Criminal Law',
        icon: '⚖️',
        description: 'Defense and prosecution in criminal cases',
        lawyers: [
            { id: 7, name: 'Robert Wilson', experience: '18 years', phone: '+1-800-789-0123' },
            { id: 8, name: 'Amanda Garcia', experience: '13 years', phone: '+1-800-890-1234' },
            { id: 9, name: 'Christopher Lee', experience: '11 years', phone: '+1-800-901-2345' }
        ]
    },
    {
        id: 4,
        name: 'Intellectual Property',
        icon: '🔐',
        description: 'Patents, trademarks, copyrights, and IP protection',
        lawyers: [
            { id: 10, name: 'Patricia Taylor', experience: '16 years', phone: '+1-800-012-3456' },
            { id: 11, name: 'James Anderson', experience: '12 years', phone: '+1-800-123-5678' },
            { id: 12, name: 'Rebecca White', experience: '10 years', phone: '+1-800-234-6789' }
        ]
    },
    {
        id: 5,
        name: 'Real Estate',
        icon: '🏠',
        description: 'Property transactions, leasing, and real estate disputes',
        lawyers: [
            { id: 13, name: 'Thomas Harris', experience: '14 years', phone: '+1-800-345-7890' },
            { id: 14, name: 'Margaret Clark', experience: '13 years', phone: '+1-800-456-8901' },
            { id: 15, name: 'Steven Lewis', experience: '11 years', phone: '+1-800-567-9012' }
        ]
    },
    {
        id: 6,
        name: 'Immigration',
        icon: '✈️',
        description: 'Visa applications, green cards, citizenship, and immigration issues',
        lawyers: [
            { id: 16, name: 'Maria Gonzalez', experience: '12 years', phone: '+1-800-678-0123' },
            { id: 17, name: 'Kevin Park', experience: '10 years', phone: '+1-800-789-1234' },
            { id: 18, name: 'Lisa Ahmed', experience: '11 years', phone: '+1-800-890-2345' }
        ]
    },
    {
        id: 7,
        name: 'Employment Law',
        icon: '💼',
        description: 'Wrongful termination, discrimination, and workplace disputes',
        lawyers: [
            { id: 19, name: 'Mark Johnson', experience: '13 years', phone: '+1-800-901-3456' },
            { id: 20, name: 'Sandra Williams', experience: '14 years', phone: '+1-800-012-4567' },
            { id: 21, name: 'Daniel Martin', experience: '10 years', phone: '+1-800-123-6789' }
        ]
    },
    {
        id: 8,
        name: 'Bankruptcy',
        icon: '📋',
        description: 'Personal and business bankruptcy protection and debt relief',
        lawyers: [
            { id: 22, name: 'Nancy Jackson', experience: '15 years', phone: '+1-800-234-7890' },
            { id: 23, name: 'Richard Davis', experience: '12 years', phone: '+1-800-345-8901' },
            { id: 24, name: 'Diane Scott', experience: '11 years', phone: '+1-800-456-9012' }
        ]
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    
    // Form submissions
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    
    if (signinForm) {
        signinForm.addEventListener('submit', handleSignIn);
    }
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignUp);
    }
    
    // Load lawyer categories on dashboard
    loadLawyerCategories();
    
    // Check if user is logged in
    checkUserLoggedIn();
});

// Toggle between sign in and sign up forms
function toggleForm() {
    const signInPage = document.getElementById('signInPage');
    const signUpPage = document.getElementById('signUpPage');
    
    if (signInPage && signUpPage) {
        signInPage.classList.toggle('active');
        signUpPage.classList.toggle('active');
    }
}

// Handle Sign In
function handleSignIn(e) {
    e.preventDefault();
    console.log('Sign in clicked');
    
    const email = document.getElementById('email').value;
    const userName = email.split('@')[0]; // Extract name from email
    
    console.log('Email:', email, 'Name:', userName);
    
    // Store user session
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', userName);
    
    // Switch to dashboard
    showPage('dashboardPage');
    
    const userDisplay = document.getElementById('userDisplay');
    if (userDisplay) {
        userDisplay.textContent = userName;
    }
    
    // Clear form
    document.getElementById('signinForm').reset();
}

// Handle Sign Up
function handleSignUp(e) {
    e.preventDefault();
    console.log('Sign up clicked');
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    
    console.log('Name:', name, 'Email:', email);
    
    // Store user session
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    
    // Switch to dashboard
    showPage('dashboardPage');
    
    const userDisplay = document.getElementById('userDisplay');
    if (userDisplay) {
        userDisplay.textContent = name;
    }
    
    // Clear form
    document.getElementById('signupForm').reset();
}

// Load lawyer categories into dashboard
function loadLawyerCategories() {
    const grid = document.getElementById('lawyersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    lawyerCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'lawyer-card';
        card.onclick = () => showLawyerDetails(category.id);
        
        card.innerHTML = `
            <div class="lawyer-card-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        
        grid.appendChild(card);
    });
    
    console.log('Categories loaded');
}

// Show lawyer details page
function showLawyerDetails(categoryId) {
    console.log('Showing details for category:', categoryId);
    
    const category = lawyerCategories.find(c => c.id === categoryId);
    
    if (!category) {
        console.error('Category not found');
        return;
    }
    
    const lawyerTitle = document.getElementById('lawyerTitle');
    const lawyerDescription = document.getElementById('lawyerDescription');
    const lawyersList = document.getElementById('lawyersList');
    
    if (lawyerTitle) lawyerTitle.textContent = `${category.name} Lawyers`;
    if (lawyerDescription) lawyerDescription.textContent = category.description;
    
    // Populate lawyers list
    if (lawyersList) {
        lawyersList.innerHTML = '';
        
        category.lawyers.forEach(lawyer => {
            const lawyerCard = document.createElement('div');
            lawyerCard.className = 'lawyer-contact-card';
            
            lawyerCard.innerHTML = `
                <h4>${lawyer.name}</h4>
                <p><strong>Experience:</strong> ${lawyer.experience}</p>
                <div class="contact-info">
                    <strong>Phone:</strong>
                    <span class="phone-number">${lawyer.phone}</span>
                </div>
                <button class="call-btn" onclick="makeCall('${lawyer.phone}', '${lawyer.name}')">
                    📞 Call Now
                </button>
            `;
            
            lawyersList.appendChild(lawyerCard);
        });
    }
    
    // Switch page
    showPage('lawyerDetailsPage');
}

// Make call (simulated)
function makeCall(phone, name) {
    alert(`Calling ${name} at ${phone}...\n\nNote: This is a demonstration. In a real application, this would initiate a phone call or connect through a third-party service.`);
}

// Go back to dashboard
function backToDashboard() {
    showPage('dashboardPage');
}

// Logout
function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    
    // Clear forms
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    
    if (signinForm) signinForm.reset();
    if (signupForm) signupForm.reset();
    
    // Show sign in page
    showPage('signInPage');
}

// Show specific page
function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Check if user is logged in on page load
function checkUserLoggedIn() {
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    
    console.log('Checking login - Email:', userEmail, 'Name:', userName);
    
    if (userEmail && userName) {
        showPage('dashboardPage');
        const userDisplay = document.getElementById('userDisplay');
        if (userDisplay) {
            userDisplay.textContent = userName;
        }
    } else {
        showPage('signInPage');
    }
}

// Run check on page load
window.addEventListener('load', function() {
    console.log('Window loaded - checking user session');
    checkUserLoggedIn();
});
