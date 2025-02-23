/**
 * @fileoverview year.js
 * Displays the current year in the element with the ID 'year-now'.
 *
 * @author [LoboGuardian]
 * @version 1.0.0
 * @requires window.onload event
 */

/**
 * @function displayCurrentYear
 * @description Retrieves the current year and displays it in the specified element.
 */
function displayCurrentYear() {
    const nowYear = new Date().getFullYear();
    document.getElementById('year-now').textContent = nowYear;
  }
  
  window.onload = displayCurrentYear;