# INTRODUCTION TO OUR TASK

Now we have the required Bootstrap container and panel with a body, we can start to add rows. The idea of a grid is ideal when creating a layout and in Bootstrap we we a 12 column grid to assist our presentation of components. Our plan of action is to:

- add a first row to hold the:
  - label within the first 4 columns
  - input control within the next 4 columns
  - leave the remaining columns balnk
- repeat the process of creating a row with columns for all text input controls

## Let's create some code

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step3StarterHTML.html`{{open}}**
     &nbsp;

2. Now we want to add a Bootstrap row to hold our label and input control for the prefix. We will start by adding the row just after the comment that indicates the start of the first row:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
   ```

3. Now we want to add a div for the first 4 columns of the Bootstrap row, understanding that Bootstrap is based on a 12 column grid:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
   ```

4. Now we will add the label for the prefix in the first 4 columns we have created:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
              <label for="prefix">Prefix</label>
   ```

5. Now we will close the div for the columns:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
              <label for="prefix">Prefix</label>
           </div>
   ```

   We will repeat the same process for the next 4 columns and add the input control for the prefix.

6. Now we want to add a div for the second 4 columns of the Bootstrap row, remembering that Bootstrap is based on a 12 column grid and we have already used the first 4:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
              <label for="prefix">Prefix</label>
           </div>
        <div class="col-xs-4">
   ```

7. Now we will add the input control for the prefix in this set of 4 columns we have created:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
              <label for="prefix">Prefix</label>
           </div>
        <div class="col-xs-4">
           <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..." />
   ```

8. Now we will close the div for the second set of columns:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
              <label for="prefix">Prefix</label>
           </div>
           <div class="col-xs-4">
               <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..." />
            </div>
   ```

9. Now we will close the div for the row we created holding 12 columns and where we have used only 8 of the columns:

   ```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
              <label for="prefix">Prefix</label>
           </div>
            <div class="col-xs-4">
               <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..." />
            </div>
        </div>
        <!--  End of row 1 -->
   ```

10. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

11. Return to the HTML code by clicking on the tab beside this preview tab.

   ### TIME SAVER

   Now we could repeat the process of adding each of the input text boxes to a row of 12 columns, where the firs 4 columns will hold the label and the next 4 columns will hold the input control. We could copy and paste the code required from the first row and making the amendments, but we shall open the file below which will have the additional rows completed.
   &nbsp;

12. Click on the link below to open the file with the input boxes completed.

   **`./assets/Step3Completed.html`{{open}}**

13. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

14. Return to the HTML code by clicking on the tab beside this preview tab.

## IMPORTANT NOTE

This has saved us time **but** it is important to look at the new code to see the:

- **similarities**
  - all inputs are enclosed in a row.
  - each row has a first set of 4 columns where the label is enclosed
  - each row has a second set of 4 columns where the input control is enclosed

## CODE ANALYSIS

```HTML
        <!--  Start of row 1 -->
        <div class="row">
           <div class="col-xs-4">
              <label for="prefix">Prefix</label>
           </div>
            <div class="col-xs-4">
               <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..." />
            </div>
        </div>
        <!--  End of row 1 -->
```

- the ```<div class="row">``` code line is our way of using Bootstrap to create a row which has 12 useable columns. Remember there must be a matching end div ```</div>``` for this row.
- the ```<div class="col-xs-4">``` code line is our way of using Bootstrap to create 4 columns within our newly created row. Remember there must be a matching end div ```</div>``` for this column div.
- the HTML label is placed inside the 4 columns.
- the ```</div>``` code line closes the first 4 columns div.

**repeat for the next 4 columns**

- the ```<div class="col-xs-4">``` code line is our way of using Bootstrap to create another 4 columns, after the first 4, within our newly created row. Remember there must be a matching end div ```</div>``` for this column div.
- the HTML input of type text is placed inside these 4 columns.
- the ```</div>``` code line closes the first 4 columns div.
- the last ```</div>``` code line closes the row div created at the start.

**each row with an input conntrol of type text will be treated the same way i.e. the label in the first 4 columns and the input control in the next 4 columns.**
