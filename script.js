// ============ 203. Remove Linked List Elements ============
// Условие: дан head связного списка и число val.
// Удалить ВСЕ узлы со значением val и вернуть новый head.
// Пример: head = 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6, val = 6
//         результат: 1 -> 2 -> 3 -> 4 -> 5
//         head = 7 -> 7 -> 7 -> 7, val = 7  =>  [] (пустой список)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function removeElements(head, val) {
    let dummy = new ListNode(0, head)
    let prevEl = dummy

    while (prevEl.next !== null) {

        if (prevEl.next.val === val) {
            prevEl.next = prevEl.next.next
        } else {
            prevEl = prevEl.next
        }
    }

    return dummy.next
}

// ===== Хелперы =====
function createList(arr) {
    if (arr.length === 0) return null;
    const dummy = new ListNode();
    let current = dummy;
    for (const v of arr) {
        current.next = new ListNode(v);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Тесты
console.log(listToArray(removeElements(createList([1, 2, 6, 3, 4, 5, 6]), 6))); // [1, 2, 3, 4, 5]
console.log(listToArray(removeElements(createList([7, 7, 7, 7]), 7)));           // []
console.log(listToArray(removeElements(createList([]), 1)));                     // []
console.log(listToArray(removeElements(createList([1, 2, 2, 1]), 2)));           // [1, 1]
