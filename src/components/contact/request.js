export const canRequestBeSent = (name, message, phoneHelper, emailHelper) => {
    return name.length === 0 ||
        message.length === 0 ||
        phoneHelper.length !== 0 ||
        emailHelper.length !== 0
}