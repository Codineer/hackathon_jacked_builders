## PROBLEM STATEMENT:
nowadays people are facing difficulty in identifying and buying the right parts to build their PC. They're unable to identify which component is useful for which kind of user. So they end up buying the wrong components with wrong specs.

## SOLUTION:
For this problem we are developing a user-friendly PC build web-application which would help users to get complete knowledge about different components required for different types of users. User gets an easy platform to build his PC in according with his budget.

## TECHNOLOGY USED:
Next.js framework. for authentication, we're implementing google-based login using clerk, ensuring secure and seamless user access. our front-end components are crafted with shadcn and acertinity, providing a modern and visually appealing user interface. to handle icons efficiently, we're integrating react icons. on the backend, we are utilizing prisma to define and manage our data models, which are connected to a mongodb nosql database. this combination of technologies allows us to create a robust, flexible, and user-friendly application.
payment method interface: a user can complete the payment process by simply scanning a qr code for the respective order he’s made then he can simply pay the amount by any online payment application. in order to let us know that the user has successfully paid the required amount, we are using google forms in which the user can provide the unique reference id of the placed order. then with the help of that refernce id we can send the user the details of the order placed and also the payment confirmation reciept on the user’s registered email id.

## PROGRESS TILL NOW

Our team has defined models in prisma orm and connected it to our mongodb database(atlas) . We have completed google based authentication system using clerk .Defined middleware for secure pages.We have also used clerk Webhook to connect our clerk application to our mongodb database so our users account details can be stored at one place in database.Initial homepage has also been nearly completed .Four other linked pages are also completed.We have used shadcn and lucide react ui for some components.Approximately 6 hours will be needed to complete the entire application. 