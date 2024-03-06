/* eslint-disable jest/valid-expect */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { MetheodEnum } from '../../../../../enums/metheods';
import { USER_URL } from '../../../constants/urls';
import ConnectionAPI, {
  connectionAPIdelete,
  connectionAPIget,
  connectionAPIpatch,
  connectionAPIpost,
  connectionAPIput,
} from '../connectionAPI';

const mockAxios = new MockAdapter(axios);
const mockReturnValue = 'mockReturnValue';
const mockToken = 'TOKEN_MOCK';
const BODY_MOCK = { name: 'test' };

jest.mock('../auth', () => ({
  getAuthorizationToken: () => mockToken,
}));

describe('ConnectionAPI', () => {
  describe('connectionAPIGet', () => {
    it('deve ter sucesso com get', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(USER_URL).reply(200, mockReturnValue);

      const returnGet = await connectionAPIget(USER_URL);

      expect(returnGet).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(USER_URL);
    });
  });

  describe('connectionAPIDelete', () => {
    it('deve ter sucesso com delete', async () => {
      const spyAxios = jest.spyOn(axios, 'delete');
      mockAxios.onDelete(USER_URL).reply(200, mockReturnValue);

      const returnDelete = await connectionAPIdelete(USER_URL);

      expect(returnDelete).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(USER_URL);
    });
  });

  describe('connectionAPIPost', () => {
    it('deve ter sucesso com post', async () => {
      const spyAxios = jest.spyOn(axios, 'post');
      mockAxios.onPost(USER_URL).reply(200, mockReturnValue);

      const returnPost = await connectionAPIpost(USER_URL, BODY_MOCK);

      expect(returnPost).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(USER_URL);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPut', () => {
    it('deve ter sucesso com put', async () => {
      const spyAxios = jest.spyOn(axios, 'put');
      mockAxios.onPut(USER_URL).reply(200, mockReturnValue);

      const returnPut = await connectionAPIput(USER_URL, BODY_MOCK);

      expect(returnPut).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(USER_URL);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPatch', () => {
    it('deve ter sucesso com patch', async () => {
      const spyAxios = jest.spyOn(axios, 'patch');
      mockAxios.onPatch(USER_URL).reply(200, mockReturnValue);

      const returnPatch = await connectionAPIpatch(USER_URL, BODY_MOCK);

      expect(returnPatch).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(USER_URL);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connect', () => {
    it('deve retornar sucesso', async () => {
      mockAxios.onGet(USER_URL).reply(200, mockReturnValue);

      const returnGet = await ConnectionAPI.connect(USER_URL, MetheodEnum.GET);

      expect(returnGet).toEqual(mockReturnValue);
    });

    it('deve retornar error 401', async () => {
      mockAxios.onGet(USER_URL).reply(401);

      expect(ConnectionAPI.connect(USER_URL, MetheodEnum.GET)).rejects.toThrowError(
        Error('Sem permissão 403'),
      );
    });

    it('deve retornar error 403', async () => {
      mockAxios.onGet(USER_URL).reply(403);

      expect(ConnectionAPI.connect(USER_URL, MetheodEnum.GET)).rejects.toThrowError(
        Error("Sem permissão 403"),
      );
    });

    it('deve retornar error 400', async () => {
      mockAxios.onGet(USER_URL).reply(400);

      expect(ConnectionAPI.connect(USER_URL, MetheodEnum.GET)).rejects.toThrowError(
        Error("Sem conexão"),
      );
    });
  });

  describe('test call', () => {
    it('o header de autorização deve enviar o token', async () => {
      const spyAxios = jest.spyOn(axios, 'get');

      mockAxios.onGet(USER_URL).reply(200, mockReturnValue);

      await ConnectionAPI.call(USER_URL, MetheodEnum.GET);

      expect(spyAxios.mock.calls[0][1]?.headers).toEqual({
        Authorization: mockToken,
        'Content-Type': 'application/json',
      });
    });
  });
});
