# План задач: Two Pointers, Sliding Window, Binary Search

---

## Часть 1: Two Pointers (Два указателя)

### Суть паттерна
Два указателя двигаются навстречу друг другу или в одном направлении. Избавляет от вложенных циклов O(n²) → O(n).

**Когда применять:**
- Отсортированные массивы
- Поиск пар с условием (сумма, разность)
- Палиндромы
- Удаление дубликатов

---

### 1. ✅ 125. Valid Palindrome — палиндром
```javascript
// Условие: является ли строка палиндромом (игнорируя регистр и не-буквы)
// Пример: "A man, a plan, a canal: Panama" → true
//         "race a car" → false

function isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isAlphaNum(c) {
    return /[a-zA-Z0-9]/.test(c);
}
// Сложность: O(n) время, O(1) память
```

---

### 2. ✅ 167. Two Sum II — сумма в отсортированном массиве
```javascript
// Условие: найти два числа, дающих target (массив отсортирован)
// Пример: numbers = [2,7,11,15], target = 9 → [1,2]

function twoSum(numbers, target) {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        if (sum < target) left++;
        else right--;
    }
    return [];
}
// Сложность: O(n) время, O(1) память
```

---

### 3. 🔄 11. Container With Most Water — контейнер с водой
```javascript
// Условие: найти максимальный объём воды между двумя стенками
// Пример: [1,8,6,2,5,4,8,3,7] → 49
//         [1,1] → 1

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}
// Сложность: O(n) время, O(1) память
```

---

### 4. ⭐ 15. 3Sum — сумма трёх чисел
```javascript
// Условие: найти все уникальные тройки с суммой = 0
// Пример: [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = nums.length - 1;

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

---

### 5. ⭐ 42. Trapping Rain Water — сбор дождевой воды
```javascript
// Условие: сколько воды удержится между стенками
// Пример: [0,1,0,2,1,0,1,3,2,1,2,1] → 6

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}
// Сложность: O(n) время, O(1) память
```

---

## Часть 2: Sliding Window (Скользящее окно)

### Суть паттерна
Окно фиксированной или переменной длины скользит по массиву. Вместо пересчёта всего — добавляем новый элемент, убираем старый.

**Когда применять:**
- Подмассивы/подстроки
- Максимум/минимум/сумма в окне
- "Самый длинный/короткий подмассив с условием"

---

### 1. ✅ 643. Maximum Average Subarray I — максимальное среднее в окне
```javascript
// Условие: найти максимальное среднее в подмассиве длины k
// Пример: [1,12,-5,-6,50,3], k = 4 → 12.75

function findMaxAverage(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) sum += nums[i];

    let maxSum = sum;
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
}
// Сложность: O(n) время, O(1) память
```

---

### 2. ⭐ 3. Longest Substring Without Repeating Characters
```javascript
// Условие: самая длинная подстрока без повторений
// Пример: "abcabcbb" → 3 ("abc")
//         "bbbbb" → 1 ("b")

