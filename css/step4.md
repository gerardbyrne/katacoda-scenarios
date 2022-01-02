# INTRODUCTION TO OUR TASK

Now we have the idea of a row with columns and can see the way the page looks as a result of addig the Bootstrap row and columns, we will continue the process for the other controls on the web page.

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="hometype">Home Type</label>
               </div>
               <div class="col-xs-4">
               <select name="hometype" id="hometype">
                  <option label="Select Type" value="Select Type"></option>
                  <option label="House" value="House"></option>
                  <option label="Bungalow" value="Bungalow"></option>
                  <option label="Apartment" value="Apartment"></option>
                  <option label="Ranch" value="Ranch"></option>
               </select>
               </div>
            </div>
            <!--  End of row 8 -->
   ```

## Let's create some code

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step4StarterHTML.html`{{open}}**
     &nbsp;

   Now we want to add a Bootstrap row to hold our label for the home type select control. We have all the codd required for the HTML control so it is only a matter of adding the required row div and the column divs.

2. Within the comments for our existing row 8 we will add a div for a row.

      ```HTML
   <!--  Start of row 8 -->
            <div class="row">
   ```

3. Now we want to add a div for the first 4 columns of the Bootstrap row, understanding that Bootstrap is based on a 12 column grid:

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
   ```

4. Now we will add the label for the home type in the first 4 columns we have created:

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="hometype">Home Type</label>
   ```

5. Now we will close the div for the columns:

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="hometype">Home Type</label>
               </div>
   ```

   We will repeat the same process for the next 4 columns and add the input control for the prefix.

6. Now we want to add a div for the second 4 columns of the Bootstrap row, remembering that Bootstrap is based on a 12 column grid and we have already used the first 4.:

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="hometype">Home Type</label>
               </div>
               <div class="col-xs-4">
   ```

7. Now we will add the select control with its options for the home types in this set of 4 columns we have created:

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="hometype">Home Type</label>
               </div>
               <div class="col-xs-4" style="padding-bottom: 5px">
               <select name="hometype" id="hometype">
                  <option label="Select Type" value="Select Type"></option>
                  <option label="House" value="House"></option>
                  <option label="Bungalow" value="Bungalow"></option>
                  <option label="Apartment" value="Apartment"></option>
                  <option label="Ranch" value="Ranch"></option>
               </select>
   ```

8. Now we will close the div for the second set of columns:

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="hometype">Home Type</label>
               </div>
               <div class="col-xs-4" style="padding-bottom: 5px">
               <select name="hometype" id="hometype">
                  <option label="Select Type" value="Select Type"></option>
                  <option label="House" value="House"></option>
                  <option label="Bungalow" value="Bungalow"></option>
                  <option label="Apartment" value="Apartment"></option>
                  <option label="Ranch" value="Ranch"></option>
               </select>
               </div>
   ```

9. Now we will close the div for the row we created holding 12 columns and where we have used only 8 of the columns:

   ```HTML
   <!--  Start of row 8 -->
            <div class="row">
               <div class="col-xs-4">
               <label for="hometype">Home Type</label>
               </div>
               <div class="col-xs-4">
               <select name="hometype" id="hometype">
                  <option label="Select Type" value="Select Type"></option>
                  <option label="House" value="House"></option>
                  <option label="Bungalow" value="Bungalow"></option>
                  <option label="Apartment" value="Apartment"></option>
                  <option label="Ranch" value="Ranch"></option>
               </select>
               </div>
            </div>
            <!--  End of row 8 -->
   ```

10. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

11. Return to the HTML code by clicking on the tab beside this preview tab.

## CODE ANALYSIS

We have just repeated what we did for each of the input controls of type text.
