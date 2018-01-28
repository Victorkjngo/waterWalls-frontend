const findMaxWaterBetweenWalls = (walls) => {
  const findWaterBetweenWalls = (x, y, walls) => {
    
    var minHeight = Math.min(walls[x], walls[y]);
    var distance = Math.abs(y - x) - 1;

    var uncutArea = distance * minHeight;
    for (let i = x + 1; i < y; i++) {
      let currWallHeight = walls[i];
      if (currWallHeight >= minHeight) {
        return 0;
      }
    }
      
    for (let i = x + 1; i < y; i++) {
      let currWallHeight = walls[i];
      uncutArea -= currWallHeight;
    }

    return uncutArea;
  };

  
  // constraints:
    // none

  var  result = [-1, -1 , 0]
  for (let i = 0; i < walls.length; i++) {
    for (let j = i; j < walls.length; j++) {
      var waterBetween = findWaterBetweenWalls(i, j, walls);
      console.log(`Wall ${i}: ${walls[i]}, and wall ${j}: ${walls[j]}, with ${waterBetween} water between!`);
      if (waterBetween > result[2]) {
        result = [i + 1, j + 1, waterBetween];
      }

    }
  }
    
  return result;
};

console.log(findMaxWaterBetweenWalls(input));

module.exports = findMaxWaterBetweenWalls;