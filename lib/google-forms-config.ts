// Google Forms Configuration
// Replace these values with your actual Google Form details

export const GOOGLE_FORMS_CONFIG = {
  // Your Google Form ID (extract from the form URL)
  FORM_ID: '19Ud-DKJgdaVbWZuvLATFRZv7pObYt9BYJFkwUlL-AaA', // Your actual form ID
  
  // Field entry IDs (extracted from Google Form HTML)
  FIELDS: {
    NAME: 'entry.60519878',      // Nome completo field ID
    EMAIL: 'entry.1645603381',   // email field ID
    PHONE: 'entry.1691944830',   // Telefone field ID
    MESSAGE: 'entry.1294509315', // Mensagem field ID
  }
};

// Instructions:
// 1. Create a Google Form with fields: Name, Email, Phone, Message
// 2. Get the Form ID from the URL: https://docs.google.com/forms/d/FORM_ID/edit
// 3. Right-click each field → Inspect Element → Find name="entry.XXXXXXXXX"
// 4. Replace the values above with your actual IDs
// 5. The form will submit to: https://docs.google.com/forms/d/FORM_ID/formResponse
