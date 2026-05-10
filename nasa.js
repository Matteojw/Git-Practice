const axios = require('axios');

async function getSpacePic() {
    console.log("🚀 Connecting to NASA...");
    try {
        // This is a real API call!
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        
        console.log("\n--- NASA ASTRONOMY PICTURE OF THE DAY ---");
        console.log(`Title: ${response.data.title}`);
        console.log(`URL: ${response.data.url}`);
        console.log("\nCopy that link into your browser to see it!");
        
    } catch (error) {
        console.log("Orbit failed: ", error.message);
    }
}

getSpacePic();