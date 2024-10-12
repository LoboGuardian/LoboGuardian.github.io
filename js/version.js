// version.js

const currentYear = new Date().getFullYear();
const today = new Date(); // Get today's date

const getISOWeekNumber = (date) => {
    const tempDate = new Date(date.valueOf());
    const dayNum = (tempDate.getUTCDay() + 6) % 7; // Adjust to make Monday the first day of the week
    tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum); // Set to Thursday of the week
    const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
    return Math.ceil((((tempDate - yearStart) / 1000) / 60 / 60 / 24 + 1) / 7);
};

const getQuarter = (date) => {
    const month = date.getMonth();
    if (month < 3) return 'Q1';
    if (month < 6) return 'Q2';
    if (month < 9) return 'Q3';
    return 'Q4';
};

const calculatePatchVersion = (date) => {
    const dayOfWeek = date.getUTCDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
    return (dayOfWeek + 1) * 3; // Adjust for patch version (Mon=3, ..., Sat=18)
};

// Function to generate version for the current week
const generateCurrentWeekVersion = () => {
    const weekNumber = getISOWeekNumber(today);
    const quarter = getQuarter(today);
    const patchVersion = calculatePatchVersion(today);
    
    return `K${currentYear}.${quarter}.${weekNumber}.${patchVersion}`;
};

const appendVersionToHTML = () => {
    const version = generateCurrentWeekVersion();
    const versionList = document.getElementById('version-list');
    
    const li = document.createElement('li');
    li.textContent = version;
    versionList.appendChild(li);
};

// Call the function to append the version when the document is loaded
document.addEventListener('DOMContentLoaded', appendVersionToHTML);
