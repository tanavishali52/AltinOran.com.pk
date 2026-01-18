# Setup Instructions

## Step 1: Install Dependencies

```bash
cd altin-oran-react
npm install
```

## Step 2: Copy Assets

You need to copy the following folders and files from the original `construction Company` folder to the `public` folder:

### From `construction Company/` to `altin-oran-react/public/`:

1. **Images Folder:**
   ```bash
   # Copy the entire image folder
   cp -r "construction Company/image" "altin-oran-react/public/image"
   ```

2. **Client Images Folder:**
   ```bash
   # Copy client img folder and rename to client-img (no spaces)
   cp -r "construction Company/client img" "altin-oran-react/public/client-img"
   ```

3. **Video File:**
   ```bash
   # Copy the video file
   cp "construction Company/about-vid.mp4" "altin-oran-react/public/about-vid.mp4"
   ```

### Windows PowerShell Commands:

```powershell
# Copy image folder
Copy-Item -Path "construction Company\image" -Destination "altin-oran-react\public\image" -Recurse

# Copy client img folder (rename to client-img)
Copy-Item -Path "construction Company\client img" -Destination "altin-oran-react\public\client-img" -Recurse

# Copy video file
Copy-Item -Path "construction Company\about-vid.mp4" -Destination "altin-oran-react\public\about-vid.mp4"
```

## Step 3: Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Step 4: Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📝 Next Steps

1. **Complete Component Conversion:**
   - The main structure is set up, but you'll need to convert the remaining HTML sections to React components
   - Check `src/components/` for placeholder components that need content

2. **Add Missing Content:**
   - Projects section with actual project data
   - Team section with team members
   - Contact form functionality
   - Services page full content

3. **Styling Adjustments:**
   - Some complex CSS animations might need custom CSS classes
   - Add any missing Tailwind utilities to `tailwind.config.js`

4. **Testing:**
   - Test all routes and navigation
   - Verify responsive design on mobile/tablet
   - Check all images and assets load correctly

## 🎨 Design Preservation

The design has been preserved using Tailwind CSS classes that match the original styling. All colors, spacing, and layout are maintained as closely as possible to the original HTML/CSS version.
