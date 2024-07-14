//function to create document and send through email
function createAndSendDocument() {
  try {
    //create document
    const doc = DocumentApp.create("Hello World!");
    doc.getBody().appendParagraph("Be happy and make world a better place..........");

    //get url and email id
    const url = doc.getUrl();
    const email = Session.getActiveUser().getEmail();

    //compose email
    const subject = doc.getName() + " By Neha";
    const body = "Link to your doc URL: " + url + " By Neha K.";

    //send mail
    GmailApp.sendEmail(email, subject, body);

  }
  //catch error
  catch (err) {
    console.log("Failed due to error %s", err.message);
  }
}
