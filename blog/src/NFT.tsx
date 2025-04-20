import { useState, useRef, useEffect } from "react";
import { uploadMetaData } from "./pinata/apis/upload.metadata";
import { ethers } from "ethers";
import contractABI from "./abis/MyNFT.json";

const CONTRACT_ADDRESS = "0xcfc4f63CC507a516f8CA03BB068CA23BF3d58041";

interface NFTMeta {
    image: string;
    name: string;
    description: string;
}

const EditPhoto = (type: any) => {
    const [imgFile, setImgFile] = useState<File>();
    const [imgPath, setImgPath] = useState("");
    const imgRef = useRef<HTMLInputElement>(null);

    const [nftName, setNftName] = useState("");
    const [nftDesc, setNftDesc] = useState("");
    const [tokenURI, setTokenURI] = useState("");

    const [activeTab, setActiveTab] = useState<"mint" | "explore">("mint");
    const [nfts, setNfts] = useState<NFTMeta[]>([]);

    const previewImage = () => {
        if (imgRef.current?.files?.[0]) {
            const img = imgRef.current.files[0];
            setImgFile(img);
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = () => {
                setImgPath(reader.result as string);
            };
        }
    };

    const handleUpload = async () => {
        if (!imgFile || !nftName || !nftDesc) {
            alert("이미지, 이름, 설명을 모두 입력해주세요.");
            return;
        }

        try {
            const uri = await uploadMetaData(imgFile, nftName, nftDesc);
            setTokenURI(uri);
            alert(`✅ 메타데이터 업로드 완료!\n👉 ${uri}`);
        } catch (error) {
            console.error("❌ 업로드 실패:", error);
            alert("업로드 중 오류 발생");
        }
    };

    const handleMint = async () => {
        console.log("🟡 Mint 버튼 클릭됨");
        try {
            if (!tokenURI) return alert("tokenURI가 없습니다.");

            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xaa36a7" }], // Sepolia
            });
            console.log("✅ Sepolia 네트워크 전환 완료");

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);

            console.log("👉 민팅 시작:", address, tokenURI);
            const tx = await contract.mint(address, tokenURI);
            await tx.wait();

            alert("🎉 NFT 민팅 완료!");
            console.log("✅ Mint TX:", tx);

            fetchNFTs();
            setActiveTab("explore");
        } catch (err) {
            console.error("❌ 민팅 실패:", err);
            alert("민팅 중 오류 발생!");
        }
    };

    const fetchNFTs = async () => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, provider);

            const tempIds = [0, 1, 2, 3, 4]; // 예시로 0~4번까지만 시도
            const nftList: NFTMeta[] = [];

            for (let i of tempIds) {
                try {
                    const tokenURI = await contract.tokenURI(i);
                    const res = await fetch(tokenURI);
                    const metadata = await res.json();
                    nftList.push(metadata);
                } catch (err) {
                    // tokenURI 호출 실패 시 무시
                    console.warn(`❌ tokenURI(${i}) 실패`, err);
                }
            }

            setNfts(nftList);
        } catch (err) {
            console.error("❌ NFT 불러오기 실패:", err);
        }
    };


    useEffect(() => {
        if (activeTab === "explore") {
            fetchNFTs();
        }
    }, [activeTab]);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <div style={{ width: "200px", background: "#222", color: "#fff", padding: "1rem" }}>
                <h3 style={{ color: "#0ff" }}>NFT 메뉴</h3>
                <div style={{ marginTop: "1rem" }}>
                    <button onClick={() => setActiveTab("mint")} style={{ display: "block", margin: "1rem 0", width: "100%" }}>
                        민팅하기
                    </button>
                    <button onClick={() => setActiveTab("explore")} style={{ display: "block", margin: "1rem 0", width: "100%" }}>
                        Explorer
                    </button>
                </div>
            </div>

            {/* Main */}
            <div style={{ flex: 1, padding: "2rem" }}>
                {activeTab === "mint" && (
                    <div>
                        <h2>🎨 NFT 민팅하기</h2>
                        <label htmlFor="photo">
                            <img
                                src={imgPath || "/images/upload.png"}
                                width="400"
                                height="auto"
                                alt="업로드 미리보기"
                                style={{ cursor: "pointer", marginBottom: "1rem" }}
                            />
                        </label>
                        <input
                            type="file"
                            id="photo"
                            accept=".png,.jpeg,.jpg"
                            ref={imgRef}
                            onChange={previewImage}
                            style={{ display: "none" }}
                        />
                        <div style={{ marginBottom: "1rem" }}>
                            <input
                                type="text"
                                placeholder="NFT 이름"
                                value={nftName}
                                onChange={(e) => setNftName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="NFT 설명"
                                value={nftDesc}
                                onChange={(e) => setNftDesc(e.target.value)}
                            />
                        </div>
                        <button onClick={handleUpload}>파일 업로드</button>
                        {tokenURI && (
                            <>
                                <p>✅ tokenURI: <a href={tokenURI} target="_blank" rel="noopener noreferrer">{tokenURI}</a></p>
                                <button onClick={handleMint}>Mint</button>
                            </>
                        )}
                    </div>
                )}

                {activeTab === "explore" && (
                    <div>
                        <h2>🖼 NFT Explorer</h2>
                        {nfts.length === 0 ? (
                            <p>❌ NFT가 없습니다</p>
                        ) : (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                {nfts.map((nft, idx) => (
                                    <div key={idx} style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
                                        <img src={nft.image} alt={nft.name} style={{ width: "100%" }} />
                                        <h4>{nft.name}</h4>
                                        <p>{nft.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default EditPhoto;