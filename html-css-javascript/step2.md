# Adding input boxes to the form

Now we have the basic HTML code with the form section added we can start to add the controls that will allow the user to input the details required to obtain the insurance quote for their property.

We will create a basic Hypertext Markup Language page, HTML page, and then add a form within the HTML page. This will be the start for other scenarios which will add additional elements to the HTML page within the ```<form></form>``` tags.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

1. We will now open the HTML starter file by clicking on the link below:
   `./assets/Step2StarterHTML.html`{{open}}

2. Now add a comment to indicate the start of our first row which will hold a label and an input control as shown below:

   ```HTML
         <!--  Start of row 1 -->
    ```

3. Now add a comment to indicate the end of our first row as shown below:

   ```HTML
      <!--  Start of row 1 -->

      <!--  End of row 1 -->
    ```

4. Now add a label using the tag `<label></label>` tag as shown below.
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