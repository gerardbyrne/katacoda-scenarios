// Here we will create an empty array which will be used to hold
// all the insured items entered into the form by the user

var allItemsBeingStoredInVault = [];

function doAdd() {

    // Read the form element which has an id of itemdescription and
    // get its value. In this case it will be the value entered into 
    // the text box by the user. 
    // We assign this value to the variable called itemdescription.
    var itemdescription = document.getElementById("itemdescription").value;

    // Read the form element which has an id of serialnumber and
    // get its value. In this case it will be the value entered into 
    // the text box by the user. 
    // We assign this value to the variable called itemserialnumber.
    var itemserialnumber = document.getElementById("itemserialnumber").value;

    // Read the form element which has an id of itemvalue and
    // get its value. In this case it will be the value entered into 
    // the text box by the user. 
    // We assign this value to the variable called itemvalue.
    // We then convert this to a float.
    var itemvalue = document.getElementById("itemvalue").value;
    var itemvalue = parseFloat(itemvalue).toFixed(2);

    // Read the form element which has an id of itemowner and
    // get its value. In this case it will be the value entered into 
    // the text box by the user. 
    // We assign this value to the variable called itemowner.
    var itemowner = document.getElementById("itemowner").value;

    // Read the form element which has an id of itemlocation and
    // get its value. In this case it will be the value entered into 
    // the text box by the user. 
    // We assign this value to the variable called itemlocation.
    var itemlocation = document.getElementById("itemlocation").value;

    // Now we format the values entered by concatenating them into a
    // string called itemDetails.
    // We use the string function toUpperCase() to format the string.
    var itemDetails = itemdescription.toUpperCase() + "<br/>"
        + "with the identifier " + itemserialnumber + "<br/>"
        + "is valued at $" + itemvalue + "<br/>" + " and is located in " + itemlocation + " with its owner " + itemowner + "<br/>";

    // Now we will create a variable to hold the current date using
    // several date functions e.g. getDate(), getMonth(), getFullYear(),
    // getHours(), getMinutes() and getSeconds(). 
    // We then append the date variable to the itemDetails string.
    var timestamp = new Date();
    var timestampString = timestamp.getDate() + "/" + (timestamp.getMonth() + 1) + "/" + timestamp.getFullYear() + ", " +
        pad(timestamp.getHours()) + ":" + pad(timestamp.getMinutes()) + ":" + pad(timestamp.getSeconds());
    itemDetails += timestampString;

    // Now we have the insured item details with the append date we
    // will push (add) it to the array we created at the global 
    // level, in our case this is at the top of the code.
    allItemsBeingStoredInVault.push(itemDetails);

    // Every time we execute this function we have added an item
    // to the array and therefore we will display the array items
    // again to show the full list oif items.
    displayItems(allItemsBeingStoredInVault, "allInsuredItemsList");

    // We use this line to stop the click() event causing form submission.
    return false;
}


// This function accepts the array of items and the id of the element
// where the list of items will be displayed. It then creates an
// unordered list containing all the items.
function displayItems(items, targetElementName) {

    // Create a string containing an HTML unordered list
    var str = "<ul>";
    for (var i in items) {
        str += "<li>" + items[i] + "</li>";
    }
    str += "</ul>";

    // We now display the string, which is an unordered list, at 
    // the HTML element with the id passed into this function.
    var targetElement = document.getElementById(targetElementName);
    targetElement.innerHTML = str;

    document.getElementById("numberOfItems").innerHTML = "The number of items stored is " + items.length;


}

// This function simply uses the JavaScript sort() function to sort
// the array in alphabetical order
function doSort() {
    allItemsBeingStoredInVault.sort();
    displayItems(allItemsBeingStoredInVault, "allInsuredItemsList");
}

// This function simply uses the JavaScript reverse() function to 
// reverse the array order
function doReverse() {
    allItemsBeingStoredInVault.reverse();
    displayItems(allItemsBeingStoredInVault, "allInsuredItemsList");
}

// This function allows the array to be searched using a string that
// uses the string entered into a text box by the user. The entered
// string is made into a regular expression.
// The matches are then pushed to a new array called matchingProducts
// and the array and id of the element where the display should be
// made are passed to the displayItems() function we have alreay created.
function doSearch() {

    // Create a RegExp object, based on the search string entered by the user.
    var searchString = document.getElementById("searchString").value;
    var re = new RegExp(searchString);

    // Create an array that contains all the products that match the search string.
    var matchingProducts = [];
    for (var i in allItemsBeingStoredInVault) {

        // Get the next itemDetailsfrom the global array.
        var curr = allItemsBeingStoredInVault[i];

        // If it matches the search string, add it into the array of matches.
        if (re.test(curr)) {
            matchingProducts.push(curr);
        }
    }

    // Display the array of matching itemDetailssuggestions.
    displayItems(matchingProducts, "matchingInsuredProductsList");
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function validate() {

    // This function returns null if all the required text boxes are populated.
    var firstInvalidField = null;

    // Get all the required text boxes in the specified form.
    var requiredFields = document.querySelectorAll("input[type='text']");


    // Loop through the required text boxes, to see if they are populated.
    for (var i = 0; i < requiredFields.length - 1; i++) {

        var field = requiredFields[i];

        // If the field is empty...
        if (!field.value) {

            // Highlight it to the user.
            field.style.backgroundColor = "#ff9999";

            // Is it the first invalid field on the form?
            if (firstInvalidField == null) {
                firstInvalidField = field;
            }
        }
        else {

            // The field is populated, so make sure any previous highlighting is removed.
            field.style.backgroundColor = "White";
        }
    }
    return firstInvalidField;
}