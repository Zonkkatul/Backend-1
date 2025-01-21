// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = () :void => {
    const countElement = document.getElementById('count')!;
    countElement.textContent = count.toString();
};

// Increment the count
const increment = () => {
    count += 1;
    updateCountDisplay();
};

// Decrement the count
const decrement = ():void => {
    count -= 1;
    updateCountDisplay();
};

// Reset the count
const reset = ():void => {
    count  = 0;
    updateCountDisplay();
};

// Attach event listeners to buttons
document.getElementById('increment-button')!.onclick = increment; //trust me i am an engineer (not at all) :P -!
document.getElementById('decrement-button')!.onclick = decrement;
document.getElementById('reset-button')!.onclick = reset;


//question: is it safe to use "!" all the time? I am sure the element exists in DOM file, but is it practical or safe way to use it? i found it tempting :()
