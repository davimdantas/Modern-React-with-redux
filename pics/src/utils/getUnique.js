export default function getUnique(arrayOfObjects, key) {
    const uniques = {};
    for (let i = 0; i < arrayOfObjects.length; i++) {
        uniques[arrayOfObjects[i][key]] = null;
    }
    return Object.keys(uniques)
}