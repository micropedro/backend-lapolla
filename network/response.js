exports.success = ({res, message = 'success',body}) => {
    res.status(200).json({
        body,
        message
    })
}

exports.error = ({res, message = 'Internal Error',body}) => {
    res.status(500).json({
        body,
        message
    })
}