function lengthOfLongestSubstring(s) {
    const charIndex = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (charIndex.has(s[right]) && charIndex.get(s[right]) >= left) {
            left = charIndex.get(s[right]) + 1;
        }
        charIndex.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// Сложность: O(n) время, O(min(m,n)) память
```

---

### 3. ⭐ 424. Longest Repeating Character Replacement
```javascript
// Условие: самая длинная подстрока с максимум k замен
// Пример: "ABAB", k = 2 → 4 (заменить оба A или оба B)
//         "AABABBA", k = 1 → 4

function characterReplacement(s, k) {
    const count = new Map();
    let left = 0, maxCount = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        count.set(s[right], (count.get(s[right]) || 0) + 1);
        maxCount = Math.max(maxCount, count.get(s[right]));

        // окно слишком большое — нужно больше чем k замен
        while (right - left + 1 - maxCount > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// Сложность: O(n) время, O(26) ≈ O(1) память
```

---

### 4. ⭐ 76. Minimum Window Substring — минимальное окно
```javascript
// Условие: минимальная подстрока s содержащая все символы t
// Пример: s = "ADOBECODEBANC", t = "ABC" → "BANC"

function minWindow(s, t) {
    const need = new Map();
    for (const c of t) need.set(c, (need.get(c) || 0) + 1);

    const have = new Map();
    let left = 0, valid = 0, minLen = Infinity, start = 0;

    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        have.set(c, (have.get(c) || 0) + 1);

        if (need.has(c) && have.get(c) === need.get(c)) valid++;

        while (valid === need.size) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            have.set(s[left], have.get(s[left]) - 1);
            if (need.has(s[left]) && have.get(s[left]) < need.get(s[left])) valid--;
            left++;
        }
    }
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
// Сложность: O(n) время, O(m) память (m — размер алфавита)
```

---

## Часть 3: Binary Search (Бинарный поиск)

### Суть паттерна
Делим массив пополам каждый шаг. Работает только на **отсортированных** данных.

**Когда применять:**
- Отсортированный массив
- Поиск позиции вставки
- "Найти минимальное X, при котором условие выполняется"

---

### 1. ✅ 704. Binary Search — классический
```javascript
function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Сложность: O(log n) время, O(1) память
```

---

### 2. ✅ 35. Search Insert Position — позиция вставки
```javascript
function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}
```

---

### 3. ⭐ 33. Search in Rotated Sorted Array — поиск в повёрнутом массиве
```javascript
// Условие: массив отсортирован и повёрнут, найти target
// Пример: [4,5,6,7,0,1,2], target = 0 → 4

function search(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        // левая половина отсортирована
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // правая половина отсортирована
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
// Сложность: O(log n) время, O(1) память
```

---

### 4. ⭐ 153. Find Minimum in Rotated Sorted Array
```javascript
// Условие: найти минимум в повёрнутом отсортированном массиве
// Пример: [3,4,5,1,2] → 1

function findMin(nums) {
    let left = 0, right = nums.length - 1;

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
// Сложность: O(log n) время, O(1) память
```

---

### 5. ⭐ 875. Koko Eating Bananas — бинарный поиск по ответу
```javascript
// Условие: найти минимальную скорость поедания бананов чтобы успеть за H часов
// Пример: piles = [3,6,7,11], h = 8 → 4

function minEatingSpeed(piles, h) {
    let left = 1, right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
// Сложность: O(n * log(maxPile)) время, O(1) память
```

---

### 6. 🔄 278. First Bad Version — первая плохая версия
```javascript
// Условие: найти первую "плохую" версию продукта
// API: isBadVersion(version) возвращает true/false
// Все версии после первой плохой — тоже плохие
// Пример: n = 5, firstBad = 4 → 4

function firstBadVersion(n) {
    let left = 1, right = n;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
// Сложность: O(log n) время, O(1) память
```

---

## Паттерны — шпаргалка

| Паттерн | Задачи | Ключевая идея |
|---------|--------|---------------|
| **Two Pointers навстречу** | 125, 167, 11, 42 | left и right сходятся |
| **Two Pointers + сортировка** | 15 | отсортировать, потом навстречу |
| **Фиксированное окно** | 643 | окно固定的 размера k |
| **Переменное окно** | 3, 424, 76 | расширяем/сжимаем по условию |
| **Классический бинарный поиск** | 704, 35, 278 | делим пополам, ищем точное значение |
| **Бинарный поиск по ответу** | 875 | ищем минимальное X, при котором условие выполняется |
| **Поворот массива** | 33, 153 | одна половина всегда отсортирована |

---

## Прогресс

### Two Pointers:
- [x] 125. Valid Palindrome
- [x] 167. Two Sum II
- [x] 11. Container With Most Water
- [x] 15. 3Sum
- [x] 42. Trapping Rain Water

### Sliding Window:
- [x] 643. Maximum Average Subarray I
- [x] 3. Longest Substring Without Repeating Characters
- [x] 424. Longest Repeating Character Replacement
- [x] 76. Minimum Window Substring

### Binary Search:
- [x] 704. Binary Search
- [x] 35. Search Insert Position
- [x] 33. Search in Rotated Sorted Array
- [x] 153. Find Minimum in Rotated Sorted Array
- [x] 875. Koko Eating Bananas
- [x] 278. First Bad Version
- [x] 367. Valid Perfect Square
- [x] 374. Guess Number Higher or Lower
- [x] 74. Search a 2D Matrix

---

## Часть 4: Дополнительные Sliding Window задачи

### 1. ✅ 209. Minimum Size Subarray Sum — минимальный подмассив с суммой ≥ target
### 2. ✅ 438. Find All Anagrams in a String
### 3. ❌ 567. Permutation in String — пропущена

**Блок Sliding Window / HashMap завершён.**
