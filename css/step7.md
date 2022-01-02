# INTRODUCTION TO OUR TASK

Now we have the HTML form with some input boxes, select control, a range slider, a number input and a set of radio buttons, we will add an additional control to the form. In this step we will add an input control for **check boxes** (:ballot_box_with_check:) which will display a number of choices where the user will be able to check more than one of the check boxes.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code ourselves**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

## Let's create some code

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step7StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a label and an input control of type **checkbox** which will allow the user to choose from a number of options, in this case there will be two options which means two checkboxes. Here we will use two rows, one for each checkbox.
   &nbsp;

   ```HTML
    <!--  Start of row 12 -->
    <input type="checkbox" name="chklaptop" id="chklaptop" value="laptop" />
    <label for="chklaptop">Include 1 laptop (less than $3000)</label>
    <!--  End of row 12 -->
    <br />

    <!--  Start of row 13 -->
    <input type="checkbox" name="chkJewellery" id="chkJewellery" value="jewellery" />
    <label for="chkJewellery">Include 1 high value jewellery item (less than $6000)</label>
    <!--  End of row 13 -->
    <br />
   ```

3. Now add another label and an input control of type **checkbox** which will allow the user to choose if they will insure their items while outside the home.
   &nbsp;

   ```HTML
    <!--  Start of row 14 -->
    <input type="checkbox" name="chkAwayFromHome" id="chkAwayFromHome" value="awayfromhome" />
    <label for="chkAwayFromHome">Include insurance for items while out of property</label>
    <!--  End of row 14 -->
    <br />
   ```

4. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

5. Return to the HTML code by clicking on the tab beside this preview tab.

## CODE ANALYSIS

- the ``<input type="checkbox">`` defines a form field which should be used whenever we want to allow the user to select one or more option.
- each checkbox will have a different **name** property.
- there can be more than one selection in a group of checkboxes, so, unlike a radio button, when the user selects one of the checkboxes other checked checkboxes will remain checked.
- like other controls the value property will usually be unique since this is the value used to represent the individual choice of the user for the checkbox.
  