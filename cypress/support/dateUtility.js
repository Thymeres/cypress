const dayjs = require('dayjs');

function formatDate(date, format, originalFormat = '') {
  dayjs.extend(require('dayjs/plugin/advancedFormat.js'));
  return dayjs(date, originalFormat).format(format);
}

function getTimestamp() {
  return formatDate(new Date(), 'YYYYMMDDhhmmss');
}

export {
    formatDate,
    getTimestamp,
}