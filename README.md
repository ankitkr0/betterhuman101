# AI Custom Reminders

## Overview

AI Custom Reminders is a Chrome extension designed to help users stay on track with their personal goals and habits. By leveraging AI, this extension generates personalized reminders to encourage users to eat, hydrate, and stretch based on their specified goals and habits.

## Features

- **Personalized Reminders**: Generates hyper-personalized reminders using AI.
- **Storage**: Saves user data (name, goals, habits) using Chrome's storage API.
- **Notifications**: Sends notifications to remind users to take care of themselves.
- **Alarms**: Uses Chrome's alarm API to trigger reminders at regular intervals.

## Installation

1. Clone the repository or download the ZIP file.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Fill out the onboarding form with your name, goals, and habits.
3. The extension will save your data and start generating reminders based on your input.

## Files

- **popup.js**: Handles the form submission and saves user data.
- **manifest.json**: Defines the extension's metadata and permissions.
- **background.js**: Sets up alarms and handles the generation and display of reminders.

## Permissions

- **storage**: To save user data.
- **notifications**: To display reminders.
- **alarms**: To trigger reminders at regular intervals.

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## Contact

For any questions or suggestions, please open an issue or contact the repository owner.

Enjoy your personalized reminders!
