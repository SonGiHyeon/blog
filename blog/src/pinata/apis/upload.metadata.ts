// src/pinata/apis/upload.metadata.ts
import axios from "axios";
import { jwt } from "../pinata.config";
import { uploadFileToIPFS } from "./upload.file";

export const uploadMetaData = async (
  file: File,
  name: string,
  description: string
): Promise<string> => {
  try {
    // 1. 이미지 업로드
    const imageUrl = await uploadFileToIPFS(file);

    // 2. 메타데이터 객체 생성
    const metadata = {
      name,
      description,
      image: imageUrl,
      attributes: [
        { trait_type: "Uploaded By", value: "User" },
        { trait_type: "Image URL Length", value: imageUrl.length },
      ],
    };

    // 3. Pinata에 JSON 메타데이터 업로드
    const response = await axios.post<{ IpfsHash: string }>(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      {
        pinataMetadata: { name },
        pinataContent: metadata,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }
    );

    const tokenUri = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    console.log("✅ 메타데이터 CID:", response.data.IpfsHash);
    console.log("✅ Token URI:", tokenUri);
    return tokenUri;
  } catch (error) {
    console.error("❌ 메타데이터 업로드 실패:", error);
    throw error;
  }
};
