# Harry Potter Character Finder

# Overview:
The Harry Potter Character Finder is an Angular web application that allows users to explore characters from the Harry Potter universe. Users can browse all characters, filter them by house, and view individual character details.


# FeaturesView All Characters: 
Displays a list of all characters from the API.

# Filter by House: 
Select a Hogwarts house to view only the characters belonging to it.

# Character Details: 
Click on a character to view more information about them.

# Tech StackFrontend: 
Angular, TypeScript

# UI Components: 
Angular Material

# Backend API: 
Harry Potter API

# Installation & SetupPrerequisites:  
Ensure you have Node.js and Angular CLI installed:
npm install -g @angular/cliClone the Repositorygit clone https://github.com/your-username/harry-potter-app.git
cd harry-potter-appInstall Dependenciesnpm installRun the Applicationng serveThen open http://localhost:4200/ in your browser.
Project Structure/src
  ├── app
  │   ├── components
  │   │   ├── character-list  # Displays all characters
  │   │   ├── character-filter  # Filter characters by house
  │   │   ├── character-detail  # Shows details of a selected character
  │   ├── services
  │   │   ├── harry-potter.service.ts  # Fetches data from API
  │   ├── app.module.ts
  ├── assets  # Images, styles, etc.
  ├── styles.css  # Global styles
  
# API Endpoints Used
Get all characters: /characters
Get characters by house: /house/{house}
Get character by ID: /character/{id}


# Pegah Ghods Mohammadi