// ============ 704. Binary Search ============
// Условие: дан массив целых чисел nums, отсортированный по возрастанию,
// и целое число target.
// Если target существует в nums, верните его индекс, иначе верните -1.
// Алгоритм должен иметь сложность O(log n).
// Пример: nums = [-1,0,3,5,9,12], target = 9 -> 4
//         nums = [-1,0,3,5,9,12], target = 2 -> -1

function search(nums, target) {

}

// Тесты
console.log(search([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));  // -1
console.log(search([5], 5));                    // 0
console.log(search([5], -5));                   // -1
console.log(search([-1, 0, 3, 5, 9, 12], -1)); // 0
