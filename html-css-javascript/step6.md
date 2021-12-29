###### Let's create some code

Now we have the HTML form with some input boxes, select control, a range slider and a number input, we will add an additional control to the form. In this step we will add an input control for a **radio buttons** which will display a number of choices but the user will only be able to check one of the radio buttons.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step6StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a label and an input control of type **radio** which will allow the user to choose from a number of options, in this case there will be two options which means two radio buttons.
   &nbsp;

   ```HTML
      <!--  Start of row 11 -->
      <label for="insurancetype">Building and contents insurance </label>
      <input type="radio" name="insurancetype" id="buildingandcontents" value="buildingandcontents" />

      <label for="insurancetype">Contents only insurance </label>
      <input type="radio" name="insurancetype" id="contents" value="contents" />
      <!--  End of row 11 -->
      <br />
   ```

## CODE ANALYSIS

- the ``<input type="radio">`` defines a form field which should be used whenever we want to give the user a selection between two or more options.
- all radio buttons have to share the same value in the name property because this ties the radio buttons together in the same group.
- there can only be one selection in a group of radio buttons, therefore, when the user selects one of the radio buttons any other checked radio button will become unchecked.
- on the other hand the value property will usually be unique since this is the value used to represent the choice of the user from the group of options.
  