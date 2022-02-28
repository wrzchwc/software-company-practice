export const canRequestBeSent = (name, message, phoneHelper, emailHelper, email, phone) => {
    return name.length === 0 ||
        message.length === 0 ||
        phoneHelper.length === 0 ||
        emailHelper.length === 0 ||
        email.length === 0 ||
        phone.length === 0;
}