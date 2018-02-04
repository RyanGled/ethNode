const EthConverter = {

    /**
     * Takes the ethVal (in any denomination), normalises it to ether, and then calculates the toUnit from there
     * @param ethVal int
     * @param fromUnit string
     * @param toUnit string
     * @returns {number}
     */
    convert(ethVal, fromUnit, toUnit) {
        let from = 0;
        fromUnit = fromUnit.toLowerCase();
        toUnit = toUnit.toLowerCase();
        switch(fromUnit) {
            case 'ether':
                from = ethVal;
                break;
            case 'finney':
                from = (ethVal/1e3);
                break;
            case 'szabo':
                from = (ethVal/1e6);
                break;
            case 'gwei':
                from = (ethVal/1e9);
                break;
            case 'mwei':
                from = (ethVal/1e12);
                break;
            case 'kwei':
                from = (ethVal/1e15);
                break;
            case 'wei':
                from = (ethVal/1e18);
                break;
            default:
                return false;
        }

        let to = 0;
        switch(toUnit){
            case 'ether':
                to = from;
                break;
            case 'finney':
                to = from * 1e3;
                break;
            case 'szabo':
                to = from * 1e6;
                break;
            case 'gwei':
                to = from * 1e9;
                break;
            case 'mwei':
                to = from * 1e12;
                break;
            case 'kwei':
                to = from * 1e15;
                break;
            case 'wei':
                to = from * 1e18;
                break;
            default:
                return false;
        }

        return to;
    }

};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = EthConverter;
else
    window.EthConverter = EthConverter;