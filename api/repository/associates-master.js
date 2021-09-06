// load the things we need
let mongoose = require('mongoose');
// Required models ====================================
const AssociatesMaster = mongoose.model('AssociatesMaster');
module.exports = {
    save: async function(data)  {
        return await(new AssociatesMaster(data).save());
    },
    update: async function(id, data){
        return await(AssociatesMaster.updateOne({_id: id}, data));
    },
    delete: async function(id) {
        return await(AssociatesMaster.deleteOne({_id: id}));
    },
    findAssociatesMasterWithId: async function(id) {
        let data = await(AssociatesMaster.findOne({_id: id})
            .lean());
        if(data) {
            return data;
        }else {
            return null
        }
    },
    findAssociatesMasterWithIds: async function(ids) {
        return await(AssociatesMaster.find({_id: { $in: ids }
            })
            .sort({createdAt: -1})
            .lean())
    },
    listAssociatesMaster: async function () {
        return await(AssociatesMaster.find({})
            .populate('specializations')
            .sort({createdAt: -1})
            .lean())
    }
}