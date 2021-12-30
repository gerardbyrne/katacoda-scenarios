# INTRODUCTION TO OUR TASK

Now we have the HTML form with controls, we will add additional controls to the form. In this step we will add input controls for a **date**, a **time** and a **datetime-local** which will display the date in two formats and the time.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

## Let's create some code

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

5. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

6. Return to the HTML code by clicking on the tab beside this preview tab.

## CODE ANALYSIS

### DATE

- the **date** input type is widely used across many applications and offers the user a quick way to input a date.
- the HTML date picker option is built into the browser.  
- the date input can be made flexible and will allow the user to select a single date, select a week, select a month, select a time, select a date and time, and even date and time with a time zone using the different input types.
- the format for the date input type is:
   ``<input type="date" id="dateofinsurance" name="dateofinsurance">``
- like the number input type we can add additional attributes for the min and max dates to ensure our user can only choose from a specified date range. An example is:
   ``<input type="date" id="dateofinsurance" name="dateofinsurance" min="2000-01-01" max="2019-01-01" >``

### TIME

- the **time** input is widely used across many applications and offers the user a quick way to input a time.
- the HTML time picker option is built into the browser.  
- the time input can be made flexible and will allow the user to select a time.
- the format for the time input type is:
   ``<input type="time" id=" timeofinsurancestart" name=" timeofinsurancestart">``
- like the number input type we can add additional attributes for the min and max dates to ensure our user can only choose from a specified time range. An example is:
   ``<input type="time" id="timeofinsurancestart" name="timeofinsurancestart" min=”10:00:00” max=”23:00:00”>``

### DATETIME-LOCAL

- the **datetime-local** input type is widely used across many applications and offers the user a quick way to input a date and time as one object.
- the HTML datetime-local picker option is built into the browser.  
- the datetime-local input can be made flexible and will allow the user to select a date with a time.
- the format for the datetime-local input type is:
   ``<input type="datetime-local" id=" datetimeofinsurance" name=" datetimeofinsurance">``
- like the number input type we can add additional attributes for the min and max dates to ensure our user can only choose from a specified range. An example is:
   ``<input type="datetime-local" id="datetimeofinsurance" name="datetimeofinsurance" min=”10:00:00” max=”23:00:00”>``
