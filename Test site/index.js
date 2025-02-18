const headElement = document.getElementById("hero")
let scrollLvl;
let totalHeight;


window.addEventListener("scroll", () => {
    scrollLvl = window.scrollY
    totalHeight = document.documentElement.scrollHeight - window.innerHeight

    console.log(scrollLvl)
    if (scrollLvl <= 200) {
        headElement.style.backgroundColor = "yellow";
    }   else {
        headElement.style.backgroundColor = "red";
    }
})

//Yet to test properly from AI

// Method 1: Using a previous value comparison
let previousValue = null;
let isIncreasing = null;

function checkTrend(currentValue) {
    if (previousValue === null) {
        previousValue = currentValue;
        return 'First value';
    }

    isIncreasing = currentValue > previousValue;
    previousValue = currentValue;
    
    return isIncreasing ? 'Increasing' : 'Decreasing';
}

// Example usage:
console.log(checkTrend(10)); // "First value"
console.log(checkTrend(15)); // "Increasing"
console.log(checkTrend(12)); // "Decreasing"

