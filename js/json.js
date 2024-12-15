// javasript object notation

const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);
/**
  { id: 1, name: 'Gorib Aamir', job: 'actor' }
  {"id":1,"name":"Gorib Aamir","job":"actor"}
 */

const shop = {
  owner: 'Alia',
  address: {
    street: 'kochukhet bhoot er goli',
    city: 'ranbir',
    country: 'bd'
  },
  products: ['laptop', 'mic', 'monitor', 'keyboard'],
  revenue: 45000,
  isOpen: true,
  isNew: false
}

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
