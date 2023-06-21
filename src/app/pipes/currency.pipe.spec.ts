import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 12345,68 € when using euros', () => {
    const pipe = new CurrencyPipe();
    expect(pipe.transform(12345.678, 'EUR')).toEqual('12345.68 €');
  });
  it('should return $ 12345,68 when using us dollars', () => {
    const pipe = new CurrencyPipe();
    expect(pipe.transform(12345.678, 'USD')).toEqual('$ 12345.68');
  });
  it('should return - when using null', () => {
    const pipe = new CurrencyPipe();
    expect(pipe.transform(null, 'USD')).toEqual('-');
  });
});
