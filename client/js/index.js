var input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]; // Height of walls
var output = [3, 8, 11]; // Most water trapped between 2 walls  
var rows = new Array(10);

const executePage = () => {
  console.log('Window loaded starting script');
  var $app = $('#app');
  var $form = $('#form');
  var $input = $('#form > input[type="text"');

  $form.on('submit', function(e){
    var value = $input.val();
    e.preventDefault();

    console.log('Value:', input);

    if (value) {
      $.ajax('/findMaxWalls', {
        data: {
          body: value
        },
        contentType: 'application/json'
      });
    }
    console.log('Input now', input);

    changeBoard();
  });

  const populateColumn = (wallHeight, waterHeight, colIndex) => {
    for (let i = rows.length - 1; i >= 0; i--) {
      if (wallHeight) {
        if ((colIndex === output[0] - 1) || (colIndex === output[1] - 1)) {
          rows[i].append(makeBox('black'));
        } else {
          rows[i].append(makeBox('grey'));
        }
        wallHeight--;
      } else if (waterHeight) {
        waterHeight--;
        rows[i].append(makeBox('blue'));
      } else {
        rows[i].append(makeBox('white'));
      }
    } 

  };

  const isInRange = (x, y, input) => {
    return (input > x && input < y) || (input < x && input > y);
  }

  const makeBox = (input) => {
    switch (input) {
      case 'black':
        return $('<div class="box black"></div>')

      case 'blue':
        return $('<div class="box blue"></div>')

      case 'grey':
        return $('<div class="box grey"></div>')

      case 'white':
        return $('<div class="box white"></div>')

      default: 
        return $('<div class="box">' + input + '</div>')
    }
  };

  /*
 -------------
  BOARD POPULATION
  -----------
  Create 10 rows (nothing in them atm, store them in array)
  Intially push in boxes of 1 - 10 into these rows in-order
  For each number in input, 
    if number is NOT in output 0th or 1th
      push in grey boxes up that number
    else input is max walls
      push in black boxes up to number
    fill in rest w/ whiteboxes


  // render walls (given input + output)
    // 
  */
  function changeBoard () {
    console.log('Changeboard loadded');
    rows = new Array(10);

    for (let i = 0; i < rows.length; i++) {
      rows[i] = $('<div class="row"><div/>');
    }

    var count = 1;

    for (let i = rows.length - 1; i >= 0; i--) {
      rows[i].append(makeBox(count));
      count++;
    } 

    for (let j = 0; j < input.length; j++) {
      let wallHeight = input[j];
      let waterHeight = 0;
      let waterBounds = findWater(input);

      for (let i = 0; i < waterBounds.length; i++) {
        let waterBound = waterBounds[i];

        if (isInRange(waterBound[0], waterBound[1], j)) {
          waterHeight = waterBound[2] - wallHeight;
          break;
        }
      }

      populateColumn(wallHeight, waterHeight, j);
    }
  


    console.log('Rows', rows);
    $app.html(rows);
  }
  
};

$(document).ready(function () {
  executePage();
});