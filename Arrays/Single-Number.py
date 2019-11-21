class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if len(nums) < 1:
            return "Array is empty."

        new_list = []

        for x in range(len(nums)):
            if nums[x] not in new_list:
                new_list.append(nums[x])
            else:
                new_list.remove(nums[x])
        print(new_list)
        return new_list.pop()
