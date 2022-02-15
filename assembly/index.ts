
import {Context, logging , PersistentVector} from "near-sdk-as";
import {Restuarant_ ,restuarants_ , Review ,  reviews  } from "./models"
 


let owner=Context.contractName

//Add restuarant to the blockchain , Only the contract owner can add it 
export function pushRestuarant(restaurantName:string ,location:string): string
{
    let rest_flag = restuarants_.contains(restaurantName);
    assert(rest_flag!=true , "Restaurant is already in the record");
    let rest = new Restuarant_(restaurantName , location );
    restuarants_.set(restaurantName , rest);
    logging.log("Added : " + restaurantName );
    return ("Added : " + restaurantName )
}



//Only contract owner can perform this operation
//Delete restuarant from the blockchain , Only the contract owner can delete it 
export function deleteRestuarant(restaurantName:string) : string
{
    assert(Context.sender==owner , "Restuarant can only be deleted by the Contract owner")
    let rest_flag = restuarants_.contains(restaurantName)
    assert(rest_flag==true , "Restaurant name is not in the record");
    restuarants_.delete(restaurantName);
    logging.log("Deleted restaurant : " + restaurantName);
    return("Deleted restaurantt : " + restaurantName);

}


//Content creators can push review to the the already added restaurant
export function pushreview (restaurantName:string , review:string): string {
    let rest_flag = restuarants_.contains(restaurantName)
    assert(rest_flag==true , "Restaurant name is not in the record");
    logging.log("Restaurant is name is in the record")
    let rest = restuarants_.getSome(restaurantName);
    let review_ = new Review(rest, review );
    reviews.push(review_);
    logging.log("Review Added to " + restaurantName + "    --    Review : " + review );
    return("Review Added to " + restaurantName + "    --    Review : " + review);

}


//Get the list of reviews of the particular restaurant
export function getAllReviewsOfRest(restaurantName:string):Array<string> 
{
    logging.log("Start Get Reviews");
    let allReviews_= new Array<string>() ;
   // let reviews_= new Array<string>() ;
    let rest_flag = restuarants_.contains(restaurantName)
    assert(rest_flag==true , "Restaurant name is not in the record");

    for(let i:i32 =0 ; i < reviews.length ; i++)
    {

     if(reviews[i].restaurant.restaurant_name == restaurantName)
     {
        allReviews_.push( reviews[i].review);
     }
    
        
    }

    logging.log("Total reviews of this restuarant " + allReviews_.length.toString());

      
     return allReviews_;

}
