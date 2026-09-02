// If you want to set a console.log notifier of when localStorage is saved:
const origSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
    origSetItem(key, value);
    const now = new Date();
    const hms = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    console.log(`Saved key: ${key} at ${hms}`);
};

// 1. In browser console of your active Universal Paperclips game run:
copy(localStorage)

// 2. In new browser instance or wherever you'd like to restore:
// replace "null" with the copied localStorage data
const data = null

// 3. Assign the copied data to the new instance localStorage:
Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, value);
});

location.reload()