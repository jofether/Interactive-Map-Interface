# Interactive Map Interface

A React application demonstrating percentage-based absolute positioning of interactive pins over a map background. This layout trains the model to understand elements anchored relative to a specific container rather than the document flow.

## Features

- **Interactive Pins**: Click on pins to reveal location labels
- **Hover Tooltips**: Hover over pins to preview location information
- **Responsive Design**: Built with Tailwind CSS for modern styling
- **Reset Functionality**: Button to clear active pin selection
- **Scalable Architecture**: Easy to add new locations and extend functionality

## Project Structure

```
src/
├── App.jsx          # Main component with pin configuration
├── main.jsx         # React entry point
└── index.css        # Tailwind CSS imports
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Build

```bash
npm build
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Key Learning Points

This project demonstrates:
- Percentage-based absolute positioning for responsive layouts
- Container-relative positioning (requires `position: relative` on parent)
- React hooks (useState) for interactive state management
- Tailwind CSS responsive utilities and animations

## Future Enhancements

- Replace grid with actual map image
- Add location details modal
- Implement pin creation/editing
- Add location filtering/search
