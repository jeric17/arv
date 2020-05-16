export const generateArvAttrValue = (name?: string) => {
  if (!name) {
    return null;
  }
  return {
    [`arv-${name}`]: true,
  };
}

export const generateAttrValue = (name?: string) => {
  if (!name) {
    return null;
  }
  return {
    [name]: true,
  };
}

export const delay = (fn: Function, t = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      fn();
      resolve();
    }, t);
  });
};
