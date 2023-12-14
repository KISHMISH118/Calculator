document .addEventListener('DOMContentLoaded', function () (

     document.addEventListener('click', clickEvent);


    const char = {
         '_seven':'7',
         '_six':'6',
         '_five':'5',
         '_four':'4',
         '_three':'3',
         '_two':'2',
         '_one':'1',
         '_zero':'0',
         '_eght':'8',
         '_nine':'9',
         '_plus':'+',
         '_minus':'-',
         '_multiply':'*',
         '_division':'/',
  
  
  
        
    }
  
    function clickEvent(event)  {
        if (event.target.closest('.key_digit')) {
            let digitKey = event.target.closest('.key_digit').classList;
            let digitKeyChar = digitKey[digitKey.length - 1];

            let resChar = char[digitKeyChar];

            console.log(resChar);
        }


    }



));