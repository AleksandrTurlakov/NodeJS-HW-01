const contactsOperatons = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperatons.listContacts();
      console.table(contacts);
      break;
    case "get":
      const contact = await contactsOperatons.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperatons.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contactsOperatons.removeContact(id);
      if (!removeContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

module.exports = invokeAction;
