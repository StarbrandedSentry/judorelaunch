import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';


admin.initializeApp(functions.config().firebase);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const SENDGRID_API_KEY = functions.config().sendgrid.key
sgMail.setApiKey(SENDGRID_API_KEY);


export const sendEmail = functions.https.onRequest((request, response) => {
    const msg = {
        to: request.params.email,
        from: 'hello@angularfirebase.com',
        subject: 'Join the bid!',

        templateId: 'd-ac0b2a02ddcf4c278099b12e6d0ac949',
        substitutionWrappers: ['{{', '}}'],
        substitutions: {
            name: request.params.name,
            email: request.params.room
        }


    }

    return sgMail.send(msg);

});
