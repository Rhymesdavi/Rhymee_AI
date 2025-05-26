
## Rhymee_AI
![Artifonia AI (Community)](https://github.com/user-attachments/assets/d6169620-1256-4e02-8291-4df348fa5f42)



A React Native mobile application built with Expo, using TypeScript for type safety and faster development.

## Table of Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Development Build](#development-build)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Requirements

To work on this project, you need to have the following tools installed:

- [Node.js](https://nodejs.org/en/) (>= 18.x)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (>= 5.x)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/Rhymesdavi/Rhymee_AI.git
cd project-name
```

Install dependencies:

```bash
yarn install
# or
npm install
```

## Development Build

Normally, Expo Go app would be used to run the project for development but since this project uses **custom native code**, you need to create a **development build** to work on the native features of the app.

To create a development build, run:

```bash
npx eas build --platform android --profile development
# or
npx eas build --platform ios --profile development
```

For details on the development build process, refer to the [Expo Development Builds Documentation](https://docs.expo.dev/development/introduction/).

## Running the Project

To start the Expo server, simply run the following command:

```bash
npx expo start
```

This will open the Expo Developer Tools in your browser. From there, you can:

- **Run on Android**: Press "a" to launch the app on your connected Android device or emulator.
- **Run on iOS**: Press "i" to launch the app on your connected iOS device or simulator.
- **Run on Web**: Press "w" to launch a web version of your app.

## Folder Structure

Here's an overview of the primary folder structure for this project:

```bash
.
├── assets/              # Static assets such as images, fonts, etc.
├── app/                 # App entry, all app routes start from here
├── src/
│   ├── api/             # api calls used all across the app
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── interfaces/      # Contains types for the data objects across the app
│   ├── state/           # State objects, Jotai is the state manager of choice
│   ├── constants/       # App-wide constants
│   ├── utils/           # Utility function, colors and helpers
│   └── App.tsx          # Main entry point
├── app.json             # app configurations
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration

```

## Technologies Used

- [Expo](https://expo.dev/) - A framework and platform for universal React applications.
- [React Native](https://reactnative.dev/) - The mobile framework for building native apps using React.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with static type definitions.
- [React Navigation](https://reactnavigation.org/) - Routing and navigation for React Native apps.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for making API requests.
- [Jotai](https://jotai.org/docs/introduction) - A small, fast, and scalable state management solution.

## Contributing

Feel free to submit issues and pull requests to improve the project. Please adhere to the contribution guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
