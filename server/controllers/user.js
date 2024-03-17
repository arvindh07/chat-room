const handleCreateUser = (req, res) => {
    return res.status(200).json({
        msg: "Create user done"
    })
}

module.exports = {
    handleCreateUser
}