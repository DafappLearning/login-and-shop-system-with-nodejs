import { validate } from "../validation/validation.js";
import {
  createContactValidation,
  getContactValidation,
  updateContactValidation,
} from "../validation/contact-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const create = async (user, request) => {
  const contact = validate(createContactValidation, request);
  contact.username = user.username;

  const userCount = await prismaClient.contact.count({
    where: {
      username: user.username,
    },
  });

  if (userCount === 1) {
    throw new ResponseError(404, "Username already create contact");
  }

  return prismaClient.contact.create({
    data: contact,
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
    },
  });
};

const update = async (user, request) => {
  const contact = validate(updateContactValidation, request);

  const totalUserInDatabase = await prismaClient.contact.count({
    where: {
      username: user.username,
      id: contact.id,
    },
  });

  if (totalUserInDatabase !== 1) {
    throw new ResponseError(404, "contact is not found");
  }

  return await prismaClient.contact.update({
    data: {
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      phone: contact.phone,
    },
    where: {
      id: contact.id,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
    },
  });
};

const get = async (contactId) => {
  const contact = validate(getContactValidation, contactId);

  const contacts = await prismaClient.contact.findUnique({
    where: {
      id: contact,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
    },
  });

  if (!contacts) {
    throw new ResponseError(404, "contact is not found");
  }

  return contacts;
};

const remove = async (contactId) => {
  const contact = validate(getContactValidation, contactId);

  const contacts = await prismaClient.contact.findUnique({
    where: {
      id: contact,
    },
  });

  if (!contacts) {
    throw new ResponseError(404, "contact is not found");
  }

  return await prismaClient.contact.deleteMany({
    where: {
      id: contact,
    },
  });
};

export default { create, update, get, remove };
