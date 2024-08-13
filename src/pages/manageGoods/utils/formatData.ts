export const formatData = (data) => {
  const formattedData = data.map((item) => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식으로 변환
    };

    const formattedStartDate = formatDate(item.raffleStartAt);
    const formattedEndDate = item.raffleEndAt ? formatDate(item.raffleEndAt) : '';

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
