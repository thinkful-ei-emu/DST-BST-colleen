const BinarySearchTree = require("./BST");

/*  3 1 4 6 9 2 5 7 


                3
              /   \
            1      4
             \       \
              2        6
             1000     /  \
                      5   9
                           \
                            7 */
/* 
  EASYQUESTION

                E
              /    \
            A        S
             \     /   \
              E   Q      Y
                 /  \   /
                I    S  U
                \       /
                O      T
               /
              N     */

//2.
/*  3 1 4 6 9 2 5 7 


                
                 
                   4
                 /    \
              1         6
               \       /  \
               2       5   9
                     \
                            7 */
/* 
  EASYQUESTION

                I
              /    \
            A        S
             \     /   \
              E   Q      Y
                 /  \   /
                O    S  U
               /        /
              N        T
               
                   */

//3. check the trees
function main() {
  let BST = new BinarySearchTree();

  let arr = [3, 1, 4, 6, 9, 2, 5, 7];

  for (let i = 0; i < arr.length; i++) {
    BST.insert(arr[i], arr[i]);
  }
  return BST;
}

let BSTnum = main();
/* 
let BSTword = new BinarySearchTree()

let str = 'easyquestion'

for(let i=0; i < str.length; i++){
  BSTword.insert(str[i])
}

console.log(BSTword) */

/* 4. what does this function do? 
takes in tree as parameter=if there is no tree return 0
which means its adding things...it will scan down the tree and run the function again on the left branch and the right-and will grab the value = so it's summing up all the values of the branches of the tree -because it's scanning the full length of the tree for each node, run time is O(n)*/
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
tree(BSTnum);
//5. write an algorithm to find the height of a search tree

function treeHeight(t) {
  //need to scan down both sides to find the longest/furthest away point and add to a counter for L and R, whichever counter is bigger gives the height.
  if (t.left) {
    treeHeight(t.left, count++);

    if (t.right) {
      treeHeight(t.right, count++);
    }
    if (t.left == null && t.right == null) {
      return count;
    }
  }
}

function height(t) {
  if (t.left && t.right) {
    let left = height(t.left) + 1;
    let right = height(t.right) + 1;
    if (right > left) {
      return right;
    }
    return left;
  }
  if (t.left) {
    return height(t.left) + 1;
  }
  if (t.right) {
    return height(t.right) + 1;
  }
  return 1;
}
let newTree = new BinarySearchTree(3);
newTree.insert(2);
newTree.insert(5);
newTree.insert(7);
newTree.insert(6);
//console.log(height(BSTnum))
//console.log(BSTnum)
//treeHeight(BSTnum)
//6. write an algorithm to check whether a binary tree is a binary search tree
//console.log(BSTnum.left.right.right)
/* function isItABST(t) {
  let answer = true;
  //need to check the left and right children to the root to see if they're greater or less than the root and keep checking for the length of the tree==if there is any break in this rule it isn't a BST--recursion
  if (t.left && t.right) {
    isItABST(t.left);
    isItABST(t.right);
  } else if (t.left) {
    let thing = t.left;
    if (thing.value > t.value) {
      answer = false;
    }
    isItABST(t.left);
  } else if (t.right) {
    let otherThing = t.right;
    if (otherThing.value < t.value) {
      answer = false;
    }
    isItABST(t.right);
  }
  return answer;
} */
//console.log(isItABST(BSTnum))
//7. third largest node in BST
BSTnum.left.right.right = 1000;
//console.log(isItABST(BSTnum))

function valid(t, x, y) {
  console.log(t.key, x)
  if(t.key>x || t.key < y){
    return false
  }
  
  if (t.left) {
    if(!valid(t.left, t.key, y)){
      return false
    }
  
  }
  if (t.right) {
    if(!valid(t.right, x, t.key)){
      return false
    }
  
  }

  return true;
}

let Tree = { 
  key: 5,
  left: {
    key: 1
  },
  right: {
    key: 0,
    right: {
      key: 7
   } }
   
  
  };

console.log(valid(Tree));
function thirdLargestNode(t) {}

//8. check if BST is balanced(tree where no 2 leaves differ in distance from root by more than 1)

/* You are given two arrays which represent two sequences of keys that are used to create two binary search trees. Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true. */

let sortedArr = [3, 5, 7, 9, 11, 13, 15];

function createBST(sorted) {
  let middle = Math.floor(sorted.length / 2);
  let median = 0;
  if (sorted.length % 2) {
    median = sorted[middle];
  } else {
    median = (sorted[middle - 1] + values[middle]) / 2.0;
  }
  let index = sorted.indexOf(sorted.find(num => num === median));
  sorted.splice(index, 1);
  arrayToLoop = sorted.insert(0, median);

  let BST = new BinarySearchTree();
  for (let i = 0; i < arrayToLoop.length; i++) {
    BST.insert(arrayToLoop[i]);
  }
  console.log(BST);
}

//createBST(sortedArr)
