# 🚀 Google Forms Integration Setup Guide

## 📋 **Step 1: Create Your Google Form**

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with these fields:
   - **Name** (Short answer)
   - **Email** (Short answer)
   - **Phone** (Short answer)
   - **Message** (Paragraph)

## 🔍 **Step 2: Get Your Form ID**

1. Click "Send" → "Link" → Copy the form URL
2. The URL looks like: `https://docs.google.com/forms/d/FORM_ID/edit`
3. Copy the `FORM_ID` part

## 🏷️ **Step 3: Get Field Entry IDs**

1. Open your form in edit mode
2. Right-click on the **Name** field → "Inspect Element"
3. Look for `name="entry.XXXXXXXXX"` - copy this ID
4. Repeat for Email, Phone, and Message fields

## ⚙️ **Step 4: Update Configuration**

Edit `lib/google-forms-config.ts`:

```typescript
export const GOOGLE_FORMS_CONFIG = {
  FORM_ID: 'YOUR_ACTUAL_FORM_ID', // Replace with your form ID
  
  FIELDS: {
    NAME: 'entry.YOUR_NAME_FIELD_ID',     // Replace with your name field ID
    EMAIL: 'entry.YOUR_EMAIL_FIELD_ID',   // Replace with your email field ID
    PHONE: 'entry.YOUR_PHONE_FIELD_ID',   // Replace with your phone field ID
    MESSAGE: 'entry.YOUR_MESSAGE_FIELD_ID', // Replace with your message field ID
  }
};
```

## 🧪 **Step 5: Test the Integration**

1. Deploy your changes
2. Fill out the contact form on your website
3. Check your Google Form responses to see if data appears

## ✅ **How It Works**

- **Frontend**: Your beautiful custom contact form
- **Backend**: Data submits directly to Google Forms
- **User Experience**: Seamless - users see your form, data goes to Google Sheets
- **Data Storage**: All responses appear in your Google Form's response sheet

## 🔧 **Troubleshooting**

- **Form not submitting**: Check that field IDs are correct
- **Data not appearing**: Verify the form ID is correct
- **CORS errors**: This is normal with Google Forms (we use `no-cors` mode)

## 📊 **Benefits**

- ✅ No backend server needed
- ✅ Data automatically goes to Google Sheets
- ✅ Easy to export and analyze data
- ✅ Free with Google account
- ✅ Beautiful custom UI maintained
