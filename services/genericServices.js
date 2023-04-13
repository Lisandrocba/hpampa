export default class GenericServices{
    constructor(dao, model){
        this.dao = dao,
        this.model = model
    }

    getById = async(params)=>{
        return this.dao.findOne(params, this.model)
    }

    getAll = async(params)=>{
        return this.dao.getAll(params, this.model)
    }

    save = async(params)=>{
        return this.dao.insert(params, this.model)
    }

    update =async (params)=>{
        return this.dao.update(params, this.model)
    }

    delete =async(id)=>{
        return this.dao.delete(id, this.model)
    }
}