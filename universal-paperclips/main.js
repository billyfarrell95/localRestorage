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