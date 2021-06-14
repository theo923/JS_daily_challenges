function biggest(arr){
  return arr.reduce((acc, obj) => (obj["price"]/(obj["sqft"]/10.764) >= acc)? acc = Math.round(obj["price"]/(obj["sqft"]/10.763910)): acc, 0)
}

const data = [
   {
     id: 0,
     price: 700000,
     sqft: 7200,
   },
   {
     id: 1,
     price: 100000,
     sqft: 200,
   },
 ];

console.log(biggest(data));  //returns 5382;

const data2 = [
   {
     id: 0,
     price: 200000,
     sqft: 100,
   },
   {
     id: 1,
     price: 408000,
     sqft: 200,
   },
 ];

biggest(data2); //returns 21958;