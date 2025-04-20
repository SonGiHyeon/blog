import { ethers } from "ethers";
import contractABI from "../../contract/abis/MyNFT.json";

const CONTRACT_ADDRESS = "0x7F35BB25c0971E2F77aaA6DbC1F8B12601952a7B";

export const getContract = async () => {
    if (!window.ethereum) throw new Error("지갑이 감지되지 않았습니다.");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
};
