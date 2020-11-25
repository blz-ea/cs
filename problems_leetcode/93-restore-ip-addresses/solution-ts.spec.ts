import { restoreIpAddresses } from './solution-ts';

describe('Testing `restoreIpAddresses`', () => {
    it('should return one ip address', () => {
        expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0']);
        expect(restoreIpAddresses('1111')).toEqual(['1.1.1.1']);
    });

    it('should return multiple ip addresses - 25525511135', () => {
        expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35']);
    });

    it('should return multiple ip addresses - 101023', () => {
        expect(restoreIpAddresses('101023')).toEqual(['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']);
    });
});
