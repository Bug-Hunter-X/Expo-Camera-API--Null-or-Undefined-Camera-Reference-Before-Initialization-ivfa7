# Expo Camera API Initialization Bug

This repository demonstrates a common bug encountered when using the Expo Camera API: attempting to access camera features before the camera has fully initialized. This results in `null` or `undefined` values for the camera reference.

## Bug Description

The `bug.js` file showcases the problem.  It attempts to access camera properties immediately, without waiting for the camera to be ready. This leads to errors because `cameraRef.current` is initially `null`.

## Solution

The `bugSolution.js` file provides a corrected version. It uses `async/await` to ensure the camera is initialized before accessing its properties.  This prevents the `null` or `undefined` error.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the bug example: `expo start --web` (or native). Observe the error.
4. Run the solution example: `expo start --web` (or native). Observe the correct behavior.

## Key Learning

Always use `async/await` or promises with the Expo Camera API to handle the asynchronous nature of camera initialization. Avoid accessing camera properties until the `onCameraReady` callback (or a similar mechanism) confirms the camera is ready for use.