require('dotenv').config();
const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  'https://704wash.com'  // Use your authorized redirect URI
);

// Generate the URL for user consent
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://mail.google.com/'],
  prompt: 'consent'  // Force to get refresh token
});

console.log('Authorize this app by visiting this URL:', authUrl);
console.log('\nAfter authorization, you will be redirected to your redirect URI.');
console.log('Copy the "code" parameter from the URL and enter it below:');

// If authorization code is provided as command line argument
if (process.argv.length > 2) {
  const code = process.argv[2];
  exchangeCode(code);
} else {
  // Create readline interface for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the authorization code: ', (code) => {
    rl.close();
    exchangeCode(code);
  });
}

function exchangeCode(code) {
  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.error('Error getting tokens:', err);
      return;
    }
    console.log('\n=== TOKEN INFORMATION ===');
    console.log('Refresh token:', tokens.refresh_token);
    console.log('\nAdd this refresh token to your .env file:');
    console.log(`GMAIL_REFRESH_TOKEN=${tokens.refresh_token}`);
    
    // Also display access token info for debugging
    console.log('\nAccess token (temporary):', tokens.access_token);
    console.log('Token expiry:', new Date(tokens.expiry_date).toLocaleString());
  });
}
