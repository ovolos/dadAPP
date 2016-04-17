
   // function that handles the current time
    function startTime(){
     // creating an instance of the date object
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds(); 
        //returning an array contaning the current hours minutes and seconds
  return [ h, m, s ].join(':')
}
 //function that handles the current date    
    function startDate() {
     // creating an instance of the date object
  var today = new Date();
  var day =today.getUTCDate();
  var month =today.getUTCMonth();
  var year =today.getFullYear();
        //the getMonth function return from 0-11
        //adding 1 so it can be an accurate month for the user
        switch(month)
            {
                case 0: month= month+1;
                    break;
                case 1: month= month+1;
                    break;
                case 2: month= month+1;
                    break;
                case 3: month= month+1;
                    break;
                case 4: month= month+1;
                    break;
                case 5: month= month+1;
                    break;
                case 6: month= month+1;
                    break;
                case 7: month= month+1;
                    break;
                case 8: month= month+1;
                    break;
                case 9: month= month+1;
                    break;
                case 10: month= month+1;
                    break;
                case 11: month= month+1;
                    break;    
            }
        // returning the date month and year
  return [  month, day, year ].join('/')
    }
    function display() {
        //displays in correct date format MM/DD/YYYY _ hh:mm:ss
        var string= startDate() +" "+ startTime();
        alert(string);
    }

