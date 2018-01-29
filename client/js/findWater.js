
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

    console.log('Starting wall height:', startingWallHeight, 'starting index:', startingWallIndex);
    for (let i = startingWallIndex + 2; i < walls.length; i++) {
      var currWallHeight = walls[i];
      console.log('CurrWallHeight', currWallHeight, 'i', i);
      if (currWallHeight >= startingWallHeight) {
        console.log('Second wall much larger!');
        waterBounds = [startingWallIndex, i];
        // debugger;
        break;
      } else if (currWallHeight > walls[i - 1] && (waterBounds[1] === -1 || currWallHeight > walls[waterBounds[1]])) {
        console.log('This wall higher than prev AND higher than the last one I remember!');
        waterBounds = [startingWallIndex, i];
      } 
      // debugger;
    }

    console.log('Found opposite wall. Waterboudns currently', waterBounds);
    waterBounds.push(Math.min(walls[waterBounds[0]], walls[waterBounds[1]]));
    startingWallDetails = [walls[waterBounds[1]], waterBounds[1]];
    results.push(waterBounds);
    waterBounds = [waterBounds[1], -1];
    console.log('WaterBounds', waterBounds, 'Setting starting wall to', startingWallDetails);
  }
  console.log('RETURNING THIS:', results);
  return results;

};
