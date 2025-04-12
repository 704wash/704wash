# Contact Form with Gmail API Integration

This guide explains how to set up the contact form to send emails using Google's Gmail API.

## Setup Instructions

### 1. Set Up Google Cloud Project and Gmail API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Gmail API for your project
4. Configure the OAuth consent screen
   - Set the application type to "External"
   - Add the necessary scopes (`https://mail.google.com/`)
   - Add test users (including the Gmail account you'll use to send emails)
5. Create OAuth 2.0 credentials
   - Create a new OAuth client ID
   - Set the application type to "Web application"
   - Add `https://developers.google.com/oauthplayground` as an authorized redirect URI
   - Download the client ID and client secret

### 2. Get Refresh Token

1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Click the gear icon in the top right corner and check "Use your own OAuth credentials"
3. Enter your client ID and client secret
4. Select the scope: `https://mail.google.com/`
5. Click "Authorize APIs" and follow the prompts to authorize with your Gmail account
6. Click "Exchange authorization code for tokens"
7. Copy the refresh token

### 3. Configure Environment Variables

1. Create a `.env` file in the server directory (use `.env.example` as a template)
2. Add your Gmail API credentials:
   ```
   PORT=5000
   EMAIL_FROM=your-gmail@gmail.com
   EMAIL_TO=recipient@example.com
   GMAIL_CLIENT_ID=your-client-id
   GMAIL_CLIENT_SECRET=your-client-secret
   GMAIL_REDIRECT_URI=https://developers.google.com/oauthplayground
   GMAIL_REFRESH_TOKEN=your-refresh-token
   ```

### 4. Install Dependencies and Start the Server

1. Navigate to the server directory
   ```
   cd odyssey-pressure-washing/server
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the server
   ```
   npm start
   ```

## Important Notes

1. **Security**: The refresh token grants access to your Gmail account. Never commit the `.env` file to version control.

2. **Gmail API Quotas**: Be aware of [Gmail API usage limits](https://developers.google.com/gmail/api/reference/quota).

3. **Production Deployment**: For production, deploy the backend to a proper hosting service like Heroku, Netlify Functions, or AWS.

4. **CORS Configuration**: Update the CORS settings in `server.js` if your frontend is hosted on a different domain.

5. **Less Secure Apps**: If you're having issues, make sure your Google account settings allow for less secure app access or use App Passwords.

## Troubleshooting

- If emails aren't being sent, check the server console logs for detailed error messages.
- Ensure your Google account doesn't have 2FA enabled, or create an App Password if it does.
- Verify that the Gmail API is properly enabled in your Google Cloud project.
