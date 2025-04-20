import axios from 'axios';
// import FormData from 'form-data'; ← 브라우저에서는 필요 없음
import { jwt } from '../pinata.config';
import { v4 as uuidv4 } from 'uuid';

type PinataUploadResponse = {
  data: {
    cid: string;
  };
};

export const uploadFileToIPFS = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', `MyNFT_Image_${uuidv4()}`);

  const response = await axios.post<PinataUploadResponse>(
    'https://uploads.pinata.cloud/v3/files',
    formData,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  const cid = response.data.data.cid;
  const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
  console.log('✅ 이미지 CID:', cid);
  console.log('✅ 이미지 URL:', url);
  return url;
};
