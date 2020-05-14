import ApiHelper from './ApiHelper';
import { CHARACTER_API_URL } from './constants';

const CharacterApi = {
  get(urlParams) {
    return ApiHelper.fetch('GET', CHARACTER_API_URL, urlParams);
  },
};

export default CharacterApi;
