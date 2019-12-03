"""
 Problem:
        Given two arrays, write a function to compute their intersection.
    
    Example 1:
        Input: nums1 = [1,2,2,1], nums2 = [2,2]
        Output: [2,2]

    Example 2:
        Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        Output: [4,9]

    Note:

        Each element in the result should appear as many times as it shows in both arrays.
        The result can be in any order.

    Follow up:

        What if the given array is already sorted? How would you optimize your algorithm?
        What if nums1's size is small compared to nums2's size? Which algorithm is better?
        What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
"""


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        intersect_list = []
        counter = 0

        while counter < len(nums1) + 1:
            x_num = nums1[counter]
            y_num = nums2[counter]
            x_next = nums1[counter + 1]
            y_next = nums2[counter + 1]

            if x_num == y_num and x_next == y_next:
                intersect_list.append(x_num)
                intersect_list.append(x_next)
                counter += 2
            else:
                counter += 1

        print(intersect_list)

        # for x in range(len(nums1)):
        #     x_num = nums1[x]
        #     x_next = nums1[x + 1]
        #     for y in range(len(nums2)):
        #         y_num = nums2[y]
        #         y_next = nums2[y + 1]
        #         if x_num == y_num and x_next == y_next:
        #             intersect_list.append(x_num)
