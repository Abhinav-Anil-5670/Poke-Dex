# Pokédex Web Application

A modern, responsive, and feature-rich Pokédex application built with **React** and **Redux**.  
This project allows users to browse, search, and learn about their favorite Pokémon, as well as create their own personal team of favorites. It leverages the powerful [PokéAPI](https://pokeapi.co/) for comprehensive Pokémon data.

---

## ✨ Features

This application is packed with features designed to provide a complete Pokédex experience:

- 📜 **Infinite Scroll Pokémon List**  
  Browse through a seamless list of Pokémon. New Pokémon are automatically fetched as you scroll to the bottom of the page.

- 🔍 **Powerful Search**  
  Find any Pokémon instantly by its name or official Pokédex number.

- 📊 **Dynamic & Detailed Pokémon Pages**  
  Every Pokémon has its own dedicated page, accessible via a unique URL, including:
  - **Main Identity Block**: Name, official artwork, Pokédex number, and elemental types.
  - **Physical & Lore Section**: Classic Pokédex entry, height, weight, and detailed abilities with official descriptions.
  - **Base Stat Visualization**: Graphical representation of HP, Attack, Defense, and more.
  - **Visual Evolution Chain**: Clear, visual flowchart of the entire evolutionary line with images and names.

- ⭐ **Favorites System**  
  - **Add & Remove**: Easily favorite or unfavorite any Pokémon.  
  - **Persistent State**: Redux keeps your favorites saved globally across the app.  
  - **Dedicated "My Team" Page**: See all your favorited Pokémon in one place.  
  - **Synchronized UI**: Favorite icons update in real-time.

- 📱 **Fully Responsive Design**  
  Built with **Tailwind CSS** using a mobile-first approach, ensuring a smooth experience across all devices.

---

## 🛠️ Tech Stack

- **Framework**: React  
- **State Management**: Redux Toolkit  
- **Routing**: React Router  
- **Styling**: Tailwind CSS  
- **API Communication**: Axios  
- **Data Source**: PokéAPI v2  

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)  
- npm or yarn

### Installation

Clone the repository:
```bash
git clone https://github.com/Abhinav-Anil-5670/pokedex-app.git
```
Install dependencies:
```bash
npm i
```

Run the application:
```bash
npm run dev
```

The app will be available at:
👉 http://localhost:5173



