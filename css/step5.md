# INTRODUCTION TO OUR TASK

Now we will place the range slider in a Bootstrap row or more correctly:

- the label in the first 4 columns
- the range slider in the next 2 columns
- a label for the actual property price in the next 2 columns and
- a span in the next 2 columns where we display the actual value based on the slider position

   ```HTML
      <!--  Start of row 9 -->
      <div class="row">
        <div class="col-xs-4">
          <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
        </div>
        <div class="col-xs-2" style="padding-bottom: 5px">
          <input type="range" id="homevalue" name="homevalue" value="0" min="0" max="5000000"
            oninput="document.getElementById('propertyprice').innerHTML = this.value" />
        </div>
        <div class="col-xs-2">
          <label id="propertyprice"></label>
        </div>
      </div>
      <!--  End of row 9 -->
   ```

## Let's create some code

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step5StarterHTML.html`{{open}}**
     &nbsp;

   Now we want to add a Bootstrap row to hold our label for the home value range control. We have all the code required for the HTML control so it is only a matter of adding the required row div and the column divs.

2. Within the comments for our existing row 9 we will add a div for a row.

      ```HTML
   <!--  Start of row 9 -->
            <div class="row">
   ```

3. Now we want to add a div for the first 4 columns of the Bootstrap row, understanding that Bootstrap is based on a 12 column grid:

   ```HTML
   <!--  Start of row 9 -->
            <div class="row">
               <div class="col-xs-4">
   ```

4. Now we will add the label for the home type in the first 4 columns we have created:

   ```HTML
   <!--  Start of row 9 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
   ```

5. Now we will close the div for the columns:

   ```HTML
   <!--  Start of row 9 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
               </div>
   ```

   We will repeat the same process for the next 4 columns and add the range control for the home value.

6. Now we want to add a div for the second 4 columns of the Bootstrap row, remembering that Bootstrap is based on a 12 column grid and we have already used the first 4.

   ```HTML
      <!--  Start of row 9 -->
      <div class="row">
        <div class="col-xs-4">
          <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
        </div>
        <div class="col-xs-2" style="padding-bottom: 5px">
   ```

7. Now we will add the range control for the home value in this set of 2 columns we have created:

   ```HTML
      <!--  Start of row 9 -->
      <div class="row">
        <div class="col-xs-4">
          <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
        </div>
        <div class="col-xs-2" style="padding-bottom: 5px">
          <input type="range" id="homevalue" name="homevalue" value="0" min="0" max="5000000"
            oninput="document.getElementById('propertyprice').innerHTML = this.value" />
   ```

8. Now we will close the div for the second set of columns:

   ```HTML
      <!--  Start of row 9 -->
      <div class="row">
        <div class="col-xs-4">
          <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
        </div>
        <div class="col-xs-2" style="padding-bottom: 5px">
          <input type="range" id="homevalue" name="homevalue" value="0" min="0" max="5000000"
            oninput="document.getElementById('propertyprice').innerHTML = this.value" />
        </div>
   ```

9. Now we want to add a div for the first next 2 columns of the Bootstrap row, to hold the property price label:

   ```HTML
      <!--  Start of row 9 -->
      <div class="row">
        <div class="col-xs-4">
          <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
        </div>
        <div class="col-xs-2" style="padding-bottom: 5px">
          <input type="range" id="homevalue" name="homevalue" value="0" min="0" max="5000000"
            oninput="document.getElementById('propertyprice').innerHTML = this.value" />
        </div>
        <div class="col-xs-2">
      <!--  End of row 9 -->
   ```

10. Now we will add the label for the property price in the columns we have created:

    ```HTML
      <!--  Start of row 9 -->
      <div class="row">
        <div class="col-xs-4">
          <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
        </div>
        <div class="col-xs-2" style="padding-bottom: 5px">
          <input type="range" id="homevalue" name="homevalue" value="0" min="0" max="5000000"
            oninput="document.getElementById('propertyprice').innerHTML = this.value" />
        </div>
        <div class="col-xs-2">
          <label id="propertyprice"></label>
    ```

11. Now we will close the div for this set of columns:

      ```HTML
         <!--  Start of row 9 -->
         <div class="row">
            <div class="col-xs-4">
               <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
            </div>
            <div class="col-xs-2" style="padding-bottom: 5px">
               <input type="range" id="homevalue" name="homevalue" value="0" min="0" max="5000000"
               oninput="document.getElementById('propertyprice').innerHTML = this.value" />
            </div>
            <div class="col-xs-2">
               <label id="propertyprice"></label>
            </div>
      ```

12. Now we will close the div for the row we created holding 12 columns and where we have used only 10 of the columns:

      ```HTML
         <!--  Start of row 9 -->
         <div class="row">
         <div class="col-xs-4">
            <label for="homevalue">Current Property Value<span id="propertyValueCorrectSpan"></span></label>
         </div>
         <div class="col-xs-2" style="padding-bottom: 5px">
            <input type="range" id="homevalue" name="homevalue" value="0" min="0" max="5000000"
               oninput="document.getElementById('propertyprice').innerHTML = this.value" />
         </div>
         <div class="col-xs-2">
            <label id="propertyprice"></label>
         </div>
         </div>
         <!--  End of row 9 -->
      ```

13. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

14. Return to the HTML code by clicking on the tab beside this preview tab.

## CODE ANALYSIS

We have just repeated what we did for each of the input controls of type text.
