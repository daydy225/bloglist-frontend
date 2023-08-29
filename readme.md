# Bloglist Frontend

## step 1: Implement login functionality to the frontend

## step 2: Make login functionality permanent by using local storage, and also implement a way to log out.

## step 3: Expand your application to allow a logged-in user to add new blogs.

## step 4: Implement notifications that inform the user about successful and unsuccessful operations at the top of the page.

## step 5: Change the form for creating blog posts so that it is only displayed when appropriate.

## step 6: Change the form for creating blog posts so that it is only displayed when appropriate.

## step 7: Separate the form for creating a new blog into its own component (if you have not already done so), and move all the states required for creating a new blog to this component.

## step 8: Add a button to each blog list which controls whether all of the details about the blog are shown or not. 

## step 9: Implement the functionality for the like button. Likes are increased by making an HTTP PUT request to the unique address of the blog post in the backend. 

## step 10: Modify the application to list the blog posts by the number of likes. Sorting the blog posts can be done with the array sort method.

## step 11: Add a new button for deleting blog posts. Also, implement the logic for deleting blog posts in the frontend.
## step 12: Adding  ESlint and Jest to the bloglist project.

# Bloglist Tests

## step 1: Write a test that verifies that the component renders the title and author, but does not render its url or number of likes by default.

## step 2: Write a test that verifies that the blog’s url and number of likes are shown when the button controlling the shown details has been clicked.

## step 3: Write a test which ensures that if the like button is clicked twice, the event handler the component received as props is called twice.

## step 4: Write a test for the new blog form. The test should check, that the form calls the event handler it received as props with the right details when a new blog is created.

# bloglist end to end testing
## step 1: Configure Cypress for your project. Make a test for checking that the application displays the login form by default.

## step 2: Make tests for logging in. Test both successful and unsuccessful login attempts. Make a new user in the beforeEach block for the tests.

## step 3: Make a test which checks that a logged in user can create a new blog.