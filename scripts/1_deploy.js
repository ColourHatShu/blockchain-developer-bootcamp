const { ethers } = require("hardhat");

async function main(){
    //Fetch contract to deploy
    const Token = await ethers.getContractFactory("Token");

    //Deploy contract


}



main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
})