/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as CPF from './CPF'

const spy = jest.spyOn(console, 'error')

beforeEach(() => {
  spy.mockReset()
})

describe('CPF.validate()', () => {
  describe('Passing string', () => {
    it('Should return true to a valid CPF', () => {
      expect(CPF.validate('13768663663')).toBeTruthy()
      expect(CPF.validate('83117383000')).toBeTruthy()
      expect(CPF.validate('65009596393')).toBeTruthy()
      expect(CPF.validate('93177985359')).toBeTruthy()
    })

    it('Should return true to a valid CPF starting with 0', () => {
      expect(CPF.validate('06325112733')).toBeTruthy()
      expect(CPF.validate('03539780351')).toBeTruthy()
    })

    it('Should return false is 11 repeat digits', () => {
      expect(CPF.validate('00000000000')).toBeFalsy()
      expect(CPF.validate('11111111111')).toBeFalsy()
      expect(CPF.validate('22222222222')).toBeFalsy()
      expect(CPF.validate('33333333333')).toBeFalsy()
      expect(CPF.validate('44444444444')).toBeFalsy()
      expect(CPF.validate('55555555555')).toBeFalsy()
      expect(CPF.validate('66666666666')).toBeFalsy()
      expect(CPF.validate('77777777777')).toBeFalsy()
      expect(CPF.validate('88888888888')).toBeFalsy()
      expect(CPF.validate('99999999999')).toBeFalsy()
    })

    it('Should return false to a non valid CPF', () => {
      expect(CPF.validate('123456789012')).toBeFalsy()
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('Should return true to a valid formated CPF', () => {
      expect(CPF.validate('137.686.636-63')).toBeTruthy()
      expect(CPF.validate('831.173.830-00')).toBeTruthy()
    })

    it('Should return false to a non valid formated CPF', () => {
      expect(CPF.validate('064.875.987-10')).toBeFalsy()
      expect(CPF.validate('364.848.987-89')).toBeFalsy()
    })

    it('Should return true to a valid non formated CPF', () => {
      expect(CPF.validate('13768663663')).toBeTruthy()
      expect(CPF.validate('83117383000')).toBeTruthy()
    })

    it('Should return false to a non valid non formated CPF', () => {
      expect(CPF.validate('06487598710')).toBeFalsy()
      expect(CPF.validate('36484898789')).toBeFalsy()
    })

    it('Should return false to a value missing digits', () => {
      expect(CPF.validate('1376866366')).toBeFalsy()
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('Should return false to a value with more than 11 digits', () => {
      expect(CPF.validate('137686636631')).toBeFalsy()
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('Should return false to letters and special caracters', () => {
      expect(CPF.validate('abc.def.ghi-jk')).toBeFalsy()
      expect(CPF.validate('a064.875.987-10')).toBeFalsy()
      expect(CPF.validate('03r5.397.803-51')).toBeFalsy()
      expect(CPF.validate('13866a3663b')).toBeFalsy()
      expect(CPF.validate('a06487598710')).toBeFalsy()
      expect(CPF.validate('0&.*00.00a-00')).toBeFalsy()
      expect(CPF.validate('00?.*00.01a-89')).toBeFalsy()
      expect(CPF.validate('?.**-%^(%(')).toBeFalsy()
      expect(spy).toHaveBeenCalledTimes(5)
    })

    it('Should return true to a valid CPF where first verifier is 0', () => {
      expect(CPF.validate('763.818.422-02')).toBeTruthy()
      expect(CPF.validate('76381842202')).toBeTruthy()
      expect(CPF.validate('700.730.910-06')).toBeTruthy()
      expect(CPF.validate('70073091006')).toBeTruthy()
      expect(CPF.validate('092.766.660-01')).toBeTruthy()
      expect(CPF.validate('09276666001')).toBeTruthy()
    })

    it('Should return true to a valid CPF where first verifier is higher than 0', () => {
      expect(CPF.validate('125.828.106-65')).toBeTruthy()
      expect(CPF.validate('12582810665')).toBeTruthy()
      expect(CPF.validate('603.806.430-30')).toBeTruthy()
      expect(CPF.validate('60380643030')).toBeTruthy()
      expect(CPF.validate('642.600.660-21')).toBeTruthy()
      expect(CPF.validate('64260066021')).toBeTruthy()
    })

    it('Should return true to a valid CPF where second verifier is 0', () => {
      expect(CPF.validate('433.787.588-30')).toBeTruthy()
      expect(CPF.validate('43378758830')).toBeTruthy()
      expect(CPF.validate('107.481.420-70')).toBeTruthy()
      expect(CPF.validate('10748142070')).toBeTruthy()
      expect(CPF.validate('977.132.560-40')).toBeTruthy()
      expect(CPF.validate('97713256040')).toBeTruthy()
    })

    it('Should return true to a valid CPF where second verifier is higher than 0', () => {
      expect(CPF.validate('855.178.021-25')).toBeTruthy()
      expect(CPF.validate('85517802125')).toBeTruthy()
      expect(CPF.validate('117.227.280-86')).toBeTruthy()
      expect(CPF.validate('11722728086')).toBeTruthy()
      expect(CPF.validate('671.174.020-32')).toBeTruthy()
      expect(CPF.validate('67117402032')).toBeTruthy()
    })
  })

  describe('Passing no values', () => {
    it('Should return false to no parameters', () => {
      // @ts-expect-error
      expect(CPF.validate()).toBeFalsy()
    })

    it('Should return false to an empty string', () => {
      expect(CPF.validate('')).toBeFalsy()
    })

    it('Should return false to true', () => {
      // @ts-expect-error
      expect(CPF.validate(true)).toBeFalsy()
    })

    it('Should return false to false', () => {
      // @ts-expect-error
      expect(CPF.validate(false)).toBeFalsy()
    })

    it('Should return false to null', () => {
      // @ts-expect-error
      expect(CPF.validate(null)).toBeFalsy()
    })

    it('Should return false to undefined', () => {
      // @ts-expect-error
      expect(CPF.validate(undefined)).toBeFalsy()
    })

    it('Should return false to NaN', () => {
      // @ts-expect-error
      expect(CPF.validate(NaN)).toBeFalsy()
    })

    it('Should return false to an object', () => {
      // @ts-expect-error
      expect(CPF.validate({})).toBeFalsy()
    })

    it('Should return false to an array', () => {
      // @ts-expect-error
      expect(CPF.validate([])).toBeFalsy()
    })
  })
})
