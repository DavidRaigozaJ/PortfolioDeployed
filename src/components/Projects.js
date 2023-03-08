// Import Assets
import pepematilda from '../assets/pepematilda.png';
import CasaNFT from '../assets/CasaNFT.png';
import JewelTalk from '../assets/JewelTalk.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>PepeMatilda</h3>
                    <img src={pepematilda} alt="Uniswap Swap Page" />
                    <p>A NFT jewelry marketplace is a unique online platform that utilizes blockchain technology to provide customers with access to one-of-a-kind and customizable jewelry pieces. 
                        It is a decentralized marketplace where customers can purchase and trade digital assets, like NFTs, 
                        that represent ownership of unique jewelry pieces. 
                        The use of blockchain technology ensures transparency and security in the transactions,
                         making it an innovative and exciting way to buy and sell jewelry.
                    </p>

                    <a href="#" target="_blank" className="button">Site</a>
                    <a href="#" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>CasaNFT</h3>
                    <img src={CasaNFT} alt="CasaMedellinNFT Landing Page" />
                    <p>Coming soon...!
                        A RealState Marketplace for foreighners that wants to buy realsate in Medellin using Cryptocurrency.
                    </p>

                    <a href="#" target="_blank" className="button">Site</a>
                    <a href="#" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>JewelTalk</h3>
                    <img src={JewelTalk} alt="JewelTalk Landing Page" />
                    <p>Coming soon...!
                        A social network for jewelry companies, 
                        where members can share industry news, 
                        trends, and insights,
                        as well as connect with other professionals in the field.
                    </p>

                    <a href="#" target="_blank" className="button">Site</a>
                    <a href="#" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;