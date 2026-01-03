# Setup & Run Instructions

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd "c:\Users\balua\OneDrive\Documents\Desktop\Upzenix\ToDo List"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **The application will automatically open in your browser at:**
   ```
   http://localhost:3000
   ```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` folder with optimized files ready for deployment.

## Project Files Overview

### Core Components
- **src/App.js** - Main React component with all functionality
  - Task management (add, edit, delete, complete)
  - Filter logic
  - localStorage integration
  - State management with useState/useEffect

- **src/App.css** - Styling and responsive design
  - Modern gradient design
  - Smooth animations
  - Mobile-responsive layout
  - Animation keyframes

- **src/index.js** - React entry point
- **src/index.css** - Global styles

### Configuration
- **package.json** - Dependencies and scripts
- **public/index.html** - HTML template
- **tsconfig.json** - TypeScript configuration
- **.gitignore** - Git ignore rules

## Features Demonstration

### ✅ Add Tasks
1. Type in the input field
2. Click "Add Task"
3. Task appears at the top of the list

### ✏️ Edit Tasks
1. Click "Edit" on any task
2. Edit section appears with current text
3. Modify and click "Save" or "Cancel"

### 🗑️ Delete Tasks
1. Click "Delete" button
2. Task is removed immediately

### ☑️ Mark Complete/Incomplete
1. Click the checkbox
2. Task gets strikethrough styling
3. Click again to undo

### 🔍 Filter Tasks
- **All Tasks** - Show all tasks
- **Active** - Show only incomplete tasks
- **Completed** - Show only completed tasks

### 📊 Statistics
- Total tasks count
- Active tasks count
- Completed tasks count

## Testing Features

### Test Data Entry
1. Add multiple tasks
2. Mark some as complete
3. Edit a few tasks
4. Test filtering options
5. Refresh the page - data persists!

### Test localStorage
- Open Developer Tools (F12)
- Go to Application > localStorage
- Look for key "todoTasks"
- See your tasks stored as JSON

### Test Responsiveness
1. Press F12 to open DevTools
2. Click the device toolbar icon
3. Test on different screen sizes
4. Try mobile view (375px width)

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process on port 3000 (Windows):
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm start
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rmdir /s /q node_modules

# Reinstall
npm install
```

### Changes Not Reflecting
1. Save all files (Ctrl+S)
2. Check browser console for errors (F12)
3. Hard refresh browser (Ctrl+Shift+R)

## Performance Tips

- The app uses React Hooks for optimal performance
- useEffect cleanup prevents memory leaks
- localStorage operations are efficient
- No unnecessary re-renders

## Browser DevTools Tips

### View localStorage
1. Open DevTools (F12)
2. Application tab > localStorage
3. Find "http://localhost:3000"
4. View the "todoTasks" key

### Check Console for Errors
1. Open DevTools (F12)
2. Console tab
3. Look for any error messages

### Monitor Network Performance
1. Network tab in DevTools
2. Watch API/resource loading
3. Check performance metrics

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
# Then connect to Vercel at https://vercel.com
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

### Deploy to GitHub Pages
Update package.json with:
```json
"homepage": "https://yourusername.github.io/todo-list-app"
```

Then:
```bash
npm run build
npm run deploy
```

## Support & Resources

- React Hooks Documentation: https://react.dev/reference/react
- localStorage MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Create React App: https://create-react-app.dev/

---

**Happy Task Managing! 🎉**
