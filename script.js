var singleNumber = function (nums) {

    let objHash = {}

    for (let i = 0; i < nums.length; i++) {
        objHash[nums[i]] = objHash[nums[i]] ? objHash[nums[i]] + 1 : 1
    }

    for (const key in objHash) {
        if (objHash[key] === 1) {
            return +key
        }
    }

    return 0

};

var singleNumber2 = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;  // XOR
    }

    return result;
};



// Output: 1