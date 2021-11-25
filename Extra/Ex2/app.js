//          function rot13()
// {
//     var userinput=document.getElementById('userinput').value;
//     // userinput=userinput.textContent;
//     let arr=[];
//     var text='';
//     var checknum,maintain;
//     alert(userinput);
//     for(var i=0;i<userinput.length;i++)
//     {
//         //alert(userinput.charCodeAt(i));
//         if(userinput.charCodeAt(i)>=0 && userinput.charCodeAt(i)<=64)
//         {
//             arr.push(userinput.charCodeAt(i));
//             //alert(arr);
//         }
//         if(userinput.charCodeAt(i)>=65 && userinput.charCodeAt(i)<=90)
//         {
//             // arr.push(userinput.charCodeAt(i)+13);
//             checknum=(userinput.charCodeAt(i)+13);
//             if(checknum>90)
//             {
//                 maintain=checknum-90+64;
//                 //alert(maintain);
//                 arr.push(maintain);
//             }
//             else
//             {
//                 arr.push(userinput.charCodeAt(i)+13);
//             }
            
//         }
//         if(userinput.charCodeAt(i)>=97 && userinput.charCodeAt(i)<=122)
//         {
//             // arr.push(userinput.charCodeAt(i)+13);
//             checknum=(userinput.charCodeAt(i)+13);
//             if(checknum>122)
//             {
//                 maintain=checknum-122+96;
//                 //alert(maintain);
//                 arr.push(maintain);
//             }
//             else
//             {
//                 arr.push(userinput.charCodeAt(i)+13);
//             }
//         }
//     }
//     for(i=0;i<arr.length;i++)
//     {
//         text+=String.fromCharCode(arr[i]);
//     }
//     console.log(text);
// }  






const rot13 = (message) => {
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
  }

  console.log(rot13(ABC));