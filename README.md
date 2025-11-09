# 📱 HabitTrackingApp

**HabitTrackingApp** is a simple and intuitive React Native mobile application designed to help users build and maintain positive daily habits. It allows users to create, track, and analyze their progress through an easy-to-use interface.

---

## 🚀 Features

* **User Authentication**

  * Secure signup and login functionality.
  * Option to continue with saved habits after login.

* **Habit Management**

  * Add new habits with title, description, and goal frequency (daily, weekly, etc.).
  * Edit or delete existing habits anytime.
  * Toggle completion status for each day’s habit.

* **Progress Tracking**

  * Visual progress indicators (streaks, completion percentage).
  * Track habits through a calendar or progress bar view.
  * Automatically updates streaks when habits are completed.

* **Notifications & Reminders**

  * Local notifications to remind users of pending habits.
  * Configurable reminder times for each habit.

* **Data Persistence**

  * Stores habit data locally using **AsyncStorage** or synced via backend API (if integrated).
  * Retains progress even after app restarts.

---

## 🧩 Tech Stack

* **Framework:** React Native (Expo or CLI)
* **State Management:** React Hooks / Context API / Redux (optional)
* **Navigation:** React Navigation
* **Storage:** AsyncStorage / SQLite / REST API integration
* **Notifications:** Expo Notifications or React Native Push Notifications

---

## ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/HabitTrackingApp.git
   cd HabitTrackingApp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the app:**

   ```bash
   npx expo start
   # or for React Native CLI
   npx react-native run-android
   npx react-native run-ios
   ```

---

## 📖 Main Actions

| Action                | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| **Add Habit**         | Create a new habit with details like name, goal frequency, and reminder time. |
| **Edit Habit**        | Update an existing habit’s title, goal, or reminder.                          |
| **Mark as Complete**  | Tap to mark a habit as done for the day.                                      |
| **Delete Habit**      | Permanently remove a habit from the list.                                     |
| **View Progress**     | Check completion stats, streaks, and progress history.                        |
| **Receive Reminders** | Get notifications to complete daily tasks.                                    |

---

## 🧠 Future Improvements

* Cloud sync and multi-device support.
* Social features for shared challenges.
* Dark mode and custom theme support.
* Habit suggestions using AI-based recommendations.

---

## 👨‍💻 Author

**Usman Ahmed**
Software Engineer | Full Stack Developer
[GitHub](https://github.com/usikandar) • [LinkedIn](https://linkedin.com/in/usikandar)

