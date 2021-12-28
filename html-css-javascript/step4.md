# Adding an input control of type range to the form

Now we have the HTML form with some input boxes and a select control, we will add an additional control to the form. In this step we will add an input control for a **range** which will display a **slider** and when move the value will change.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step4StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a label and an input control of type **range** which will allow the user to slide the controller to choose a price.

   - do not concern yourself with oninput part. 
   - this control includes **attributes** that set the **minimum** and **maximum** values.
   &nbsp;

   ```HTML
      <!--  Start of row 9 -->
      <label for="homevalue">Current Property Value</label>
      <input type="range" id="homevalue" name="homevalue"value="00" min="0" max="5000000" oninput="document.getElementById('propertyprice').innerHTML = this.value"/>
      <label id="propertyprice"></label>
      <!--  End of row 9 -->
      <br />
   ```
