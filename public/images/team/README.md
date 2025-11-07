# Team Member Images

This folder contains professional headshot images for team members displayed on the Elegant Capitals website.

## Folder Structure
```
public/
├── images/
│   └── team/
│       ├── member1.jpg
│       ├── member2.jpg
│       └── ...
```

## Image Guidelines

### Technical Specifications
- **Format**: JPG, PNG, or WebP
- **Resolution**: Minimum 400x400px (recommended 800x800px for high-DPI displays)
- **Aspect Ratio**: Square (1:1) preferred
- **File Size**: Under 500KB per image (optimize for web)

### Content Guidelines
- **Professional headshots** only
- **Neutral/plain background** (white, gray, or blue)
- **Business professional attire**
- **Good lighting** and focus
- **High quality** and resolution
- **Consistent style** across all team photos

## Naming Convention

Use descriptive, consistent naming for easy identification:

```
firstname-lastname.jpg
firstname-lastname-headshot.jpg
position-firstname-lastname.jpg
```

### Examples:
- `john-smith.jpg`
- `sarah-johnson-ceo.jpg`
- `michael-chen-advisor.jpg`

## How to Add Images

1. **Prepare your image** according to the guidelines above
2. **Name the file** using the naming convention
3. **Place in this folder**: `public/images/team/`
4. **Update Team.js**: Change the image path in the team member data

### Example Usage in Team.js:
```javascript
{
  name: "John Smith",
  // ... other fields ...
  image: "/images/team/john-smith.jpg", // Local image path
  // ... rest of fields ...
}
```

## Image Optimization

Before adding images, consider optimizing them for web:

### Online Tools:
- **TinyPNG** (https://tinypng.com/) - Lossless compression
- **ImageOptim** (https://imageoptim.com/) - Mac optimization
- **JPEGmini** (https://www.jpegmini.com/) - JPEG optimization

### Command Line (if you have ImageMagick):
```bash
# Resize and compress
convert input.jpg -resize 800x800 -quality 85 output.jpg
```

## Best Practices

1. **Consistent sizing**: All images should be similar dimensions
2. **File naming**: Use lowercase, hyphens instead of spaces
3. **Backup originals**: Keep full-resolution versions elsewhere
4. **Regular updates**: Refresh photos every 1-2 years
5. **Accessibility**: Ensure good contrast and facial visibility

## Troubleshooting

### Image not showing?
- Check file path in Team.js matches exactly
- Verify file is in `public/images/team/` folder
- Ensure file extension is correct (jpg/png/webp)
- Check browser developer tools for 404 errors

### Image too large?
- Compress using online tools
- Resize to recommended dimensions
- Use WebP format for better compression

### Image quality issues?
- Use higher resolution source images
- Ensure good lighting in original photo
- Avoid heavy compression artifacts