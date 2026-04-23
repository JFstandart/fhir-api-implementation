export const toFHIR = (doc: any) => {
  if (!doc) return null;
  
  const obj = doc.toObject ? doc.toObject() : doc;
  
  // Map _id to id for FHIR compliance
  if (obj._id) {
    obj.id = obj._id;
    delete obj._id;
  }
  
  // Remove Mongoose version key
  delete obj.__v;
  
  return obj;
};

export const fromFHIR = (data: any) => {
  if (!data) return null;
  
  // Map id to _id for Mongoose storage
  if (data.id) {
    data._id = data.id;
    delete data.id;
  }
  
  return data;
};
