const median = findMedianSortedArrays([], [2, 3]);
console.log(median);

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const combinedArraySize = nums1.length + nums2.length;
  const partitionSize = Math.floor(combinedArraySize / 2);
  const { smallerArr, largerArr } = getSmallerAndLargerArrays(nums1, nums2);
  let left = 0,
    right = smallerArr.length - 1;
  while (true) {
    const mid = Math.floor((right - left) / 2) + left;
    let numberOfItemsFromSmallerArrInFirstPartition,
      lastItemFromSmallArrInFirstPartition,
      firstItemFromSmallArrInSecondPartition;

    if (mid < 0) {
      // smaller array not in first partition
      numberOfItemsFromSmallerArrInFirstPartition = 0;
      lastItemFromSmallArrInFirstPartition = -Infinity;
      firstItemFromSmallArrInSecondPartition = smallerArr[0] ?? Infinity;
    } else if (mid >= smallerArr.length - 1) {
      // entire smaller array in first partition
      numberOfItemsFromSmallerArrInFirstPartition = smallerArr.length;
      lastItemFromSmallArrInFirstPartition = smallerArr[smallerArr.length - 1];
      firstItemFromSmallArrInSecondPartition = Infinity;
    } else {
      numberOfItemsFromSmallerArrInFirstPartition = mid + 1;
      lastItemFromSmallArrInFirstPartition = smallerArr[numberOfItemsFromSmallerArrInFirstPartition - 1] ?? -Infinity;
      firstItemFromSmallArrInSecondPartition = smallerArr[numberOfItemsFromSmallerArrInFirstPartition];
    }

    const numberOfItemsFromLargerArrInFirstPartition = partitionSize - numberOfItemsFromSmallerArrInFirstPartition;
    const lastItemFromLargeArrInFirstPartition =
      numberOfItemsFromLargerArrInFirstPartition > 0
        ? largerArr[numberOfItemsFromLargerArrInFirstPartition - 1]
        : -Infinity;
    const firstItemFromLargeArrInSecondPartition =
      numberOfItemsFromLargerArrInFirstPartition < largerArr.length
        ? largerArr[numberOfItemsFromLargerArrInFirstPartition]
        : Infinity;

    if (lastItemFromLargeArrInFirstPartition > firstItemFromSmallArrInSecondPartition) {
      left = mid + 1;
    } else if (lastItemFromSmallArrInFirstPartition > firstItemFromLargeArrInSecondPartition) {
      right = mid - 1;
    } else {
      if (combinedArraySize % 2 === 0) {
        const lastItemInFirstPartition = Math.max(
          lastItemFromSmallArrInFirstPartition,
          lastItemFromLargeArrInFirstPartition
        );

        const firstItemInSecondPartition = Math.min(
          firstItemFromSmallArrInSecondPartition,
          firstItemFromLargeArrInSecondPartition
        );

        return (lastItemInFirstPartition + firstItemInSecondPartition) / 2;
      } else {
        return Math.min(firstItemFromSmallArrInSecondPartition, firstItemFromLargeArrInSecondPartition);
      }
    }
  }
}

function getSmallerAndLargerArrays(nums1: number[], nums2: number[]) {
  let smallerArr, largerArr;
  if (nums1.length < nums2.length) {
    smallerArr = nums1;
    largerArr = nums2;
  } else {
    smallerArr = nums2;
    largerArr = nums1;
  }

  return { smallerArr, largerArr };
}
