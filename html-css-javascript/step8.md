###### Let's create some code

Now we have the HTML form with controls, we will add additional controls to the form. In this step we will add input controls for a **date**, a **time** and a **datetime-local** which will display the date in two formats and the time.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step8StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a label and an input control of type **date** which will display a date picker control where the user will be able to choose a date in the range from the minimum date to the maximum date.
   &nbsp;

   ```HTML
    <!--  Start of row 15 -->
    <label for="insurancestartdate">Insurance Start Date:</label>
    <input type="date" id=" insurancestartdate " name="insurancestartdate" min="2022-01-01" max="2022-12-31" />
    <!--  End of row 15 -->
    <br />
    ```

3. Now add a label and an input control of type **time** which will display a time picker control where the user will be able to choose a time in the range from the minimum time of 00:00:00.
   &nbsp;

    ```HTML
    <!--  Start of row 16 -->
    <label for="insurancestarttime">Insurance Start Time:</label>
    <input type="time" id="insurancestarttime" name="insurancestarttime" min="00:00:00" />
    <!--  End of row 16 -->
    <br />
    ```

4. Now add a label and an input control of type **datetime-local** which will display a control where the user will be able to choose a date and a time from the picker control.
   &nbsp;

    ```HTML
    <!--  Start of row 17 -->
    <label for="datetimeofinsurancestart">Insurance Start Date and Time:</label>
    <input type="datetime-local" id="datetimeofinsurancestart" name="datetimeofinsurancestart" />
    <!--  End of row 17 -->
    <br />
   ```
