const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const Algorithm = require("../models/Algorithm")

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const seedAlgos = [
  {
    name: "Two Sum",
    category: "Arrays",
    link: "https://leetcode.com/problems/two-sum/",
    videoSolution: "https://youtu.be/KLlXCFG5TnA",
    textSolution:
      "Use hash map to instantly check for difference value, map will add index of last occurrence of a num, don't use same element twice",
    difficulty: "Easy",
  },
  {
    name: "Best Time to Buy and Sell Stock",
    category: "Arrays",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    videoSolution: "https://youtu.be/1pkOgXD63yU",
    textSolution: "find local min and search for local max, sliding window",
    difficulty: "Easy",
  },
  {
    name: "Contains Duplicate",
    category: "Arrays",
    link: "https://leetcode.com/problems/contains-duplicate/",
    videoSolution: "https://youtu.be/3OamzN90kPg",
    textSolution:
      "hashset to get unique values in array, to check for duplicates easily",
    difficulty: "Easy",
  },
  {
    name: "Product of Array Except Self",
    category: "Arrays",
    link: "https://leetcode.com/problems/product-of-array-except-self/",
    videoSolution: "https://youtu.be/bNvIQI2wAjk",
    textSolution:
      "make two passes, first in-order, second in-reverse, to compute products",
    difficulty: "Medium",
  },
  {
    name: "Maximum Subarray",
    category: "Arrays",
    link: "https://leetcode.com/problems/maximum-subarray/",
    videoSolution: "https://youtu.be/5WZl3MMT0Eg",
    textSolution:
      "pattern: prev subarray cant be negative, dynamic programming: compute max sum for each prefix",
    difficulty: "Easy",
  },
  {
    name: "Maximum Product Subarray",
    category: "Arrays",
    link: "https://leetcode.com/problems/maximum-product-subarray/",
    videoSolution: "https://youtu.be/lXVy6YWFcRM",
    textSolution: "dp: compute max and max-abs-val for each prefix subarr",
    difficulty: "Medium",
  },
  {
    name: "Find Minimum in Rotated Sorted Array",
    category: "Arrays",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    videoSolution: "https://youtu.be/nIVW4P8b1VA",
    textSolution:
      "check if half of array is sorted in order to find pivot, arr is guaranteed to be in at most two sorted subarrays",
    difficulty: "Medium",
  },
  {
    name: "Search in Rotated Sorted Array",
    category: "Arrays",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    videoSolution: "https://youtu.be/U8XENwh8Oy8",
    textSolution:
      "at most two sorted halfs, mid will be apart of left sorted or right sorted, if target is in range of sorted portion then search it, otherwise search other half",
    difficulty: "Medium",
  },
  {
    name: "3Sum",
    category: "Arrays",
    link: "https://leetcode.com/problems/3sum/",
    videoSolution: "https://youtu.be/jzZsG8n2R9A",
    textSolution:
      "sort input, for each first element, find next two where -a = b+c, if a=prevA, skip a, if b=prevB skip b to elim duplicates; to find b,c use two pointers, left/right on remaining list",
    difficulty: "Medium",
  },
  {
    name: "Container With Most Water",
    category: "Arrays",
    link: "https://leetcode.com/problems/container-with-most-water/",
    videoSolution: "https://youtu.be/UuiTKBwPgAo",
    textSolution:
      "shrinking window, left/right initially at endpoints, shift the pointer with min height",
    difficulty: "Medium",
  },
  {
    name: "Sum of Two Integers",
    category: "Binary",
    link: "https://leetcode.com/problems/sum-of-two-integers/",
    videoSolution: "https://youtu.be/gVUrDV4tZfY",
    textSolution:
      "add bit by bit, be mindful of carry, after adding, if carry is still 1, then add it as well",
    difficulty: "Easy",
  },
  {
    name: "Number of 1 Bits",
    category: "Binary",
    link: "https://leetcode.com/problems/number-of-1-bits/",
    videoSolution: "https://youtu.be/5Km3utixwZs",
    textSolution:
      "modulo, and dividing n; mod and div are expensive, to divide use bit shift, instead of mod to get 1's place use bitwise & 1",
    difficulty: "Easy",
  },
  {
    name: "Counting Bits",
    category: "Binary",
    link: "https://leetcode.com/problems/counting-bits/",
    videoSolution: "https://youtu.be/RyBM56RIWrM",
    textSolution:
      "write out result for num=16 to figure out pattern; res[i] = res[i - offset], where offset is the biggest power of 2 <= I",
    difficulty: "Medium",
  },
  {
    name: "Missing Number",
    category: "Binary",
    link: "https://leetcode.com/problems/missing-number/",
    videoSolution: "https://youtu.be/WnPLSRLSANE",
    textSolution:
      "compute expected sum - real sum; xor n with each index and value",
    difficulty: "Easy",
  },
  {
    name: "Reverse Bits",
    category: "Binary",
    link: "https://leetcode.com/problems/reverse-bits/",
    videoSolution: "https://youtu.be/UcoN6UjAI64",
    textSolution: "reverse each of 32 bits",
    difficulty: "Easy",
  },
  {
    name: "Climbing Stairs",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/climbing-stairs/",
    videoSolution: "https://youtu.be/Y0lT9Fck7qI",
    textSolution: "subproblem find (n-1) and (n-2), sum = n",
    difficulty: "Easy",
  },
  {
    name: "Coin Change",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/coin-change/",
    videoSolution: "https://youtu.be/H9bfqozjoqs",
    textSolution:
      "top-down: recursive dfs, for amount, branch for each coin, cache to store prev coin_count for each amount; bottom-up: compute coins for amount = 1, up until n, using for each coin (amount - coin), cache prev values",
    difficulty: "Medium",
  },
  {
    name: "Longest Increasing Subsequence",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/longest-increasing-subsequence/",
    videoSolution: "https://youtu.be/cjWnW0hdF1Y",
    textSolution:
      "recursive: foreach num, get subseq with num and without num, only include num if prev was less, cache solution of each; dp=subseq length which must end with each num, curr num must be after a prev dp or by itself",
    difficulty: "Medium",
  },
  {
    name: "Longest Common Subsequence",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    videoSolution: "https://youtu.be/Ua0GhsJSlWM",
    textSolution:
      "recursive: if first chars are equal find lcs of remaining of each, else max of: lcs of first and remain of 2nd and lcs of 2nd remain of first, cache result; nested forloop to compute the cache without recursion",
    difficulty: "Medium",
  },
  {
    name: "Word Break Problem",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/word-break/",
    videoSolution: "https://youtu.be/Sx9NNgInc3A",
    textSolution:
      "for each prefix, if prefix is in dict and wordbreak(remaining str)=True, then return True, cache result of word break",
    difficulty: "Medium",
  },
  {
    name: "Combination Sum",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/combination-sum/",
    videoSolution: "https://youtu.be/GBKI9VSKdGg",
    textSolution:
      "visualize the decision tree, base case is curSum = or > target, each candidate can have children of itself or elements to right of it inorder to elim duplicate solutions",
    difficulty: "Medium",
  },
  {
    name: "House Robber",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/house-robber/",
    videoSolution: "https://youtu.be/73r3KWiEvyk",
    textSolution:
      "for each num, get max of prev subarr, or num + prev subarr not including last element, store results of prev, and prev not including last element",
    difficulty: "Easy",
  },
  {
    name: "House Robber II",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/house-robber-ii/",
    videoSolution: "https://youtu.be/rWAJCfYYOvM",
    textSolution:
      "subarr = arr without first & last, get max of subarr, then pick which of first/last should be added to it",
    difficulty: "Medium",
  },
  {
    name: "Decode Ways",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/decode-ways/",
    videoSolution: "https://youtu.be/6aEyTjOwlJU",
    textSolution:
      "can cur char be decoded in one or two ways? Recursion -> cache -> iterative dp solution, a lot of edge cases to determine, 52, 31, 29, 10, 20 only decoded one way, 11, 26 decoded two ways",
    difficulty: "Medium",
  },
  {
    name: "Unique Paths",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/unique-paths/",
    videoSolution: "https://youtu.be/IlEsdxuD4lY",
    textSolution:
      "work backwards from solution, store paths for each position in grid, to further optimize, we don’t store whole grid, only need to store prev row",
    difficulty: "Medium",
  },
  {
    name: "Jump Game",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/jump-game/",
    videoSolution: "https://youtu.be/Yan0cv2cLy8",
    textSolution:
      "visualize the recursive tree, cache solution for O(n) time/mem complexity, iterative is O(1) mem, just iterate backwards to see if element can reach goal node, if yes, then set it equal to goal node, continue",
    difficulty: "Medium",
  },
  {
    name: "Clone Graph",
    category: "Graph",
    link: "https://leetcode.com/problems/clone-graph/",
    videoSolution: "https://youtu.be/mQeF6bN8hMk",
    textSolution: "recursive dfs, hashmap for visited nodes",
    difficulty: "Medium",
  },
  {
    name: "Course Schedule",
    category: "Graph",
    link: "https://leetcode.com/problems/course-schedule/",
    videoSolution: "https://youtu.be/EgI5nU9etnU",
    textSolution:
      "build adjacentcy_list with edges, run dfs on each V, if while dfs on V we see V again, then loop exists, otherwise V isnt in a loop, 3 states= not visited, visited, still visiting",
    difficulty: "Medium",
  },
  {
    name: "Pacific Atlantic Water Flow",
    category: "Graph",
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    videoSolution: "https://youtu.be/s-VkcjHqkGI",
    textSolution:
      "dfs each cell, keep track of visited, and track which reach pac, atl; dfs on cells adjacent to pac, atl, find overlap of cells that are visited by both pac and atl cells",
    difficulty: "Medium",
  },
  {
    name: "Number of Islands",
    category: "Graph",
    link: "https://leetcode.com/problems/number-of-islands/",
    videoSolution: "https://youtu.be/pV2kpPD66nE",
    textSolution:
      "foreach cell, if cell is 1 and unvisited run dfs, increment cound and marking each contigous 1 as visited",
    difficulty: "Medium",
  },
  {
    name: "Longest Consecutive Sequence",
    category: "Graph",
    link: "https://leetcode.com/problems/longest-consecutive-sequence/",
    videoSolution: "https://youtu.be/P6RZZMu_maU",
    textSolution:
      "use bruteforce and try to optimize, consider the max subseq containing each num; add each num to hashset, for each num if num-1 doesn’t exist, count the consecutive nums after num, ie num+1; there is also a union-find solution",
    difficulty: "Hard",
  },
  {
    name: "Alien Dictionary (Leetcode Premium)",
    category: "Graph",
    link: "https://leetcode.com/problems/alien-dictionary/",
    videoSolution: "https://youtu.be/6kTZYvNNyps",
    textSolution:
      "chars of a word not in order, the words are in order, find adjacency list of each unique char by iterating through adjacent words and finding first chars that are different, run topsort on graph and do loop detection",
    difficulty: "Hard",
  },
  {
    name: "Graph Valid Tree (Leetcode Premium)",
    category: "Graph",
    link: "https://leetcode.com/problems/graph-valid-tree/",
    videoSolution: "https://youtu.be/bXsUuownnoQ",
    textSolution:
      "union find, if union return false, loop exists, at end size must equal n, or its not connected; dfs to get size and check for loop, since each edge is double, before dfs on neighbor of N, remove N from neighbor list of neighbor",
    difficulty: "Medium",
  },
  {
    name: "Number of Connected Components in an Undirected Graph (Leetcode Premium)",
    category: "Graph",
    link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    videoSolution: "https://youtu.be/8f1XPm4WOUc",
    textSolution:
      "dfs on each node that hasn’t been visited, increment component count, adjacency list; bfs and union find are possible",
    difficulty: "Medium",
  },
  {
    name: "Insert Interval",
    category: "Interval",
    link: "https://leetcode.com/problems/insert-interval/",
    videoSolution: "https://youtu.be/A8NUOmlwOlM",
    textSolution:
      "insert new interval in order, then merge intervals; newinterval could only merge with one interval that comes before it, then add remaining intervals",
    difficulty: "Hard",
  },
  {
    name: "Merge Intervals",
    category: "Interval",
    link: "https://leetcode.com/problems/merge-intervals/",
    videoSolution: "https://youtu.be/44H3cEC2fFM",
    textSolution:
      "sort each interval, overlapping intervals should be adjacent, iterate and build solution; also graph method, less efficient, more complicated",
    difficulty: "Medium",
  },
  {
    name: "Non-overlapping Intervals",
    category: "Interval",
    link: "https://leetcode.com/problems/non-overlapping-intervals/",
    videoSolution: "https://youtu.be/nONCGxWoUfM",
    textSolution:
      "instead of removing, count how max num of intervals you can include, sort intervals, dp to compute max intervals up until the i-th interval",
    difficulty: "Medium",
  },
  {
    name: "Meeting Rooms (Leetcode Premium)",
    category: "Interval",
    link: "https://leetcode.com/problems/meeting-rooms/",
    videoSolution: "https://youtu.be/PaJxqZVPhbg",
    textSolution:
      "sort intervals by start time, if second interval doesn’t overlap with first, then third def wont overlap with first",
    difficulty: "Easy",
  },
  {
    name: "Meeting Rooms II (Leetcode Premium)",
    category: "Interval",
    link: "https://leetcode.com/problems/meeting-rooms-ii/",
    videoSolution: "https://youtu.be/FdzJmTCVyJU",
    textSolution:
      "we care about the points in time where we are starting/ending a meeting, we already are given those, just separate start/end and traverse counting num of meetings going at these points in time; for each meeting check if a prev meeting has finished before curr started, using min heap",
    difficulty: "Medium",
  },
  {
    name: "Reverse a Linked List",
    category: "Linked List",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    videoSolution: "https://youtu.be/G0_I-ZF0S38",
    textSolution:
      "iterate through maintaining cur and prev; recursively reverse, return new head of list",
    difficulty: "Easy",
  },
  {
    name: "Detect Cycle in a Linked List",
    category: "Linked List",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    videoSolution: "https://youtu.be/gBTe7lFR3vc",
    textSolution:
      "dict to remember visited nodes; two pointers at different speeds, if they meet there is loop",
    difficulty: "Easy",
  },
  {
    name: "Merge Two Sorted Lists",
    category: "Linked List",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    videoSolution: "https://youtu.be/XIdigk956u0",
    textSolution: "insert each node from one list into the other",
    difficulty: "Easy",
  },
  {
    name: "Merge K Sorted Lists",
    category: "Linked List",
    link: "https://leetcode.com/problems/merge-k-sorted-lists/",
    videoSolution: "https://youtu.be/q5a5OiGbT6Q",
    textSolution:
      "divied and conquer, merge lists, N totalnodes, k-lists, O(N*logk). For each list, find min val, insert it into list, use priorityQ to optimize finding min O(N*logk)",
    difficulty: "Hard",
  },
  {
    name: "Remove Nth Node From End Of List",
    category: "Linked List",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    videoSolution: "https://youtu.be/XVuQxVej6y8",
    textSolution:
      "use dummy node at head of list, compute len of list; two pointers, second has offset of n from first",
    difficulty: "Medium",
  },
  {
    name: "Reorder List",
    category: "Linked List",
    link: "https://leetcode.com/problems/reorder-list/",
    videoSolution: "https://youtu.be/S5bfdUTrKLM",
    textSolution:
      "reverse second half of list, then easily reorder it; non-optimal way is to store list in array",
    difficulty: "Medium",
  },
  {
    name: "Set Matrix Zeroes",
    category: "Matrix",
    link: "https://leetcode.com/problems/set-matrix-zeroes/",
    videoSolution: "https://youtu.be/T41rL0L3Pnw",
    textSolution:
      "use sets to keep track of all rows, cols to zero out, after, for each num if it is in a zero row or col then change it to 0; flag first cell in row, and col to mark row/col that needs to be zeroed",
    difficulty: "Medium",
  },
  {
    name: "Spiral Matrix",
    category: "Matrix",
    link: "https://leetcode.com/problems/spiral-matrix/",
    videoSolution: "https://youtu.be/BJnMZNwUk1M",
    textSolution:
      "keep track of visited cells; keep track of boundaries, layer-by-layer",
    difficulty: "Medium",
  },
  {
    name: "Rotate Image",
    category: "Matrix",
    link: "https://leetcode.com/problems/rotate-image/",
    videoSolution: "https://youtu.be/fMSJSS7eO1w",
    textSolution:
      "rotate layer-by-layer, use that it's a square as advantage, rotate positions in reverse order, store a in temp, a = b, b = c, c = d, d = temp",
    difficulty: "Medium",
  },
  {
    name: "Word Search",
    category: "Matrix",
    link: "https://leetcode.com/problems/word-search/",
    videoSolution: "https://youtu.be/pfiQ_PS1g8E",
    textSolution:
      "dfs on each cell, for each search remember visited cells, and remove cur visited cell right before you return from dfs",
    difficulty: "Medium",
  },
  {
    name: "Longest Substring Without Repeating Characters",
    category: "String",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    videoSolution: "https://youtu.be/wiGpQwVHdE0",
    textSolution:
      "sliding window, if we see same char twice within curr window, shift start position",
    difficulty: "Medium",
  },
  {
    name: "Longest Repeating Character Replacement",
    category: "String",
    link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    videoSolution: "https://youtu.be/gqXU1UyA8pk",
    textSolution:
      "PAY ATTENTION: limited to chars A-Z; for each capital char, check if it could create the longest repeating substr, use sliding window to optimize; check if windowlen=1 works, if yes, increment len, if not, shift window right",
    difficulty: "Medium",
  },
  {
    name: "Minimum Window Substring",
    category: "String",
    link: "https://leetcode.com/problems/minimum-window-substring/",
    videoSolution: "https://youtu.be/jSto0O4AJbM",
    textSolution:
      "need is num of unique char in T, HAVE is num of char we have valid count for, sliding window, move right until valid, if valid, increment left until invalid, to check validity keep track if the count of each unique char is satisfied",
    difficulty: "Hard",
  },
  {
    name: "Valid Anagram",
    category: "String",
    link: "https://leetcode.com/problems/valid-anagram/",
    videoSolution: "https://youtu.be/9UtInBqnCgA",
    textSolution: "hashmap to count each char in str1, decrement for str2",
    difficulty: "Easy",
  },
  {
    name: "Group Anagrams",
    category: "String",
    link: "https://leetcode.com/problems/group-anagrams/",
    videoSolution: "https://youtu.be/vzdNOK2oB2E",
    textSolution:
      "for each of 26 chars, use count of each char in each word as tuple for key in dict, value is the list of anagrams",
    difficulty: "Medium",
  },
  {
    name: "Valid Parentheses",
    category: "String",
    link: "https://leetcode.com/problems/valid-parentheses/",
    videoSolution: "https://youtu.be/WTzjTskDFMg",
    textSolution:
      "push opening brace on stack, pop if matching close brace, at end if stack empty, return true",
    difficulty: "Easy",
  },
  {
    name: "Valid Palindrome",
    category: "String",
    link: "https://leetcode.com/problems/valid-palindrome/",
    videoSolution: "https://youtu.be/jJXJ16kPFWg",
    textSolution:
      "left, right pointers, update left and right until each points at alphanum, compare left and right, continue until left >= right, don’t distinguish between upper/lowercase",
    difficulty: "Easy",
  },
  {
    name: "Longest Palindromic Substring",
    category: "String",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    videoSolution: "https://youtu.be/XYQecbcd6_c",
    textSolution:
      "foreach char in str, consider it were the middle, consider if pali was odd or even",
    difficulty: "Medium",
  },
  {
    name: "Palindromic Substrings",
    category: "String",
    link: "https://leetcode.com/problems/palindromic-substrings/",
    videoSolution: "https://youtu.be/4RACzI5-du8",
    textSolution:
      "same as longest palindromic string, each char in str as middle and expand outwards, do same for pali of even len; maybe read up on manachers alg",
    difficulty: "Medium",
  },
  {
    name: "Encode and Decode Strings (Leetcode Premium)",
    category: "String",
    link: "https://leetcode.com/problems/encode-and-decode-strings/",
    videoSolution: "https://youtu.be/B1k_sxOSgv8",
    textSolution:
      "store length of str before each string and delimiter like '#'",
    difficulty: "Medium",
  },
  {
    name: "Maximum Depth of Binary Tree",
    category: "Tree",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    videoSolution: "https://youtu.be/hTM3phVI6YQ",
    textSolution:
      "recursive dfs to find max-depth of subtrees; iterative bfs to count number of levels in tree",
    difficulty: "Easy",
  },
  {
    name: "Same Tree",
    category: "Tree",
    link: "https://leetcode.com/problems/same-tree/",
    videoSolution: "https://youtu.be/vRbbcKXCxOw",
    textSolution:
      "recursive dfs on both trees at the same time; iterative bfs compare each level of both trees",
    difficulty: "Easy",
  },
  {
    name: "Invert/Flip Binary Tree",
    category: "Tree",
    link: "https://leetcode.com/problems/invert-binary-tree/",
    videoSolution: "https://youtu.be/OnSn2XEQ4MY",
    textSolution:
      "recursive dfs to invert subtrees; bfs to invert levels, use collections.deque; iterative dfs is easy with stack if doing pre-order traversal",
    difficulty: "Easy",
  },
  {
    name: "Binary Tree Maximum Path Sum",
    category: "Tree",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    videoSolution: "https://youtu.be/Hr5cWUld4vU",
    textSolution:
      "helper returns maxpathsum without splitting branches, inside helper we also update maxSum by computing maxpathsum WITH a split",
    difficulty: "Hard",
  },
  {
    name: "Binary Tree Level Order Traversal",
    category: "Tree",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    videoSolution: "https://youtu.be/6ZnyEApgFYg",
    textSolution:
      "iterative bfs, add prev level which doesn't have any nulls to the result",
    difficulty: "Medium",
  },
  {
    name: "Serialize and Deserialize Binary Tree",
    category: "Tree",
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    videoSolution: "https://youtu.be/u4JAi2JJhI8",
    textSolution:
      "bfs every single non-null node is added to string, and it's children are added too, even if they're null, deserialize by adding each non-null node to queue, deque node, it's children are next two nodes in string",
    difficulty: "Hard",
  },
  {
    name: "Subtree of Another Tree",
    category: "Tree",
    link: "https://leetcode.com/problems/subtree-of-another-tree/",
    videoSolution: "https://youtu.be/E36O5SWp-LE",
    textSolution:
      "traverse s to check if any subtree in s equals t; merkle hashing?",
    difficulty: "Easy",
  },
  {
    name: "Construct Binary Tree from Preorder and Inorder Traversal",
    category: "Tree",
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    videoSolution: "https://youtu.be/ihj4IQGZ2zc",
    textSolution:
      "first element in pre-order is root, elements left of root in in-order are left subtree, right of root are right subtree, recursively build subtrees",
    difficulty: "Medium",
  },
  {
    name: "Validate Binary Search Tree",
    category: "Tree",
    link: "https://leetcode.com/problems/validate-binary-search-tree/",
    videoSolution: "https://youtu.be/s6ATEkipzow",
    textSolution:
      'trick is use built in python min/max values float("inf"), "-inf", as parameters; iterative in-order traversal, check each val is greater than prev;',
    difficulty: "Medium",
  },
  {
    name: "Kth Smallest Element in a BST",
    category: "Tree",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    videoSolution: "https://youtu.be/5LUXSvjmGCw",
    textSolution:
      "non-optimal store tree in sorted array; iterative dfs in-order and return the kth element processed, go left until null, pop, go right once",
    difficulty: "Medium",
  },
  {
    name: "Lowest Common Ancestor of BST",
    category: "Tree",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    videoSolution: "https://youtu.be/gs2LMfuOR9k",
    textSolution:
      "compare p, q values to curr node, base case: one is in left, other in right subtree, then curr is lca",
    difficulty: "Easy",
  },
  {
    name: "Implement Trie (Prefix Tree)",
    category: "Tree",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    videoSolution: "https://youtu.be/oobqoCJlHA0",
    textSolution:
      "node has children characters, and bool if its an ending character, node DOESN’T have or need char, since root node doesn’t have a char, only children",
    difficulty: "Medium",
  },
  {
    name: "Add and Search Word",
    category: "Tree",
    link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
    videoSolution: "https://youtu.be/BTf05gs_8iU",
    textSolution:
      'if char = "." run search for remaining portion of word on all of curr nodes children;',
    difficulty: "Medium",
  },
  {
    name: "Word Search II",
    category: "Tree",
    link: "https://leetcode.com/problems/word-search-ii/",
    videoSolution: "https://youtu.be/asbcE9mZz_U",
    textSolution:
      "trick: I though use trie to store the grid, reverse thinking, instead store dictionary words, dfs on each cell, check if cell's char exists as child of root node in trie, if it does, update currNode, and check neighbors, a word could exist multiple times in grid, so don’t add duplicates",
    difficulty: "Hard",
  },
  {
    name: "Merge K Sorted Lists",
    category: "Heap",
    link: "https://leetcode.com/problems/merge-k-sorted-lists/",
    videoSolution: "https://youtu.be/q5a5OiGbT6Q",
    textSolution:
      "we always want the min of the current frontier, we can store frontier in heap of size k for efficient pop/push; divide and conquer merging lists",
    difficulty: "Hard",
  },
  {
    name: "Top K Frequent Elements",
    category: "Heap",
    link: "https://leetcode.com/problems/top-k-frequent-elements/",
    videoSolution: "https://youtu.be/YPTqKIgVk-k",
    textSolution:
      "minheap that’s kept at size k, if its bigger than k pop the min, by the end it should be left with k largest",
    difficulty: "Medium",
  },
  {
    name: "Find Median from Data Stream",
    category: "Heap",
    link: "https://leetcode.com/problems/find-median-from-data-stream/",
    videoSolution: "https://youtu.be/itmhHWaHupI",
    textSolution:
      "maintain curr median, and all num greater than med in a minHeap, and all num less than med in a maxHeap, after every insertion update median depending on odd/even num of elements",
    difficulty: "Hard",
  },
];

const seedDB = async () => {
  await Algorithm.deleteMany({});
  await Algorithm.insertMany(seedAlgos);
};

seedDB().then(() => {
  mongoose.connection.close();
})