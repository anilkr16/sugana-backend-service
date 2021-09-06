// load the things we need
let mongoose = require('mongoose');
// Required models ====================================
const SpecializationMaster = mongoose.model('SpecializationMaster');
module.exports = {
    save: async function(data)  {
        return await(new SpecializationMaster(data).save());
    },
    update: async function(id, data){
        return await(SpecializationMaster.updateOne({_id: id}, data));
    },
    delete: async function(id) {
        return await(SpecializationMaster.deleteOne({_id: id}));
    },
    findSpecializationMasterWithId: async function(id) {
        let data = await(SpecializationMaster.findOne({_id: id})
            .lean());
        if(data) {
            return data;
        }else {
            return null
        }
    },
    findSpecializationMasterWithIds: async function(ids) {
        return await(SpecializationMaster.find({_id: { $in: ids }
            })
            .sort({createdAt: -1})
            .lean())
    },
    listSpecializationMaster: async function () {
        return await(SpecializationMaster.find({})
            .sort({createdAt: -1})
            .lean())
    }
}