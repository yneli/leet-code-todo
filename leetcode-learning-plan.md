# План обучения алгоритмам на JavaScript для LeetCode

## Содержание

1. [Фундаментальные основы](#1-фундаментальные-основы)
2. [Базовые структуры данных](#2-базовые-структуры-данных)
3. [Продвинутые структуры данных](#3-продвинутые-структуры-данных)
4. [Алгоритмические паттерны](#4-алгоритмические-паттерны)
5. [Рекомендуемый порядок решения задач](#5-рекомендуемый-порядок-решения-задач)
6. [Методология обучения](#6-методология-обучения)

---

## 1. Фундаментальные основы

### 1.1 Сложность алгоритмов (Big O Notation)

**Что это:** Описание того, как время выполнения и использование памяти растут с увеличением входных данных.

#### Основные типы сложности:

| Обозначение | Название | Описание | Пример |
|-------------|----------|----------|--------|
| O(1) | Константа | Время не зависит от размера входных данных | Доступ к элементу массива по индексу |
| O(log n) | Логарифмическая | Быстрый рост | Бинарный поиск |
| O(n) | Линейная | Прямой пропорциональный рост | Поиск в несортированном массиве |
| O(n log n) | Линейно-логарифмическая | Эффективные сортировки | Merge Sort, Quick Sort |
| O(n²) | Квадратичная | Медленный рост | Вложенные циклы |
| O(2ⁿ) | Экспоненциальная | Очень медленно | Рекурсивный поиск Фибоначчи |

**Важно:** При анализе алгоритмов всегда рассматривайте худший случай (worst case).

### 1.2 Основы JavaScript для алгоритмов

#### Полезные методы массивов:

```javascript
// Добавление/удаление элементов
arr.push(5);           // O(1) - добавить в конец
arr.pop();             // O(1) - удалить с конца
arr.shift();           // O(n) - удалить с начала
arr.unshift(5);        // O(n) - добавить в начало

// Поиск
arr.includes(5);       // O(n) - проверка наличия
arr.indexOf(5);        // O(n) - найти индекс
arr.find(x => x > 5);  // O(n) - найти по условию

// Преобразование
arr.map(x => x * 2);   // O(n) - преобразовать каждый элемент
arr.filter(x => x > 5);// O(n) - отфильтровать
arr.reduce((a, b) => a + b, 0); // O(n) - свертка

// Сортировка
arr.sort((a, b) => a - b); // O(n log n)

// Проверка
arr.every(x => x > 0); // O(n) - все ли удовлетворяют
arr.some(x => x > 0);  // O(n) - хотя бы один
```

#### Полезные методы строк:

```javascript
str.length;            // O(1) - длина строки
str.split(' ');        // O(n) - разбить на массив
str.substring(0, 5);   // O(n) - получить подстроку
str.includes('abc');   // O(n) - проверка наличия
str.toUpperCase();     // O(n) - в верхний регистр
str.trim();            // O(n) - удалить пробелы по краям
```

### 1.3 Массивы и Строки

#### Ключевые концепции:

**Массивы:**
- Непрерывная память
- O(1) доступ по индексу
- O(n) поиск значения
- O(n) вставка/удаление в середине

**Строки в JavaScript:**
- Неизменяемые (immutable)
- Каждая операция создает новую строку
- Для частых изменений используйте массив и `join()`

#### Типовые задачи:

**Two Sum** (Easy) - Найти два числа, дающих сумму
```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// Сложность: O(n) время, O(n) память
```

**Reverse String** (Easy) - Перевернуть строку
```javascript
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}
// Сложность: O(n) время, O(1) память
```

**Contains Duplicate** (Easy) - Проверить дубликаты
```javascript
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}
// Сложность: O(n) время, O(n) память
```

#### Рекомендуемые задачи для начала:
- ✅ 1. Two Sum
- ✅ 217. Contains Duplicate
- ✅ 242. Valid Anagram
- ✅ 344. Reverse String
- ✅ 412. Fizz Buzz
- ✅ 136. Single Number

---

## 2. Базовые структуры данных

### 2.1 Стек (Stack)

**Что это:** Структура LIFO (Last In, First Out) - последний зашел, первый вышел.

**Операции:**
- `push()` - добавить элемент: O(1)
- `pop()` - удалить верхний элемент: O(1)
- `peek()` - посмотреть верхний элемент: O(1)

**Реализация на JavaScript:**
```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
```

**Или используя массив напрямую:**
```javascript
const stack = [];
stack.push(1);     // push
stack.pop();       // pop
stack[stack.length - 1]; // peek
```

**Применение:**
- Проверка сбалансированных скобок
- Обратная польская нотация
- Проверка палиндрома
- Undo/Redo операции

**Valid Parentheses** (Easy) - Валидные скобки
```javascript
function isValid(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (char in mapping) {
            if (stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
// Сложность: O(n) время, O(n) память
```

#### Рекомендуемые задачи:
- ✅ 20. Valid Parentheses
- ✅ 682. Baseball Game
- ✅ 844. Backspace String Compare
- ⭐ 71. Simplify Path
- ⭐ 739. Daily Temperatures

### 2.2 Очередь (Queue)

**Что это:** Структура FIFO (First In, First Out) - первый зашел, первый вышел.

**Операции:**
- `enqueue()` - добавить в конец: O(1)
- `dequeue()` - удалить из начала: O(1)
- `front()` - посмотреть первый элемент: O(1)

**Реализация на JavaScript:**
```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
```

**Более эффективная реализация:**
```javascript
class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[this.head];
    }

    isEmpty() {
        return this.tail === this.head;
    }

    size() {
        return this.tail - this.head;
    }
}
```

**Применение:**
- BFS (обход в ширину)
- Обработка задач по порядку
- Кэширование LRU

#### Рекомендуемые задачи:
- ⭐ 933. Number of Recent Calls
- ⭐ 649. Dota2 Senate
- ⭐ 362. Design Hit Counter
- ⭐ 346. Moving Average from Data Stream

### 2.3 Связные списки (Linked Lists)

**Что это:** Линейная структура данных, где элементы хранят ссылки на следующие элементы.

**Типы:**
- Singly Linked List - односторонняя связь
- Doubly Linked List - двусторонняя связь

**Преимущества:**
- O(1) вставка/удаление при известной позиции
- Динамический размер

**Недостатки:**
- O(n) доступ к элементу по индексу
- Дополнительная память на ссылки

**Реализация:**
```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Добавить в конец
    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Добавить в начало
    prepend(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.size++;
    }

    // Найти значение
    find(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) return current;
            current = current.next;
        }
        return null;
    }

    // Удалить по значению
    remove(val) {
        if (!this.head) return false;

        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.val === val) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Преобразовать в массив
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}
```

**Reverse Linked List** (Easy) - Перевернуть список
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

**Merge Two Sorted Lists** (Easy) - Слить два отсортированных списка
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

**Has Cycle** (Easy) - Проверить наличие цикла (алгоритм Черепахи и Зайца)
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

#### Рекомендуемые задачи:
- ✅ 206. Reverse Linked List
- ✅ 21. Merge Two Sorted Lists
- ✅ 141. Linked List Cycle
- ✅ 876. Middle of the Linked List
- ⭐ 19. Remove Nth Node From End of List
- ⭐ 143. Reorder List
- ⭐ 23. Merge k Sorted Lists

### 2.4 Хеш-таблицы (Hash Maps / Sets)

**Что это:** Структура данных для быстрого поиска, вставки и удаления по ключу.

**Map vs Object:**
- Map: ключи любого типа, сохраняет порядок вставки, есть метод size
- Object: только строки/Symbol как ключи, нет гарантии порядка

**Set vs Array для уникальности:**
- Set: автоматическая уникальность, O(1) проверка наличия
- Array: O(n) проверка includes()

**Основные операции:**
```javascript
// Map
const map = new Map();
map.set('key', 'value');      // O(1) - добавить
map.get('key');               // O(1) - получить
map.has('key');               // O(1) - проверить
map.delete('key');            // O(1) - удалить
map.size;                     // O(1) - размер

// Set
const set = new Set();
set.add(1);                   // O(1) - добавить
set.has(1);                   // O(1) - проверить
set.delete(1);                // O(1) - удалить
set.size;                     // O(1) - размер
set.clear();                  // O(n) - очистить
```

**Применение:**
- Подсчет частоты элементов
- Удаление дубликатов
- Кэширование
- Быстрый поиск

**Group Anagrams** (Medium) - Сгруппировать анаграммы
```javascript
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}
// Сложность: O(n * k log k) время, O(n * k) память
// где n - количество строк, k - средняя длина строки
```

**Top K Frequent Elements** (Medium) - Top K частых элементов
```javascript
function topKFrequent(nums, k) {
    // Подсчитать частоту
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Bucket sort
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    // Собрать результат
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }

    return result.slice(0, k);
}
// Сложность: O(n) время, O(n) память
```

#### Рекомендуемые задачи:
- ✅ 1. Two Sum (с HashMap)
- ✅ 49. Group Anagrams
- ✅ 349. Intersection of Two Arrays
- ✅ 128. Longest Consecutive Sequence
- ⭐ 347. Top K Frequent Elements
- ⭐ 238. Product of Array Except Self

---

## 3. Продвинутые структуры данных

### 3.1 Деревья (Trees)

**Что это:** Иерархическая структура данных с корнем и узлами.

**Основные понятия:**
- **Root** - корневой узел
- **Leaf** - узел без потомков
- **Height** - высота дерева (максимальный уровень)
- **Depth** - глубина узла (расстояние от корня)
- **Binary Tree** - каждый узел имеет max 2 потомка

**Реализация узла:**
```javascript
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

### Обходы деревьев:

**In-order (Left, Root, Right):**
```javascript
function inorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}
// Для BST возвращает отсортированные значения
```

**Pre-order (Root, Left, Right):**
```javascript
function preorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return result;
}
```

**Post-order (Left, Right, Root):**
```javascript
function postorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }

    traverse(root);
    return result;
}
```

**Level-order (BFS):**
```javascript
function levelOrder(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const level = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }

    return result;
}
```

**Maximum Depth** (Easy) - Максимальная глубина
```javascript
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// Сложность: O(n) время, O(h) память (h - высота)
```

**Invert Binary Tree** (Easy) - Инвертировать дерево
```javascript
function invertTree(root) {
    if (!root) return root;

    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);

    return root;
}
// Сложность: O(n) время, O(h) память
```

**Same Tree** (Easy) - Сравнить два дерева
```javascript
function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// Сложность: O(n) время, O(h) память
```

**Subtree of Another Tree** (Medium) - Поддерево
```javascript
function isSubtree(s, t) {
    if (!t) return true;
    if (!s) return false;

    if (isSameTree(s, t)) return true;

    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

#### Рекомендуемые задачи:
- ✅ 104. Maximum Depth of Binary Tree
- ✅ 226. Invert Binary Tree
- ✅ 100. Same Tree
- ✅ 102. Binary Tree Level Order Traversal
- ⭐ 94. Binary Tree Inorder Traversal
- ⭐ 98. Validate Binary Search Tree
- ⭐ 230. Kth Smallest Element in a BST
- ⭐ 105. Construct Binary Tree from Preorder and Inorder

### 3.2 Кучи (Heaps)

**Что это:** Полное бинарное дерево со свойством кучи.

**Типы куч:**
- **Min-Heap** - родитель <= потомков (минимум в корне)
- **Max-Heap** - родитель >= потомков (максимум в корне)

**Основные операции:**
- `insert()` - O(log n)
- `extractMin/Max()` - O(log n)
- `peek()` - O(1)

**Реализация Min-Heap:**
```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        while (true) {
            const left = this.getLeftChildIndex(index);
            const right = this.getRightChildIndex(index);
            let smallest = index;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }
}
```

**Kth Largest Element** (Medium) - K-й максимальный элемент
```javascript
function findKthLargest(nums, k) {
    // Используем Min-Heap размера k
    const heap = new MinHeap();

    for (const num of nums) {
        heap.insert(num);
        if (heap.size() > k) {
            heap.extractMin();
        }
    }

    return heap.peek();
}
// Сложность: O(n log k) время, O(k) память
```

**Top K Frequent Elements** с Heap:
```javascript
function topKFrequent(nums, k) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const heap = new MinHeap();

    for (const [num, count] of freq) {
        heap.insert({ num, count });
        if (heap.size() > k) {
            heap.extractMin();
        }
    }

    const result = [];
    while (heap.size() > 0) {
        result.push(heap.extractMin().num);
    }
    return result;
}
```

#### Рекомендуемые задачи:
- ⭐ 215. Kth Largest Element in an Array
- ⭐ 703. Kth Largest Element in a Stream
- ⭐ 23. Merge k Sorted Lists (с heap)
- ⭐ 347. Top K Frequent Elements

### 3.3 Графы (Graphs)

**Что это:** Множество вершин (nodes) и ребер (edges).

**Представление графов:**

```javascript
// Список смежности (Adjacency List)
const graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
};

// Матрица смежности (Adjacency Matrix)
const matrix = [
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0]
];
```

**Типы графов:**
- Направленные (Directed) vs ненаправленные (Undirected)
- Взвешенные (Weighted) vs невзвешенные
- С циклами vs ациклические (DAG)

### Обходы графов:

**DFS (Depth-First Search) - поиск в глубину:**
```javascript
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);

    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Итеративный DFS
function dfsIterative(graph, start) {
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();
        if (visited.has(node)) continue;

        visited.add(node);
        console.log(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }
}
```

**BFS (Breadth-First Search) - поиск в ширину:**
```javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

**Number of Islands** (Medium) - Количество островов
```javascript
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }

        grid[r][c] = '0';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
}
// Сложность: O(m * n) время, O(m * n) память
```

**Clone Graph** (Medium) - Клонировать граф
```javascript
function cloneGraph(node, visited = new Map()) {
    if (!node) return null;

    if (visited.has(node.val)) {
        return visited.get(node.val);
    }

    const newNode = { val: node.val, neighbors: [] };
    visited.set(node.val, newNode);

    for (const neighbor of node.neighbors) {
        newNode.neighbors.push(cloneGraph(neighbor, visited));
    }

    return newNode;
}
```

**Course Schedule** (Medium) - Расписание курсов (топологическая сортировка)
```javascript
function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;
    while (queue.length > 0) {
        const course = queue.shift();
        completed++;

        for (const next of graph[course]) {
            inDegree[next]--;
            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return completed === numCourses;
}
// Сложность: O(V + E) время и память
```

#### Рекомендуемые задачи:
- ✅ 200. Number of Islands
- ✅ 733. Flood Fill
- ⭐ 133. Clone Graph
- ⭐ 207. Course Schedule
- ⭐ 210. Course Schedule II
- ⭐ 994. Rotting Oranges
- ⭐ 1306. Jump Game III

---

## 4. Алгоритмические паттерны

### 4.1 Two Pointers (Два указателя)

**Когда применять:**
- Отсортированные массивы
- Поиск пар/троек элементов
- Слияние отсортированных массивов
- Удаление дубликатов

**Two Sum II - Input Array Is Sorted** (Medium)
```javascript
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}
// Сложность: O(n) время, O(1) память
```

**3Sum** (Medium)
```javascript
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
// Сложность: O(n²) время, O(1) память (не считая результат)
```

**Container With Most Water** (Medium)
```javascript
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
// Сложность: O(n) время, O(1) память
```

#### Рекомендуемые задачи:
- ✅ 125. Valid Palindrome
- ✅ 167. Two Sum II - Input Array Is Sorted
- ⭐ 15. 3Sum
- ⭐ 11. Container With Most Water
- ⭐ 42. Trapping Rain Water

### 4.2 Sliding Window (Скользящее окно)

**Когда применять:**
- Подмассивы/подстроки фиксированной или переменной длины
- Поиск подстроки
- Максимум/минимум в окне

**Maximum Average Subarray I** (Easy) - Фиксированное окно
```javascript
function findMaxAverage(nums, k) {
    let sum = 0;
    // Первое окно
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;
    // Сдвигаем окно
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
}
// Сложность: O(n) время, O(1) память
```

**Longest Substring Without Repeating Characters** (Medium) - Переменное окно
```javascript
function lengthOfLongestSubstring(s) {
    const charIndex = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (charIndex.has(char) && charIndex.get(char) >= left) {
            left = charIndex.get(char) + 1;
        }
        charIndex.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
// Сложность: O(n) время, O(min(m, n)) память, где m - размер алфавита
```

**Sliding Window Maximum** (Hard) - Максимум в каждом окне
```javascript
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // хранит индексы

    for (let i = 0; i < nums.length; i++) {
        // Удаляем элементы вне окна
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // Удаляем меньшие элементы
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // Добавляем максимум когда окно полностью сформировано
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
// Сложность: O(n) время, O(k) память
```

#### Рекомендуемые задачи:
- ✅ 643. Maximum Average Subarray I
- ⭐ 3. Longest Substring Without Repeating Characters
- ✅ 424. Longest Repeating Character Replacement
- ⭐ 76. Minimum Window Substring
- ⭐ 239. Sliding Window Maximum

### 4.3 Binary Search (Бинарный поиск)

**Когда применять:**
- Отсортированные массивы
- Поиск в пространстве решений
- Монотонные функции

**Классический бинарный поиск:**
```javascript
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
// Сложность: O(log n) время, O(1) память
```

**Search Insert Position** (Easy)
```javascript
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
```

**Search in Rotated Sorted Array** (Medium)
```javascript
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Левая половина отсортирована
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Правая половина отсортирована
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
```

**Find Minimum in Rotated Sorted Array** (Medium)
```javascript
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}
```

#### Рекомендуемые задачи:
- ✅ 704. Binary Search
- ✅ 35. Search Insert Position
- ⭐ 33. Search in Rotated Sorted Array
- ⭐ 153. Find Minimum in Rotated Sorted Array
- ⭐ 74. Search a 2D Matrix
- ⭐ 875. Koko Eating Bananas
- ⭐ 4. Median of Two Sorted Arrays

### 4.4 Recursion & Backtracking (Рекурсия и возврат)

**Когда применять:**
- Генерация всех комбинаций/перестановок
- Поиск с возвратом
- Разбиение на подзадачи

**Backtracking шаблон:**
```javascript
function backtrack(current, options) {
    if (isSolution(current)) {
        recordSolution(current);
        return;
    }

    for (const option of options) {
        if (isValid(option)) {
            makeMove(current, option);
            backtrack(current, remainingOptions);
            undoMove(current, option);
        }
    }
}
```

**Subsets** (Medium) - Все подмножества
```javascript
function subsets(nums) {
    const result = [];

    function backtrack(start, current) {
        result.push([...current]);
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}
// Сложность: O(2ⁿ) время и память
```

**Subsets II** (Medium) - Подмножества с дубликатами
```javascript
function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    function backtrack(start, current) {
        result.push([...current]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}
```

**Permutations** (Medium) - Все перестановки
```javascript
function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            current.push(nums[i]);
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return result;
}
// Сложность: O(n! * n) время, O(n! * n) память
```

**Combination Sum** (Medium) - Комбинации с суммой
```javascript
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        if (remaining < 0) return;

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, remaining - candidates[i]);
            current.pop();
        }
    }

    backtrack(0, [], target);
    return result;
}
```

**Palindrome Partitioning** (Medium) - Разбиение на палиндромы
```javascript
function partition(s) {
    const result = [];

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, current) {
        if (start === s.length) {
            result.push([...current]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                current.push(s.substring(start, end + 1));
                backtrack(end + 1, current);
                current.pop();
            }
        }
    }

    backtrack(0, []);
    return result;
}
```

#### Рекомендуемые задачи:
- ⭐ 78. Subsets
- ⭐ 90. Subsets II
- ⭐ 46. Permutations
- ⭐ 39. Combination Sum
- ⭐ 77. Combinations
- ⭐ 131. Palindrome Partitioning
- ⭐ 79. Word Search
- ⭐ 51. N-Queens

### 4.5 Dynamic Programming (Динамическое программирование)

**Когда применять:**
- Оптимальная подструктура
- Пересекающиеся подзадачи
- Оптимизация

**Три шага DP:**
1. Определить состояние (state definition)
2. Найти рекуррентную формулу (recurrence relation)
3. Определить базовые случаи (base cases)

**Climbing Stairs** (Easy) - Подъем по лестнице
```javascript
function climbStairs(n) {
    if (n <= 2) return n;

    let prev = 1;
    let curr = 2;

    for (let i = 3; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}
// Сложность: O(n) время, O(1) память
```

**House Robber** (Medium) - Грабитель домов
```javascript
function rob(nums) {
    let prev = 0;
    let curr = 0;

    for (const num of nums) {
        const temp = curr;
        curr = Math.max(curr, prev + num);
        prev = temp;
    }

    return curr;
}
// Сложность: O(n) время, O(1) память
```

**Coin Change** (Medium) - Размен монет
```javascript
function coinChange(coins, amount) {
    const dp = Array.from({ length: amount + 1 }, () => amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}
// Сложность: O(amount * coins) время, O(amount) память
```

**Longest Increasing Subsequence** (Medium) - Наибольшая возрастающая подпоследовательность
```javascript
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const dp = new Array(nums.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
}
// Сложность: O(n²) время, O(n) память
```

**Longest Common Subsequence** (Medium) - Наибольшая общая подпоследовательность
```javascript
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}
// Сложность: O(m * n) время и память
```

**0/1 Knapsack Problem** - Задача о рюкзаке
```javascript
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}
```

#### Рекомендуемые задачи:
- ✅ 70. Climbing Stairs
- ✅ 198. House Robber
- ⭐ 322. Coin Change
- ⭐ 300. Longest Increasing Subsequence
- ⭐ 1143. Longest Common Subsequence
- ⭐ 152. Maximum Product Subarray
- ⭐ 72. Edit Distance
- ⭐ 97. Interleaving String

### 4.6 Greedy Algorithms (Жадные алгоритмы)

**Когда применять:**
- Локально оптимальный выбор ведет к глобальному optimum
- Обычно для оптимизационных задач

**Maximum Subarray** (Medium) - Максимальная сумма подмассива (Kadane's Algorithm)
```javascript
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// Сложность: O(n) время, O(1) память
```

**Jump Game** (Medium) - Прыжки
```javascript
function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) return true;
    }

    return true;
}
// Сложность: O(n) время, O(1) память
```

**Jump Game II** (Medium) - Минимальное количество прыжков
```javascript
function jump(nums) {
    if (nums.length <= 1) return 0;

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
}
```

**Gas Station** (Medium) - Автозаправочная станция
```javascript
function canCompleteCircuit(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let start = 0;
    let currentGas = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];

        if (currentGas < 0) {
            start = i + 1;
            currentGas = 0;
        }
    }

    return totalGas >= totalCost ? start : -1;
}
```

#### Рекомендуемые задачи:
- ✅ 53. Maximum Subarray
- ⭐ 55. Jump Game
- ⭐ 45. Jump Game II
- ⭐ 134. Gas Station
- ⭐ 406. Queue Reconstruction by Height
- ⭐ 121. Best Time to Buy and Sell Stock

---

## 5. Рекомендуемый порядок решения задач

### Этап 1: Новичок (Easy) - 2-3 недели

**Фундаментальные задачи:**
1. ✅ 1. Two Sum
2. ✅ 9. Palindrome Number
3. ✅ 13. Roman to Integer
4. ✅ 14. Longest Common Prefix
5. ✅ 20. Valid Parentheses
6. ✅ 21. Merge Two Sorted Lists
7. ✅ 26. Remove Duplicates from Sorted Array
8. ✅ 27. Remove Element
9. ✅ 28. Find the Index of the First Occurrence
10. ✅ 35. Search Insert Position
11. ✅ 53. Maximum Subarray
12. ✅ 58. Length of Last Word
13. ✅ 66. Plus One
14. ✅ 67. Add Binary
15. ✅ 69. Sqrt(x)
16. ✅ 70. Climbing Stairs
17. ✅ 83. Remove Duplicates from Sorted List
18. ✅ 88. Merge Sorted Array
19. ✅ 94. Binary Tree Inorder Traversal
20. ✅ 100. Same Tree
21. ✅ 101. Symmetric Tree
22. ✅ 104. Maximum Depth of Binary Tree
23. ✅ 107. Binary Tree Level Order Traversal II
24. ✅ 108. Convert Sorted Array to Binary Search Tree
25. ✅ 110. Balanced Binary Tree
26. ✅ 111. Minimum Depth of Binary Tree
27. ✅ 112. Path Sum
28. ✅ 118. Pascal's Triangle
29. ✅ 119. Pascal's Triangle II
30. ✅ 121. Best Time to Buy and Sell Stock
31. ✅ 125. Valid Palindrome
32. ✅ 136. Single Number
33. ✅ 141. Linked List Cycle
34. ✅ 144. Binary Tree Preorder Traversal
35. ✅ 145. Binary Tree Postorder Traversal
36. ✅ 160. Intersection of Two Linked Lists
37. ✅ 167. Two Sum II - Input Array Is Sorted
38. ✅ 168. Excel Sheet Column Title
39. ✅ 169. Majority Element
40. ✅ 171. Excel Sheet Column Number
41. ✅ 172. Factorial Trailing Zeroes
42. ✅ 189. Rotate Array
43. ✅ 191. Number of 1 Bits
44. ✅ 198. House Robber
45. ✅ 202. Happy Number
46. ✅ 203. Remove Linked List Elements
47. ✅ 206. Reverse Linked List
48. ✅ 217. Contains Duplicate
49. ✅ 219. Contains Duplicate II
50. ✅ 225. Implement Stack using Queues
51. ✅ 226. Invert Binary Tree
52. ✅ 231. Power of Two
53. ✅ 232. Implement Queue using Stacks
54. ✅ 234. Palindrome Linked List
55. ✅ 235. Lowest Common Ancestor of a Binary Search Tree
56. ✅ 242. Valid Anagram
57. ✅ 257. Binary Tree Paths
58. ✅ 258. Add Digits
59. ✅ 263. Ugly Number
60. ✅ 268. Missing Number
61. ✅ 278. First Bad Version
62. ✅ 283. Move Zeroes
63. ✅ 290. Word Pattern
64. ✅ 292. Nim Game
65. ✅ 303. Range Sum Query - Immutable
66. ✅ 326. Power of Three
67. ✅ 332. Counting Bits
68. ✅ 342. Power of Four
69. ✅ 344. Reverse String
70. ✅ 345. Reverse Vowels of a String
71. ✅ 349. Intersection of Two Arrays
72. ✅ 350. Intersection of Two Arrays II
73. ✅ 367. Valid Perfect Square
74. ✅ 371. Sum of Two Integers
75. ✅ 374. Guess Number Higher or Lower
76. ✅ 383. Ransom Note
77. ✅ 387. First Unique Character in a String
78. ✅ 400. Nth Digit
79. ✅ 401. Binary Watch
80. ✅ 404. Sum of Left Leaves
81. ✅ 405. Convert a Number to Hexadecimal
82. ✅ 409. Longest Palindrome
83. ✅ 412. Fizz Buzz
84. ✅ 414. Third Maximum Number
85. ✅ 415. Add Strings
86. ✅ 427. Construct Quad Tree
87. ✅ 429. N-ary Tree Level Order Traversal
88. ✅ 437. Path Sum III
89. ✅ 438. Find All Anagrams in a String
90. ✅ 441. Arranging Coins
91. ✅ 443. String Compression
92. ✅ 447. Number of Boomerangs
93. ✅ 448. Find All Numbers Disappeared in an Array
94. ✅ 453. Minimum Moves to Equal Array Elements
95. ✅ 455. Assign Cookies
96. ✅ 458. Poor Pigs
97. ✅ 459. Repeated Substring Pattern
98. ✅ 461. Hamming Distance
99. ✅ 463. Island Perimeter
100. ✅ 475. Heaters

### Этап 2: Продвинутый новичок (Medium) - 4-6 недель

**Структуры данных:**
1. ⭐ 2. Add Two Numbers
2. ⭐ 3. Longest Substring Without Repeating Characters
3. ⭐ 5. Longest Palindromic Substring
4. ⭐ 11. Container With Most Water
5. ⭐ 15. 3Sum
6. ⭐ 17. Letter Combinations of a Phone Number
7. ⭐ 19. Remove Nth Node From End of List
8. ⭐ 22. Generate Parentheses
9. ⭐ 33. Search in Rotated Sorted Array
10. ⭐ 39. Combination Sum
11. ⭐ 46. Permutations
12. ⭐ 48. Rotate Image
13. ⭐ 49. Group Anagrams
14. ⭐ 50. Pow(x, n)
15. ⭐ 54. Spiral Matrix
16. ⭐ 55. Jump Game
17. ⭐ 56. Merge Intervals
18. ⭐ 62. Unique Paths
19. ⭐ 73. Set Matrix Zeroes
20. ⭐ 74. Search a 2D Matrix
21. ⭐ 75. Sort Colors
22. ⭐ 78. Subsets
23. ⭐ 79. Word Search
24. ⭐ 90. Subsets II
25. ⭐ 91. Decode Ways
26. ⭐ 94. Binary Tree Inorder Traversal
27. ⭐ 98. Validate Binary Search Tree
28. ⭐ 102. Binary Tree Level Order Traversal
29. ⭐ 114. Flatten Binary Tree to Linked List
30. ⭐ 116. Populating Next Right Pointers in Each Node
31. ⭐ 117. Populating Next Right Pointers in Each Node II
32. ⭐ 121. Best Time to Buy and Sell Stock
33. ⭐ 127. Word Ladder
34. ⭐ 128. Longest Consecutive Sequence
35. ⭐ 130. Surrounded Regions
36. ⭐ 131. Palindrome Partitioning
37. ⭐ 133. Clone Graph
38. ⭐ 134. Gas Station
39. ⭐ 138. Copy List with Random Pointer
40. ⭐ 139. Word Break
41. ⭐ 143. Reorder List
42. ⭐ 146. LRU Cache
43. ⭐ 148. Sort List
44. ⭐ 150. Evaluate Reverse Polish Notation
45. ⭐ 152. Maximum Product Subarray
46. ⭐ 153. Find Minimum in Rotated Sorted Array
47. ⭐ 155. Min Stack
48. ⭐ 160. Intersection of Two Linked Lists
49. ⭐ 162. Find Peak Element
50. ⭐ 164. Maximum Gap
51. ⭐ 167. Two Sum II - Input Array Is Sorted
52. ⭐ 168. Excel Sheet Column Title
53. ⭐ 169. Majority Element
54. ⭐ 179. Largest Number
55. ⭐ 187. Repeated DNA Sequences
56. ⭐ 198. House Robber
57. ⭐ 199. Binary Tree Right Side View
58. ⭐ 200. Number of Islands
59. ⭐ 206. Reverse Linked List
60. ⭐ 207. Course Schedule
61. ⭐ 208. Implement Trie (Prefix Tree)
62. ⭐ 210. Course Schedule II
63. ⭐ 213. House Robber II
64. ⭐ 215. Kth Largest Element in an Array
65. ⭐ 216. Combination Sum III
66. ⭐ 221. Maximal Square
67. ⭐ 222. Count Complete Tree Nodes
68. ⭐ 226. Invert Binary Tree
69. ⭐ 230. Kth Smallest Element in a BST
70. ⭐ 234. Palindrome Linked List
71. ⭐ 235. Lowest Common Ancestor of a Binary Search Tree
72. ⭐ 236. Lowest Common Ancestor of a Binary Tree
73. ⭐ 238. Product of Array Except Self
74. ⭐ 239. Sliding Window Maximum
75. ⭐ 240. Search a 2D Matrix II
76. ⭐ 242. Valid Anagram
77. ⭐ 251. Flatten 2D Vector
78. ⭐ 257. Binary Tree Paths
79. ⭐ 261. Graph Valid Tree
80. ⭐ 264. Ugly Number II
81. ⭐ 268. Missing Number
82. ⭐ 279. Perfect Squares
83. ⭐ 283. Move Zeroes
84. ⭐ 286. Walls and Gates
85. ⭐ 287. Find the Duplicate Number
86. ⭐ 290. Word Pattern
87. ⭐ 295. Find Median from Data Stream
88. ⭐ 297. Serialize and Deserialize Binary Tree
89. ⭐ 300. Longest Increasing Subsequence
90. ⭐ 301. Remove Invalid Parentheses
91. ⭐ 309. Best Time to Buy and Sell Stock with Cooldown
92. ⭐ 312. Burst Balloons
93. ⭐ 322. Coin Change
94. ⭐ 323. Number of Connected Components in an Undirected Graph
95. ⭐ 328. Odd Even Linked List
96. ⭐ 329. Longest Increasing Path in a Matrix
97. ⭐ 332. Reconstruct Itinerary
98. ⭐ 334. Increasing Triplet Subsequence
99. ⭐ 337. House Robber III
100. ⭐ 338. Counting Bits

### Этап 3: Эксперт (Hard) - 6-8 недель

1. ⚡ 4. Median of Two Sorted Arrays
2. ⚡ 10. Regular Expression Matching
3. ⚡ 23. Merge k Sorted Lists
4. ⚡ 25. Reverse Nodes in k-Group
5. ⚡ 30. Substring with Concatenation of All Words
6. ⚡ 32. Longest Valid Parentheses
7. ⚡ 37. Sudoku Solver
8. ⚡ 42. Trapping Rain Water
9. ⚡ 44. Wildcard Matching
10. ⚡ 45. Jump Game II
11. ⚡ 51. N-Queens
12. ⚡ 52. N-Queens II
13. ⚡ 57. Insert Interval
14. ⚡ 60. Permutation Sequence
15. ⚡ 68. Text Justification
16. ⚡ 72. Edit Distance
17. ⚡ 76. Minimum Window Substring
18. ⚡ 84. Largest Rectangle in Histogram
19. ⚡ 85. Maximal Rectangle
20. ⚡ 87. Scramble String
21. ⚡ 97. Interleaving String
22. ⚡ 99. Recover Binary Search Tree
23. ⚡ 115. Distinct Subsequences
24. ⚡ 123. Best Time to Buy and Sell Stock III
25. ⚡ 124. Binary Tree Maximum Path Sum
26. ⚡ 126. Word Ladder II
27. ⚡ 127. Word Ladder
28. ⚡ 128. Longest Consecutive Sequence
29. ⚡ 140. Word Break II
30. ⚡ 145. Binary Tree Postorder Traversal

### Обозначения:
- ✅ Easy - начните с этих задач
- ⭐ Medium - основной набор для развития навыков
- ⚡ Hard - продвинутые задачи

---

## 6. Методология обучения

### Принципы эффективного обучения

#### 1. Изучение теории (20% времени)
- **Что делает:** Понимание концепции и её применения
- **Как делать:** Прочитать теорию, посмотреть визуализацию
- **Ресурсы:**
  - [VisuAlgo](https://visualgo.net/) - визуализация алгоритмов
  - [YouTube - Abdul Bari](https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw) - объяснения алгоритмов

#### 2. Разбор примеров (20% времени)
- **Что делает:** Видеть как концепция работает на практике
- **Как делать:** Изучить готовые решения, понять логику
- **Важно:** Не просто копировать, а понимать

#### 3. Решение задач (50% времени)
- **Что делает:** Применение знаний на практике
- **Как делать:**
  1. Прочитать задачу
  2. Подумать 15-30 минут
  3. Если нет идей - посмотреть подсказку (hint)
  4. Дорешать самостоятельно
  5. Если застряли снова - посмотреть решение
  6. Переписать решение самостоятельно

#### 4. Анализ решений (10% времени)
- **Что делает:** Изучение оптимальных подходов
- **Как делать:**
  - Сравнить свое решение с обсуждением (Discussion)
  - Посмотреть решения других пользователей
  - Проанализировать альтернативные подходы

### Процесс решения задачи

#### Шаг 1: Понимание задачи (5 минут)
- Внимательно прочитать условие
- Понять входные и выходные данные
- Определить ограничения
- Проверить примеры

#### Шаг 2: Разработка подхода (10-20 минут)
- Какой паттерн подходит?
- Какие структуры данных использовать?
- Какая сложность должна быть?
- Нарисовать пример на бумаге

#### Шаг 3: Написание кода (15-30 минут)
- Начать с простого решения
- Использовать понятные имена переменных
- Добавить комментарии при необходимости
- Проверить граничные случаи

#### Шаг 4: Тестирование (5 минут)
- Проверить на примерах из задачи
- Продумать граничные случаи:
  - Пустой ввод
  - Один элемент
  - Максимальные значения
  - Отрицательные значения

#### Шаг 5: Оптимизация (если нужно)
- Анализировать сложность
- Искать способы улучшения
- Сравнивать с другими решениями

### Как долго пытаться самостоятельно

| Сложность | Время до hints | Время до решения |
|-----------|----------------|------------------|
| Easy | 15-20 минут | 30 минут |
| Medium | 20-30 минут | 1 час |
| Hard | 30-40 минут | 1.5-2 часа |

**Важно:** Не бойтесь смотреть решения! Главное - понять и переписать самостоятельно.

### Расписание обучения

#### Ежедневная практика (1-2 часа)
- **1 задача Medium или 2 задачи Easy**
- Повторение через неделю
- Повторение через месяц

#### Еженедельный обзор (1 час)
- Просмотреть все решенные за неделю задачи
- Выписать новые паттерны
- Занести в "шпаргалку"

#### Распределение тем по неделям

**Неделя 1-2: Фундаментальные основы**
- Big O notation
- Массивы и строки
- 10-15 задач Easy

**Неделя 3-4: Базовые структуры данных**
- Stack, Queue, LinkedList
- HashMap, HashSet
- 15-20 задач Easy/Medium

**Неделя 5-6: Деревья и графы**
- Обходы деревьев
- BFS, DFS
- 15-20 задач Easy/Medium

**Неделя 7-8: Алгоритмические паттерны I**
- Two Pointers
- Sliding Window
- Binary Search
- 20 задач Medium

**Неделя 9-10: Алгоритмические паттерны II**
- Recursion & Backtracking
- Dynamic Programming
- 20 задач Medium

**Неделя 11-12: Закрепление**
- Смешанные задачи
- Hard задачи (по желанию)
- Мок-интервью

### Отслеживание прогресса

#### Что записывать:
1. **Название задачи и номер**
2. **Сложность**
3. **Использованный паттерн/структуру данных**
4. **Время решения**
5. **Посмотрел ли hints/solution**
6. **Заметки** (важные моменты)

#### Пример записи:
```
1. Two Sum (Easy)
Паттерн: HashMap
Время: 10 минут
Hints: Нет
Заметки: Использовать complement для O(n) решения
```

### Подготовка к интервью

#### За 2 недели до интервью:
- Решать по 2-3 задачи в день
- Фокус на Medium задачах
- Практиковать объяснение вслух

#### За 1 неделю до интервью:
- Мок-интервью с таймером (45 минут)
- Повторить все основные паттерны
- Отдохнуть за день до интервью

#### Во время интервью:
1. Задавайте уточняющие вопросы
2. Объясняйте ход мыслей
3. Начните с brute force решения
4. Оптимизируйте постепенно
5. Пишите чистый код
6. Тестируйте на примерах

---

## Полезные ресурсы

### Обучение
- [NeetCode](https://neetcode.io/) - структурированный план
- [LeetCode Top 100](https://leetcode.com/problemset/top-interview-questions/) - топ задач для интервью
- [Blind 75](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions) - 75 обязательных задач

### Визуализация
- [VisuAlgo](https://visualgo.net/) - визуализация алгоритмов
- [Algorithm Visualizer](https://algorithm-visualizer.org/) - пошаговая визуализация

### Книги
- "Grokking Algorithms" - Aditya Bhargava
- "Introduction to Algorithms" - CLRS (для глубокого изучения)
- "Elements of Programming Interviews" - Adnan Aziz

### YouTube каналы
- [Abdul Bari](https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw) - алгоритмы
- [NeetCode](https://www.youtube.com/c/NeetCode) - разбор задач LeetCode
- [William Lin](https://www.youtube.com/user/TstormGIT) - соревновательное программирование

---

## Чек-лист готовности

Перед собеседованием убедитесь, что вы:

### Фундаментальные основы
- [ ] Понимаете Big O notation
- [ ] Умеете работать с массивами и строками
- [ ] Знаете основные методы JavaScript

### Структуры данных
- [ ] Умеете реализовать Stack и Queue
- [ ] Работаете с LinkedList
- [ ] Используете HashMap и HashSet
- [ ] Обходите деревья (DFS, BFS)
- [ ] Понимаете графы и их представление

### Алгоритмы
- [ ] Применяете Two Pointers
- [ ] Используете Sliding Window
- [ ] Пишете Binary Search
- [ ] Решаете задачи с Recursion
- [ ] Применяете Backtracking
- [ ] Пишете DP решения
- [ ] Используете Greedy подходы

### Практика
- [ ] Решите минимум 50 задач Easy
- [ ] Решите минимум 50 задач Medium
- [ ] Можете объяснить решение вслух
- [ ] Укладываетесь в тайминг интервью

---

## Советы и лайфхаки

### При решении задач
1. **Начните с brute force** - даже если это O(n²), главное - рабочее решение
2. **Рисуйте примеры** - визуализация помогает найти паттерн
3. **Проверяйте граничные случаи** - пустой массив, один элемент, отрицательные числа
4. **Используйте отладчик** - `console.log` ваш друг
5. **Не сдавайтесь сразу** - дайте себе время подумать

### При изучении
1. **Повторение - мать учения** - возвращайтесь к задачам через неделю и месяц
2. **Создайте свою шпаргалку** - с паттернами и подходами
3. **Объясняйте другим** - лучшая проверка понимания
4. **Не спешите** - качество важнее количества
5. **Отдыхайте** - мозг учится даже во время перерывов

### На интервью
1. **Задавайте вопросы** - уточните входные данные, ограничения
2. **Думайте вслух** - интервьюер хочет увидеть ваш ход мыслей
3. **Начните с простого** - покажите, что можете решить задачу
4. **Оптимизируйте** - покажите глубину понимания
5. **Будьте уверены** - вы подготовлены!

---

## Заключение

Помните, что обучение алгоритмам - это марафон, а не спринт. Главное - регулярная практика и постоянное углубление знаний.

**Удачи в подготовке! 🚀**
