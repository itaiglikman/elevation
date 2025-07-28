/**
 * Exercise 2
Simulate processing multiple files concurrently.
 */

function processFile(filename, processingTime) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to process ${filename}...`);

        setTimeout(() => {
            // 15% chance of failure for realistic simulation
            if (Math.random() < 0.15) {
                reject(new Error(`Failed to process ${filename}`));
            } else {
                const result = {
                    filename: filename,
                    size: Math.floor(Math.random() * 1000) + 100, // Random size
                    processedAt: new Date().toLocaleTimeString()
                };
                console.log(`✓ Completed ${filename}`);
                resolve(result);
            }
        }, processingTime);
    });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
    { name: "document1.pdf", time: 2000 },
    { name: "image1.jpg", time: 1500 },
    { name: "data.csv", time: 3000 },
    { name: "report.docx", time: 1000 }
];

// TODO: 
// 1. Create an array of promises using the files array
const promisesArr = files.map(file => processFile(file.name, file.time));
// 2. Use Promise.all() to wait for all files to complete
Promise.allSettled(promisesArr).then((promisesResult) => {
    // 3. Log total processing time and all results
    let totalProcessTime = [];
    const resultsArr = [];
    promisesResult.forEach(result => {
        if (result.status === 'fulfilled') {
            // console.log(result);
            resultsArr.push(result);
            totalProcessTime.push(result.processedAt);
        }
        else console.log('X ' + result.reason.message);
    })
    totalProcessTime.sort((a, b) => {
        return new Date(`1970-01-01 ${a}`) - new Date(`1970-01-01 ${b}`);
    });
    const start = new Date(`1970-01-01 ${totalProcessTime[0]}`);
    const end = new Date(`1970-01-01 ${totalProcessTime[totalProcessTime.length - 1]}`);
    const durationMs = end - start;
    console.log(`Total processing time (using processedAt): ${durationMs} ms`);

    // 4. Handle the case where any file fails
}).catch((err) => console.error(err.message))

// Bonus: Try Promise.allSettled() to see results even if some files fail
