import { validate } from "../validation/validation.js";
import {
  createAddressValidation,
  getAddressValidation,
  updateAddressValidation,
} from "../validation/address-validation.js";
import { getContactValidation } from "../validation/contact-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const checkContactMustExists = async (user, contactId) => {
  const contactIds = validate(getContactValidation, contactId);

  const totalIds = await prismaClient.contact.count({
    where: {
      username: user.username,
      id: contactIds,
    },
  });

  if (totalIds !== 1) {
    throw new ResponseError(404, "contact id is not found");
  }

  return contactIds;
};

const create = async (contactId, user, request) => {
  const checkContact = await checkContactMustExists(user, contactId);

  const address = validate(createAddressValidation, request);
  address.contact_id = checkContact;

  const addressCount = await prismaClient.address.count({
    where: {
      contact_id: checkContact,
    },
  });

  if (addressCount === 1) {
    throw new ResponseError(404, "address already used");
  }

  return prismaClient.address.create({
    data: address,
    select: {
      id: true,
      street: true,
      city: true,
      province: true,
      country: true,
      postal_code: true,
    },
  });
};

const get = async (request) => {
  const addresses = await validate(getAddressValidation, request);

  const dataAddress = await prismaClient.address.findFirst({
    where: {
      contact_id: addresses.id,
      id: addresses.addressId,
    },
    select: {
      id: true,
      street: true,
      city: true,
      province: true,
      country: true,
      postal_code: true,
    },
  });

  if (!dataAddress) {
    throw new ResponseError(404, "address is not found");
  }

  return dataAddress;
};

const update = async (request) => {
  const update = await validate(updateAddressValidation, request);

  const countAddress = await prismaClient.address.count({
    where: {
      id: update.addressId,
      contact_id: update.contactId,
    },
  });

  if (countAddress !== 1) {
    throw new ResponseError(404, "address is not found");
  }

  return await prismaClient.address.update({
    where: {
      id: update.addressId,
    },
    data: {
      street: update.street,
      city: update.city,
      province: update.province,
      country: update.country,
      postal_code: update.postal_code,
    },
    select: {
      id: true,
      street: true,
      city: true,
      province: true,
      country: true,
      postal_code: true,
    },
  });
};

const remove = async (request) => {
  const remove = validate(getAddressValidation, request);

  const countAddress = await prismaClient.address.count({
    where: {
      id: remove.addressId,
      contact_id: remove.id,
    },
  });

  if (countAddress !== 1) {
    throw new ResponseError(404, "address is not found");
  }

  return await prismaClient.address.deleteMany({
    where: {
      id: remove.addressId,
      contact_id: remove.id,
    },
  });
};

export default { create, get, update, remove };
