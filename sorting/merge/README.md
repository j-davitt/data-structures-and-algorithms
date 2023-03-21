# Blog Notes: Merge Sort

The mergeSort function takes an array as input and sorts it in ascending order using the merge sort algorithm. It does this recursively by dividing the input array into smaller subarrays until each subarray contains only one element (i.e., it is already sorted). It then merges adjacent pairs of subarrays together to produce larger sorted subarrays, and repeats this process until the entire input array is sorted.

The function first checks if the input array has more than one element, since an array with only one element is already sorted. If the input array has more than one element, it calculates the midpoint of the array and uses the slice method to create two new arrays, left and right, which contain the elements to the left and right of the midpoint, respectively. It then recursively calls mergeSort on each of these subarrays to sort them.

Once the subarrays have been sorted, the merge function is called to merge them together. The merge function takes the sorted left and right subarrays, as well as the original input arr, and merges the two subarrays into a single sorted array.

The merge function uses a while loop to compare the elements in left and right and add them to arr in sorted order. If the left and right arrays have equal elements, the if statement inside the while loop will add the element from left to arr and increment the index i. Otherwise, it will add the element from right to arr and increment the index j. Finally, it increments the index k to move to the next position in arr.

Once the while loop has finished, the function checks if there are any remaining elements in either the left or right arrays. If there are, it adds them to arr in the correct order using a second if statement.
