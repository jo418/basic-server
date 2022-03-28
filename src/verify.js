const { GoogleAuth } = require('google-auth-library');

/**
* tThis library will automatically choose the right client based
* on the environment.
*/
module.exports.verify = async function (token) {
    try {
        let auth = new GoogleAuth({
            scopes: 'https://www.googleapis.com/auth/cloud-platform'
        });
        const client = await auth.getClient();
        //const projectId = await auth.getProjectId();
        //console.log('projectId=', projectId);
        //what do we need this for? Just some extra checking?
        //const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
        //const res = await client.request({ url });
        //console.log('res=', res);
        //console.log('res.data=', res.data);
        return verifyToken(token, client);
    } catch (err) {
        console.error(err);
        return false;
    }
}

async function verifyToken(token, client) {
    const CLIENT_ID = process.env.CLIENT_ID;
    if (CLIENT_ID === undefined) {
        return false;
    } else {
        let ticket;
        try {
            ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID
            })
        } catch (err) {
            console.error(err);
            // if we don't catch, the server will crash
            return false;
        }
        const payload = ticket.getPayload()
        return payload.email_verified;
    }
}
