# NearFoodBlogSmartContract
Smart contract for food blogging built on top of near blockchain.
It has a functionalities include adding restaurant , deleting restaurant , adding review and viewing all the reviews of a particular restuarant.


Functionalities 
    - Adding a new restuarant
    - Deleting already exisiting restaurant
    - Pushing Review for the target restuarant
    - Viewing all the reviews of the particular restaurant

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
    

Note :  <> is a placeholder

Functions

    - pushRestuarant 
        - Parametetrs - '{"restaurantName": <Restuarant Name> , "location" : <Location>}' 
         The function will push the restuarnt to blockchain with details like restaurant name and location. First it will check if the restuarant is already in the blockchain. if yes it will throw an error using assertion
        
    - deleteRestuarant 
        - Parametetrs - '{"restaurantName": <Restuarant Name> }' 
         The function will delete the restuarnt from blockchain.
         The contract can only do this , this handled by assertion.
         It also checks wether the restarant is ain blockahin to delete or not , if restuant is not in blockchain it will throw an error

     - pushReview 
        - Parametetrs - '{"restaurantName": <Restuarant Name> ,  "review" : <Review> }' 
          This will add the review of an restuarant to the the vector aloing with it it binds to the resturant. So each restarant can have different set of reviews.
        
    - getAllReviewsOfRest
       - Parametetrs - '{"restaurantName": <Restuarant Name> }' 
       This function returns the list of all the reviews of a a particular restuarant which passed as pamaeters.
 

Installation
To run the project locally, follow the below steps:

Getting started

Requirements
    - Node.js >= 12
    - NEAR CLI :
    npm i -g near-cli

Steps -

1) Login to your NEAR account.
If you don't have a NEAR account , create it at [https://wallet.testnet.near.org/]


2) Configure NEAR CLI to authorize your testnet account:
    near login

3) Clone this repository
    - Install the dependencies using npm
    - checkout package.json for npm commands

4) Deploy 
  - Chane the deploy script in package.json i.e replace your contract name and your account ID
  - npm run deploy



In Action :

For Deleting the resturant 

- near call <Contract Name> deleteRestuarant '{"restaurantName":<RestaurantName>}' --account-id <Account ID>

For Adding the restaurant 
- near call <Contract Name> pushRestuarant '{"restaurantName": <Resturant Name> , "location" : <Location>}' --account-id <Account ID>

For pushing the review
- near call <Contract Name> pushreview '{"restaurantName":<Resturant Name> , "review": <Review>}' --account-id <Account ID>

For getting all the reviews of the restuarant
- near view <Contract Name> getAllReviewsOfRest '{<Resturant Name>}'