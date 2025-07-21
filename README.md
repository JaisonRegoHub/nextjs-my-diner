Here’s a **README.md** draft for your project, based on everything you’ve shared so far.
It’s written cleanly and ready for your repo — you can tweak details like project name or add screenshots later.

---

```markdown
# My Diner 🍽️

A **Next.js 15** application for sharing and exploring meals.  
Users can browse a list of meals, view details of a single meal, and share their own meals with images and instructions.  
Includes sub-navigation components, full CRUD API support, and error/loading UI states.

---

## ✨ Features

✅ **Sub Navigation Components**  
✅ **API Endpoints**  
- Fetch all meals  
- Fetch single meal details  
✅ **Community Form**  
- Share your meal with title, summary, instructions, and an image  
✅ **Meal Upload Support**  
- Uploaded images are saved to `public/images`  
✅ **UI States**  
- Custom error pages  
- Loading states  
- Not-found pages for invalid routes  

---

## 🏗️ Project Structure (simplified)

```

app/
├── meals/
│   ├── \[mealSlug]/     # Dynamic route for single meal
│   ├── page.js         # Meals list
│   ├── error.js        # Error boundary
│   ├── not-found.js    # 404 state for meals
│   └── share/          # Meal sharing form
├── community/          # Community page
├── layout.js           # Root layout
├── page.js             # Landing page
components/
├── meals/              # Meal UI components
├── main-header/        # Header & navigation
└── images/             # Slideshow component
lib/
├── action.js           # Server actions for form submissions
└── meals.js            # DB read/write helpers
assets/                   # Static assets
public/images/            # Uploaded meal images

````

---

## ⚙️ Tech Stack

- **Next.js 15** with App Router
- **React 19** & `useActionState` for form actions
- **better-sqlite3** for database
- **slugify** for clean meal slugs
- **xss** for sanitizing inputs
- **CSS Modules** for styling

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
npm install
````

### 2️⃣ Initialize the database

You’ve included a script to set up the database:

```bash
node initdb.js
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 📂 API Overview

| Endpoint        | Method | Description               |
| --------------- | ------ | ------------------------- |
| `/meals`        | GET    | List all meals            |
| `/meals/[slug]` | GET    | Get single meal details   |
| `/meals/share`  | POST   | Share a new meal via form |

---

## ✏️ Share a Meal

Fill out the community form with:

* **Your name**
* **Your email**
* **Meal title**
* **Short summary**
* **Instructions**
* **Image upload**

If validation fails, your input values (except image) will remain in the form so you can fix and resubmit.

---

## 📦 Scripts

| Script          | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Run development server  |
| `npm run build` | Build for production    |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint              |

---

## 🛠️ Known Limitations

* File input cannot be pre-populated for security reasons (user must reselect image if validation fails).

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

