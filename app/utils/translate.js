import translate from 'translate';
import { GOOGLE_TRANSLATE_API_KEY } from '../config';

translate.engine = 'google';
translate.key = GOOGLE_TRANSLATE_API_KEY;

export default function translator(text, targetLanguage) {
  return translate(text, targetLanguage);
}
