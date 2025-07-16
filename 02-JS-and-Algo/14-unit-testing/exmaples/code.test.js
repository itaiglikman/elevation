const { calculateHyp } = require('./code');
const { clearLowPriority, PictureManager, ArrayManipulator } = require('./code');

// calculateHyp:
// test("calc the square root of the sum of 2 numbers square", () => {
//     expect(calculateHyp(3, 4)).toBe(5);
// })

// clearLowPriority:
// describe("remove all objects from the array which don't contain the value 'HIGH' in priority prop", () => {
//     const tasks = [
//         [
//             { name: "Task A", priority: "HIGH" },
//             { name: "Task B", priority: "LOW" },
//             { name: "Task C", priority: "HIGH" }
//         ], [
//             { name: "Task D", priority: "MEDIUM" },
//             { name: "Task E", priority: "HIGH" },
//             { name: "Task F", priority: "LOW" }
//         ], [
//             { name: "Task G", priority: "LOW" },
//             { name: "Task H", priority: "LOW" }
//         ]];

//     tasks.forEach(tasksArr => {
//         clearLowPriority(tasksArr).forEach(task => {
//             test(`${task.name}: test`, () => {
//                 expect(task.priority).toBe('HIGH');
//             });
//         });
//     });
// });

// PictureManager:
// describe("test the methods of PictureManager class",()=>{
//     it("removePicture should remove an item from the arr",()=>{
//         let url = 'url'
//         const pm = new PictureManager([url]);
//         pm.removePicture(url);
//         expect(pm.pictureURLs.length).toBe(0);
//         expect(pm.pictureURLs).not.toContain(url);
//     })
// })

// ArrayManipulator - manipulate method:
describe("test manipulate method of ArrayManipulator", () => {
    it("should return error if the received array ar'nt the same length", () => {
        const manipulator = new ArrayManipulator(["food", "item"], ["cherry", "lightbulb", "Tazmania"]);
        const errMsg = 'the arrays must be in the same length';
        expect(typeof manipulator.manipulate()).toBe('string');
        expect(typeof manipulator.manipulate()).not.toBe('object');
        expect(manipulator.manipulate()).toBe(errMsg);
    });
    
    it("should return an object mapping arr1 keys to arr2 values when arrays are the same length",()=>{
        const manipulator = new ArrayManipulator(["food", "item","location"], ["cherry", "lightbulb", "Tazmania"]);
        const arr1 = manipulator.arr1;
        const arr2 = manipulator.arr2;
        const result = manipulator.manipulate()
        const keys = Object.keys(result);
        const values = Object.values(result);
        expect(arr1.length).toBe(arr2.length); //both arrays same length
        expect(result).toBeInstanceOf(Object); //return value is object
        expect(keys).toEqual(arr1);
        expect(values).toEqual(arr2);
        expect(result.food).toBe('cherry');
        expect(result.food).not.toBe('lightbulb');
    });
})

