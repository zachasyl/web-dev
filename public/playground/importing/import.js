


function myFunction() {
  document.getElementById("demo").innerHTML = addEs6(5, 5);
}

//note myfunction is legacy e5 and const addes6 is e6


const addEs6 = (a, b) => {
 console.log(a + b);
 return a + b;
};

//javascript e6 no jquery
const p = () => {
 console.log('hello');
 document.getElementById("demo").innerHTML = "hello";
 return 'hello';
};


//this is instead of document.write document. etc
const init = () => {
    console.log('hello jquery');
}
$(init);

// using jquery instead of document.getelementbyid
// changing it with .css is a lot easier then using plain javascript to
//change its style. and we forget about browser type version .ccs consistent
// across all versions.

const bye = () => {
const bindById = $('#demo');
bindById.html("goodbye");
bindById.css('background-color', 'yellow')
}

//can even do thinks like getting a element by ID
//in a const setclassatt and then
//csetclassattr.attr('class, "class-0')
//to give a it a class
// can add more classes with .addclass or .removeclass