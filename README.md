# WATERWALLS w/ FRONTEND
### This repo is clone of waterwalls problem BUT w/ front-end!

## Rationale behind second repo
> Distinct repo w/ front-end and w/o from each other!

# Problem Overview
>  Imagine there are a series of walls of differing heights. Just walls protruded out of the ground. Now imagine that it rained
> There would be water trapped in between said walls. There's a main function that takes in an array of wall heights and returns an array with the details of the walls capturing the greatest amt of water AND the amt of water captured. 
> That logic is in the backend. Now what does the front-end do? Well the front-end takes in a set of comma seperated digits that will represent the height of the walls
> That info will be parsed and sent through the main function named earlier, and will result in the output (info abt walls that caputure max water) (server response)
> The output will be sent back to the client which will display the water walls AND color the walls that hold the max water BLACK(server response!)

[image]: https://i.imgur.com/ZQOCbpu.png

# Installation instructins
1. Fork + clone this repo
2. Run the following
> npm i;

## Plan of Attack
[x] Complete setup notes (est. 30m)

[x] Complete Javascript implementation (est. 15)

[ ] Implement front-end (mock out initil wall data, mock out max wall-data, front-end will display walls w/ max walls blacked out!)

[ ] Implement server, add routes, import center-piece logic, add dependencies, scope out routes (route purpose: will take client input, go thru main function, respond w/ max walls!)

[ ] Implement tests w/ Jest  (est. 20)

---

> Estimated: Total time to completion: 1hr 5m

# CORE LOGIC SETUP


var input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]; // Height of walls
var output = [3, 8, 11]; // Most water trapped between 2 walls
/*

// Strategy
// check the water area between walls from 1 ---> n, and starting from 1 --> n
    // whichever has the most return an array in this format [(index wall 1) + 1, (index wall 2) + 1, area of water]

// Transformation
// given input
// result = [];
// i: 0, 
  // j: 0
  // 5, 5
    // distnace: 0
    // difference: 0, result not updated
  // j: 1
  // 5, 7
    // distance: 1
    // lowes: 5, distance not enough, result not updated
  // ...
  // j: 9
  // 5, 2 (last 2)
    // distance: 9 (space in between is 8)
    // lowest: 2
    // maxBetweenArea = 0 (b/c there's blockages)
// i: 2
  // j: 2
  // 7, 7
    // distance: 7
    // maxBetween Area 0
  // 7, 2
  // 7, 6
    // j: 4
    // distance: 1
    // maxBetweenArea: 4
    // if maxBetweenArea > maxArea
      // maxArea = maxBetweenArea
      // result = [i, j, maxBetweenArea]

// if found a after greater than or equal,
  // only need to calculate area in between
// if found a less than
  // calc maxArea and replace as necesary
    // keep trying walls after

// Notes: need to have at least 3 walls to trap water
const findMaxWaterBetweenWalls = (walls) => {
  const findWaterBetweenWalls = (x, y, walls) => {
    // HELPER
      // returns # units water between walls
        // if there's a disruption, return 0 (invalid inputs!)

      // pseudo
      // find min of x and y wall
      // find uncut area (min * distance)
      // check all wall from x --> y
        // if any greater than min
          // return 0 (invalid inputs!)
      // subtract distance between x and y from uncut area
        // return result
  };

  // constraints:
    // none

  // maxWater = 0;
  // result = []
  // for i in walls
    // for j in walls
      // find water between i and j walls
      // if water between > maxWater
        // set to maxWater
        // update result (1: indexed!)

};

