import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
const WebCom = () => {
    const [webThreeApi, setWeb3Api] = useState<Web3>();
    useEffect(() => {
        init();
    }, [])
    async function init() {
        const web3Api = await new Web3(Web3.givenProvider || 'ws://localhost:8545');
        setWeb3Api(web3Api);
        console.log('web3Api', webThreeApi?.utils);
    }
    return (
        <div className='p-[24px]'>web3</div>
    )
}

export default WebCom;