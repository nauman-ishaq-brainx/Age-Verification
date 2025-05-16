# Age Verification Form

This repository contains a simple form that validates a user's birth date to check if they are at least **15 years old**. Depending on the validation, the form will either redirect the user to Google or display an age-restriction alert.

## Features

* Accepts **day, month, and year** inputs for the birth date.
* Checks if the user is at least **15 years old**.
* Redirects to [Google](https://www.google.com) if the user meets the age requirement.
* Displays an alert if the user is **not old enough**.
* Handles edge cases with appropriate error messages, including:

  * Months greater than **12** or less than **1**.
  * Years before **1950** or after the current year.
  * Days that are **zero** or exceed the number of days in the specified month.

## Live Demo

Check out the live demo of the form [here](https://nauman-ishaq-brainx.github.io/Age-Verification/).

## Error Handling

* The form provides clear, specific error messages for invalid date inputs.
* Ensures that the month, day, and year fields are within valid ranges.
* Displays relevant alerts for invalid input values before checking the age criteria.

## Technologies Used

* HTML
* CSS
* JavaScript

