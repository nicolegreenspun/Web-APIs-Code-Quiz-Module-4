// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
// $('#top').children().css('color', 'yellow');
console.log('UL', $('#top').children('ul'));

console.log('lis', $('#top').children('ul').children());

// Uncomment the following line to see the which element is the first direct child of the <main>
$('#top').children().eq(3).addClass('boxy');

// Uncomment the following line to add a list item to the list
$('#top').children().eq(4).append($('<li>Classmates</li>'));
$('#top').children().eq(4).append($('<li>Teachers</li>'));

console.log('lis', $('#top').children('ul').children());


// Uncomment the following line to style the list items
$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');
