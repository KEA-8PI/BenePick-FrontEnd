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
