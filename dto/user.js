class UserDTO{
    constructor(user){
        this._id = user._id;
        this.username = user.name;
        this.email = user.email;
    }
}

module.exports = UserDTO;