# INTRODUCTION TO OUR TASK

Now we have the basic HTML code with the form section added we can start to add the controls that will allow the user to input the details required to obtain the insurance quote for their property.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

## Let's create some code

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step2StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a comment within the **`<form>`** and **`</form>`** tags to indicate the start of our first row which will hold a label and an input control. The comment is **`<!--  Start of row 1 -->`**.

   ```HTML
      <!DOCTYPE html>
      <html lang="en">

      <head>
         <title>HTML Forms</title>
      </head>

      <body>
         <h1>Property Insurance Application</h1>
         <h3>GDC Insurance Limited</h3>

      <form action="">
      <!--  Start of row 1 -->
    ```

3. Now add a comment to indicate the end of our first row. The comment is **`<!--  End of row 1 -->`**.

   ```HTML
      <!DOCTYPE html>
      <html lang="en">

      <head>
         <title>HTML Forms</title>
      </head>

      <body>
         <h1>Property Insurance Application</h1>
         <h3>GDC Insurance Limited</h3>

      <form action="">
      <!--  Start of row 1 -->

      <!--  End of row 1 -->
    ```

4. Now add a label using the tags **`<label>`** and **`</label>`**.

   - the label tag is used to indicate something about the next control so we add a **for** attribute which includes the name of the control it is supposed to be linked with.
   - this label is being linked or associated with the control which has a name of **prefix**.

   ```HTML
        <form action="">
            <!--  Start of row 1 -->
            <label for="prefix">Prefix</label>
            <!--  End of row 1 -->
        </form>
    ```

5. Now add the tags required to create an input box which will hold text.

   - the input tag is self closing so we do not have a matching end tag just a **`<input/>`**
   - the input box will have a **name** which is used by the label, as we have just seen, and which could be used by the backend application.
   - there is also an **id** which could be used with JavaScript.
   - the input box will also have a **placeholder** which displays some 'hint' text in the input box.
   &nbsp;

   ```HTML
      <!--  Start of row 1 -->
        <label for="prefix">Prefix></label>
        <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..."/>
      <!--  End of row 1 -->
      ```

6. Now add a line break after the first row by using the tag **`<br>`** and **`</br>`** tags.

   ```HTML
      <!--  Start of row 1 -->
        <label for="prefix">Prefix></label>
        <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..."/>
      <!--  End of row 1 -->
      <br/>
   ```

7. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

8. Return to the HTML code by repeating the HTML Preview command e.g. command+shift+v.

   ### TIME SAVER

   Now we could repeat the process of adding 6 more input text boxes by copying and pasting the code for this row and making amendments, but we shall open the file below which will have the additional rows completed.
   &nbsp;

9. Click on the link below to open the file with the input boxes completed.

   **`./assets/Step2TextInputsHTML.html`{{open}}**

   &nbsp;
   The code will be as shown below :

   ```HTML
   <!DOCTYPE html>
   <html lang="en">

   <head>
      <title>HTML Forms</title>
   </head>

   <body>
      <h1>Property Insurance Application</h1>
      <h3>GDC Insurance Limited</h3>

      <form action="">
         <!--  Start of row 1 -->
         <label for="prefix">Prefix</label>
         <!--  End of row 1 -->

         <!--  Start of row 2 -->
         <label for="firstname">First Name</label>
         <input type="text" name="firstname" id="firstname" />
         <!--  End of row 2 -->
         <br />

         <!--  Start of row 3 -->
         <label for="lastname">Last Name</label>
         <input type="text" name="lastname" id="lastname" />
         <!--  End of row 3 -->
         <br />

         <!--  Start of row 4 -->
         <label for="housenumber">House Number</label>
         <input type="text" name="housenumber" id="housenumber" />
         <!--  End of row 4 -->
         <br />

         <!--  Start of row 5 -->
         <label for="street">Street Name</label>
         <input type="text" name="street" id="street" />
         <!--  End of row 5 -->
         <br />

         <!--  Start of row 6 -->
         <label for="city">City</label>
         <input type="text" name="city" id="city" />
         <!--  End of row 6 -->
         <br />

         <!--  Start of row 7 -->
         <label for="postcode">Postcode</label>
         <input type="text" name="postcode" id="postcode" />
         <!--  End of row 7 -->
         <br />

      </form>
      </body>
      </html>
      ```

10. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

11. Return to the HTML code by clicking on the tab beside this preview tab.

## IMPORTANT NOTE

This has saved us time **but** it is important to look at the new code to see the:

- **similarities**
  - all inputs are of type text.
- **changes**
  - the name for each row has been changed.
  - the id for each row has been changed.
  - the for in each label matches the new name in the input.

## CODE ANALYSIS

- comments start with ``<!--`` and end with ``-->``. The line of code ``<!-- End of row 1 -->`` has been used in our code to make a comment.
   &nbsp;

- the line of code ``<br/>`` is used to display a blank line
