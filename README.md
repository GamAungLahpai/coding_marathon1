# Group 1
## Coding Marathon 1
## Introduction
This is a coding marathon 1 for Web-development course in Metropolia University of Applied Science.This coding marathon focuses on *React component development, controlled forms, state management, and basic CRUD operations*.

This repository contains components developed as part of *Phase 2: Component Development*. Each team member selected and implemented one component from the following options:

    - ⁠⁠ SignUpPage ⁠
    -⁠  ⁠⁠BookCollectionManager ⁠
    -⁠  ⁠⁠ContactListManager ⁠
    -⁠  ⁠⁠RecipeManager ⁠
    -⁠  ⁠⁠ShoppingCart ⁠
## Activity Overview

### Objectives

1.⁠ ⁠*Refactor to Extract Components*
   - Each component should separate the main item into its own sub-component for better reusability.
     - ⁠ BookCollectionManager ⁠ → ⁠ Book ⁠ component
     - ⁠ ContactListManager ⁠ → ⁠ Contact ⁠ component
     - ⁠ RecipeManager ⁠ → ⁠ Recipe ⁠ component
     - ⁠ ShoppingCart ⁠ → ⁠ Item ⁠ component
     -  SignUpPage ⁠ → self-contained component (no sub-component required)

2.⁠ ⁠*Expand Input Fields*
   - Add additional input fields to capture more details for each component:

   #### BookCollectionManager
   - ⁠ genre ⁠, ⁠ language ⁠, ⁠ edition ⁠, ⁠ pages ⁠, ⁠ rating ⁠

   #### ContactListManager
   - ⁠ job_title ⁠, ⁠ birthday ⁠, ⁠ notes ⁠, ⁠ website ⁠, ⁠ favorite ⁠

   #### RecipeManager
   - ⁠ cuisine ⁠, ⁠ difficulty ⁠, ⁠ cookTime ⁠, ⁠ servings ⁠, ⁠ allergens ⁠

   #### ShoppingCart
   - ⁠ brand ⁠, ⁠ subtotal ⁠, ⁠ tax ⁠, ⁠ availability
   
   #### SignUpPage
   - ⁠ email ⁠, ⁠ password ⁠, ⁠ nationality ⁠  
   -  Display dynamic greeting based on nationality
   -  Validation for email and password strength ⁠

3.⁠ ⁠*CSS Styling*
   - Optional but encouraged: apply CSS to improve visual presentation.

---

## Component Details

### 1. SignUpPage
•⁠  ⁠*Purpose:* Render a signup form with email, password, and nationality inputs.

•⁠  ⁠*Features:*
  - Email validation (checks for ⁠ @ ⁠ and ⁠ . ⁠)
  - Password strength feedback (⁠ Too weak ⁠, ⁠ Weak ⁠, ⁠ Strong ⁠)
  - Select input for nationality and display of corresponding greeting
  - Dynamic validation messages

•⁠  ⁠*Sub-component:* None (self-contained)

•⁠  ⁠*Bonus:* Input highlights for valid/invalid email and strong/weak password

---

### 2. BookCollectionManager
•⁠  ⁠*Purpose:* Manage a collection of books.

•⁠  ⁠*State:* Book list and input fields (⁠ title ⁠, ⁠ author ⁠, ⁠ genre ⁠, ⁠ language ⁠, ⁠ edition ⁠, ⁠ pages ⁠, ⁠ rating ⁠)

•⁠  ⁠*Sub-component:* ⁠ Book ⁠ — displays individual book details

•⁠  ⁠*Features:*
  - Add, view, and delete books
  - Controlled form inputs
  - List rendering using ⁠ .map() ⁠

---

### 3. ContactListManager
•⁠  ⁠*Purpose:* Manage a contact list.

•⁠  ⁠*State:* Contact list and input fields (⁠ name ⁠, ⁠ job_title ⁠, ⁠ birthday ⁠, ⁠ notes ⁠, ⁠ website ⁠, ⁠ favorite ⁠)

•⁠  ⁠*Sub-component:* ⁠ Contact ⁠ — displays individual contact details

•⁠  ⁠*Features:*
  - Add, view, and delete contacts
  - Controlled form inputs
  - List rendering using ⁠ .map() ⁠

---

### 4. RecipeManager
•⁠  ⁠*Purpose:* Manage recipes.

•⁠  ⁠*State:* Recipe list and input fields (⁠ title ⁠, ⁠ cuisine ⁠, ⁠ difficulty ⁠, ⁠ cookTime ⁠, ⁠ servings ⁠, ⁠ allergens ⁠)

•⁠  ⁠*Sub-component:* ⁠ Recipe ⁠ — displays individual recipe details

•⁠  ⁠*Features:*
  - Add, view, and delete recipes
  - Controlled form inputs
  - List rendering using ⁠ .map() ⁠

---

### 5. ShoppingCart
•⁠  ⁠*Purpose:* Manage shopping cart items.

•⁠  ⁠*State:* Cart items and input fields (⁠ name ⁠, ⁠ brand ⁠, ⁠ subtotal ⁠, ⁠ tax ⁠, ⁠ availability ⁠)

•⁠  ⁠*Sub-component:* ⁠ Item ⁠ — displays individual cart item

•⁠  ⁠*Features:*
  - Add, view, and delete cart items
  - Controlled form inputs
  - List rendering using ⁠ .map() ⁠


## Members
    - Sandip Ranjit – SignUpPage
    - Dinal Maha Vidanelage – BookCollectionManager
    - Sailesh Karki – ShoppingCart
    - Twe He Gam Aung – ContactListManager 
    - Olga Chitembo - RecipeManager 



---


