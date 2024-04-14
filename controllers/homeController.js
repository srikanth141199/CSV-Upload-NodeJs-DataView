import Files from "../models/csvSchema.js";

const home = async function(req, res) {
    try {
        let file = await Files.find({}).maxTimeMS(30000);
        return res.render('home', {
            files: file,
            title: "Home"
        });
    } catch (error) {
        console.log('Error in homeController/home', error);
        return;
    }
}

export default home;