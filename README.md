# ts-assignment

[![react-native](https://img.shields.io/badge/react--native-0.72.0-brightgreen)](https://reactnative.dev/docs/getting-started)
[![code-style](https://img.shields.io/badge/code%20style-standard%20TS-brightgreen)](https://www.typescriptlang.org/)

---
## Project Description
### Project contains 
(1) Sign-in screen: with e-mail and password input.
(2) Dashboard Screen: contains a bottom tab bar along with the drawer (side menu).
(3) Home: Listing from API with Search at the top
(4) Detail screen: where the item's details is displayed when the list item is clicked.
(5) Listings have pagination with 10 items per page.
(6) On the top right of the Home screen, there is a notification icon; clicking it takes you to the Notification screen.
(7) Create: The Create tab contains input fields along with a Create button at the bottom; on clicking that, you add that item to the top of the home listing and navigate to the home screen.
(8) Video: video listing which contains urls to videos. On clicking an item, navigate to the detail screen where a video player with controls will be there to play the video.
(9) Profile: Contains a profile picture, first name, last name, mobile number, email address, etc. with editing capability.
(10) Side Menu (drawer):
  Home: Same as above.
  Profile: Same as above.
  Settings:
    Change Password
    Change Theme: Light, Dark, and System Default (Bottom sheet)
    Terms and Conditions
    Privacy Policy
    Logout: There is a logout button at the bottom; clicking it takes you to the sign-in screen.
    Version: version label at the bottom of the side menu.
## Prerequisites

**iOS** : XCode(14) onwards

**Android** : Android Studio(4.1) with gradle(6.2) onwards

**Editor** : Visual Studio Code

## How to Run the Project

1. Open the project directory in to terminal
2. Run and build for either OS

   - Run iOS app

     ```bash
     npm run ios
     ```

   - Run Android app

     ```bash
     npm run android
     ```

   - Note: This yarn scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

## Usage

1. Install and Open app.
2. By default, It will redirected to Login Screen, if You have not Authenticated the user with given credentials.
3. You can input credential which are provided above in Project Description section.
4. After Authentication user will be redirect to Home screen in which user can able to access Popular Movies List.
5. If you have already authenticated the user previously and open the app, it will directly redirected to Home Screen where List of Popular Movies will be available.
6. In right side of the header part of the Home screen there is Logout button is available. through which user can get logout and redirected to Login Screen again.

## Coding Style used

This project adheres to JavaScript Standard for coding style. To maintain coding standards, utilizing features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-config](https://www.npmjs.com/package/@react-native-community/eslint-config), [import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) and [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import).

**Do not disable lint inside the code. Try to understand the rule and then follow it into your code. Disabling lint will be considered a violation of coding standards. Exceptions will be allowed by the code-reviewer and team lead after understanding the need to ignore lint.**

1. **To Lint**

   Use the yarn script `lint`. To run it

```bash
  yarn lint
```

2. **Understanding Linting Errors**

   The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## List of all dependencies used in the project with their usage

List all dependencies from the package.json file along with their usage. This list must be updated every time you change/add any dependecy. Here are some examples:

- **Framework:**

  - [React Native](https://github.com/facebook/react-native)

- **Navigation:**

  - [react-navigation](https://github.com/react-navigation/react-navigation), [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler),
    [react-navigation-stack](https://github.com/react-navigation/stack),
    [react-navigation-bottom-tabs](https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs),
    [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
    [react-native-screens](https://github.com/software-mansion/react-native-screens)