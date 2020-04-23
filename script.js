let name = 'Betti';

console.log(name + "'s apples")
console.log('Hello Word!')

$('h1').text('We are having')
$('p').html('miafsss Likes:<strong>13</strong>')

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');

let color ='blue'

$('h2').toggleClass('pcolor');

$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li id="special-list-item">My removable name is ' + name + '</li>');

 $('#special-list-item').remove();

 let addButtonHandler = ()=> {
     if($('li').length < 5){
    $('ul').append('<li>My name is ' + name + '</li>');
   }
 };

 function addButtonHandler2(){
     if($('li').length <5) {
         $('ul').append('<li>My name is ' + name +'</li>');
     }
 };

 $('#add-button').click(addButtonHandler);
 $('#remove-button').click(()=> {
    $('li:last-child').remove();    
 })

 let age = 27;

 console.log('Starting the if')

 if(age >= 18){
   console.log('Not old enough to drink')
 } else{
   console. log('Old enough to drink')
 }
 console.log('this is after the if')


 let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];


$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);


// LOOP DOLOG

colors.push('purple', 'black');

colors.forEach((color)=> {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

// for loopra példa
for(let i = 0; i < 50; i++){ 
    console.log(i);
}


// This is a JavaScript comment

/*
This is a multiline
JavaScript comment...
*/ 