import Email from "../Models/Email.js";

const saveSendEmail = (req, res) => {
    try {
        const email = new Email(req.body);
        email.save();

        res.status(200).json("Email Sent Successfully");
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const saveDraftEmail = (req, res) => {
    try {
        const email = new Email(req.body);
        email.save();

        res.status(200).json("Email Saved in draft");
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getEmails = async (req, res) => {
    try {
        let emails;
        if (false) {
            
        } else if(req.params.type){
            emails = await Email.find({type: req.params.type})
        }

        return res.status(200).json(emails);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err.message);
            }
            }
            


export { saveSendEmail, saveDraftEmail, getEmails };