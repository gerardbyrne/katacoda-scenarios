# INTRODUCTION TO OUR TASK

Now we will place the input of type number for the property age in a Bootstrap row or more correctly:

- the label in the first 4 columns
- the input control of type number in the next 4 columns

   ```HTML
      <!--  Start of row 10 -->
      <div class="row">
      <div class="col-xs-4">
         <label for="ageofproperty">Age of property</label>
      </div>
      <div class="col-xs-4" style="padding-bottom: 5px">
         <input type="number" name="ageofproperty" id="ageofproperty" min="1" max="100" value="0" />
      </div>
      </div>
       <!--  End of row 10 -->
   ```

## Let's create some code

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step6StarterHTML.html`{{open}}**
     &nbsp;

   Now we want to add a Bootstrap row to hold our label for the property age. We have all the code required for the HTML control so it is only a matter of adding the required row div and the column divs.

2. Within the comments for our existing row 10 we will add a div for a row.

      ```HTML
      <!--  Start of row 10 -->
      <div class="row">
   ```

3. Now we want to add a div for the first 4 columns of the Bootstrap row, understanding that Bootstrap is based on a 12 column grid:

   ```HTML
      <!--  Start of row 10 -->
      <div class="row">
         <div class="col-xs-4">  
   ```

4. Now we will add the label for the home type in the first 4 columns we have created:

   ```HTML
      <!--  Start of row 10 -->
      <div class="row">
         <div class="col-xs-4">
            <label for="ageofproperty">Age of property</label>
   ```

5. Now we will close the div for the columns:

   ```HTML
      <!--  Start of row 10 -->
      <div class="row">
         <div class="col-xs-4">
            <label for="ageofproperty">Age of property</label>
         </div>
   ```

   We will repeat the same process for the next 4 columns and add the range control for the home value.

6. Now we want to add a div for the second 4 columns of the Bootstrap row, remembering that Bootstrap is based on a 12 column grid and we have already used the first 4.

   ```HTML
      <!--  Start of row 10 -->
      <div class="row">
      <div class="col-xs-4">
         <label for="ageofproperty">Age of property</label>
      </div>
      <div class="col-xs-4" style="padding-bottom: 5px">
   ```

7. Now we will add the input control of type number for the property age in this set of 4 columns we have created:

   ```HTML
      <!--  Start of row 10 -->
     <div class="row">
      <div class="col-xs-4">
         <label for="ageofproperty">Age of property</label>
      </div>
      <div class="col-xs-4" style="padding-bottom: 5px">
         <input type="number" name="ageofproperty" id="ageofproperty" min="1" max="100" value="0" />
   ```

8. Now we will close the div for the second set of columns:

   ```HTML
      <!--  Start of row 10 -->
      <div class="row">
      <div class="col-xs-4">
         <label for="ageofproperty">Age of property</label>
      </div>
      <div class="col-xs-4" style="padding-bottom: 5px">
         <input type="number" name="ageofproperty" id="ageofproperty" min="1" max="100" value="0" />
      </div>
   ```

9. Now we will close the div for the row we created holding 12 columns and where we have used only 10 of the columns:

      ```HTML
      <!--  Start of row 10 -->
      <div class="row">
      <div class="col-xs-4">
         <label for="ageofproperty">Age of property</label>
      </div>
      <div class="col-xs-4" style="padding-bottom: 5px">
         <input type="number" name="ageofproperty" id="ageofproperty" min="1" max="100" value="0" />
      </div>
      </div>
         <!--  End of row 10 -->
      ```

10. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

11. Return to the HTML code by clicking on the tab beside this preview tab.

## CODE ANALYSIS

We have just repeated what we did for each of the input controls of type text.
