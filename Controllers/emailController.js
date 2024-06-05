import Email from "../Models/Email.js";


export const saveSendEmail = (req, res) => {
    try {
        const email = new Email(req.body);
        email.save();

        res.status(200).json("Email Sent Successfully");
    } catch (err) {
        res.status(500).json(err.message);
    }
}