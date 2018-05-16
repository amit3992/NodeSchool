function getShortMessages(messages) {

	var msgArray = messages.filter((messageObj) => {
		
		/* debug logs 
     	console.log("Message is: " + messageObj.message);
     	console.log("Length: " + messageObj.message.length);
     	*/

		if(messageObj.message.length < 50) {
			//console.log('OUTPUT: ' + messageObj.message);
     		return messageObj;
     	}
	});
    
    return msgArray.map((msg) => {
    	return msg.message;
    });

}
    
module.exports = getShortMessages