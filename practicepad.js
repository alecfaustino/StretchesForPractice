// random scratch pad document for any random testing

// practicing using GPT created questions

// -------- practicing Callbacks. --------- //

// const fetchProductDetails = function(productId, callback, errorCallback) {
//   setTimeout(() => {
//     if(productId > 0) {
//       callback(productId); // mistake here, should've been a whole object
//       return;
//     } else {
//       errorCallback(productId); // mistake here, should've been the error message
//       return;
//     }
//   }, 2000);
// };

// const successCallBack = function(productId) {
//   console.log("Product details received: ", {
//     productId,
//     name: "Smartphone",
//     price: 799.99,
//   }); // this object should've been in the function definition and this should've only been a console log
// };

// const errorCallback = function(productId) {
//   console.log(`Invalid product ID (${productId}). Please provide a positive productId`); // this message should've been in the functoin definition
// };

// fetchProductDetails(50, successCallBack, errorCallback);
// fetchProductDetails(-1, successCallBack, errorCallback);



// -------- practicing Promises. --------- //

// const fetchUserData = function(userId) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       if (userId >= 0) {
//         resolve({
//           id: 1234,
//           name: "Alec",
//           email: "email@email.com",
//         });
      
//       } else {
//         reject("Invalid user ID. The fetch was unsuccessful");
//       }
//     }, 2000);
//   }); 
// };

// fetchUserData(-5)
// .then(data => {
//   console.log("User data received: ", data)
// })
// .catch(error => {
//   console.log("Error: ", error);
// });

// fetchUserData(5)
// .then(data => {
//   console.log("User data received: ", data)
// })
// .catch(error => {
//   console.log("Error: ", error);
// });

// const fetchOrderDetails = function(orderId) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       if (orderId > 0) {
//         resolve({
//           orderId,
//           itemName: "Laptop",
//           price: 1299.99,
//         });
//       } else {
//         reject(`invalid order ID ${orderId}. Please provide a positive number.`);
//       }
//     }, 2000);
//   })
// }

// const successMsg = function(data) {
//   console.log("Order details received: ", data);
// };

// const errorMsg = function(error) {
//   console.log("Error", error);
// }

// fetchOrderDetails(100)
// .then(data => successMsg(data))
// .catch(error => errorMsg(error));

// fetchOrderDetails(-100)
// .then(data => successMsg(data))
// .catch(error => errorMsg(error));
