### Let's create some code

We will create a basic Hypertext Markup Language page, HTML page, and then add a form within the HTML page. This will be the start for other scenarios which will add additional elements to the HTML page within the ```<form></form>``` tags. 

The application is to simulate an insurance quote application where a user completes a form and receives a quote amount.

The final code for the basic HTML page in the step will be:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HTML Forms</title>
  </head>
  <body>
  </body>
</html>
```

While the final code in the step including the form tag, ```<form action=""> </form>```, will be:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HTML Forms</title>
  </head>
  <body>
       <form action="">
       </form>
  </body>
</html>
```

In completing this scenario we can copy and paste the code included in these instructions **but it is much better to type the code yourself**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

1. We will now open the HTML starter file by clicking on the link below:
   `./assets/Step1StarterHTML.html`{{open}}

###CODE ANALYSIS

- The DOCTYPE declaration `<!DOCTYPE html>` defines the document type as HTML
- The HTML `<head>` element is a container for other tags such as `<title>, <style>, <meta>, <link>, <script>, <base>`
- The `<title>` element
  - defines the title of the document
  - must contain text-only
  - is required in HTML documents!
  - defines a title in the browser title bar of the pages tab
  - provides a title for the page when it is added to favourites
  - displays a title for the page in search engine-results

2. Now add some text for the `<title></title>` tag. The text to add is **HTML Forms** and is located as shown below:

   ```HTML
   <title>HTML Forms</title>
    ```

3. Now add some text for the `<h1></h1>` tag. The text to add is **Property Insurance Application** and is located as shown below:

   ```HTML
   <h1>Property Insurance Application</h1>
    ```

- HTML headings are defined with the `<h1>` to `<h6>` tags
  - `<h1>` defines the most important heading 
  - `<h6>` defines the least important heading

4. Now add some text for the `<h3></h3>` tag. The text to add is **GDC Insurance Limited** and is located as shown below:
 
   ```HTML
   <h3>GDC Insurance Limited</h3>
   ```

5. Now add the tag required to create a HTML form. The form tag will have an opening tag and a matching closing tag `<form></form>`. The form in a HTML page will be located within the `<body></body> tag as shown below:

    ```HTML
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>HTML Forms</title>
      </head>
      <body>
          <form action="">
          </form>
      </body>
    </html>
    ```

- The HTML `<form>` tag is used to create an HTML form
- The HTML `</form>` tag is used to close the opening HTML form tag
- The HTML `<form>` tag can be used to manage where and how the details (values) from the form controls will be sent 
  - this is achieved by using the 
    `<form action="" method="POST">`
  - we can also achieve the sending of the form data by using the
    `<form action="" method="GET">`
