###### Let's create some code

Now we have the HTML form with controls, we will add an additional control to the form. This is a very important part of the form and is another input control but it is of type **submit** and we say it is a **submit button**. The submit button is a self closing tag and therefore does not have a matching closing tag. It simply has the closing forward slash at the end of the **`<input />`** tag.

The form has controls that we have coded and when the user completes the form the values they enter need to be sent somewhere for processing. The job of the submit button is to connect with the action in the **`<form action="">`**. In our example there is no location stated between the double quotes "" so the data from the form will no go anywhere. For now we are not worried about sending data to the back-end application, that's for the future.

In completing this scenario remember we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

Continuing within the **`<form>`** and **`</form>`** tags we will add an additional control.

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step9StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a label and an input control of type **date** which will display a date picker control where the user will be able to choose a date in the range from the minimum date to the maximum date.
   &nbsp;

   ```HTML
    <!-- Start of last row -->
    <input type="submit" value="Submit details to server application" />
    <!--  End of last row -->
    </form>
    </body>

    </html>
    ```

## CODE ANALYSIS

- the ``<input type="submit">`` defines a button allowing the user to submit the form data, values, to a form handling application.
- the form handling application is usually a set of files on a server which contains the code, business logic, to process the submitted data.
- the form handling application is specified in the form's action attribute e.g, in the example here we send the details to adddetailstodatabase which is located on the server running on port 8080:
   ``<form action="http://localhost:8080/adddetailstodatabase">``
- **adddetailstodatabase** could be actually calling a method, a block of code.
