# Adding input boxes to the form

Now we have the basic HTML code with the form section added we can start to add the controls that will allow the user to input the details required to obtain the insurance quote for their property.

We will create a basic Hypertext Markup Language page, HTML page, and then add a form within the HTML page. This will be the start for other scenarios which will add additional elements to the HTML page within the ```<form></form>``` tags.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

1. We will now open the HTML starter file by clicking on the link below:
   `./assets/Step2StarterHTML.html`{{open}}

2. Now add a comment to indicate the start of our first row which will hold a label and an input control as shown below:

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

3. Now add a comment to indicate the end of our first row as shown below:

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

4. Now add a label using the tag `<label></label>` as shown below.
   The label tag is used to indicate something about the next control so we add a for attribute which includes the name of the control it is supposed to be linked with, this label is being linked or associated with the control which has a name of prefix.
 
   ```HTML
        <form action="">
            <!--  Start of row 1 -->
            <label for="prefix">Prefix</label>
            <!--  End of row 1 -->
        </form>
    ```

5. Now add the tag required to create an input box which will hold text.

   The input box will have a **name** which is used by the label, as we haave just seen,  and which could be used by the backend application. There is also an **id** which could be used with JavaScript. The input box will also have a placeholder which displays some 'hint' text in the input box as shown below:

   ```HTML
      <!--  Start of row 1 -->
        <label for="prefix">Prefix></label>
        <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..."/>
      <!--  End of row 1 -->
      ```

6. Now add a line break after the first row by using the tag `<br></br>`.

   ```HTML
      <!--  Start of row 1 -->
        <label for="prefix">Prefix></label>
        <input type="text" name="prefix" id="prefix" placeholder="Prefix e.g. Ms, Mr, Dr..."/>
      <!--  End of row 1 -->
      <br/>

Now we could repeat the process of adding 6 more input text boxes by copying and pasting this row oone code and making amendments but we shall open the file below which has the additional rows completed.

7. Click on the link below to open the file with the input boxes completed and we will then continue:

   `./assets/Step2TextInputsHTML.html`{{open}}.

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

8. Now add a label and a select control which will allow the user to choose from a drop-down list. The option tags are what the user will choose from.

   ```HTML
      <!--  Start of row 8 -->
      <label for="hometype">Home Type</label>
      <select name="hometype" id="hometype">
      <option label="House" value="House"></option>
      <option label="Bungalow" value="Bungalow"></option>
      <option label="Apartment" value="Apartment"></option>
      <option label="Ranch" value="Ranch"></option>
      </select>
      <br />
      <!--  End of row 8 -->
   ```

9. Now add a label and an input control of type **raange** which will allow the user to slide the controller to choose a price. Do not concern yourself with oninput part. This control includes attributes that set the minimum and a maximum value.

   ```HTML
      <!--  Start of row 9 -->
      <label for="homevalue">Current Property Value</label>
      <input type="range" id="homevalue" name="homevalue"value="00" min="0" max="5000000" oninput="document.getElementById('propertyprice').innerHTML = this.value"/>
      <label id="propertyprice"></label>
      <!--  End of row 9 -->
      <br />
   ```
