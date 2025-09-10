# Google Sheets Integration Setup Guide

## Step 1: Create Google Apps Script

1. Go to https://script.google.com/
2. Click "New Project"
3. Replace the default code with this:

```javascript
function doGet(e) {
  try {
    // Get parameters from URL
    const params = e.parameter;
    
    // Open your Google Sheet
    const spreadsheet = SpreadsheetApp.openById('AKfycbxWAv1ZjZsitHVEZK8Pp5jMuNy3NasMer6QMHjSEBTggYMTplOi4E8adFG3da7mdluK');
    const sheet = spreadsheet.getSheetByName('quotebridgehub') || spreadsheet.getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Timestamp', 'Name', 'Email', 'Phone', 'Zip Code', 'Medicare Enrolled', 'Consent', 'TrustedForm Cert URL'
      ]]);
    }
    
    // Add the form data to the sheet
    sheet.appendRow([
      params.timestamp || '',
      params.name || '',
      params.email || '',
      params.phone || '',
      params.zip || '',
      params.enrolled || '',
      params.consent || '',
      params.trustedFormCertUrl || ''
    ]);
    
    return ContentService
      .createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doPost(e) {
  // Fallback for POST requests - redirect to GET handler
  return doGet(e);
}
```

## Step 2: Deploy the Script

1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 3: Create Google Sheet

1. Create a new Google Sheet
2. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
3. Replace 'YOUR_SHEET_ID' in the script with your actual Sheet ID

## Step 4: Update Form Component

Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL' in Form.jsx with your actual Web App URL from Step 2.

## What Data Gets Sent

When users submit the form, this data will be sent to Google Sheets:
- Timestamp
- Name
- Email
- Phone
- Zip Code
- Medicare Enrollment Status (YES/NO)
- TrustedForm Certificate URL (for compliance)

## Testing

1. Fill out your form completely
2. Submit it
3. Check your Google Sheet - the data should appear automatically
4. Check browser console for any errors
