<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blue to Purple Gradient</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            font-family: Arial, sans-serif;
        }

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Blue to Purple Gradient Background</h1>
    </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <h2>Sign In</h2>

  <input type="email" id="email" placeholder="Enter email">
  <input type="password" id="password" placeholder="Enter password">

  <button onclick="login()">Login</button>

  <p class="link" onclick="showForgot()">Forgot Password?</p>

  <p id="message"></p>
</div>

<div class="container hidden" id="forgotBox">
  <h2>Reset Password</h2>

  <input type="email" id="resetEmail" placeholder="Enter your email">
  <button onclick="resetPassword()">Send Reset Link</button>

  <p class="link" onclick="goBack()">Back to Login</p>
  <p id="resetMessage"></p>
</div>

<script src="script.js"></script>
</body>
</html>
