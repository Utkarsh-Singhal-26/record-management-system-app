# Record Management System App

This repository contains a Record Management System App built with React Native and Expo. The app allows users to create, edit, and view records, including an image picker option for uploading photos.

## Table of Contents
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Approach](#approach)
- [Known Issues and Limitations](#known-issues-and-limitations)

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Utkarsh-Singhal-26/record-management-system.git
    cd record-management-system
    ```

2. **Install dependencies:**
    ```bash
    pnpm install
    ```

3. **Install Expo CLI globally:**
    ```bash
    pnpm i -g expo-cli
    ```

4. **Set up Firebase:**
    - Create a Firebase project and obtain your Firebase configuration.
    - Create a `.env.local` file in the root of the project and add your Firebase configuration:
    ```bash
    EXPO_PUBLIC_apiKey=your_api_key
    EXPO_PUBLIC_authDomain=your_auth_domain
    EXPO_PUBLIC_projectId=your_project_id
    EXPO_PUBLIC_storageBucket=your_storage_bucket
    EXPO_PUBLIC_messagingSenderId=your_messaging_sender_id
    EXPO_PUBLIC_appId=your_app_id
    ```

5. **Run the application:**
    ```bash
    npx expo start
    ```
    This will start the development server. You can run the app on your mobile device using the Expo Go app or on an emulator.

## Technologies Used

- **React Native**: A framework for building native apps using React.
- **Expo**: A framework and a platform for universal React applications.
- **NativeWind**: A library for styling React Native components with Tailwind CSS.
- **Expo Router**: For handling navigation within the app.
- **Expo Image Picker**: For selecting images from the user's device.
- **Firebase**: A platform for developing mobile and web applications, used for authentication and data storage.

## Approach

The development process of this app involved the following steps:

1. **UI Construction**: Designed and built the user interface, ensuring a clean and user-friendly experience.
2. **Navigation Setup**: Integrated Expo Router for seamless navigation between pages.
3. **Firebase Integration**: Integrated Firebase for authentication and data storage.
4. **Record Creation and Editing**: Implemented functionality to create and edit records, including an image picker for uploading photos.
5. **Record Listing**: Implemented functionality to list all records.
6. **Styling**: Used NativeWind for consistent and responsive styling across the app.

## Known Issues and Limitations

- **File Size Limitations**: Be mindful of the image sizes when using the image picker, as large files may affect performance.
- **Error Handling**: There might be limited error handling for various edge cases, such as network issues or invalid file formats.
- **Platform Differences**: Some functionalities might behave differently on Android and iOS due to platform-specific restrictions and capabilities.

---

Feel free to reach out if you have any questions or suggestions!

Happy coding! 📝
