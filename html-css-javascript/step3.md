###### Let's create some code

Now we have the HTML form with some input boxes that will hold text, we will add a additional control to the form. In this step we will add a **select** control which will display a **drop-down** list of **options** for the user, and they will be expected to choose one of the options.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step3StarterHTML.html`{{open}}**
     &nbsp;

2. Add a label and a **select** control which will allow the user to choose from a **drop-down list**. The **option** tags display the text that the user will choose from.

   ```HTML
      <!--  Start of row 8 -->
      <label for="hometype">Home Type</label>
      <select name="hometype" id="hometype">
      <option label="House" value="House"></option>
      <option label="Bungalow" value="Bungalow"></option>
      <option label="Apartment" value="Apartment"></option>
      <option label="Ranch" value="Ranch"></option>
      </select>
      <!--  End of row 8 -->
      <br />
   ```

### CODE ANALYSIS ###

- the **select** element is used to accept user input where the user simply picks (selects) from a list of items that are populated by the developer.
- features of the select tag are:
  - used to create a drop-down list
  - most often used in a form, to collect user input
  - the name attribute is required when we wish to reference the form data after submitting it to the back-end application
  - if we leave out the name attribute no data from our drop-down list can be submitted 
  - the id attribute is required when we wish to associate the drop-down list with a label for
  - the ``<option>`` tags within the ``<select>`` element allow us to define the available options in the drop-down list that will be presented to the user
