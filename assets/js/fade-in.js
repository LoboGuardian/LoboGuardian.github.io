/**
 * @fileoverview fade-in.js
 * Adds a fade-in effect to the body element after the DOM content is loaded.
 *
 * @author [LoboGuardian]
 * @version 1.0.0
 * @requires DOMContentLoaded event
 */

document.addEventListener("DOMContentLoaded", () => {
  /**
   * @description Adds the 'fade-in' class to the body element.
  */
 document.body.classList.add('fade-in');
});