
// window.onload = function () {
  /*

    var input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]; // Height of walls
    var output = [3, 8, 11]; // Most water trapped between 2 walls  

    // width is 10 default
    // height is 10 default

    // 
    // block form default
    
*/

var input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]; // Height of walls
var output = [3, 8, 11]; // Most water trapped between 2 walls  

var findWater = (walls) => {
  var startingWallDetails = [walls[0], 0];
  var results = [];
  var waterBounds = [-1, -1]
  while (startingWallDetails[1] + 1 < walls.length) {
    var startingWallHeight = startingWallDetails[0];
    var startingWallIndex = startingWallDetails[1]

    for (let i = startingWallIndex + 2; i < walls.length; i++) {
      var currWallHeight = walls[i];
      if (currWallHeight >= startingWallHeight) {
        waterBounds = [startingWallIndex, i];
        break;
      } else if (currWallHeight > walls[i - 1] && (waterBounds[1] === -1 || currWallHeight > walls[waterBounds[1]])) {
        waterBounds = [startingWallIndex, i];
      } 
    }

    waterBounds.push(Math.min(walls[waterBounds[0]], walls[waterBounds[1]]));
    startingWallDetails = [walls[waterBounds[1]], waterBounds[1]];
    results.push(waterBounds);
    waterBounds = [waterBounds[1], -1];
  }
  return results;

};
