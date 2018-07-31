//Library imports
const express = require('express');
var session = require('express-session');
var app = express();
app.use(session({secret: 'ssshhhhh',
		resave: true,
  		saveUninitialized: false}));

const router = express.Router();
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const async = require('async');
const bodyParser = require('body-parser');
const axios = require('axios');
const querystring = require('querystring');
const config = require('../../config.json');
const API = 'https://jsonplaceholder.typicode.com';

//Constants for API access
const TOKEN_URL = "https://sandbox.apihub.citi.com/gcb/api/authCode/oauth2/token/us/gcb"; //HTTPS endpoint to retrieve token
const ACCOUNTS_URL = "https://sandbox.apihub.citi.com/gcb/api/v2/accounts"; //HTTPS endpoint to retrieve account summary
const CONTENT_TYPE = "application/x-www-form-urlencoded"; //content type for header
const GRANT_TYPE = "authorization_code";
const REDIRECT_URI = "https://127.0.0.1:3000/accounts/retrieve"; //URI to redirect to after successfully logging in at Citi redirect
const SAMPLE_UUID = "a293fe0a-51ff-4b03-9376-022f1a1b453e"; //UUID - can be any generated value
const ACCEPT = "application/json"; 

// Variables needed for this javascript
var successfulAccount = "";
var accountData = [];
var obj;
//create encoded secret by concatenating ID and Secret with a colon, converting to base64, and prepending with 'Basic '
const CLIENT_ID = config.CLIENT_ID; //Client ID generated from your application page
const CLIENT_SECRET = config.CLIENT_SECRET;


router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/retrieve', (req, res) => {

  	successfulAccount = (req.session.success);
    // console.log(successfulAccount);
    var obj = null;
    accountData.length = 0;
    obj = JSON.parse(successfulAccount);


	async.parallel([
		function(callback){	
			for (var i = 0; i < 20; i++) {			
			    try {
			    		accountData.push({
			 		  		productName: obj.accountGroupSummary[0].creditCardAccountsSummary[i].productName,
			  				displayAccountNumber: obj.accountGroupSummary[0].creditCardAccountsSummary[i].displayAccountNumber,
			  				accountId: obj.accountGroupSummary[0].creditCardAccountsSummary[i].accountId,
			      			currencyCode: obj.accountGroupSummary[0].creditCardAccountsSummary[i].currencyCode,
			  				accountStatus: obj.accountGroupSummary[0].creditCardAccountsSummary[i].accountStatus,
			      			outstandingBalance: Math.round(obj.accountGroupSummary[0].creditCardAccountsSummary[i].creditLimit - obj.accountGroupSummary[0].creditCardAccountsSummary[i].availableCredit),
			  				availableCredit: obj.accountGroupSummary[0].creditCardAccountsSummary[i].availableCredit,
			      			paymentDueDate: obj.accountGroupSummary[0].creditCardAccountsSummary[i].paymentDueDate,      			     			
			      			minimumDueAmount: obj.accountGroupSummary[0].creditCardAccountsSummary[i].minimumDueAmount,
		      			    rewardPoints: Math.abs(Math.round((obj.accountGroupSummary[0].creditCardAccountsSummary[i].creditLimit - obj.accountGroupSummary[0].creditCardAccountsSummary[i].availableCredit) * 25))
			      		});
				}
				catch(err) {
				}
			}	
	}],
	function(err){ 
		console.log(err);

		}	
	);	
			res.send(JSON.stringify(accountData));
			res.end();
});

module.exports = router;
