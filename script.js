
// 347. Top K Frequent Elements

// 560. Subarray Sum Equals K
// var subarraySum = function(nums, k) {
//     let map = new Map()
//     let res = 0
//     map.set(0,1)
//     let sum = 0
//
//     for (let i = 0; i < nums.length; i++) {
//         sum+=nums[i]
//
//         if (map.has(sum - k)) {
//             res+=map.get(sum - k)
//         }
//         map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1)
//     }
//     console.log(map)
//     return res
// };
//
// let nums3 = [1,1,1], k2 = 2
// console.log(subarraySum(nums3, k2))

// 451. Sort Characters By Frequency
var frequencySort = function(s) {
    let map = new Map()
    let resStr = ""
    let box = Array.from({length: s.length + 1}, () => [])

    for (let i = 0; i < s.length; i++) {
        let getitem = map.get(s[i])
        map.set(s[i], getitem ? getitem + 1 : 1)
    }

    for (let [str, count] of map) {
        let locCount = count
        while (locCount > 0) {
            box[count].push(str)
            locCount--
        }
    }
    console.log(box)
    for (let i = box.length - 1; i >= 0; i--) {
        resStr+=[...box[i]]
    }

    return resStr.split(',').join('')
};

let s1 = "tree"
let s2 = "cccaaa"
let s3 = "Aabb"

console.log(frequencySort(s1)) // "cccaaa" или "aaaccc"

// 11. Container With Most Water
var maxArea = function(height) {

};

let h1 = [1,8,6,2,5,4,8,3,7]
let h2 = [1,1]
console.log(maxArea(h1)) // 49
console.log(maxArea(h2)) // 1
