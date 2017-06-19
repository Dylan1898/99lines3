
// /* TWO FOR LOOPS*/

 var friends = ['Brock','Charlie','Cody','Ronnie','Matthew'] ;

 



// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement('div');
//     element.className = 'friend';
//     document.body.appendChild(element);
// });
document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('button');
    button.addEventListener("click", function () {

        for (x = 0; x < friends.length; x++) {
            var element = document.createElement('div');
            element.className = 'friend';
            document.body.appendChild(element);
            var p = document.createElement('h3');
            p.innerText = friends[x];
            element.appendChild(p);
            document.body.appendChild(element);

            var sing = document.createElement('BUTTON');
             button.innerHTML = 'Sing!';
            element.appendChild(sing);
            document.body.appendChild(element);

            for (i = 99; i > 2; i--) {
                var z = document.createElement('p');
                z.innerText = [i] + ' lines of code in the file, ' + [i] + ' lines of code; ' + friends[x] + ' strikes one out, clears it all out, ' + [i - 1] + ' lines of code in the file,';
                element.appendChild(z);
                document.body.appendChild(element);
            }

            var z = document.createElement('p');
            z.innerText = '2 lines of code in the file, 2 lines of code; ' + friends[x] + ' strikes one out, clears it all out, 1 line of code in the file,'
            element.appendChild(z);
            document.body.appendChild(element);
            var u = document.createElement('p');
            u.innerText = '1 line of code in the file, 1 line of code; ' + friends[x] + ' strikes one out, clears it all out, no more lines  of code in the file.'
            element.appendChild(u);
            document.body.appendChild(element);
        }
    })
 }); 

// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement('div');
//     element.className = 'friend';
//     document.body.appendChild(element);

//     var x = document.createElement('h3');
//     x.innerText = 'Brock';
//     element.appendChild(x);
//     document.body.appendChild(element);
// // })

// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement('div');
//     element.className = 'friend';
//     document.body.appendChild(element);

//     var x = document.createElement('h3');
//     x.innerText = 'Charlie';
//     element.appendChild(x);
//     document.body.appendChild(element);
// })
// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement('div');
//     element.className = 'friend';
//     document.body.appendChild(element);

//     var x = document.createElement('h3');
//     x.innerText = 'Cody';
//     element.appendChild(x);
//     document.body.appendChild(element);
// })
// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement('div');
//     element.className = 'friend';
//     document.body.appendChild(element);

//     var x = document.createElement('h3');
//     x.innerText = 'Ronnie';
//     element.appendChild(x);
//     document.body.appendChild(element);
// })

// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement('div');
//     element.className = 'friend';
//     document.body.appendChild(element);

//     var x = document.createElement('h3');
//     x.innerText = 'Matthew';
//     element.appendChild(x);
//     document.body.appendChild(element);
// })


















 
/*ONE FOR LOOP*/

// var a= { person: 'Brock'}
// var b= {person: 'Charlie'}
// var c= {person: 'Cody'}
// var d = {person:'Ronnie'}
// var e = {person:'Matthew'}


//  function again(){
//     console.log(this.person)
//     for (var i = 99 ; i > 2; i--) {
    
//         console.log( [i]  + ' lines of code in the file,' +  [i] +  ' lines of code;' + ' ' + this.person + ' strikes one out, clears it all out,' + ' ' + [i-1] + ' ' + 'lines of code in the file'  );       
// }
// console.log(2 + ' ' + 'lines of code in the file,' + ' ' + 2 + ' ' + 'lines of code;' + ' ' + this.person + ' ' + 'strikes one out, clears it all out, 1 line of code in the file')
// console.log([1] + ' ' + ' line of code in the file,' + [1] + ' line of code;' + ' ' + this.person + ' strikes one out, clears it all out, no more lines of code in the file.');
// };
// again.call(a)
// again.call(b)
// again.call(c)
// again.call(d)
// again.call(e)

/*FAILED ATTEMPTS*/



// function again(){
//     for (var i = 99 ; i > 1; i--) {
//     x=0, 
//         console.log( [i]  + ' lines of code in the file,' +  [i] +  ' lines of code;' + ' ' + friends[x] + ' strikes one out, clears it all out,' + ' ' + [i-1] + ' ' + 'lines of code in the file'  );       
// }
// console.log([1] + ' ' + ' line of code in the file,' + [1] + ' line of code;' + ' ' + friends[x] + ' strikes one out, clears it all out, no more lines of code in the file.');
// }
// again(); 
// again();
// again();
// again();
// again();    


// for(i=99; i>2; i-- ){{
// {console.log('lines lines  stuff' + i + " sdfasdfsadfasdf" + friends[0])};
// {console.log('lines lines  stuff' + i + " sdfasdfsadfasdf" + friends[1])};
// {console.log('lines lines  stuff' + i + " sdfasdfsadfasdf" + friends[2])};
// {console.log('lines lines  stuff' + i + " sdfasdfsadfasdf" + friends[3])};
// {console.log('lines lines  stuff' + i + " sdfasdfsadfasdf" + friends[4])};
// }}


// var i =100;
// var x = 0;
// while( i>1){
//      x;friends.length;i--,x++
//      console.log( [i]  + ' lines of code in the file,' +  [i] +  ' lines of code;' + ' ' + friends[x] + ' strikes one out, clears it all out,' + ' ' + [i-1] + ' ' + 'lines of code in the file'  );
// }
// console.log([1] + ' ' + ' line of code in the file,' + [1] + ' line of code;' + ' ' + friends[x] + ' strikes one out, clears it all out, no more lines of code in the file.');
