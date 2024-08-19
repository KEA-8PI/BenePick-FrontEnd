export const formatData = (data) => {
  const formattedData = data.map((item) => {
    const formattedStartDate = convertISOtoKST(item.raffleStartAt);
    const formattedEndDate = item.raffleEndAt ? convertISOtoKST(item.raffleEndAt) : '';

    return {
      id: item.id.toString(),
      name: item.name,
      duration: `${formattedStartDate} ~ ${formattedEndDate}`,
      result: item.goodsStatus,
    };
  });
  return formattedData;
};

export const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mi = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
};

export const convertISOtoKST = (isoDateString: string, time?: boolean, seconds?: boolean) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dateObj = new Date(isoDateString);
  const kstDateObj = new Date(dateObj.getTime() + 9 * 60 * 60 * 1000);
  const year = kstDateObj.getFullYear();
  const month = String(kstDateObj.getMonth() + 1).padStart(2, '0');
  const day = String(kstDateObj.getDate()).padStart(2, '0');
  const dayOfWeek = daysOfWeek[kstDateObj.getDay()];
  const hours = String(kstDateObj.getHours()).padStart(2, '0');
  const minutes = String(kstDateObj.getMinutes()).padStart(2, '0');
  if (time) {
    return `${year}-${month}-${day} (${dayOfWeek}) ${hours}:${minutes}`;
  }
  if (seconds) {
    const seconds = String(kstDateObj.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} (${dayOfWeek}) ${hours}:${minutes}:${seconds}`;
  }
  return `${year}-${month}-${day}`;
};

export const formatDateObject = (dateString) => {
  // Parse the date string
  const date = new Date(dateString);

  // Get the components of the date
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Format the date in the desired format
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

export const deleteDateT = (dateString: string, weekend?: boolean) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];

  if (weekend) {
    return dateString.replace('T', ' ').slice(0, 10) + ` (${dayOfWeek})` + dateString.replace('T', ' ').slice(10, 16);
  }
  return dateString.replace('T', ' ').slice(0, 16);
};
