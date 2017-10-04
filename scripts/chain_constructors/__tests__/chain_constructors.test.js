import {Loan, TermROC, RevolvingTermROC} from '../chain_constructors'

describe('chaining constructors', function () {

    beforeEach(() => {
        this.loan = new Loan();
    });

    it('the createTermROCLoan function should set the properties that are passed in properly.', () => {
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        this.loan.createTermROCLoan(notational, outstanding, rating, expiry);
        expect(this.loan.notational).toEqual(0.1);
        expect(this.loan.outstanding).toEqual(0.2);
        expect(this.loan.rating).toEqual(1);
        expect(this.loan.expiry.getTime()).toEqual(new Date('3/7/1981').getTime());
        expect(this.loan.strategy instanceof TermROC).toEqual(true);
    });

    it('the createRevolvingTermROCLoan function should set the properties that are passed in properly.', () => {
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        const maturity = new Date('3/7/2000');
        this.loan.createRevolvingTermROCLoan(notational, outstanding, rating, expiry, maturity);
        expect(this.loan.notational).toEqual(0.1);
        expect(this.loan.outstanding).toEqual(0.2);
        expect(this.loan.rating).toEqual(1);
        expect(this.loan.expiry.getTime()).toEqual(new Date('3/7/1981').getTime());
        expect(this.loan.maturity.getTime()).toEqual(new Date('3/7/2000').getTime());
        expect(this.loan.strategy instanceof RevolvingTermROC).toEqual(true);
    });

    it('the createTermLoan function should set the properties that are passed in properly.', () => {
        const strategy = new TermROC();
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        const maturity = new Date('3/7/2000');
        this.loan.createTermLoan(strategy, notational, outstanding, rating, expiry, maturity);
        expect(this.loan.notational).toEqual(0.1);
        expect(this.loan.outstanding).toEqual(0.2);
        expect(this.loan.rating).toEqual(1);
        expect(this.loan.expiry.getTime()).toEqual(new Date('3/7/1981').getTime());
        expect(this.loan.maturity.getTime()).toEqual(new Date('3/7/2000').getTime());
        expect(this.loan.strategy).toEqual(strategy);
    });
});
