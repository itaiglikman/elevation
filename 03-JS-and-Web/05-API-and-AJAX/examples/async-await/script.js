function getNumberOfBreeds() {
    return new Promise((resolve, reject) => {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then((result) => {
                console.log(result);
                const numOfBreeds = Object.keys(result.data.message).length;
                resolve(numOfBreeds);
            }).catch((err) => reject(err));
    })
}

// getNumberOfBreeds().then((breeds) => console.log(breeds));


async function asyncGetNumOfBreeds() {
    try {
        const result = await axios.get('https://dog.ceo/api/breeds/list/all');
        const numOfBreeds = Object.keys(result.data.message).length;
        return numOfBreeds;
    } catch (error) {
        throw new Error(error);
    }
}

const breeds = await asyncGetNumOfBreeds();
console.log(breeds);