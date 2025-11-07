# Team Member Data Management

This guide explains how to add, edit, and manage team member information for the Elegant Capitals website.

## Data Structure

Each team member object contains the following fields:

### Required Fields
- `name`: Full name of the team member
- `position`: Job title and role
- `bio`: Brief professional biography (2-3 sentences)
- `expertise`: Array of key skills/expertise areas
- `image`: Professional headshot URL (preferably 1:1 aspect ratio)

### Additional Information Fields
- `education`: Educational background and degrees
- `experience`: Years of experience summary
- `certifications`: Array of professional certifications
- `achievements`: Array of key accomplishments
- `languages`: Array of languages with proficiency levels

### Social Media Links
- `socialLinks`: Object containing LinkedIn, Facebook, and Instagram URLs

## How to Add a New Team Member

1. Open `src/components/Team.js`
2. Locate the `teamMembers` array
3. Copy the template from `teamMemberTemplate.js`
4. Fill in all the required information
5. Add the new object to the `teamMembers` array

### Example:

```javascript
{
  name: "Your Name",
  position: "Your Position",
  bio: "Your professional biography here...",
  expertise: ["Skill 1", "Skill 2", "Skill 3"],
  image: "https://your-image-url.com/photo.jpg",
  education: "Your degrees and educational background",
  experience: "X+ years in your field",
  certifications: ["Certification 1", "Certification 2"],
  achievements: [
    "Your key achievement 1",
    "Your key achievement 2"
  ],
  languages: ["English (Native)", "Other Language (Level)"],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/yourprofile",
    facebook: "https://www.facebook.com/yourprofile",
    instagram: "https://www.instagram.com/yourprofile"
  }
}
```

## Image Management

### Option 1: Local Images (Recommended)
Store images in the `public/images/team/` folder for better performance and control.

**Setup:**
1. Place your team member photos in `public/images/team/`
2. Use relative paths in the image field: `"/images/team/filename.jpg"`

**Example:**
```javascript
image: "/images/team/john-smith.jpg"
```

**Benefits:**
- Faster loading times
- No external dependencies
- Full control over image quality
- Better for SEO and performance

### Option 2: External URLs
Use hosted images from services like Unsplash, your website, or cloud storage.

**Example:**
```javascript
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
```

**Considerations:**
- Ensure stable hosting
- Check licensing/terms of use
- May be slower to load
- Dependent on external services

## Social Media Links

- Use complete URLs including `https://`
- LinkedIn: Professional networking profile
- Facebook: Personal or business page
- Instagram: Professional or business account

## Best Practices

1. **Keep bios concise**: 2-3 sentences maximum
2. **Highlight achievements**: Focus on measurable results
3. **Professional tone**: Maintain business-appropriate language
4. **Consistent formatting**: Follow the existing pattern
5. **Verify links**: Test all social media links work
6. **Image quality**: Use high-quality, professional photos

## Template File

Use `src/components/teamMemberTemplate.js` as a starting point for new team members. It contains:
- Empty template for copying
- Complete example with sample data
- All required fields with placeholder values

## Updating Existing Members

To edit existing team member information:
1. Find the member in the `teamMembers` array
2. Update the relevant fields
3. Save and test the changes
4. Run `npm run build` to verify no errors

## Display Order

Team members appear in the order they are listed in the array. The first member will be displayed first (top-left), followed by others in row-major order.