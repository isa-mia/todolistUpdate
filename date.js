module.exports.getDate = getDate = function () {
  let today = new Date();

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  const currentDate = today.toLocaleDateString('en-US', options);

  return currentDate;
};

module.exports.getDay = getDay = function () {
  let today = new Date();

  const options = {
    weekday: 'long',
  };

  const currentDate = today.toLocaleDateString('en-US', options);

  return currentDate;
};
