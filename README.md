
# MauiChatApp

A messaging application built with .NET MAUI, compatible with JetBrains Rider.

## Project Structure

This is a XAML-based messaging app with two main screens:
- Messages List: Shows a list of all conversations
- Message Detail: Shows a specific conversation with a contact

## Features

- View list of contacts with their last messages
- View conversation history
- Send and receive messages (with simulated responses)
- Online/offline status indicators
- Unread message indicators

## Requirements

- .NET 7.0 SDK
- Visual Studio 2022 or JetBrains Rider
- Android SDK (for Android deployment)
- Xcode 14 or higher (for iOS deployment, macOS only)

## Getting Started

1. Clone the repository
2. Open the solution in JetBrains Rider
3. Build and run the application on your preferred platform

## Project Structure

- Models: Contains data models for contacts and messages
- Pages: XAML UI pages for the application
- ViewModels: Contains the business logic for the UI
- Services: Provides data and functionality to the ViewModels
- Converters: Utility classes for XAML binding conversions

## Dependencies

- .NET MAUI
- Microsoft.Extensions.Logging

## License

This project is licensed under the MIT License.
