// Google Forms Configuration
// Replace these values with your actual Google Form details

export const GOOGLE_FORMS_CONFIG = {
  // Your Google Form ID (extract from the form URL)
  FORM_ID: 'YOUR_FORM_ID', // Replace with your actual form ID
  
  // Field entry IDs (get these by inspecting your Google Form fields)
  FIELDS: {
    NAME: 'entry.1234567890',     // Replace with your name field ID
    EMAIL: 'entry.0987654321',    // Replace with your email field ID
    PHONE: 'entry.1122334455',    // Replace with your phone field ID
    MESSAGE: 'entry.5566778899',  // Replace with your message field ID
  }
};

// Instructions:
// 1. Create a Google Form with fields: Name, Email, Phone, Message
// 2. Get the Form ID from the URL: https://docs.google.com/forms/d/FORM_ID/edit
// 3. Right-click each field → Inspect Element → Find name="entry.XXXXXXXXX"
// 4. Replace the values above with your actual IDs
// 5. The form will submit to: https://docs.google.com/forms/d/FORM_ID/formResponse
