const AppliedBlockchain = {

    /**
     * @param ethAddress string
     */
    init(ethAddress) {
        const isAddressValid = this.checkValidAddress(ethAddress)

        if (isAddressValid != null) {
            this.retrieveAccInfo(ethAddress)
        } else {
            this.showErr('Address not valid!');
        }
    },

    /**
     * @param ethAddress string
     * return boolean
     */
    checkValidAddress(ethAddress) {
        //Check to see if address starts with 0x
        //If not, add 0x to match the RegEx
        let fullEthAddress = ethAddress
        if (ethAddress.substr(0,2) !== '0x')
            fullEthAddress = `0x${ethAddress}`

        //Check to see if it matches the following regex rule
        /**
         * ^0x: begins with 0x
         * [a-fA-F0-9]: matches characters; a-f/A-F/0-9
         * {40}: quantifier - matches 40 of the preceding rules
         * $: end of string
         * @type {RegExp}
         */
        let regEx = /^0x[a-fA-F0-9]{40}$/

        return fullEthAddress.match(regEx)
    },

    /**
     * @param ethAddress string
     */
    async retrieveAccInfo(ethAddress) {

        let url = `https://api.blockcypher.com/v1/eth/main/addrs/${ethAddress}`

        return await axios({
            method: 'get',
            url: url,
            responseType: 'stream'
        })
        .then((response) => {
            this.addressData = response.data
            //Convert Weis to Eth
            const balInEth = EthConverter.convert(this.addressData.balance, 'wei', 'ether')
            this.showAddBal(balInEth)
        });

    },

    /**
     * @param err string
     */
    showErr(err) {
        document.getElementById('error').innerText = err
        console.error(err)
    },

    /**
     * @param bal string
     */
    showAddBal(bal) {
        document.getElementById('eth-balance').innerText = bal
    }

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = AppliedBlockchain;
else
    window.AppliedBlockchain = AppliedBlockchain;