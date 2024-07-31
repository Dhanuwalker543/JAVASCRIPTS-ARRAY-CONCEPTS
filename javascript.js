function arrayOperations() {
    // 1. Array Creation
    let array = [1, 2, 3, 4, 5];
    console.log("Original Array:", array);

    // 2. Push
    array.push(6);
    console.log("After Push:", array);

    // 3. Pop
    let poppedElement = array.pop();
    console.log("After Pop (Popped Element):", poppedElement);
    console.log("Array after Pop:", array);

    // 4. Unshift
    array.unshift(0);
    console.log("After Unshift:", array);

    // 5. Shift
    let shiftedElement = array.shift();
    console.log("After Shift (Shifted Element):", shiftedElement);
    console.log("Array after Shift:", array);

    // 6. IndexOf
    let index = array.indexOf(3);
    console.log("Index of 3:", index);

    // 7. Find
    let foundElement = array.find(element => element > 3);
    console.log("First element > 3:", foundElement);

    // 8. Includes
    let hasThree = array.includes(3);
    console.log("Includes 3:", hasThree);

    // 9. Filter
    let filteredArray = array.filter(element => element > 3);
    console.log("Filtered Array (elements > 3):", filteredArray);

    // 10. Map
    let mappedArray = array.map(element => element * 2);
    console.log("Mapped Array (elements * 2):", mappedArray);

    // 11. Sort
    let unsortedArray = [3, 1, 4, 1, 5, 9];
    let sortedArray = unsortedArray.sort((a, b) => a - b);
    console.log("Sorted Array:", sortedArray);

    // 12. Reverse
    let reversedArray = array.reverse();
    console.log("Reversed Array:", reversedArray);

    // 13. Join
    let joinedString = array.join('-');
    console.log("Joined String:", joinedString);

    // 14. Split
    let splitArray = joinedString.split('-');
    console.log("Split Array:", splitArray);

    // 15. Array Destructuring
    let [first, second, ...rest] = array;
    console.log("Destructuring - First:", first);
    console.log("Destructuring - Second:", second);
    console.log("Destructuring - Rest:", rest);

    // 16. Spreading
    let newArray = [...array, 6, 7, 8];
    console.log("New Array with Spreading:", newArray);

    // 17. Find Minimum and Maximum
    let min = Math.min(...array);
    let max = Math.max(...array);
    console.log("Minimum:", min);
    console.log("Maximum:", max);

    // 18. Flattening
    let nestedArray = [1, [2, [3, 4], 5], 6];
    let flatArray = nestedArray.flat(Infinity);
    console.log("Flattened Array:", flatArray);

    // 19. Checking
    let allGreaterThanZero = array.every(element => element > 0);
    console.log("All elements > 0:", allGreaterThanZero);
    let someGreaterThanFour = array.some(element => element > 4);
    console.log("Some elements > 4:", someGreaterThanFour);

    // 20. Merging
    let anotherArray = [7, 8, 9];
    let mergedArray = [...array, ...anotherArray];
    console.log("Merged Array:", mergedArray);

    // 21. Find Index of First Occurrence
    let firstIndex = array.findIndex(element => element === 3);
    console.log("Index of first occurrence of 3:", firstIndex);

    // 22. Create New Array by Size Input
    let size = parseInt(prompt("Enter the size of the array:"));
    let newArrayBySize = Array.from({ length: size }, (_, i) => i + 1);
    console.log("New Array by Size:", newArrayBySize);

    // 23. Array Duplication
    let duplicatedArray = [...array];
    console.log("Duplicated Array:", duplicatedArray);

    // 24. Find Intersection of Two Arrays
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [4, 5, 6, 7, 8];
    let intersection = array1.filter(value => array2.includes(value));
    console.log("Intersection of Two Arrays:", intersection);

    // 25. Difference Between Two Arrays
    let difference = array1.filter(value => !array2.includes(value));
    console.log("Difference Between Two Arrays:", difference);

    // 26. Grouping Array Elements
    let grouped = array.reduce((acc, value) => {
        let key = value % 2 === 0 ? 'even' : 'odd';
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(value);
        return acc;
    }, {});
    console.log("Grouped Array Elements:", grouped);
}

// Run the function to see all operations
arrayOperations();
