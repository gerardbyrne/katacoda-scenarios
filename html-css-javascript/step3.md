# Adding an input control of type select to the form

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
