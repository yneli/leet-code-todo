# План задач по HashMap/HashSet

## ✅ Выполнено:
- [x] 1. Two Sum

---

## 📝 Сегодня/Завтра — Easy задачи:

### 1. ✅ 217. Contains Duplicate — проверка дубликатов
```javascript
// Условие: есть ли в массиве повторяющиеся числа?
// Пример: [1,2,3,1] → true
//         [1,2,3,4] → false

function containsDuplicate(nums) {
    const set = new Set();

    for (const num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}

// Или короче:
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}
```

---

### 2. ✅ 242. Valid Anagram — проверка анаграммы
```javascript
// Условие: является ли s анаграммой t?
// Пример: s = "anagram", t = "nagaram" → true
//         s = "rat", t = "car" → false

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    // Считаем частоту букв в s
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Вычитаем для t
    for (const char of t) {
        if (!map.has(char)) return false;
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return map.size === 0;
}

// Или проще через сортировку:
function isAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}
```

---

### 3. ✅ 136. Single Number — найти уникальное число
```javascript
// Условие: все числа повторяются дважды, кроме одного. Найти его.
// Пример: [2,2,1] → 1
//         [4,1,2,1,2] → 4

function singleNumber(nums) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [num, count] of map) {
        if (count === 1) return num;
    }
}

// Или через XOR (гениальное решение!):
function singleNumber(nums) {
    return nums.reduce((a, b) => a ^ b, 0);
}
// a ^ a = 0, a ^ 0 = a, поэтому все пары исчезнут!
```

---

### 4. ✅ 349. Intersection of Two Arrays — пересечение массивов
```javascript
// Условие: найти общие элементы (без дубликатов)
// Пример: nums1 = [1,2,2,1], nums2 = [2,2] → [2]
//         nums1 = [4,9,5], nums2 = [9,4,9,8,4] → [4,9]

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result);
}
```

---

### 5. ✅ 383. Ransom Note — можно ли составить записку
```javascript
// Условие: можно ли составить ransomNote из magazine?
// Пример: ransomNote = "a", magazine = "b" → false
//         ransomNote = "aa", magazine = "aab" → true

function canConstruct(ransomNote, magazine) {
    const freq = new Map();

    for (const char of magazine) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if (!freq.has(char) || freq.get(char) === 0) {
            return false;
        }
        freq.set(char, freq.get(char) - 1);
    }

    return true;
}
```

---

### 6. ✅ 290. Word Pattern — соответствует ли строка паттерну
```javascript
// Условие: соответствует ли строка паттерну?
// Пример: pattern = "abba", s = "dog cat cat dog" → true
//         pattern = "abba", s = "dog cat cat fish" → false

function wordPattern(pattern, s) {
    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (charToWord.get(char) !== wordToChar.get(word)) {
            return false;
        }

        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
}
```

---

### 7. ✅ 205. Isomorphic Strings — изоморфные строки
```javascript
// Условие: проверяют ли строки одинаковый паттерн?
// Пример: s = "egg", t = "add" → true
//         s = "foo", t = "bar" → false

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapS.get(charS) !== mapT.get(charT)) {
            return false;
        }

        mapS.set(charS, i);
        mapT.set(charT, i);
    }

    return true;
}
```

---

## 📝 Medium задачи (когда освоишь Easy):

### 8. ⭐ 49. Group Anagrams — сгруппировать анаграммы
```javascript
// Условие: сгруппировать анаграммы вместе
// Пример: ["eat","tea","tan","ate","nat","bat"]
//         → [["bat"],["nat","tan"],["ate","eat","tea"]]

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
```

---

### 9. ⭐ 350. Intersection of Two Arrays II — пересечение с дубликатами
```javascript
// Условие: пересечение массивов (с дубликатами)
// Пример: nums1 = [1,2,2,1], nums2 = [2,2] → [2,2]
//         nums1 = [4,9,5], nums2 = [9,4,9,8,4] → [4,9]

function intersect(nums1, nums2) {
    const freq = new Map();

    for (const num of nums1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const result = [];
    for (const num of nums2) {
        if (freq.get(num) > 0) {
            result.push(num);
            freq.set(num, freq.get(num) - 1);
        }
    }

    return result;
}
```

---

### 10. ⭐ 128. Longest Consecutive Sequence — самая длинная последовательность
```javascript
// Условие: самая длинная последовательность подряд идущих чисел
// Пример: [100,4,200,1,3,2] → 4 (1,2,3,4)
//         [0,3,7,2,5,8,4,6,0,1] → 9

function longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
        // Только если это начало последовательности
        if (!set.has(num - 1)) {
            let current = num;
            let streak = 1;

            while (set.has(current + 1)) {
                current++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;
}
```

---

### 11. ⭐ 347. Top K Frequent Elements — K самых частых элементов
```javascript
// Условие: найти K самых часто встречающихся элементов
// Пример: nums = [1,1,1,2,2,3], k = 2 → [1,2]

function topKFrequent(nums, k) {
    // 1. Считаем частоту
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // 2. Bucket sort
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    // 3. Собираем результат
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }

    return result.slice(0, k);
}
```

---

### 12. ⭐ 560. Subarray Sum Equals K — подмассивы с суммой K
```javascript
// Условие: количество подмассивов с суммой = k
// Пример: [1,1,1], k = 2 → 2
//         [1,2,3], k = 3 → 2

function subarraySum(nums, k) {
    const count = new Map();
    count.set(0, 1);

    let sum = 0;
    let result = 0;

    for (const num of nums) {
        sum += num;

        if (count.has(sum - k)) {
            result += count.get(sum - k);
        }

        count.set(sum, (count.get(sum) || 0) + 1);
    }

    return result;
}
```

---

### 13. ⭐ 451. Sort Characters By Frequency — сортировка по частоте
```javascript
// Условие: отсортировать символы по частоте
// Пример: "tree" → "eert" или "eetr"

function frequencySort(s) {
    const freq = new Map();
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    const sorted = Array.from(freq.entries())
        .sort((a, b) => b[1] - a[1]);

    return sorted.map(([char, count]) => char.repeat(count)).join('');
}
```

---

## 🔑 Паттерны HashMap:

| Паттерн | Задачи | Когда применять |
|---------|--------|-----------------|
| **Frequency Count** | 347, 451, 383, 242 | Посчитать частоту символов |
| **Set для уникальности** | 217, 349, 128 | Быстрая проверка наличия |
| **Two Sum стиль** | 1, 560 | Найти пару с суммой |
| **Group by Key** | 49 | Сгруппировать по ключу |
| **Two Maps (биекция)** | 290, 205 | Проверить соответствствие |

---

## 📊 Отмечай выполненное:

### Easy:
- [ ] 217. Contains Duplicate — **ТЕКУЩАЯ ЗАДАЧА** 📍
- [ ] 242. Valid Anagram
- [ ] 136. Single Number
- [ ] 349. Intersection of Two Arrays
- [ ] 383. Ransom Note
- [ ] 290. Word Pattern
- [ ] 205. Isomorphic Strings

### Medium:
- [ ] 49. Group Anagrams
- [ ] 350. Intersection of Two Arrays II
- [ ] 128. Longest Consecutive Sequence
- [ ] 347. Top K Frequent Elements
- [ ] 560. Subarray Sum Equals K
- [ ] 451. Sort Characters By Frequency

---

## 🚀 Следующая тема после HashMap:
Two Pointers (Два указателя)

---

> **Совет:** Решай по 1-2 задачи в день, переписывай без подглядывания!
> Через неделю HashMap будет у тебя в крови! 💪
