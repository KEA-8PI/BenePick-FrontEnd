import { IconButton, Typography } from '@mui/material';
import * as S from 'components/common/Components.styles';
import * as M from './UploadBox.styles';
import { CustomButton } from 'components/common/Components.styles';
import { useState } from 'react';
import Iconify from 'components/common/Iconify/Iconify';

type UploadedInfo = {
  [key: string]: string;
};

const FileInfo = ({ uploadedInfo }: { uploadedInfo: UploadedInfo }) => (
  <M.PreviewInfo>
    {Object.entries(uploadedInfo).map(([key, value]) => (
      <li key={key}>
        <M.InfoKey>{key}</M.InfoKey>
        <M.InfoValue>{value}</M.InfoValue>
      </li>
    ))}
  </M.PreviewInfo>
);

const fileUrl = {
  '상품 등록':
    'https://objectstorage.kr-central-2.kakaocloud.com/v1/627e0b3fc53c4793b30520a51de16438/benepick-bucket/excel-example/상품등록_예시.xlsx',
  '복지 포인트 등록':
    'https://objectstorage.kr-central-2.kakaocloud.com/v1/627e0b3fc53c4793b30520a51de16438/benepick-bucket/excel-example/복지포인트등록_예시.xlsx',
  '사원 관리':
    'https://objectstorage.kr-central-2.kakaocloud.com/v1/627e0b3fc53c4793b30520a51de16438/benepick-bucket/excel-example/사원등록_예시.xlsx',
};

const fileName = {
  '상품 등록': '상품등록_예시.xlsx',
  '복지 포인트 등록': '복지포인트등록_예시.xlsx',
  '사원 관리': '사원등록_예시.xlsx',
};

const ManageMemberView = ({
  title,
  buttonAction,
  width,
}: {
  title: string;
  buttonAction: (formData: FormData) => void;
  width: number;
}) => {
  const [file, setFile] = useState(null);

  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const setFileInfo = (file) => {
    const { name, size: byteSize, type } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    setUploadedInfo({ name, size, type }); // name, size, type 정보를 uploadedInfo에 저장
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    if (file && file.name.endsWith('.xlsx' || '.xls')) {
      setFile(file);
      setFileInfo(file);
    } else {
      alert('지원하지 않는 파일 형식입니다. .xlsx / .xls 파일을 업로드해주세요');
    }
  };

  const handleUpload = ({ target }) => {
    const file = target.files[0];
    if (file && file.name.endsWith('.xlsx')) {
      setFile(file);
      setFileInfo(file);
    } else {
      alert('지원하지 않는 파일 형식입니다. .xlsx / .xls 파일을 업로드해주세요.');
    }
  };

  const handleDownload = (title: string) => {
    const link = document.createElement('a');
    link.href = fileUrl[title];
    link.download = fileName[title];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', file);
    buttonAction(formData);
  };

  return (
    <div
      style={{
        width: `${width}%`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <S.Row style={{ width: '100%' }}>
        <Typography style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold' }}>{title}</Typography>
        <div>
          <IconButton onClick={() => handleDownload(title)}>
            <Iconify icon="lucide:download" />
          </IconButton>
          <CustomButton onClick={uploadedInfo && handleSubmit} disabled={!uploadedInfo}>
            등록하기
          </CustomButton>
        </div>
      </S.Row>
      <M.FileLabel
        isActive={isActive}
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <M.FileInput type="file" onChange={handleUpload} />
        {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
        {!uploadedInfo && (
          <>
            <M.PreviewMessage>클릭 혹은 파일을 이곳에 드롭하세요.</M.PreviewMessage>
            <M.PreviewDescription>파일당 최대 10MB</M.PreviewDescription>
          </>
        )}
      </M.FileLabel>
    </div>
  );
};

export default ManageMemberView;
