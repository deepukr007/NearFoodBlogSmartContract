import {logging,PersistentMap, PersistentVector} from 'near-sdk-as';

@nearBindgen
export class Restuarant_ {
    restaurant_name: string;
    location:string;


    constructor(restaurant:string  ,location:string )
    {
        this.restaurant_name = restaurant;
        this.location = location;
    }


}


@nearBindgen
export class Review {
    restaurant: Restuarant_;
    review: string ;


    constructor(restaurant:Restuarant_ , review:string )
    {
        this.restaurant = restaurant;
        this.review= review;
    }

}


export const  restuarants_ = new PersistentMap<string , Restuarant_>("r");
export const reviews = new PersistentVector<Review>("review")
