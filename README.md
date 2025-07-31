# 🌍 Waste Hero Challenge

An interactive eco-educational game where users become waste sorting champions! Sort waste items, earn eco-points, and save the planet one item at a time.

## 🚀 Features

### 🖼️ Smart Scanning System
- **Animated Scanner**: Fun scanning beam effect with camera animations
- **Mock Camera**: Simulates real waste item scanning experience
- **Sector Selection**: Choose between Household, Industrial, and Campus sectors

### 🎯 Waste Categories & Logic
- **6 Categories**: Organic, Plastic, E-Waste, Paper, Metal, Glass
- **Smart Matching**: Automatic category detection based on item properties
- **Educational Tips**: Disposal tips and recycling information for each item
- **Real Data**: Based on actual waste composition statistics

### 🎮 Points & Progress System
- **Eco Points**: Earn points for correct sorting
- **Level Progression**: 
  - Rookie Recycler (0-49 points)
  - Neighborhood Ninja (50-149 points)
  - Planet Protector (150-299 points)
  - Eco Warrior (300-499 points)
  - Sustainability Sage (500+ points)
- **Progress Tracking**: Monitor your recycling journey

### 📊 Interactive Statistics
- **Sector Infographics**: Pie charts showing waste composition
- **Progress Analytics**: Bar charts for category performance
- **Real Statistics**: Based on actual US waste data
- **Fun Facts**: Educational tidbits about each sector

### 🧠 Educational Quizzes
- **Mini Quizzes**: Appear every 3 items sorted
- **Category-Specific**: Questions tailored to waste categories
- **Bonus Points**: Earn extra eco-points for correct answers
- **Explanations**: Learn why answers are correct/incorrect

### 🌈 Bonus Features
- **Beautiful UI**: Modern, eco-themed design with animations
- **Responsive Design**: Works on desktop and mobile
- **Progress Persistence**: Saves your progress locally
- **Sector-Specific Items**: Different waste items for each sector

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for interactive charts
- **Lucide React** for icons
- **React Router** for navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd waste-hero-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎮 How to Play

1. **Choose Your Sector**: Select from Household, Industrial, or Campus
2. **Start Scanning**: Click the scan button to reveal waste items
3. **Sort Items**: Choose the correct waste category for each item
4. **Learn**: Read disposal tips and recycling information
5. **Take Quizzes**: Answer educational questions every 3 items
6. **Track Progress**: View your stats and level up

## 📊 Game Data

### Waste Items
- **18 Unique Items**: 6 items per sector
- **Realistic Scenarios**: Based on actual waste types
- **Educational Content**: Each item includes disposal tips and recycling info

### Sectors
- **Household**: Everyday items like food waste, bottles, electronics
- **Industrial**: Construction materials, chemicals, manufacturing waste
- **Campus**: Academic waste from cafeterias, offices, student areas

### Statistics
- **Real Data**: Based on US Environmental Protection Agency statistics
- **Sector Breakdown**: Accurate waste composition percentages
- **Fun Facts**: Educational content about each sector

## 🎨 Design Features

### Eco Theme
- **Green Color Palette**: Environmentally conscious design
- **Smooth Animations**: Engaging user experience
- **Modern UI**: Clean, accessible interface
- **Responsive**: Works on all device sizes

### Interactive Elements
- **Animated Scanning**: Realistic scanning experience
- **Progress Bars**: Visual feedback on achievements
- **Charts & Graphs**: Data visualization
- **Modal Dialogs**: Educational content presentation

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── HomePage.tsx    # Landing page
│   ├── GamePage.tsx    # Main game interface
│   ├── StatsPage.tsx   # Statistics and charts
│   ├── Scanner.tsx     # Scanning animation
│   ├── ResultModal.tsx # Results display
│   └── QuizModal.tsx   # Educational quizzes
├── data/               # Game data
│   ├── wasteItems.ts   # Waste item definitions
│   ├── sectorStats.ts  # Sector statistics
│   └── quizQuestions.ts # Quiz questions
├── types/              # TypeScript definitions
│   └── game.ts         # Game type definitions
└── App.tsx             # Main application
```

### Key Features Implementation

#### Scanning System
- Animated scanning beam effect
- Simulated camera interface
- Random item selection by sector

#### Progress Tracking
- Local storage persistence
- Real-time point calculation
- Level progression system

#### Educational Content
- Disposal tips for each item
- Recycling information
- Sector-specific fun facts
- Interactive quizzes

## 🌟 Future Enhancements

- **Multiplayer Mode**: Compete with friends
- **Achievement System**: Unlock badges and rewards
- **Leaderboards**: Global and local rankings
- **AR Integration**: Real camera scanning
- **More Sectors**: Additional waste categories
- **Mobile App**: Native mobile application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- US Environmental Protection Agency for waste statistics
- Recycling education organizations for content inspiration
- Open source community for amazing tools and libraries

---

**Made with ❤️ for a greener planet! 🌱** 