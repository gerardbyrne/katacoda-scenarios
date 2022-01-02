# INTRODUCTION TO OUR TASK

Now we have the required links to the Bootstrap stylesheet and Bootstrap JavaScript files, we can start making the HTML controls use the styles. The plan of action is to:

- place all the form controls within a container.
- make a panel within the container.
- add a panel heading.
- add a panel body.

In completing this scenario we can copy and paste the code included in these instructions **but it is much better to type the code ourselves**. It is only by practice, making mistakes and correcting the mistakes that our learning is reinforced.

## Let's create some code

1. We will now open the HTML starter file by clicking on the link below, this is the file we have just created in the previous step:
   **`./assets/Step2StarterHTML.html`{{open}}**
     &nbsp;

2. Now add a div for a container within the **`<form>`** and **`</form>`** tags.

   ```HTML
        <form action="">
         <div class="container">
    ```

3. Now **very importantly** close the div for the container. This is essential otherwise our page presentation may not be as we hoped.

   ```HTML
         </div> <!-- Close Container -->
      </form>
   ````

4. Now add a div for the panel and make using the class panel and make it of specialist type panel-primary (blue background).

   ```HTML
    <form action="">
        <div class="container">
            <div class="panel panel-primary">
    ```

5. Now **very importantly** close the div for the panel. Once again let us emphasise to ourselves the importance of closing tags immediately after opening them, otherwise our page presentation may not be as we hoped and we will cause ourselves many problems which can be hard to debug.

   ```HTML
            </div> <!-- Close Panel Primary -->
        </div> <!-- Close Container -->
    </form>
   ````

6. Now add a div for the panel heading using the class (type) panel-heading and close it immediately.

   ```HTML
    <form action="">
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading">
                   </div> <!-- Close Panel Heading -->
    ```

7. Now we will move the two headings we have from outside the panel to inside it the panel and within the panel heading.

   ```HTML
    <form action="">
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h1 >Property Insurance Application</h1>
                    <h3 >GDC Insurance Limited</h3>
                </div> <!-- Close Panel Heading-->      
   ````

8. Now we will add a panel body that will hiold our rows of data.

   ```HTML
       <form action="">
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h1>Property Insurance Application</h1>
                    <h3 ">GDC Insurance Limited</h3>
                </div> <!-- Close Panel Heading-->
                <div class="panel-body">
   ```

9. Now **very importantly** close the div for the panel body.

   ```HTML
                </div> <!-- Close Panel Body -->
            </div> <!-- Close Panel Primary -->
        </div> <!-- Close Container -->
    </form>
   ```

10. Preview the code using the HTML Preview command relevant to your computer e.g. command+shift+v.

11. Return to the HTML code by clicking on the tab beside this preview tab.

## CODE ANALYSIS

- we have a Bootstrap container inside our form created by using the code line ``` <div class="container">```:
  - a container is the most basic layout element in Bootstrap and is required when using the default grid system.
  - a container is used to contain, pad, and (sometimes) center the content within them.
  - the default .container class is a **responsive**, fixed-width container, meaning its max-width changes at each breakpoint.
- inside the container we have created a panel which is essentially a region to hold data.
- our panel will be a **panel-primary** which makes the top of the panel have a background colour of blue.
- the panel has then been given a heading area where we have added our two headings.
- we also have created a body for the panel where we will add the rows of our form which hold the labels, inputs and controls.
- we also ensure that we close all opening tags.
