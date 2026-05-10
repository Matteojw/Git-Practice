// This takes the name you type in the terminal
const args = process.argv.slice(2);
const yourName = args[0] || "Guest";

console.log(`--- WELCOME TO THE GRID, ${yourName.toUpperCase()} ---`);

if (args.length > 0) {
    console.log("Status: Access Granted.");
} else {
    console.log("Status: Accessing as Guest. (Try: node newfile.js YourName)");
}