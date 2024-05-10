// const firebaseConfig = {
//     apiKey: "AIzaSyB8XsNgoBSpYQwYiIckxre5ph2IWDFl264",
//     authDomain: "saltofheart-5881a.firebaseapp.com",
//     projectId: "saltofheart-5881a",
//     storageBucket: "saltofheart-5881a.appspot.com",
//     messagingSenderId: "495146637806",
//     appId: "1:495146637806:web:9e8f935b97f173582656ff",
//     measurementId: "G-YFL1R7HHHS"
//   };

//   firebase.initializeApp(firebaseConfig);

// var userdb = firebase.database().ref('userdata')

// document.getElementById("userdata").addEventListener('submit' , submitform)

// function submitform(e){
//     e.preventDefault();

//     var amount = getElementVal('amount')
//     var currency = getElementVal('currency')
//     var payerName = getElementVal('payerName')
//     var payerEmail = getElementVal('payerEmail')
//     var question = getElementVal('question')
//     var time_Date = getElementVal('time_Date')
//     var transactionId = getElementVal('transactionId')

//     saveMessages=(amount , currency , payerName , payerEmail , question , time_Date , transactionId)
// }

// const saveMessages = (amount , currency , payerName , payerEmail , question , time_Date , transactionId) =>{
//    var formVal = userdb.push();
//    formVal.set({
//     amount : amount,
//     currency: currency,
//     payerName : payerName,
//     payerEmail : payerEmail,
//     question : question,
//     time_Date : time_Date,
//     transactionId : transactionId,
//    })


// }

// const getElementVal = (name) =>{
//     return document.getElementsByName(name).value;
// }   