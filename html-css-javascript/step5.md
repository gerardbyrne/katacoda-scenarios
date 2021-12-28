# Adding an input of type number to the form

Now we have the HTML form with some input boxes, select control and a range slider, we will add an additional control to the form. In this step we will add an input control for a **number** which will display a control with an up and down arrow to allow the user to increase or decrease the number that represents the age of the property. This number control can have attributes to set the minimum and maximum number available.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step5StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a label and an input control of type **range** which will allow the user to slide the controller to choose a price.

   - do not concern yourself with oninput part. 
   - this control includes **attributes** that set the **minimum** and **maximum** values.
   &nbsp;

   ```HTML
    <!--  Start of row 10 -->
    <label for="ageofproperty">Age of property</label>
    <input type="number" name="ageofproperty" id="ageofproperty" min="1" max="100" />
    <!--  End of row 10 -->
    <br />
   ```
