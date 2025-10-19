# GameHub 🎮

GameHub is a modern web application built with React and TypeScript that serves as a video game discovery platform. Users can browse through a vast collection of games, view their details, and filter them based on various criteria.

## Features

- 🎮 Browse a vast collection of video games
- 🌓 Dark/Light mode support
- 📱 Responsive design that works on desktop and mobile
- 🎯 Game filtering and search functionality
- ⭐ Critic scores and ratings display
- 🎮 Platform compatibility indicators
- 🖼️ Dynamic image loading and optimization

## Tech Stack

- **Frontend Framework:** React 18
- **Type System:** TypeScript
- **Styling:** Chakra UI
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Animation:** Framer Motion

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mdaqil7300/gamehub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd gamehub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run lint` - Runs ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # React components
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   ├── NavBar.tsx
│   └── ...
├── hooks/          # Custom React hooks
├── services/       # API and service layer
└── theme.ts        # Chakra UI theme configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
