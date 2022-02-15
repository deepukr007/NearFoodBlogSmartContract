# NearFoodBlogSmartContract
Smart contract for food blogging built on top of near blockchain.
It has a functionalities include adding restaurant , deleting restaurant , adding review and viewing all the reviews of a particular restuarant.

Some features to notice - 
 - Delete can only be done by the contract owner
 - Each restuarant will have set of reviews ( so it's not flat)

Near Features Used :
    Storage 
        - Persistant vector - For storing set of reviews
        - Persistant maps - For storing resturant object with a restuarant_name key
    
    Context
        - Context is used for role control i.e Only owner can delete the restaurant from the smart contract

    Assertions
        - Assertions are used for checking nulls and other conditions
    
    logging
        - For debugging
    





Create a book with details like:
ID of the book
Name of the book
Author of the book
Department to which the book belongs to
View all the books stored on chain

Query a particular book though ID of the book.

Installation
To run the project locally, follow the below steps:

Getting started
Make sure you have installed Node.js >= 12
Make sure you have installed NEAR CLI :
npm i -g near-cli
Login to your NEAR account.
If you don't have a NEAR account , create it at [https://wallet.testnet.near.org/]
Configure NEAR CLI to authorize your testnet account:
near login
Running the project
Clone this repository
In the terminal , navigate to the project folder, to install the dependencies and run yarn
To create a smart contract development and deployment:
Run yarn build to build the smart contract. Look at package.json folder to see all the command that can be executed with yarn.
Run yarn deploy to deploy the smart contract to the development server that was built in the previous step. This will return the Txn ID of the deployed contract along with a link to near explorer to see various statistics of the deployed contract.
Using the methods of the deployed contract
The following commands will allow you to interact with NEAR CLI and the deployed smart contract's methods:

Command to create a new book:
near call $CONTRACT newBook '{"bookId": "string","bookName": "string","author": "string","department": "string"}' --account-id <Enter your account id>

Insert the data in place of "string" mentioned in the command of the method.
The contract details will be available in the folder named 'neardev'->'dev-account'

Command to view all the books:
near view $CONTRACT seeBooks '{}'

Command to query books with ID:
near call $CONTRACT queryBook '{"bookID" : "string"}' --account-id <Enter your account id> Insert the ID of the book in place of string in above command.

USAGE:
The contract can be used as a Blockchain based Library application for storing books on chain with other related info after amending in the contract.