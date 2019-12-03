"""
    Problem:
        Suppose there is a circle. There are  petrol pumps on that circle. Petrol pumps are numbered  to  (both inclusive). You have two pieces of information corresponding to each of the petrol pump: (1) the amount of petrol that particular petrol pump will give, and (2) the distance from that petrol pump to the next petrol pump.

        Initially, you have a tank of infinite capacity carrying no petrol. You can start the tour at any of the petrol pumps. Calculate the first point from where the truck will be able to complete the circle. Consider that the truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.

    Input:
        Pair of integers each, i.e. the amount of petrol that petrol pump will give and the distance between that petrol pump and the next petrol pump.

    Output:
        An integer which will be the smallest index of the petrol pump from which we can start the tour.
"""


def truckTour(petrolpumps):
    # start at a pump with the most fuel

    # check how much gas is left after traveling to the next pump
    # at the current pump, keep track of gas - distance
    # if we see that we have a negative amount of gas left,
    # that means this pump is not valid
    pass
