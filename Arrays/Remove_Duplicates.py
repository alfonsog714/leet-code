class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        s = set(nums)
        l = list(s)
        l.sort()
        nums.clear()
        for n in l:
            nums.append(n)
