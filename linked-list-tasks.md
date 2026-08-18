# План задач: Linked List (Связные списки)

---

## Суть паттерна

Linked List — цепочка узлов, где каждый узел хранит значение и указатель `next` на следующий узел.

**Почему важно:**
- Массив — непрерывный блок памяти, O(1) доступ по индексу, но O(n) вставка/удаление в середину.
- Связный список — узлы разбросаны в памяти, связаны указателями, O(1) вставка/удаление при известном узле, но O(n) доступ по индексу.

**Базовый узел:**

```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
```

**Ключевые техники:**
- `dummy` узел — упрощает работу с головой списка.
- Переворачивание указателей `next` — in-place.
- Fast & Slow pointers — два указателя с разной скоростью для поиска цикла/середины.
- Merge — как в merge sort, но с узлами.

---

## 📝 Easy задачи

### 1. 206. Reverse Linked List — перевернуть список

**Условие:** изменить `next`-указатели так, чтобы список шёл в обратном порядке.

**Пример:** `1 -> 2 -> 3 -> 4 -> 5` → `5 -> 4 -> 3 -> 2 -> 1`

```javascript
function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
// Сложность: O(n) время, O(1) память
```

---

### 2. 21. Merge Two Sorted Lists — слить два отсортированных списка

**Условие:** объединить два отсортированных списка в один отсортированный.

**Пример:** `1 -> 2 -> 4` + `1 -> 3 -> 4` → `1 -> 1 -> 2 -> 3 -> 4 -> 4`

```javascript
function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;
    return dummy.next;
}
// Сложность: O(n + m) время, O(1) память
```

---

### 3. 141. Linked List Cycle — есть ли цикл

**Условие:** определить, есть ли цикл в односвязном списке.

**Идея:** `fast` движется в 2 раза быстрее `slow`. Если встретятся — есть цикл.

```javascript
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
}
// Сложность: O(n) время, O(1) память
```

---

### 4. 876. Middle of the Linked List — середина списка

**Условие:** найти средний узел. Если два средних — вернуть второй.

**Идея:** когда `fast` доходит до конца, `slow` находится в середине.

```javascript
function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
// Сложность: O(n) время, O(1) память
```

---

### 5. 234. Palindrome Linked List — палиндром

**Условие:** является ли список палиндромом.

**Идея:** найти середину, развернуть правую половину, сравнить с левой.

```javascript
function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = reverseList(slow.next);
    let first = head;
    let result = true;

    while (second) {
        if (first.val !== second.val) {
            result = false;
            break;
        }
        first = first.next;
        second = second.next;
    }

    slow.next = reverseList(second);
    return result;
}

function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
// Сложность: O(n) время, O(1) память
```

---

## 📝 Medium задачи

### 6. 19. Remove Nth Node From End of List — удалить n-й с конца

**Условие:** удалить n-й узел с конца списка.

**Идея:** `fast` убегает на n шагов вперёд, затем оба движутся вместе.

```javascript
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
}
// Сложность: O(n) время, O(1) память
```

---

### 7. 143. Reorder List — переупорядочить список

**Условие:** `L0 -> L1 -> ... -> Ln-1 -> Ln` → `L0 -> Ln -> L1 -> Ln-1 -> ...`

**Идея:** найти середину, развернуть вторую половину, чередовать.

```javascript
function reorderList(head) {
    if (!head || !head.next) return;

    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = reverseList(slow.next);
    slow.next = null;
    let first = head;

    while (second) {
        const firstNext = first.next;
        const secondNext = second.next;
        first.next = second;
        second.next = firstNext;
        first = firstNext;
        second = secondNext;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
// Сложность: O(n) время, O(1) память
```

---

### 8. 2. Add Two Numbers — сложить два числа

**Условие:** два числа представлены списками в обратном порядке цифр. Вернуть сумму как список.

**Пример:** `2 -> 4 -> 3` + `5 -> 6 -> 4` → `7 -> 0 -> 8` (342 + 465 = 807)

```javascript
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}
// Сложность: O(max(n, m)) время, O(max(n, m)) память
```

---

### 9. 138. Copy List with Random Pointer — копировать список со случайными указателями

**Условие:** каждый узел имеет `next` и `random`. Создать глубокую копию.

**Идея:** вставить копию каждого узла сразу после оригинала, потом разделить списки.

```javascript
function copyRandomList(head) {
    if (!head) return null;

    let current = head;
    while (current) {
        const copy = new ListNode(current.val, current.next);
        current.next = copy;
        current = copy.next;
    }

    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    current = head;
    const newHead = head.next;
    while (current) {
        const copy = current.next;
        current.next = copy.next;
        if (copy.next) {
            copy.next = copy.next.next;
        }
        current = current.next;
    }

    return newHead;
}
// Сложность: O(n) время, O(1) дополнительная память (не считая копий)
```

---

### 10. 148. Sort List — отсортировать список

**Условие:** отсортировать связный список за O(n log n) по времени и O(1) по памяти.

**Идея:** merge sort: найти середину, разделить, рекурсивно отсортировать, слить.

```javascript
function sortList(head) {
    if (!head || !head.next) return head;

    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const mid = slow.next;
    slow.next = null;

    const left = sortList(head);
    const right = sortList(mid);

    return merge(left, right);
}

function merge(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
}
// Сложность: O(n log n) время, O(log n) память (стек рекурсии)
```

---

## 🔑 Паттерны Linked List

| Паттерн | Задачи | Когда применять |
|---------|--------|-----------------|
| **Reverse** | 206, 234, 143 | Перевернуть список или половину |
| **Merge** | 21, 2, 148 | Слить два отсортированных/параллельных списка |
| **Fast & Slow** | 141, 876, 19, 143 | Поиск цикла, середины, n-го с конца |
| **Dummy node** | 21, 19, 2 | Упростить работу с головой |
| **In-place copy** | 138 | Создать копию без HashMap |

---

## 📊 Прогресс

### Easy:
- [x] 206. Reverse Linked List
- [x] 21. Merge Two Sorted Lists
- [ ] 141. Linked List Cycle — **ТЕКУЩАЯ ЗАДАЧА** 📍
- [ ] 876. Middle of the Linked List
- [ ] 234. Palindrome Linked List

### Medium:
- [ ] 19. Remove Nth Node From End of List
- [ ] 143. Reorder List
- [ ] 2. Add Two Numbers
- [ ] 138. Copy List with Random Pointer
- [ ] 148. Sort List

---

> **Совет:** Рисуй указатели на бумаге. В Linked List 90% ошибок — это потеря ссылки на `next` до того, как успел её сохранить.
