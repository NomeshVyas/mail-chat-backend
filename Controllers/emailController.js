import Email from "../Models/Email.js";

const saveSendEmail = (req, res) => {
    try {
        const email = new Email(req.body);
        email.save();

        return res.status(200).json("Email Sent Successfully");
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const saveDraftEmail = (req, res) => {
    try {
        const email = new Email(req.body);
        email.save();

        return res.status(200).json("Email Saved in draft");
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const getEmails = async (req, res) => {
    try {
        let emails;
        if (req.params.type==='bin') {
            emails = await Email.find({bin: true});
        } else if(req.params.type==='allmails'){
            emails = await Email.find({bin: false});
        } else if(req.params.type==='starred'){
            emails = await Email.find({starred: true, bin: false});
        } else {
            emails = await Email.find({type: req.params.type});

        }
        return res.status(200).json(emails);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(err.message);
    }
}
            
const moveEmailsToBin = async (req, res) => {
    try {
        await Email.updateMany({ _id: { $in : req.body }}, {$set: {bin: true, starred: false, type: ''}});

        return res.status(200).json('Emails Deleted Successfully');
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err.message);
    }
}

const deleteEmails = async (req, res) => {
    try {
        await Email.deleteMany({_id: { $in : req.body }});
        return res.status(200).json("Deleted Successfully");
    } catch (err) {
        console.log(err.message);
        res.status(500).json("Emails Deleted Successfully");
    }
}

const toggleStarredEmail = async (req, res) => {
    try {
        await Email.updateOne({_id: req.body.id}, {$set: {starred: req.body.value}});
        return res.status(200).json('Star Mark Updated');
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(err.message);
    }
}

export { saveSendEmail, saveDraftEmail, moveEmailsToBin, toggleStarredEmail, getEmails, deleteEmails };