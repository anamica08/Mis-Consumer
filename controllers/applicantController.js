const Application = require("../db/applicant");

const apiFunctions = {

    getAllApplicantionDetails:async function(req,res){
        const pageSize = +req.query.size;
        const currPage = +req.query.page;
        const skip = pageSize*(currPage - 1 );
        const _query = Application.Applicant.findAndCountAll({
            limit:pageSize,
            offset:skip,
        });
       
        let fetchedApplications;
       
        await _query
            .then(result => {
                fetchedApplications = result.rows;
                console.log(result.rows);
                res.status(200).json({
                    message: " Fetched Succesfully",
                    applications: fetchedApplications,
                    currPage: currPage,
                    maxData:result.count
                    
                })
            })
            .catch(err=>{
                res.status(404).json({
                    message: "Some error occured during fetching Data!!"
                })
            });
    }


}

module.exports = apiFunctions;