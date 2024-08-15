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

export const formatDateSecond = (dateString) => {
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mi = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
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
